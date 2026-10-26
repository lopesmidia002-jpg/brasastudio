# 📖 Documentação do Projeto — Brasa Studio

Landing page institucional de alta conversão da **Brasa Studio**, desenvolvida com arquitetura de alta performance, design dark moderno com iluminação âmbar/laranja neon, tipografia refinada e execução 100% conteinerizada via Docker (Nginx Alpine).

---

## 🛠️ Stack Tecnológica

- **Estrutura:** HTML5 semântico com otimização SEO e acessibilidade.
- **Estilização:** CSS3 puro (`style.css`), sem dependência de frameworks pesados, arquitetado em variáveis de design system, Bento Grids, Flexbox e animações CSS3 GPU-accelerated.
- **Interatividade:** Vanilla JavaScript (`main.js`) utilizando `IntersectionObserver` para scroll reveal, acordeão interativo de FAQ, navegação âncora suave e manipuladores de formulário/feedback.
- **Tipografia:** Google Fonts — *DM Sans* (Headings e pesos arrojados) e *Inter* (corpo de texto, clareza e legibilidade).
- **Servidor & Deploy:** Docker + Nginx Alpine com compressão Gzip ativa e cache estático para ativos.

---

## 🏗️ Estrutura de Diretórios

```text
brasa/
├── assets/
│   ├── img/                   # Imagens e marcas em formato WebP
│   │   ├── brasa-estrela.webp # Estrela de 4 pontas exclusiva com transparência
│   │   └── ... (avatares, logos parceiros, capas de cases)
│   └── video/                 # Vídeos de background e demonstração WebM/MP4
├── index.html                 # Estrutura completa das 15 seções
├── style.css                  # Estilização completa (~35KB)
├── main.js                    # Animações de scroll, FAQ e micro-interações
├── Dockerfile                 # Imagem Nginx Alpine leve
├── docker-compose.yml         # Orquestração do container na porta 3000:80
├── nginx.conf                 # Configuração de rotas e headers de cache
├── .dockerignore              # Exclusão de arquivos de build e cache
├── PROMPT.md                  # Especificação original e regras do prompt master
├── CONTEXTO.md                # Histórico e arquitetura de decisão
├── PASSOS.md                  # Checklist sequencial de prioridades
├── README.md                  # Apresentação do projeto e instruções no GitHub
├── .gitignore                 # Filtro de exclusões do Git
└── DOCUMENTACAO.md            # Este arquivo
```

---

## 🔗 Repositório Oficial no GitHub

- **URL do Repositório:** [https://github.com/lopesmidia002-jpg/brasastudio.git](https://github.com/lopesmidia002-jpg/brasastudio.git)
- **Branch Principal:** `main`
- **Fluxo de Deploy:** Versionamento via Conventional Commits e execução 100% conteinerizada no Docker.

---

## 🚀 Como Executar o Projeto no Docker

O projeto roda **100% conteinerizado**.

### 1. Iniciar o container
```bash
docker-compose up -d --build
```

### 2. Acessar a aplicação
Abra no navegador:
👉 **[http://localhost:3000](http://localhost:3000)**

### 3. Verificar status do container
```bash
docker ps --filter "name=brasa-studio-landing"
```

### 4. Parar o container
```bash
docker-compose down
```

---

## ⚡ Performance, Cache e Core Web Vitals

A aplicação foi otimizada para notas elevadas no Google Lighthouse e carregamento instantâneo:
- **LCP (Largest Contentful Paint):** Preloads explícitos adicionados no `<head>` para a imagem principal do Hero (`assets/img/hero-preview-800.webp`) e o ícone central (`assets/img/brasa-estrela-200.webp`) com atributo `fetchpriority="high"` e `loading="eager"`.
- **Imagens Lazy:** Todas as imagens abaixo da dobra possuem `loading="lazy"` e `decoding="async"` para não bloquear a renderização inicial.
- **Nginx I/O & Compressão:** Diretivas `sendfile on;`, `tcp_nopush on;` e compressão `gzip` de nível 6 habilitadas para todos os tipos de mídia textual (`CSS`, `JS`, `SVG`, `JSON`).
- **Políticas de Cache HTTP:**
  - **HTML (`/`):** `no-cache, no-store, must-revalidate` garantindo que alterações no layout sejam refletidas imediatamente.
  - **CSS e JS:** `public, max-age=604800, stale-while-revalidate=86400` (7 dias com atualização em segundo plano).
  - **Imagens, Fontes e Vídeos:** `public, max-age=2592000, immutable` (30 dias com persistência imutável em disco do navegador).

---

## 📬 Sistema de Leads, Formulários e Modal

A aplicação conta com um ecossistema completo de captura e tratamento de leads:
1. **Modal de Diagnóstico em 15 Minutos:**
   - Acionado via botões de CTA com o atributo `data-open-modal="modal-diagnostico"` (Header, Hero, Resultados).
   - Backdrop com desfoque de 14px e animação spring. Fechamento seguro por botão `&times;`, clique externo ou tecla `Escape`.
   - Campos: Nome/Marca, E-mail corporativo, Tipo de Projeto (select) e Mensagem.
2. **Validação Inline em Tempo Real:**
   - Validação contínua nos eventos `input` e `blur`.
   - E-mails validados com Regex RFC, adicionando a classe `.is-valid` (borda verde neon) ou `.is-invalid` (borda rubi com mensagem de erro).
   - Bloqueio de submissão caso algum campo obrigatório esteja inconsistente.
3. **Persistência Híbrida & Confiabilidade:**
   - Suporte nativo a envio via Webhook externo configurável na constante `BRASA_CONFIG.WEBHOOK_URL` em `main.js`.
   - Fallback de alta disponibilidade em `localStorage` sob a chave `brasa_leads_v1`, garantindo retenção local de 100% dos leads preenchidos mesmo sem rede ou webhook.
4. **Feedbacks Visuais e Toasts:**
   - Botão de envio exibe spinner CSS GPU-accelerated durante a requisição.
   - Componente flutuante de toast (`.brasa-toast`) notifica o visitante com animação de subida e auto-dismiss.

---

## 📱 Progressive Web App (PWA) & Modo Offline

A landing page está apta a ser instalada na tela de início de celulares, tablets e desktops:
- **Web App Manifest (`manifest.json`):**
  - Nome: *Brasa Studio — Estúdio Criativo de Marca, Site e Campanha*
  - Tema: `#ff5a1f` (Laranja neon brasa) e fundo `#050505`.
  - Display: `standalone` (experiência imersiva estilo aplicativo nativo sem barras do navegador).
  - Ícones: Estrela de 4 pontas da Brasa em alta resolução (200x200 e 400x400) com canal alfa e suporte maskable.
- **Service Worker (`sw.js`):**
  - **Cache Híbrido:**
    - *Navegação HTML:* Estratégia **Network-First** com fallback automático para o cache `/index.html` caso o usuário esteja offline ou com sinal intermitente.
    - *Ativos Estáticos:* Estratégia **Cache-First** com revalidação assíncrona em background (**Stale-While-Revalidate**), garantindo carregamento em 0ms em acessos subsequentes.
  - **Atualização Instantânea:** O arquivo `/sw.js` é servido pelo Nginx com cabeçalhos `no-cache`, permitindo que novas versões sejam detectadas e ativadas imediatamente via `skipWaiting()` e `clients.claim()`.

---

## 🎨 Design System e Tokens

- **Cores de Fundo:**
  - Primária: `#050505` e `#030303` (Preto absoluto com iluminação volumétrica)
  - Superfícies / Cards: `#0b0c10`, `#111217`
  - Caixas de Ícones do Hero: `#0b0c10` (68x68px, raio 20px, com borda sutil)
  - Bordas Sutis: `rgba(255, 255, 255, 0.08)`
- **Acentos e Iluminação:**
  - Laranja Brasa Primário: `#FF5A1F`
  - Gradiente Neon Brasa: `linear-gradient(135deg, #ffa64d, #ff5a1f, #cc3708)`
  - Rosa dos Ventos: Vetor astronômico com círculos concêntricos pontilhados, eixos de mira e estrela de 4 pontas alaranjada
  - Iluminação do Hero: Gradientes radiais estáticos no topo direito (clarão âmbar 850px) e topo esquerdo (glow difuso 620px)

---

## 🧩 Seções Mapeadas e Implementadas

1. **Header / Navbar:** Logo Brasa Studio com estrela laranja, menu âncora e botão CTA com efeito glow.
2. **Hero Section (Refinada conforme Referência Visual):** Headline de impacto, tag de status, botões de ação, container delimitado em 360px exibindo ~4 ícones inicialmente e ocultando os excedentes sob barra de rolagem horizontal personalizada em gradiente âmbar neon (revelando até 8 ícones geométricos sob scroll manual do usuário), e card de preview com rosa dos ventos laranja vibrante no canto inferior direito sobre iluminação âmbar estática.
3. **Sobre a Brasa (Refinada conforme Referência Visual):** Imagem com cantos arredondados limpos (26px) sem borda externa cinza e iluminação sutil na base, badge em pílula estilizada ("• Sobre a Brasa"), headline 100% branca monocromática, parágrafo direto sem linha divisória `<hr>`, ícones de diferenciais e botão "Como trabalhamos" em vermelho-laranja brasa.
4. **Resultados (Refinada conforme Referência Visual):** Palco de apresentação com painéis/asas poligonais nas laterais esquerda e direita com perspectiva geométrica e contorno âmbar iluminado, clarão central descendente, badge de status ("• Resultados"), headline 100% branca monocromática ("Resultados que aparecem no caixa e na marca.") e botão "Agendar 15 minutos" em vermelho-laranja brasa.
5. **Como Trabalhamos:** Processo em 3 etapas claras (Diagnóstico, Criação & Engenharia, Escala).
6. **Diferenciais:** Grid responsivo de 6 cards destacando velocidade, design e tecnologia.
7. **Por Que a Brasa (Bento Grid):** Layout moderno no padrão Bento box com foco em storytelling visual.
8. **Portfólio:** 3 cases de grande escala com imagens de alta definição e tags de segmento.
9. **Serviços:** 3 modalidades estruturadas com entregáveis e precificação transparente.
10. **Vitrine (Showcase):** Marquee duplo com direções opostas de telas e interfaces produzidas.
11. **Planos / Precificação:** Cards comparativos (Essencial vs. Estúdio sob Demanda).
12. **Depoimentos:** 6 avaliações de clientes reais com avatares e avaliação 5 estrelas.
13. **FAQ (Perguntas Frequentes):** 6 acordeões interativos com transição suave.
14. **CTA Final:** Chamada de fechamento para conversão imediata com garantia e agendamento.
15. **Footer:** Links institucionais, redes sociais e direitos reservados.
