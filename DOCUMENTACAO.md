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
- **Imagens Oficiais e Formatos Modernos (WebP & AVIF):** 100% dos ativos fotográficos e ilustrativos foram sincronizados a partir da extração oficial da página original. Todas as imagens possuem versões emparelhadas em formatos de próxima geração: `.webp` (ampla compatibilidade) e `.avif` (máxima compressão e fidelidade de cores). Variantes responsivas foram geradas via Pillow Lanczos para todas as resoluções (`1x`, `2x`, desktop, tablet e mobile).
- **Imagens Lazy:** Todas as imagens abaixo da dobra possuem `loading="lazy"` e `decoding="async"` para não bloquear a renderização inicial.
- **Nginx I/O & Compressão:** Diretivas `sendfile on;`, `tcp_nopush on;` e compressão `gzip` de nível 6 habilitadas para todos os tipos de mídia textual (`CSS`, `JS`, `SVG`, `JSON`).
- **Políticas de Cache HTTP:**
  - **HTML (`/`):** `no-cache, no-store, must-revalidate` garantindo que alterações no layout sejam refletidas imediatamente.
  - **CSS e JS:** `public, max-age=604800, stale-while-revalidate=86400` (7 dias com atualização em segundo plano).
  - **Imagens, Fontes e Vídeos:** `public, max-age=2592000, immutable` (30 dias com persistência imutável em disco do navegador).

---

## ⚓ Navegação por Âncoras e Scroll Padding
Todos os 41 links âncora internos da página foram mapeados e auditados, possuindo correspondência exata com seus IDs de destino no DOM. Para assegurar que o topo das seções não seja obstruído pelo cabeçalho sticky/fixo, foi implementado no elemento raiz `html` a diretiva:
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: clamp(70px, 9vh, 90px);
}
```
Isso proporciona uma parada suave com respiro visual equilibrado em desktops, tablets e smartphones.

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
  - Superfícies / Cards: `#0b0c10`, `#0f1015`, `#111217`
  - Caixas de Ícones do Hero: `#0b0c10` (68x68px, raio 20px, com borda sutil)
  - Bordas Sutis: `rgba(255, 255, 255, 0.08)`
- **Acentos e Iluminação:**
  - Laranja Brasa Primário: `#FF5A1F`
  - Gradiente Neon Brasa: `linear-gradient(135deg, #ffa64d, #ff5a1f, #cc3708)`
  - Rosa dos Ventos / Estrela Brasa (`assets/img/brasa-estrela-200.webp` e `assets/img/brasa-estrela-400.webp`): Imagem gráfica oficial transparente com estrela central de 4 pontas em tom âmbar nobre e marcações de retículo tático concêntrico, aplicada com alta fidelidade e suporte Retina (`srcset 1x/2x`) em 4 pontos-chave da landing page: Hero (`.spark-compass-wrap`), Etapa 3 de Como Trabalhamos (`.step-compass-wrap`), Card 3 de Serviços (`.svc-compass-wrap`) e Card Estúdio de Planos (`.plan-compass-wrap`).
  - Iluminação do Hero: Gradientes radiais estáticos no topo direito (clarão âmbar 850px) e topo esquerdo (glow difuso 620px)

---

## 🧩 Seções Mapeadas e Implementadas

1. **Header / Navbar (Refinada conforme Referência Visual):** Barra superior fixa com altura calibrada em rigorosos 89px (`.site-header` e `.header-in` com `height: 89px;`), backdrop-filter com desfoque de 16px, logotipo com chama em gradiente de fogo, nome "brasa" em branco puro e "studio" em tom cinza médio/prata (`#8e8e93`), separador vertical sutil, links de navegação com destaque no item ativo "Início" em branco e itens seguintes em cinza claro, e botão "Fale com a gente" (`.header-cta`) em pílula vermelha-alaranjada brasa aveludada calibrada com `min-height: 46px; padding: 10px 22px; border: 0; border-radius: 999px; font-size: 16px; font-weight: 500; line-height: 26px;` e sombra quente suave. Navegação âncora protegida por `scroll-padding-top: clamp(89px, 10vh, 105px);`.
2. **Hero Section (Refinada conforme Referência Visual Original):** Tag de status `.tag-new` em formato cápsula translúcida com cantos arredondados de 12px (`border-radius: 12px`), respiros calibrados (`padding: 5px 12px 5px 5px; gap: 0.75rem;`), backdrop-filter de 12px, e badge interno `NOVO` (`.tag-new .badge`) em formato squircle com cantos suaves de 6px (`border-radius: 6px; padding: 7px 10px;`) em laranja vibrante (`#ff551b`) com texto em preto negrito caixa alta (`#000000`, `font-weight: 800`), acompanhado do texto "Agenda aberta para 2027" em branco puro vívido com peso semi-bold (`font-weight: 600`) na tipografia display; Headline com tipografia elegante e aberta de peso regular (`font-weight: 400`), destacando "marcas criativas." em laranja brasa (`#ff6a2b`); Lead em cinza suave e legível (`#909096`); Botões de ação em formato pílula calibrados ("Começar um projeto" em branco puro com texto preto e "Conheça a Brasa" em translúcido escuro); **Plano de Fundo Atmosférico em Vídeo e Poster:** elemento `<div class="hero-bg" aria-hidden="true">` posicionado em camada absoluta com `overflow: hidden; pointer-events: none;` contendo a tag `<video class="hero-video" autoplay muted loop playsinline preload="auto" poster="assets/video/brasa-hero-bg-poster.webp">` com fontes duplas WebM (`assets/video/brasa-hero-bg.webm` e `assets/video/brasa-hero-bg2.webm`), renderizado com `object-fit: cover; opacity: 0.52; mix-blend-mode: screen;` fundindo a textura de calor aos gradientes radiais nativos do Hero, com pré-carregamento acelerado do poster no `<head>` (`<link rel="preload" as="image">`) e script de garantia de autoplay contínuo em loop sem bloqueio de cliques; container de marcas parceiras (`.hero-icons-wrap` / `#hero-carousel-wrap` com track `#hero-carousel-track`) calibrado para largura exata de 292px (`width: 292px; max-width: 292px;`) exibindo rigorosamente 3 ícones squircle por vez (`3 * 84px + 2 * 20px = 292px`), configurado com carrossel contínuo em loop infinito imperceptível (`.hero-icons-track` com 2 grupos de 6 ícones squircle `.hero-icons-group`, sendo o segundo em `aria-hidden="true"`) deslizando ativamente para a esquerda via animação contínua `@keyframes heroIconsSlideLeft` e `@-webkit-keyframes heroIconsSlideLeft` (18s linear infinite sem restrições de movimento), com **remoção total e definitiva da barra de rolagem horizontal** (sem scrollbar, trilho ou thumb), máscara de fade lateral suave e **pausa instantânea no hover ao passar o mouse em cima (`animation-play-state: paused;`)**; card de preview compacto (285px) 100% estático; e **Rosa dos Ventos Oficial Brasa** (`.spark-compass-wrap` com `200px x 200px; bottom: -38px; right: -36px;`) renderizada com a imagem oficial `assets/img/brasa-estrela-200.webp` e drop-shadow quente `rgba(230, 74, 25, 0.45)`.
3. **Sobre a Brasa (Refinada conforme Referência Visual da Foto 2):** Imagem com cantos arredondados limpos (26px) sem borda externa cinza e iluminação sutil na base; badge em pílula estilizada ("• Sobre a Brasa"); headline editorial com contraste de duas cores conforme a Foto 2: primeira linha "Marcas mais fortes," em branco puro (`#ffffff`) e segunda linha "impressões que ficam." em cinza suave / prateado (`#8e8e93`); parágrafo direto sem linha divisória `<hr>`; ícones de diferenciais e botão "Como trabalhamos" em vermelho-laranja brasa.
4. **Resultados (Refinada conforme Referência Visual da Foto 2):** Fundo totalmente preto puro (`#000000` sem halos alaranjados no centro); formas trapezoidais laterais invertidas em degradê âmbar/bronze (`.stage-wing--left` com `polygon(0 0, 72% 0, 100% 100%, 0 100%)` e `.stage-wing--right` com `polygon(28% 0, 100% 0, 100% 100%, 0 100%)`, com base larga, topo estreito, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e fusão suave ao preto); tag de status ("• Resultados") em pílula translúcida com ponto quadrado âmbar; headline display elegante em fonte neo-grotesca (`Inter`), tamanho calibrado (`clamp(2.35rem, 4.3vw, 3.6rem)`), peso médio/regular (`font-weight: 500`), alinhamento centralizado em exatamente 2 linhas sem quebra prematura ("Resultados que aparecem" / "no caixa e na marca.") com degradê suave de branco puro para cinza prateado; subtítulo em cinza claro legível (`#9da3af`) em escala proporcional; botão "Agendar 15 minutos" em gradiente vermelho-laranja brasa com glow quente inferior (`box-shadow: 0 8px 26px rgba(235, 71, 20, 0.42)`); **Slide horizontal contínuo full-width para a esquerda (`.results-scroll-wrap` e `.results-marquee-track`):** cobrindo 100% da tela horizontalmente de ponta a ponta (`width: 100vw; margin-left: -50vw; margin-right: -50vw;`), animado continuamente com `@keyframes slideResultsLeft` em `35s linear infinite` sobre dois grupos idênticos de 4 cases (`.results-cases-group`), com recurso de **pausa automática instantânea ao passar o mouse em cima (`animation-play-state: paused;`)**; **Cards de cases com imagem cobrindo todo o fundo por trás do card de texto sobreposto (Idênticos à Foto 2):** `.case` com altura mínima de 520px (`min-height: 520px;`), `.case-img` em camada absoluta total (`position: absolute; inset: 8px 8px 10px 8px; z-index: 1; border-radius: 18px;`) com fotografias autorais 100% estáticas (`object-fit: cover; object-position: center top;`), e box de texto `.case-box` posicionado na camada superior (`position: relative; z-index: 2; margin-top: auto;`) com dark glassmorphism (`background: rgba(7, 8, 12, 0.94); backdrop-filter: blur(14px);`), permitindo ver a foto continuando por trás e nas frestas laterais conforme a Foto 2, com **calibração universal de espaçamento lateral simétrico aplicada a 100% dos cards do carrossel** (`.case-box` com `margin-left: 10px; margin-right: 10px; box-sizing: border-box; width: auto;`), proporcionando a todos os cases (*Casa Ocre*, *Torra Rubi*, *Âmbar Joias* e *Vento Sul Bikes*) o mesmo respiro lateral flutuante e equilibrado sobre a fotografia de fundo; ícones de marca em laranja quente `#ff7a3d`, pílulas de resultados retangulares arredondadas e hover neutro suave.
5. **Como Trabalhamos (Refinada conforme Referência Visual):** Tag de status em pílula ("Como trabalhamos") com ponto quadrado laranja (`#ff5a1f`) e iluminação âmbar superior no topo da borda; headline display sem atalhos em branco puro e cinza prata suave; 3 banners de etapas (`.step`) com background refinado combinando iluminação radial âmbar no topo direito sobre fundo grafite escuro (`background: radial-gradient(120% 70% at 100% 0%, rgba(255, 90, 31, .06), transparent 55%), var(--card);` com `--card: #0d0e12;`), cantos arredondados de 22px (`border-radius: 22px;`) e 100% estáticos; remoção completa de linhas divisórias horizontais `<hr>` abaixo dos títulos, garantindo respiro e continuidade de leitura; caixas de ícone em squircle translúcido escuro (`rgba(255, 255, 255, 0.03)`) com borda fina âmbar (lupa na etapa 1, e caneta inclinada nas etapas 2 e 3); pílulas de entregáveis com cantos de 8px e fundo escuro `#111218`; botão de conversão ("Agendar conversa") em formato pílula perfeita (pill-shape) com gradiente terracota e glow âmbar difuso; e Rosa dos Ventos oficial em imagem WebP (`assets/img/brasa-estrela-200.webp` / `.step-compass`) calibrada com opacidade translúcida exata de 0.55 (`opacity: .55;`) e comportamento 100% estático sem animações ou rotação (`animation: none !important; transform: none !important;`) com halo térmico difuso no card da Etapa 3.
6. **Diferenciais (Grade 3x2 Dark Modern SaaS Feature Cards Conforme Imagem 2):** Canvas background em preto puro (`#000000`) sem halos residuais; feixes de luz volumétricos laterais em corte trapezoidal invertido com borda superior iluminada; tag de status (`.tag-status--features`) com pílula escura, reflexo âmbar e ponto quadrado laranja vibrante; tipografia display em duas linhas monocromáticas ("Recursos de estúdio grande" / "com atenção de ateliê."); botão "Conheça a Brasa" em pílula com glow quente; grid 3x2 responsiva de cartões (.feature) com:
   - **Estrutura & Superfície:** Container em ultra-dark charcoal (`#0d0d0d`), cantos arredondados de 20px (`border-radius: 20px`) e padding interno de 2.1rem x 1.95rem x 2.2rem.
   - **Iluminação Atmosférica Difusa:** Glow radial difuso no canto superior esquerdo exatamente atrás do círculo do ícone em tons de âmbar quente e laranja queimado (`radial-gradient(circle 260px at 46px 46px, rgba(255, 107, 0, 0.17) 0%, rgba(135, 45, 0, 0.07) 42%, rgba(51, 21, 0, 0.02) 70%, transparent 95%)`), dissipando-se em direção ao canto inferior direito. Card 1 (`.feature--hot`) com destaque térmico adicional de reflexo acobreado na base e borda inferior âmbar (`border-bottom: 1px solid rgba(255, 110, 40, 0.52)`).
   - **Bordas Rim-Light:** Borda ultra-fina de 1px com highlight superior âmbar sutil (`border-top: 1px solid rgba(255, 120, 50, 0.28)`) desvanecendo para cinza escuro translúcido nas laterais e base (`border: 1px solid #1f2024`).
   - **Top Bar:** Botão circular (`.icon-orb` de 48x48px, 50% de raio) com borda laranja quente `1px solid rgba(255, 110, 40, 0.52)`, fundo em degradê escuro e ícones vetoriais em dourado/âmbar (`#ffa44a`), com o Card 1 exibindo o gráfico com eixos cartesianos em L e linha de tendência com seta ascendente fiel à imagem de referência, acompanhado por seta diagonal minimalista `↗` no canto superior direito (`stroke: #8e8e93`).
   - **Animação & Micro-Interações no Hover (Conforme o Original):** Transição elástica e fluida (`transition: transform var(--trans-normal), border-color var(--trans-normal), box-shadow var(--trans-normal);`) com elevação vertical suave do card (`transform: translateY(-4px)`), aprofundamento de sombras volumétricas (`box-shadow: 0 24px 50px -10px rgba(0, 0, 0, 0.95), 0 0 25px -5px rgba(255, 90, 31, 0.18)`), pulso de escala e realce de brilho no orbe do ícone (`.icon-orb` com `transform: scale(1.04); box-shadow: 0 0 22px rgba(255, 95, 30, 0.35);`) e movimentação responsiva da seta diagonal `↗` (`.feature-arrow` com `transform: translate(2px, -2px); color: #ffffff; opacity: 1;`).
   - **Tipografia & Badges:** Títulos nítidos em branco puro (`#ffffff`, peso 700, 1.25rem), acompanhados por badge `PRO` em pílula laranja brilhante (`#ff551b`) com tipografia branca pura (`color: #ffffff; font-weight: 700;`) e glow térmico; subtítulo em cinza médio (`#8a8c96`), divisória `<hr class="rule">` e descrição suave (`#8e8e93`) com entrelinha 1.62.
7. **Por Que a Brasa (Refinada conforme Referência Visual da Foto 2):** Fundo totalmente preto puro (`#000000`); efeito trapezoidal cinza reduzido e contido apenas do lado direito (`.benefits-wing--right` com `top: clamp(80px, 9.5vw, 140px); width: clamp(240px, 26vw, 420px); height: clamp(240px, 26vw, 380px); clip-path: polygon(28% 0, 100% 0, 100% 100%, 0% 100%)`) amplamente suavizado com degradê contínuo radial e linear (`radial-gradient` no topo direito e `linear-gradient(165deg, rgba(255, 255, 255, 0.10) 0%, ..., transparent 92%)`), linha de luz superior iluminada (`border-top: 1px solid rgba(255, 255, 255, 0.24)`) com halo prateado interno, e máscara progressiva (`mask-image: linear-gradient(...)`) que dissolve a base do trapézio de forma orgânica e suave no preto absoluto da página; tag de status no topo (`.tag-status--benefits`) com pílula escura de cantos arredondados (9px), ponto quadrado laranja vibrante (`#ff5a1f`) com glow de 8px, reflexo âmbar no topo da borda e texto "Por que a Brasa" em Title Case idêntica à Foto 3; headline display editorial com contraste de duas tonalidades: primeira linha "A gente não só desenha," em branco puro (`#ffffff`) e segunda linha "a gente coloca no ar." em cinza suave / prateado mais escuro (`#8e8e93`); organização de pills refinadas estruturadas em duas linhas simétricas (5 itens na linha 1 e 6 itens na linha 2 com o botão de conversão) com fundo grafite mais claro (`#15161c`), contorno fino suave `1px solid rgba(255, 255, 255, 0.15)`, tipografia fina e elegante de peso regular (`font-weight: 400`), cor de texto cinza suave legível (`#b0b3bf`), e botão "Fale agora" em pílula sólida branca pura (`#ffffff`) com cantos suaves (9px), tipografia preta nítida (`font-weight: 500`) e sem nenhuma cápsula/moldura externa escura (`li.pill-cta-item` com background e borda neutralizados), idêntico à Foto 2 de referência; grid Bento box com 5 cards refinados (`.bcard`) com superfície dark mode minimalista ultra-clean em sleek charcoal grey (`#0d0e13`), degradê radial suave de grafite profundo para near-black (`radial-gradient(ellipse 110% 75% at 50% 0%, ...)`) simulando iluminação de estúdio de baixo contraste, borda iluminada de 1px com faint glowing edge (`border-top: 1px solid rgba(255, 255, 255, 0.16); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), ...`), cantos arredondados de 22px, banners 100% estáticos (remoção total de transformações ou zoom de hover), remoção de linhas horizontais divisórias `<hr>`, títulos em branco puro (`#ffffff`), badges `NOVO` em pílula sólida retangular laranja vibrante (`#ff551b`) com tipografia preta negrita (`#000000; font-weight: 700`) em caixa alta idênticas à Foto 2, botões estilizados no8. **Portfólio (Stacking Cards / Sticky Scroll & Cabeçalho Dark Mode Centralizado de Alta Precisão):** 3 cases de grande formato e impacto cinematográfico (*Casa Ocre · 2026*, *Torra Rubi · 2026*, *Lume Arquitetura · 2025*) com sistema avançado de **Stacking Cards (Empilhamento de Cartões / Sticky Scroll)** e cabeçalho hero moderno centralizado:
   - **Cabeçalho Hero Moderno Centralizado:**
      - *Fundo & Iluminação:* Base em preto puro absoluto `#000000` totalmente livre de clarões ou halos difusos alaranjados de fundo (remoção completa de `.portfolio-glow-bg`).
       - *Profundidade & Silhuetas Poligonais Laterais (`.portfolio-backdrop`):* Painéis angulares poligonais em perspectiva sutil nas laterais (`.portfolio-wing--left` e `.portfolio-wing--right`), com gradiente marrom-cobre/alaranjado escuro quente (`linear-gradient(135deg, rgba(55, 22, 12, 0.5) 0%, rgba(32, 12, 6, 0.22) 55%, transparent 100%)`), borda superior iluminada `border-top: 1px solid rgba(208, 59, 30, 0.42)` e drop-shadow âmbar suave, em perfeita harmonia cinematográfica com a Foto 2 de referência.
     - *Badge Superior Estilo Cápsula (`.tag-status--portfolio`):* Pílula arredondada (`border-radius: 999px`) em fundo escuro semi-transparente (`rgba(18, 19, 24, 0.85)`), borda sutil `1px solid rgba(255, 255, 255, 0.12)`, borda de topo com iluminação âmbar viva `border-top: 1px solid rgba(255, 125, 45, 0.88)`, ponto indicador (bullet) laranja brilhante circular à esquerda (`#ff5a1f` com glow) e texto "Portfólio" em tipografia sans-serif limpa e clara em branco puro (`#ffffff`).
      - *Bloco Tipográfico Centralizado:* Título display com peso visual forte (`font-weight: 700`) e hierarquia de duas tonalidades: Linha 1 ("Projetos selecionados") em branco puro (`#ffffff`) e Linha 2 ("que acendem marcas.") em cinza suave / prateado mais escuro (`#8e8e93`); subtítulo/descrição em cinza suave (`#A1A1AA`), entrelinha 1.65 e largura máxima de 660px ("Uma seleção de trabalhos recentes, de lojas autorais a escritórios de serviço, em setores diferentes.").
      - *Botão CTA Primário (`.portfolio-btn`):* Pílula arredondada (`border-radius: 999px`) com gradiente quente em tons de vermelho/laranja (`linear-gradient(180deg, #E04423 0%, #D13514 100%)`), texto "Pedir o portfólio completo" em branco e peso regular/médio (`font-weight: 500`), e efeito box-shadow marcante com drop shadow/glow alaranjado difuso projetado logo abaixo (`box-shadow: 0 12px 32px rgba(224, 68, 35, 0.55), 0 0 24px rgba(209, 53, 20, 0.35)`).
   - **Mecânica Sticky & Escalonamento:** A lista `.works` possui espaçamento generoso (`gap: clamp(4rem, 8vh, 7rem)`) e `overflow: visible` na seção. Cada item `.work` utiliza `position: sticky;` com valores de `top` escalonados progressivamente (`top: 90px`, `125px`, `160px` no desktop; `75px`, `95px`, `115px` no mobile), fixando os cartões no topo da janela conforme o usuário rola a página.
   - **Profundidade 3D & Horizonte Iluminado:** Os cartões `.work-card` possuem cantos arredondados de 24px, linha de luz de horizonte superior (`border-top: 1px solid rgba(255, 255, 255, 0.24)`), fundo escuro `#08080c` e dupla camada de sombra volumétrica (`box-shadow: 0 -14px 35px rgba(0, 0, 0, 0.75), 0 35px 80px rgba(0, 0, 0, 0.95)`).
   - **Tags de Categoria dos Projetos (`.work-bar .pills li`):** Pílulas retangulares sutilmente arredondadas (`border-radius: 10px; padding: 5px 13px;`), tipografia cinza elegante (`color: #a6a6a6; font-size: 15px; line-height: 26px;`) e fundo translúcido escuro com borda suave, aplicadas uniformemente a todos os cases do Portfólio (*Casa Ocre*, *Torra Rubi* e *Lume Arquitetura*).
   - **Interatividade Dinâmica com `requestAnimationFrame`:** Script em `main.js` monitora o scroll em 60fps calculando a sobreposição de cada cartão. À medida que o próximo sobe e cobre o anterior, o cartão inferior sofre contração gradual de escala (`scale(0.94)`) e escurecimento gradual (`brightness(0.65)`), recriando com realismo a sensação física tridimensional de cartões empilhados. A barra de progresso horizontal (`.work-progress i`) em gradiente âmbar/ouro acompanha o ciclo de fixação.
   - **Acessibilidade:** Suporte completo à diretiva `prefers-reduced-motion: reduce`, desativando as transformações de escala dinâmicas enquanto preserva o empilhamento funcional e estável via CSS.
9. **Serviços (Refinada conforme Referência Visual da Imagem 2):** 3 modalidades estruturadas (*Site sob medida*, *Identidade completa*, *Lançamento integrado*) com entregáveis e precificação transparente, calibradas fielmente à imagem de referência:
   - **Cabeçalho Moderno Dark Mode Minimalista (`.head--services`):**
     - *Fundo & Iluminação:* Base em preto puro absoluto (`#000000`), sem manchas ou gradientes alaranjados difusos no fundo (remoção completa de `background-image` em `.sec.services`, desativação de `.head--services::before` e remoção do halo alaranjado que vazava de `.tag-status--services`), estabelecendo um fundo limpo de alto contraste cinematográfico.
     - *Badge Superior (`.tag-status--services`):* Formato de pílula arredondada (`border-radius: 10px`), fundo cinzento-escuro (`rgba(18, 20, 26, 0.88)`), rebordo sutil `1px solid rgba(255, 255, 255, 0.12)`, borda superior iluminada `border-top: 1px solid rgba(255, 120, 45, 0.85)` com halo âmbar superior, ponto quadrado laranja vibrante à esquerda (`#ff5a1f`) com glow de 8px e texto "Serviços" em branco puro (`#ffffff`).
     - *Título Principal (`.title--services`):* Tipografia sans-serif grande (`clamp(2.45rem, 4.8vw, 3.85rem)`), peso 700 e entrelinha 1.12 em duas linhas nítidas: Linha 1 ("Serviços completos,") em branco puro brilhante (`#ffffff`) e Linha 2 ("do conceito ao código.") em cinzento prateado com opacidade reduzida (`#8c8e98`), sem cores alaranjadas no texto.
     - *Subtítulo (`.text--services`):* Texto em cinzento suave legível (`#9294a0`), tamanho proporcional (`1.05rem`), entrelinha 1.62 e largura máxima controlada de 630px para quebra equilibrada em duas linhas.
     - *Alinhamento:* Alinhamento à esquerda (`text-align: left`) com hierarquia visual precisa e espaçamento generoso.
   - **Estrutura dos Banners (`.svc`):** Background atmosférico refinado com gradiente radial âmbar no topo direito sobre fundo grafite escuro (`background: radial-gradient(120% 70% at 100% 0%, rgba(255, 90, 31, .06), transparent 55%), var(--card);` com `--card: #0d0e12;`), cantos arredondados de 24px (`border-radius: 24px`), contorno sutil `1px solid rgba(255, 255, 255, 0.08)`, borda superior iluminada `border-top: 1px solid rgba(255, 87, 34, 0.28)`, sombra volumétrica e comportamento 100% estático aplicado uniformemente a todos os cards da seção.
   - **Ícones Squircle:** Caixas de 52x52px com cantos arredondados (14px), fundo em degradê radial âmbar escuro, contorno em âmbar `1px solid rgba(255, 110, 40, 0.45)`, glow térmico e ícones vetoriais em laranja acobreado (`#ff7a3d`) representando browser/janela, símbolos geométricos de marca e megafone.
    - **Badges de Categoria (`.svc .pill--dark`):** Formato retangular suavemente arredondado (`border-radius: 10px; padding: 5px 13px;`) em translúcido escuro com tipografia cinza (`color: #a6a6a6; font-size: 15px; line-height: 26px;`).
   - **Linhas Divisórias & Tipografia:** `<hr class="rule">` separando o título branco robusto do texto descritivo (`.svc .text-sm`), calibrado em `font-size: 16px; line-height: 1.6;` e cor `#a6a6a6;`.
    - **Pílulas de Entregáveis & Prazos (`.svc .pills--strong li`):** Fundo translúcido escuro com `border-radius: 10px; padding: 5px 13px; font-size: 15px; line-height: 26px; color: #a6a6a6;`, com valores em destaque branco puro (`#ffffff; font-weight: 700;`).
   - **Checks de Selo Estrelado (`.svc .checks li`):** Ícone em laranja vibrante (`#ff5a1f`) e itens de benefícios calibrados em `font-size: 16px; line-height: 1.6;` e cor `#a6a6a6;` com peso 500.
   - **Rosa dos Ventos Oficial no Card 3:** Imagem oficial WebP (`assets/img/brasa-estrela-200.webp` / `.svc-compass`) calibrada com opacidade translúcida exata de 0.55 (`opacity: .55;`), comportamento 100% estático sem animações ou rotação (`animation: none !important; transform: none !important;`) e posicionada no canto inferior direito (`.svc-compass-wrap` com `bottom: -35px; right: -35px; width: 200px; height: 200px;` no desktop e `width: 165px; height: 165px; bottom: -28px; right: -28px;` no mobile) atuando como elegante marca d'água geométrica.
   - **Botão de Conversão ("Agendar conversa"):** Pílula em gradiente vermelho-laranja brasa (`#f76327` a `#db4611`) com contorno de luz e glow térmico projetado.
10. **Vitrine / Lance seu projeto (`.showcase` #lancamento — Galeria em Grid Interativa Dark Mode):**
    - **Fundo & Atmosfera:** Fundo dark mode premium absoluto (`#0a0a0a`) com moldura de profundidade nas laterais criada por blocos trapezoidais/angulares (`.showcase-wing--left` e `.showcase-wing--right`) com gradiente marrom-acobreado/terracota escuro e borda superior iluminada `border-top: 1px solid rgba(208, 59, 30, 0.42)`, guiando o olhar ao centro.
    - **Pill Badge Superior (`.tag-status--showcase`):** Fundo preto translúcido (`rgba(14, 15, 18, 0.85)`), borda sutil de 1px com rim light/glow avermelhado na borda superior `border-top: 1px solid rgba(255, 115, 45, 0.88)`, ponto quadrado alaranjado (`#FF5722` com glow) à esquerda e texto "Lance seu projeto" em branco puro.
     - **Título Principal (`.showcase-title`):** Tipografia moderna sem serifa (Inter/SF Pro Display), peso medium (500) e hierarquia de duas tonalidades: Linha 1 ("O parceiro criativo") em branco puro (`#ffffff`) e Linha 2 ("de marcas em crescimento.") em cinza suave / prateado mais escuro (`#8e8e93`), com entrelinha 1.14 em duas linhas elegantes.
    - **Subtítulo (`.showcase-text`):** Texto em cinza claro (`#A1A1AA`), peso regular (400), entrelinha 1.62 e largura de 660px.
    - **Botão CTA Principal (`.showcase-btn`):** Formato pílula arredondada (`border-radius: 999px`), cor terracota/vermelho-alaranjado vibrante (`#D03B1E`), texto "Ver como trabalhamos" em branco e sombra difusa com glow alaranjado projetada abaixo (`box-shadow: 0 12px 32px rgba(208, 59, 30, 0.58), 0 0 22px rgba(255, 87, 34, 0.35)`).
    - **Galeria de Banners em Carrossel Infinito Contínuo Bidirecional (`.showcase-gallery`):**
      - *Remoção Total e Definitiva de Barras de Rolagem:* Eliminação completa de scrollbar, trilho (track) e thumb (`scrollbar-width: none !important; -ms-overflow-style: none !important; ::-webkit-scrollbar { display: none !important; }`), garantindo visual 100% limpo e fluido sem interferências cinzas.
      - *Movimentação Bidirecional em Loop Infinito Contínuo:*
        - **Linha 1 (Superior):** Desliza continuamente para a **esquerda** (`@keyframes showcaseSlideLeft` com `translateX(0)` a `translateX(-50%)` em 35s linear infinite) sobre 2 grupos duplicados dos cards 1 a 4.
        - **Linha 2 (Inferior):** Desliza continuamente para a **direita** (`@keyframes showcaseSlideRight` com `translateX(-50%)` a `translateX(0)` em 35s linear infinite) sobre 2 grupos duplicados dos cards 5 a 8.
      - *Pausa Instantânea no Hover:* Ao passar o cursor do mouse sobre qualquer uma das fileiras ou cartões, a animação pausa instantaneamente (`animation-play-state: paused;`) para inspeção minuciosa dos detalhes das fotografias.
      - *Largura Total Fluida de Ponta a Ponta:* Cobertura total de 100vw com `margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%);`, expandindo a esteira de imagens de ponta a ponta sem cortes bruscos.
      - *Card Aspect Ratio:* Proporção 1:1 (quadrado perfeito) com cantos arredondados suaves (`border-radius: 18px`), `overflow: hidden`, contorno sutil `1px solid rgba(255, 255, 255, 0.06)` e base grafite `#0d0d0f`.
      - *Imagens:* Preenchimento completo dos cards com `object-fit: cover` nas 8 peças autorais em altíssima definição (cerâmica, café coado, fachada noturna iluminada, mesa de trabalho de design, colar de ouro sobre linho, ciclista na rua de pedra, tecidos em terracota e arquitetura com luz rasante).
11. **Planos / Precificação (`.pricing` #planos — Hero Banner & Pricing Cards Dark Mode Compactos — Idênticos à Foto 2):**
    - **Fundo & Atmosfera:** Fundo preto absoluto (`#000000`) de altíssimo contraste, limpo e sem polígonos cinzas interferindo no fundo dos cards de preços conforme a Foto 2.
    - **Hero Header Alinhado à Esquerda:** Pill badge translúcida com bullet laranja neon vibrante, headline massiva sans-serif em branco e degradê cinza-prateado suave, e subtítulo em cinza claro.
    - **Pricing Cards em 2 Colunas (`.plans`):**
      - *Superfície & Dimensões Alinhadas nas Laterais:* Grid expandido para largura total do container (`width: 100%; max-width: 100%;` dentro de `.container` de 1240px) com espaçamento de 1.5rem (`gap: 1.5rem;`), eliminando recuos excessivos e alinhando os cartões de planos perfeitamente às laterais das demais seções e ao cabeçalho. Cards com padding amplo e proporcional (`clamp(1.85rem, 2.5vw, 2.35rem);`), background atmosférico refinado com gradiente radial âmbar no topo direito sobre fundo grafite escuro (`background: radial-gradient(120% 70% at 100% 0%, rgba(255, 90, 31, .06), transparent 55%), var(--card);` com `--card: #0d0e12;`), cantos de 22px (`border-radius: 22px;`), contorno ultrafino, top rim light térmico e micro-interação elástica suave no hover (`transform: translateY(-4px);` com realce de borda e sombra aprofundada).
      - *Ausência de Linhas Divisórias:* Removidas as antigas linhas `<hr class="rule">`, conectando diretamente o valor do plano à descrição em cinza suave.
      - *CARD 1 (Essencial):* Squircle escuro de 42x42px com cantos de 11px e ícone de chama alaranjada; badge translúcida "Mais escolhido" (`padding: 5px 13px; border-radius: 10px; color: #a6a6a6; font-size: 15px; line-height: 26px;`); título "Essencial" (`font-size: 1.08rem; font-weight: 600;`); valor do plano calibrado em 54px (`.price-v` com `font-size: 54px; font-weight: 700; line-height: 1;`), unidade "mês" em 18px (`.price-u` com `font-size: 18px; font-weight: 500;`), e valor original cortado em 40px (`.price-diagonal-slash` com `font-size: 40px; font-weight: 500; line-height: 1;`) riscado por linha diagonal laranja de 2px; descrição com `font-size: 15.5px;` em cinza `#8e8e96`; botões-pílula translúcidos "8 peças por mês" e "2 rodadas de ajuste" (`padding: 5px 13px; border-radius: 10px; color: #a6a6a6; font-size: 15px; line-height: 26px;`) com números destacados em branco puro; 5 itens de benefícios com ícone de escudo alaranjado, espaçamento vertical de 18px (`gap: 18px;`) e textos em cinza (`color: #a6a6a6; font-size: 16px;`); botão CTA pill-shaped compacto em gradiente terracota/laranja (`padding: 0.72rem 1.8rem; font-size: 0.88rem;`) com glow âmbar suave na base e texto "Agendar conversa".
      - *CARD 2 (Estúdio):* Squircle escuro de 42x42px com ícone outline de diamante/joia alaranjado; badge translúcida "Recomendado" (`padding: 5px 13px; border-radius: 10px; color: #a6a6a6; font-size: 15px; line-height: 26px;`); título "Estúdio"; valor do plano em 54px (`.price-v` com `font-size: 54px; font-weight: 700; line-height: 1;`) e unidade "mês" em 18px (`.price-u` com `font-size: 18px;`); descrição com `font-size: 15.5px;`; botões-pílula "24 peças por mês" e "Ajustes sem limite" (`padding: 5px 13px; border-radius: 10px; color: #a6a6a6; font-size: 15px; line-height: 26px;` com 'Ajustes' em negrito branco); 5 itens de benefícios com ícone de escudo alaranjado, espaçamento de 18px (`gap: 18px;`) e textos em cinza (`color: #a6a6a6; font-size: 16px;`); **Marca d'água oficial da rosa dos ventos WebP no canto inferior direito** (`.plan-compass-wrap` com `bottom: -25px; right: -25px; width: 220px; height: 220px;`) calibrada com opacidade translúcida exata de 0.55 (`opacity: .55;`) e comportamento 100% estático sem rotação ou animação (`animation: none !important; transform: none !important;`); **Botão CTA compacto alinhado à esquerda** (`width: fit-content; align-self: flex-start;`) em gradiente terracota/laranja com texto "Agendar conversa" conforme Foto 2.
12. **Depoimentos (`.testimonials` #depoimentos — Hero Section Dark Mode Ultrawide 21:9 — Calibrado Fielmente à Foto 2):**
    - **Fundo & Atmosfera:** Fundo preto absoluto (`#000000`) de proporção ultrawide 21:9, emoldurado no terço médio por blocos angulares trapezoidais em perspectiva em tom marrom-cobre escuro (`.testimonials-wing--left` e `.testimonials-wing--right` com `top: clamp(140px, 16vw, 190px); height: clamp(140px, 15vw, 190px); width: clamp(260px, 28vw, 440px);`), com topo horizontal e corte diagonal interno (`clip-path: polygon(0 0, 72% 0, 100% 100%, 0 100%)` na asa esquerda e `clip-path: polygon(28% 0, 100% 0, 100% 100%, 0 100%)` na asa direita), gradiente térmico translúcido, rim light acobreado superior `border-top: 1px solid rgba(208, 59, 30, 0.42)` com halo `box-shadow: 0 -2px 16px rgba(208, 59, 30, 0.18)` e fade mask vertical suave dissolvendo antes da linha do botão CTA, mantendo a base e o fundo dos cards de depoimentos 100% preto puro.
    - **Pill Badge Superior (`.tag-status--testimonials`):** Pílula escura semi-transparente com borda sutil de 1px, borda superior incandescente `border-top: 1px solid rgba(255, 115, 45, 0.95)`, ponto quadrado laranja vibrante (`#FF5722` com glow) à esquerda, halo térmico na borda superior `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 -4px 18px rgba(255, 87, 34, 0.35)` e texto "Depoimentos" em Title Case.
    - **Título com Hierarquia Editorial (`.testimonials-title`):** Tipografia moderna em duas linhas contrastantes: Linha 1 ("O que dizem as marcas") em branco puro (`#ffffff`) e Linha 2 ("que passaram por aqui.") em cinza suave / prateado mais escuro (`#8e8e93`), mantendo a consistência com Sobre, Benefícios, Portfólio, Serviços e Vitrine.
    - **Subtítulo Minimalista (`.testimonials-text`):** Texto em cinza claro (`#A1A1AA`), entrelinha confortável de 1.6 e largura máxima calibrada para 520px com quebra fiel à Foto 2: "Clientes contam como foi trabalhar com o estúdio e o que mudou depois" / "do lançamento.".
    - **Carrossel em Loop Infinito Contínuo de Marcas Parceiras (`.testimonials-icons-wrap`):** 6 cartões em formato squircle (`width: 72px; height: 72px; border-radius: 18px; background: #111216; border: 1px solid rgba(255, 255, 255, 0.08)`), contendo ícones monocromáticos abstratos:
      1. Círculo / Letra O vazada com contorno grosso.
      2. Triângulo / Pirâmide sólido com cantos arredondados (▲).
      3. Cúpula com base horizontal inferior arredondada.
      4. Ondas duplas sinuosas horizontais (≈).
      5. **Losango / Diamante Vazado:** Quadrado girado 45° com contorno grosso de 4.2px e orifício central.
      6. **Quatro Círculos:** Matriz 2x2 com 4 esferas preenchidas sólidas.
      - *Loop Infinito Sem Barra Horizontal:* Contêiner `.testimonials-icons-wrap` calibrado para largura exata de 248px (`width: 248px; max-width: 248px;`) exibindo rigorosamente 3 ícones squircle por vez (`3 * 72px + 2 * 16px`), estruturado com `.testimonials-icons-track` e 2 grupos idênticos de 6 ícones (`.testimonials-icons-group`, o segundo com `aria-hidden="true"`). Animação contínua `@keyframes testimonialsIconsSlideLeft` em 18s linear sem interrupções, com **remoção total da barra de rolagem horizontal**, máscara suave de fade nas extremidades e **recurso de pausa instantânea no hover (`animation-play-state: paused;`)**.
    - **Botão Central CTA (`.testimonials-btn`):** Pílula arredondada em tom vermelho-alaranjado queimado (`#d84315`), texto "Ver portfólio" em branco, e efeito difuso de iluminação projetada logo abaixo (*orange glow* suave).
    - **Grid de Depoimentos 100% Estático (3 Colunas x 2 Linhas — 6 Cards):**
      - *Superfície & Iluminação Cênica (Efeitos da Foto 1):*
        - *Fundo com Atmosfera Térmica:* Gradiente radial elíptico na base (`radial-gradient(ellipse 85% 55% at 50% 100%, rgba(185, 55, 18, 0.2) 0%, ...)`), gerando uma luminosidade quente em cobre e âmbar que sobe a partir da base sobre fundo linear escuro (`#0e0f13` a `#08090c`).
        - *Top Rim Light & Destaque Incandescente Central:* Borda superior iluminada em tom cobre `1px solid rgba(255, 115, 45, 0.35)` com pseudo-elemento central `::before` de 1.5px em gradiente laranja neon `rgba(255, 115, 45, 0.95)`, criando uma linha de calor viva no topo de cada card.
        - *Linha Divisória Fina:* Linha horizontal sutil `border-top: 1px solid rgba(255, 255, 255, 0.08)` separando o depoimento da identificação do cliente (`figcaption`).
        - *Halo no Avatar:* Borda alaranjada suave `1px solid rgba(255, 115, 45, 0.28)` com halo de calor difuso `box-shadow: 0 0 16px rgba(255, 90, 31, 0.2)`.
        - *Sombras e Projeção:* `box-shadow: 0 16px 45px rgba(0, 0, 0, 0.85), 0 -2px 25px rgba(255, 90, 31, 0.16)`.
      - *Micro-Interações Táteis Suaves no Hover:* Cartões com transição física refinada (`transition: transform var(--trans-normal), border-color var(--trans-normal), box-shadow var(--trans-normal);`), elevação suave de 4px (`transform: translateY(-4px);`), realce térmico na borda superior (`border-top-color: rgba(255, 115, 45, 0.65);`) e aprofundamento aveludado de sombra (`box-shadow: 0 24px 50px -10px rgba(0, 0, 0, 0.95), 0 0 25px -5px rgba(255, 90, 31, 0.2);`), além de leve elevação de 2px e realce de brilho nos cartões squircle de marcas.
      - *Avatares Redondos Perfeitamente Enquadrados (`.avatar`):*
        - Dimensões: 52px x 52px com `border-radius: 50%` e `overflow: hidden`.
        - Enquadramento Autoral Fiel: Imagens re-exportadas a partir das matrizes fotográficas de 160x160 com enquadramento perfeitamente centralizado (`object-fit: cover; object-position: center;`), eliminando o antigo deslocamento para cima e o corte em crescente escuro na base, exibindo ombros balanceados, iluminação âmbar nítida e aro perfeitamente circular em todos os 6 clientes.
      - *Tipografia & Cores das Citações:* Texto do depoimento (`.quote blockquote`) calibrado para `font-size: 16px; line-height: 1.6; color: #a6a6a6;`. No rodapé do card (`figcaption`), o nome do cliente (`.quote .q-name`) e o cargo (`.quote .q-role`) são destacados em branco puro (`#ffffff`), com ponto separador em cinza (`.quote .q-sep` em `#71717a`) e nome da empresa em cinza suave (`.quote .q-co` em `#a1a1aa`).
13. **FAQ (Perguntas Frequentes — Layout Split em 2 Colunas Dark Mode Minimalista):**
    - **Fundo & Atmosfera:** Fundo preto absoluto (`#000000`) com espaçamento generoso e arquitetura limpa de 2 colunas assimétricas (`display: grid; grid-template-columns: minmax(280px, 360px) 1fr; gap: clamp(36px, 5.5vw, 84px);`).
    - **Coluna da Esquerda (Cabeçalho 100% Estático sem Efeito de Rolagem):**
      - *Posicionamento Estático:* `position: static;` eliminando a fixação flutuante durante a rolagem (sticky) e mantendo o cabeçalho ancorado no topo natural da seção.
      - *Pill Badge Superior (`.tag-status--faq`):* Pílula arredondada em dark glassmorphism com borda superior iluminada `border-top: 1px solid rgba(255, 115, 45, 0.88)`, bullet quadrado laranja neon (`#ff5722` com glow) e texto "FAQ" em branco puro.
      - *Título com Hierarquia Editorial (`.faq-title`):* Tipografia moderna em duas linhas contrastantes: Linha 1 ("Perguntas") em branco puro (`#ffffff`) e Linha 2 ("frequentes.") em tom cinza suave / prateado refinado mais escuro (`#8e8e93`), mantendo a consistência visual com todas as seções anteriores.
      - *Subtítulo (`.faq-text`):* Texto em cinza claro neutro (`#a1a1aa`), entrelinha 1.62 e largura confortável de 320px.
    - **Coluna da Direita (Grid de 6 Acordeões):**
      - 6 cards empilhados verticalmente (`.qa`) com superfície preto absoluto (`#000000`), cantos arredondados de 18px e gap de 14px.
      - Estado aberto (`.qa[open]`): fundo preto profundo `#000000` emoldurado por borda fina contínua em **laranja vibrante (`rgba(255, 90, 31, 0.7)`)**, sem sombras expansivas.
      - Numeração sequencial ("01" a "06") em **laranja vibrante (`#ff5722`)** em negrito.
      - Título da pergunta em branco puro (`#ffffff`), peso 600.
      - **Ícone de Abertura (+) e Fechamento (✕):**
        - Fechado: símbolo de mais (`+`) nítido em traço branco puro (`background: #ffffff;`).
        - Aberto: transição geométrica suave rotacionando 45 graus para transformar o `+` em um **`✕` (fechamento)** sincronizado exatamente com a cor da borda laranja (`background: rgba(255, 90, 31, 0.7);`), criando coerência visual instantânea com o estado ativo do acordeão.
      - Resposta expansível em cinza suave com entrelinha confortável e quebra alinhada.
14. **CTA Final (`.cta` #contato — Card Dark Mode Widescreen com Iluminação Térmica em Dois Pontos):**
    - **Fundo & Atmosfera da Seção:** Fundo preto absoluto (`#000000`).
    - **Card Central em Formato Panorâmico Widescreen (`.cta-card`):**
      - *Proporção e Dimensões:* Formato panorâmico widescreen 21:9 (`width: 100%; max-width: 100%;`) ocupando a largura total do contêiner de 1240px, com altura equilibrada (`padding: clamp(3.4rem, 5.2vw, 4.8rem) clamp(1.8rem, 4.5vw, 4.5rem);`) e cantos arredondados amplos de 32px (`border-radius: 32px;`).
      - *Sistema de Iluminação Térmica e Efeitos de Fundo (Dois Pontos conforme a Foto 2):*
        1. **Foco Incandescente Primário (Topo Direito):** Gradiente radial acobreado vibrante (`rgba(225, 78, 20, 0.62)`) combinado com camada difusa `.cta-glow--right` (650px x 600px, blur de 52px), simulando um flare solar/térmico intenso no canto superior direito.
        2. **Reflexo Atmosférico Secundário (Lado Esquerdo Médio):** Gradiente radial bronze suave (`rgba(140, 45, 14, 0.24)`) combinado com camada difusa `.cta-glow--left` (520px x 520px, blur de 58px) a 15% do topo, criando ambiência e profundidade equilibrada.
        3. **Centro & Base Escura:** Gradiente linear vertical sutil de `#0e0f14` a `#07080a`, proporcionando contraste absoluto para a leitura dos textos centrais.
        4. **Vídeo Atmosférico em Loop Contínuo (`.cta-video-bg` / `.cta-video`):** Vídeo de partículas e calor em movimento contínuo (`brasa-hero-bg.webm` e `brasa-hero-bg2.webm`) com `mix-blend-mode: screen; opacity: 0.65;`, poster de fallback e rotina de garantia de autoplay, integrando efeito vivo de brasa acesa ao card.
      - *Bordas & Acabamento:* Contorno fino de 1px em `rgba(255, 255, 255, 0.08)`, rim light acobreado no topo `border-top: 1px solid rgba(255, 115, 45, 0.38)` e projeção de sombra profunda `box-shadow: 0 24px 70px rgba(0, 0, 0, 0.95), 0 0 55px rgba(210, 75, 20, 0.14)`.
    - **Pill Badge Superior (`.tag-status--cta`):** Pílula em dark glassmorphism com borda fina iluminada no topo, bullet quadrado laranja neon (`#ff5722` com glow) e texto "Vamos conversar" em branco puro.
    - **Título com Hierarquia Editorial (`.cta-title`):** Tipografia sem serifa de peso medium (500) com hierarquia de duas tonalidades: Linha 1 ("Cada projeto é uma brasa") em branco puro (`#ffffff`) e Linha 2 ("que a gente acende junto.") em tom cinza suave / prateado refinado mais escuro (`#8e8e93`).
    - **Subtítulo (`.cta-text`):** Texto em cinza claro (`#a1a1aa`), entrelinha 1.62 e largura de 520px centralizado em 2 linhas.
    - **Formulário Inline em Cápsula Unificada (`.inline-form` — Idêntico à Foto 2):** Estrutura em cápsula pílula contínua e integrada (`border-radius: 9999px; max-width: 480px; background: rgba(14, 15, 20, 0.72); border: 1px solid rgba(255, 255, 255, 0.16); padding: 6px 6px 6px 24px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5)`), onde o campo de e-mail é totalmente transparente (`background: transparent; border: none; padding: 8px 12px 8px 0;`) com placeholder cinza `#71717a`, e o botão "Quero conversar" calibrado e perfeitamente alinhado à extremidade direita (`margin-left: auto; min-height: 46px; padding: 10px 22px; border-radius: 999px; font-size: 16px; font-weight: 500; line-height: 26px; cursor: pointer; transition: transform .25s ease, background-color .25s ease, box-shadow .25s ease;`) com gradiente terracota e feedback tátil refinado, posicionando as mensagens de validação (`.form-status`) de forma absoluta logo abaixo da pílula sem ocupar espaço interno.
15. **Footer (`.site-footer`):**
    - **Links e Estrutura Geral:** Marca autoral com chama em gradiente âmbar, newsletter institucional, navegação por Páginas e Estúdio, e copyright com atalho de retorno ao topo.
    - **Card Showreel 2026 (`.footer-reel` — Idêntico à Foto 2):**
      - *Badge Superior (`.footer-reel-badge`):* Formato de retângulo suavemente arredondado (`border-radius: 12px`), fundo translúcido escuro (`rgba(255, 255, 255, 0.05)`), borda fina de 1px (`rgba(255, 255, 255, 0.1)`), tipografia 100% branca pura (`#ffffff`) em negrito/médio ("Showreel 2026"), eliminando o destaque laranja anterior e a cápsula pill genérica.
      - *Banner de Vídeo (`.preview--sm`):* Proporção natural panorâmica 3:2 ajustada à imagem (`max-width: 250px; flex: none; height: auto;`), eliminando o esticamento vertical e o espaço vazio preto inferior.
      - *Cantos & Bordas:* Cantos arredondados elegantes de 18px (`border-radius: 18px`), borda contínua sutil `1px solid rgba(255, 255, 255, 0.12)` e sombra de profundidade `box-shadow: 0 16px 40px rgba(0, 0, 0, 0.85)`.
      - *Botão de Reprodução Único:* Mantido apenas o botão de play circular centralizado sobre a claquete na própria arte (`rodape-showreel`), com remoção da camada duplicada `<span class="play">` em HTML, garantindo uma interface limpa e fiel à Foto 2.
