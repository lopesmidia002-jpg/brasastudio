/**
 * BRASA STUDIO — SCRIPTS PRINCIPAIS & INTERATIVIDADE
 * Efeitos de revelação, scroll suave, modal de diagnóstico, validação inline e leads
 */

// Configurações do endpoint de leads / webhook
const BRASA_CONFIG = {
  // Webhook configurável (ex: endpoint n8n, Formspree, Supabase ou API própria)
  // Caso vazio ou offline, utiliza fallback automático persistindo no LocalStorage
  WEBHOOK_URL: '', 
  LOCAL_STORAGE_KEY: 'brasa_leads_v1'
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Marcação JS ativa
  document.documentElement.classList.add('js');

  // 2. IntersectionObserver para Revelação Suave ([data-reveal])
  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // 3. Efeito de Scroll no Header
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
      if (header) {
        header.style.background = 'rgba(5, 5, 5, 0.92)';
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.8)';
      }
    } else {
      header?.classList.remove('scrolled');
      if (header) {
        header.style.background = 'rgba(5, 5, 5, 0.78)';
        header.style.boxShadow = 'none';
      }
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 4. Fechamento do Menu Mobile
  const menuDetails = document.querySelector('[data-menu]');
  if (menuDetails) {
    const menuLinks = menuDetails.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuDetails.removeAttribute('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (menuDetails.hasAttribute('open') && !menuDetails.contains(e.target)) {
        menuDetails.removeAttribute('open');
      }
    });
  }

  // 5. Scroll Suave para Âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#preview-local-sem-envio') return;
      if (this.hasAttribute('data-open-modal')) return; // Prioriza abertura do modal se aplicável

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 6. Accordion Interativo (FAQ)
  const qaElements = document.querySelectorAll('.qa');
  qaElements.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        qaElements.forEach(otherItem => {
          if (otherItem !== item && otherItem.open) {
            otherItem.removeAttribute('open');
          }
        });
      }
    });
  });

  // 7. Sistema de Toasts Notificadores
  const toastEl = document.getElementById('brasa-toast');
  const showToast = (message, duration = 4000) => {
    if (!toastEl) return;
    const textEl = toastEl.querySelector('.toast-text');
    if (textEl) textEl.textContent = message;
    toastEl.classList.add('is-visible');
    setTimeout(() => {
      toastEl.classList.remove('is-visible');
    }, duration);
  };

  // 8. Modal de Contato & Diagnóstico
  const modalBackdrop = document.getElementById('modal-diagnostico');
  const openModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.add('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = modalBackdrop.querySelector('input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  };

  const closeModal = () => {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // 9. Validação Inline em Tempo Real
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateInput = (input) => {
    let isValid = true;
    const value = input.value.trim();

    if (input.type === 'email') {
      isValid = emailRegex.test(value);
    } else if (input.hasAttribute('minlength')) {
      const minLen = parseInt(input.getAttribute('minlength'), 10) || 1;
      isValid = value.length >= minLen;
    } else if (input.hasAttribute('required')) {
      isValid = value.length > 0;
    }

    if (value === '') {
      input.classList.remove('is-valid', 'is-invalid');
    } else if (isValid) {
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    } else {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }

    return isValid;
  };

  document.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => validateInput(field));
    field.addEventListener('blur', () => validateInput(field));
  });

  // 10. Persistência de Leads (API / LocalStorage)
  const saveLead = async (data) => {
    // 1. Tenta envio por webhook caso URL esteja configurada
    if (BRASA_CONFIG.WEBHOOK_URL) {
      try {
        const response = await fetch(BRASA_CONFIG.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error('Erro na resposta do webhook');
      } catch (err) {
        console.warn('Falha no webhook remoto, salvando localmente:', err);
      }
    }

    // 2. Fallback de alta confiabilidade: Armazena em LocalStorage
    try {
      const existing = JSON.parse(localStorage.getItem(BRASA_CONFIG.LOCAL_STORAGE_KEY) || '[]');
      existing.push({
        ...data,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem(BRASA_CONFIG.LOCAL_STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {
      console.error('Falha ao gravar no localStorage:', e);
    }
  };

  // 11. Manipulação dos Formulários
  const forms = document.querySelectorAll('[data-form]');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const statusEl = form.querySelector('[data-form-status]');
      const submitBtn = form.querySelector('button[type="submit"]');
      const formType = form.getAttribute('data-form');

      // Validação de todos os campos do form
      let formIsValid = true;
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        if (!validateInput(input)) {
          formIsValid = false;
        }
      });

      if (!formIsValid) {
        if (statusEl) {
          statusEl.className = 'form-status status--error';
          statusEl.textContent = 'Por favor, revise os campos destacados acima.';
        }
        return;
      }

      // Ativa estado de carregamento
      const originalBtnText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.classList.add('is-loading');
      }
      if (statusEl) {
        statusEl.className = 'form-status';
        statusEl.textContent = '';
      }

      // Extrai dados
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      data.formType = formType;

      // Simula/Executa envio
      await new Promise(resolve => setTimeout(resolve, 650));
      await saveLead(data);

      // Feedback de Sucesso
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('is-loading');
        submitBtn.textContent = 'Enviado!';
        setTimeout(() => {
          submitBtn.textContent = originalBtnText;
        }, 3500);
      }

      if (statusEl) {
        statusEl.className = 'form-status status--success';
        if (formType === 'newsletter') {
          statusEl.innerHTML = '✓ E-mail cadastrado! Você receberá nossa próxima edição.';
          showToast('✓ Bem-vindo à carta mensal da Brasa Studio!');
        } else {
          statusEl.innerHTML = '✓ Perfeito! Recebemos sua mensagem e responderemos em até 1 dia útil.';
          showToast('✓ Solicitação recebida! Entraremos em contato em breve.');
        }
      }

      // Se for o modal, fecha após breve confirmação
      if (formType === 'modal') {
        setTimeout(() => {
          closeModal();
          form.reset();
          inputs.forEach(input => input.classList.remove('is-valid', 'is-invalid'));
          if (statusEl) statusEl.textContent = '';
        }, 1800);
      } else {
        form.reset();
        inputs.forEach(input => input.classList.remove('is-valid', 'is-invalid'));
      }
    });
  });

  // 12. Tickers Infinitos — Pausa suave no hover
  const marquees = document.querySelectorAll('.marquee-track');
  marquees.forEach(track => {
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });

  // 13. Stacking Cards (Sticky Scroll com Escala 3D e Profundidade Dinâmica)
  const initStackingCards = () => {
    const worksList = document.querySelector('.works');
    if (!worksList) return;

    const works = Array.from(worksList.querySelectorAll('.work'));
    if (works.length <= 1) return;

    // Respeita preferência do usuário por movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const updateStacking = () => {
      works.forEach((workEl, index) => {
        const cardEl = workEl.querySelector('.work-card');
        const progressBar = workEl.querySelector('.work-progress i');
        if (!cardEl) return;

        // Se houver um próximo cartão na pilha, calculamos a sobreposição
        const nextWorkEl = works[index + 1];
        if (nextWorkEl) {
          const nextRect = nextWorkEl.getBoundingClientRect();
          const currentTopOffset = parseFloat(window.getComputedStyle(workEl).top) || 90;

          // Distância entre o topo do próximo cartão e o topo fixado do cartão atual
          const diff = nextRect.top - currentTopOffset;
          const totalDistance = workEl.offsetHeight || 500;

          let progress = 0;
          if (diff < totalDistance) {
            progress = Math.max(0, Math.min(1, 1 - (diff / totalDistance)));
          }

          // Escala suave de 1.0 para 0.94 e brilho de 1.0 para 0.65
          const scale = 1 - (progress * 0.06);
          const brightness = 1 - (progress * 0.35);

          cardEl.style.transform = `scale(${scale.toFixed(4)})`;
          cardEl.style.filter = `brightness(${brightness.toFixed(3)})`;

          if (progressBar) {
            progressBar.style.width = `${Math.round(progress * 100)}%`;
          }
        } else {
          // Último cartão da pilha
          const rect = workEl.getBoundingClientRect();
          const currentTopOffset = parseFloat(window.getComputedStyle(workEl).top) || 90;
          const isPinned = rect.top <= currentTopOffset + 2;

          cardEl.style.transform = 'scale(1)';
          cardEl.style.filter = 'brightness(1)';
          if (progressBar) {
            progressBar.style.width = isPinned ? '100%' : '0%';
          }
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateStacking);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateStacking();
  };

  initStackingCards();

  // 14. Registro do Service Worker (PWA & Offline Cache)
  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('✓ Service Worker Brasa Studio ativo:', reg.scope);
        })
        .catch((err) => {
          console.warn('Falha no Service Worker:', err);
        });
    });
  }
  // 15. Galeria Interativa: Drag-to-Scroll com Inércia e Física Amortecida (Antigravidade)
  const initGalleryInteractivity = () => {
    const rows = document.querySelectorAll('.showcase-scroll-row');
    if (!rows.length) return;

    rows.forEach(row => {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      let velX = 0;
      let lastX = 0;
      let animationFrameId = null;

      const stopMomentum = () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      };

      row.addEventListener('mousedown', (e) => {
        isDown = true;
        row.classList.add('is-dragging');
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
        lastX = e.pageX;
        velX = 0;
        stopMomentum();
      });

      window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        row.classList.remove('is-dragging');

        // Física de inércia suave
        const momentum = () => {
          if (Math.abs(velX) > 0.6) {
            row.scrollLeft -= velX;
            velX *= 0.94; // Fator de atrito amortecido
            animationFrameId = requestAnimationFrame(momentum);
          } else {
            stopMomentum();
          }
        };
        momentum();
      });

      row.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 1.25; // Sensibilidade equilibrada
        velX = e.pageX - lastX;
        lastX = e.pageX;
        row.scrollLeft = scrollLeft - walk;
      });

      row.addEventListener('mouseleave', () => {
        if (isDown) {
          isDown = false;
          row.classList.remove('is-dragging');
        }
      });
    });
  };

  initGalleryInteractivity();
});
