# 🔥 Brasa Studio — Landing Page Institucional de Alta Performance

<p align="center">
  <img src="assets/img/brasa-estrela-400.webp" alt="Brasa Studio Logo" width="120" height="120">
</p>

<p align="center">
  <strong>Design que acende marcas criativas.</strong><br>
  Landing page institucional de altíssima conversão, estética dark imersiva com iluminação âmbar/laranja neon, PWA nativo com suporte offline e execução 100% conteinerizada em Docker.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Docker-Nginx%20Alpine-049cdb?logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/PWA-Pronto%20para%20Instalar-ff5a1f?logo=pwa&logoColor=white" alt="PWA Ready">
  <img src="https://img.shields.io/badge/Performance-Core%20Web%20Vitals-00c853" alt="Performance">
  <img src="https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-f7df1e" alt="Stack">
  <img src="https://img.shields.io/badge/Status-100%25%20Conclu%C3%ADdo-brightgreen" alt="Status">
</p>

---

## ⚡ Destaques do Projeto

- **Arquitetura 100% Docker:** Servida via Nginx Alpine com compressão Gzip ativa, buffers I/O de alta velocidade e headers de segurança HTTP.
- **Design System Dark & Glow:** Paleta escura profunda (`#050505`), acentos vibrantes de fogo (`#FF5A1F`), molduras com iluminação inferior e Bento Grids modernos.
- **PWA & Cache Offline:** Equipado com `manifest.json` instalável e `sw.js` com estratégia híbrida (*Cache-First* para estáticos e *Network-First* com fallback para HTML).
- **Core Web Vitals & LCP Otimizado:** Preloads e `fetchpriority="high"` nas imagens críticas da dobra superior, imagens 100% em WebP de alta fidelidade e lazy-loading nas dobras inferiores.
- **Sistema de Leads & Modal:** Modal responsivo de diagnóstico em 15 minutos com validação inline em tempo real (regex RFC), fallback automático para `localStorage` e suporte a Webhook remoto.
- **Zero Frameworks Pesados:** 100% Vanilla HTML5, CSS3 moderno e JavaScript puro, sem dependências volumosas de terceiros.

---

## 🚀 Como Executar o Projeto (Docker)

O projeto foi arquitetado para rodar inteiramente dentro de um container Docker.

### Pré-requisitos
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) instalados.

### 1. Clonar o Repositório
```bash
git clone https://github.com/lopesmidia002-jpg/brasastudio.git
cd brasastudio
```

### 2. Iniciar a Aplicação com Docker Compose
```bash
docker-compose up -d --build
```

### 3. Acessar no Navegador
Acesse: 👉 **[http://localhost:3000](http://localhost:3000)**

### 4. Parar o Container
```bash
docker-compose down
```

---

## 🧩 Seções Mapeadas & Estrutura

1. **Header / Navbar:** Sticky com blur de 12px, logo vetorial com estrela dourada, navegação âncora e botão modal.
2. **Hero:** Headline de impacto, tag de autoridade, preview com iluminação âmbar e ticker contínuo de clientes.
3. **Sobre a Brasa:** Estatísticas com números em gradiente e apresentação da metodologia.
4. **Resultados (Marquee):** Carrossel horizontal infinito com métricas e cases comprovados.
5. **Como Trabalhamos:** Processo claro em 3 etapas com cards em glassmorphism.
6. **Diferenciais:** Grid responsivo de 6 cartões destacando tecnologia, estética e prazo.
7. **Por Que a Brasa:** Bento Grid dinâmico com proporções assimétricas e narrativa visual.
8. **Portfólio:** 3 projetos de destaque em escala estendida com tags de mercado.
9. **Serviços:** 3 planos modulares com faixas de investimento e entregáveis.
10. **Vitrine (Showcase):** Marquee duplo com sentidos opostos exibindo interfaces produzidas.
11. **Planos / Precificação:** Tabela comparativa entre entregas pontuais e assinatura de estúdio dedicado.
12. **Depoimentos:** 6 avaliações reais de clientes com fotos e classificação 5 estrelas.
13. **FAQ:** 6 perguntas e respostas com acordeão fluido exclusivo.
14. **CTA Final & Contato:** Chamada para agendamento com formulário inline e modal de diagnóstico.
15. **Footer:** Links rápidos, atalhos de navegação, showreel e direitos reservados.

---

## 📁 Estrutura de Arquivos

```text
brasastudio/
├── assets/
│   ├── img/                   # Imagens e marcas otimizadas em WebP legítimo
│   └── video/                 # Vídeos em loop de background (WebM e MP4)
├── .dockerignore              # Exclusões de contexto de build Docker
├── .gitignore                 # Arquivos ignorados pelo Git
├── Dockerfile                 # Imagem Nginx Alpine leve (~25MB)
├── docker-compose.yml         # Mapeamento do serviço na porta 3000:80
├── nginx.conf                 # Servidor de alta performance com Gzip e PWA
├── index.html                 # Estrutura completa das 15 seções com metatags PWA
├── style.css                  # Folha de estilos completa (~39KB)
├── main.js                    # Animações de scroll, modal, validação e Service Worker
├── manifest.json              # Manifesto oficial de aplicativo Web (PWA)
├── sw.js                      # Service Worker para suporte e cache offline
├── README.md                  # Este arquivo
├── DOCUMENTACAO.md            # Documentação técnica de arquitetura e componentes
├── PASSOS.md                  # Checklist priorizado de desenvolvimento com checkboxes
├── CONTEXTO.md                # Histórico e registro de decisões de engenharia
└── PROMPT.md                  # Especificação master de design e identidade
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Semântica estrita, metatags Open Graph/PWA e acessibilidade (ARIA).
- **CSS3 Puro:** Variáveis de tokens de design, CSS Grid (Bento Boxes), Flexbox, transições aceleradas por GPU.
- **Vanilla JavaScript (ES6+):** `IntersectionObserver` para scroll reveal, manipulação de modal, validação de formulários via Regex e interceptação no Service Worker.
- **Nginx Alpine & Docker:** Compressão `gzip` ativa, controle de cache imutável para assets estáticos e `no-cache` para HTML e Service Worker.

---

## 📚 Arquivos de Governança

- [DOCUMENTACAO.md](DOCUMENTACAO.md): Detalhamento técnico de componentes, classes e tokens.
- [PASSOS.md](PASSOS.md): Checklist sequencial com todas as 10 etapas concluídas.
- [CONTEXTO.md](CONTEXTO.md): Histórico de problemas superados (AVIF/WebP, colunas do grid, PWA).
- [PROMPT.md](PROMPT.md): Parâmetros conceituais de criação e paleta visual.

---

<p align="center">
  Desenvolvido com calor e precisão pela equipe <strong>Brasa Studio</strong> © 2026.
</p>
