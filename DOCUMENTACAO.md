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
  - Superfícies / Cards: `#0b0c10`, `#0f1015`, `#111217`
  - Caixas de Ícones do Hero: `#0b0c10` (68x68px, raio 20px, com borda sutil)
  - Bordas Sutis: `rgba(255, 255, 255, 0.08)`
- **Acentos e Iluminação:**
  - Laranja Brasa Primário: `#FF5A1F`
  - Gradiente Neon Brasa: `linear-gradient(135deg, #ffa64d, #ff5a1f, #cc3708)`
  - Rosa dos Ventos / Retículo Tático HUD Sci-Fi: Vetor de alta precisão técnica (`assets/img/compass-rose-hud.svg` e instâncias inline em Hero, Etapa 3 de Como Trabalhamos e Card 3 de Serviços) estruturado em viewBox 200x200 com centro em (100, 100). Contém estrela central sólida de 4 pontas com bordas côncavas perfeitas em gradiente laranja-âmbar (`#fedc82` -> `#e0aa3a` -> `#bf8322` -> `#945d0e`), anel interno concêntrico pontilhado (`r=32`), anel intermediário contínuo fino tangente às pontas da estrela (`r=58`), anel externo concêntrico pontilhado (`r=76`), eixos ortogonais longos cruzados (`184px`), linhas diagonais técnicas a 45 graus (`175px`), halo difuso de luminescência âmbar central e fundo preto sólido (`#000000`).
  - Iluminação do Hero: Gradientes radiais estáticos no topo direito (clarão âmbar 850px) e topo esquerdo (glow difuso 620px)

---

## 🧩 Seções Mapeadas e Implementadas

1. **Header / Navbar (Refinada conforme Referência Visual):** Logotipo com chama em gradiente de fogo, nome "brasa" em branco puro e "studio" em tom cinza médio/prata (`#8e8e93`), separador vertical sutil, links de navegação com destaque no item ativo "Início" em branco e itens seguintes em cinza claro, e botão "Fale com a gente" em pílula vermelha-alaranjada brasa aveludada com sombra quente suave.
2. **Hero Section (Refinada conforme Referência Visual):** Tag de status com pílula de borda fina e badge retangular `NOVO` em laranja vibrante (`#ff551f`) com texto preto negrito (`#000000`) e texto "Agenda aberta para 2027" em branco; Headline com tipografia elegante e aberta de peso regular (`font-weight: 400`), destacando "marcas criativas." em laranja brasa (`#ff6a2b`); Lead em cinza suave e legível (`#909096`); Botões de ação em formato pílula calibrados ("Começar um projeto" em branco puro com texto preto e "Conheça a Brasa" em translúcido escuro); container de marcas parceiras (`.hero-icons-wrap`) calibrado com precisão para 404px exibindo exatamente 4 ícones inicialmente (círculo, triângulo, cúpula com base e ondas duplas) sob scrollbar horizontal branca pura (`#ffffff`), revelando os outros 2 ícones (losango vazado oco e grade 2x2 de círculos) suavemente durante a rolagem; card de preview compacto (285px) 100% estático; e rosa dos ventos calibrada com dimensões reduzidas (200px x 200px com `bottom: -38px; right: -36px;`) e paleta clássica em dourado opaco fosco (`#d8b26e` / `#b88d3c`), com círculos orbitais e eixos de mira em dourado suave `#c49a45` e glow sutil.
3. **Sobre a Brasa (Refinada conforme Referência Visual):** Imagem com cantos arredondados limpos (26px) sem borda externa cinza e iluminação sutil na base, badge em pílula estilizada ("• Sobre a Brasa"), headline 100% branca monocromática, parágrafo direto sem linha divisória `<hr>`, ícones de diferenciais e botão "Como trabalhamos" em vermelho-laranja brasa.
4. **Resultados (Refinada conforme Referência Visual da Foto 2):** Fundo totalmente preto puro (`#000000` sem halos alaranjados no centro); formas trapezoidais laterais invertidas em degradê âmbar/bronze (`.stage-wing--left` com `polygon(0 0, 72% 0, 100% 100%, 0 100%)` e `.stage-wing--right` com `polygon(28% 0, 100% 0, 100% 100%, 0 100%)`, com base larga, topo estreito, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e fusão suave ao preto); tag de status ("• Resultados") em pílula translúcida com ponto quadrado âmbar; headline display elegante em fonte neo-grotesca (`Inter`), tamanho calibrado (`clamp(2.35rem, 4.3vw, 3.6rem)`), peso médio/regular (`font-weight: 500`), alinhamento centralizado em exatamente 2 linhas sem quebra prematura ("Resultados que aparecem" / "no caixa e na marca.") com degradê suave de branco puro para cinza prateado; subtítulo em cinza claro legível (`#9da3af`) em escala proporcional; botão "Agendar 15 minutos" em gradiente vermelho-laranja brasa com glow quente inferior (`box-shadow: 0 8px 26px rgba(235, 71, 20, 0.42)`); carrossel de cases com banners alargados e destacados (`min(clamp(390px, 34vw, 470px), 90vw)`), fotografias em proporção fotográfica natural `880/555` 100% estáticas (sem efeito de zoom/escala no hover) e enquadramento fotográfico calibrado sem artefatos ou molduras de mockup (com regeneração em altíssima definição da foto do anel de ouro de Âmbar Joias, perfeitamente centralizado em pedra vulcânica sob iluminação âmbar); banner informativo inferior compacto (`.case-box` com fundo preto grafite profundo `#07080c`, contorno suave `1px solid rgba(255, 255, 255, 0.07)`, cantos de 18px e padding reduzido `0.95rem 1.15rem 1.15rem`), ícones vetoriais de marca fiéis às imagens de referência na cor âmbar/laranja quente `#ff7a3d` (anel circular em Casa Ocre, cúpula/domo com barra inferior arredondada em Torra Rubi, losango vazado oco sem ponto central em Âmbar Joias e ondas duplas em Vento Sul Bikes), pílulas de resultados em formato retangular arredondado (`border-radius: 8px`) com fundo escuro `#101117`, e remoção total de efeitos alaranjados de hover (transição com borda neutra translúcida e sem halo colorido).
5. **Como Trabalhamos (Refinada conforme Referência Visual das Fotos 2 e 3):** Tag de status em pílula ("Como trabalhamos") com ponto quadrado laranja (`#ff5a1f`) e iluminação âmbar superior no topo da borda; headline refinada com tipografia leve e aberta (`font-weight: 400`), destacando "Do briefing ao ar," em branco puro e "sem atalhos." em cinza prata suave monocromático (`#8e8e96`); 3 cards compactos de etapas (Imersão, Criação, Entrega) com fundo grafite mais claro (`#101117`), 100% estáticos (sem elevação ou alteração de borda no hover); caixas squircle de ícones (`.icon-box`) com fundo alaranjado em degradê âmbar quente (`radial-gradient(circle at 45% 45%, #3d1f13 0%, #220e06 65%, #0f0502 100%)`), contorno fino âmbar `1px solid rgba(255, 110, 40, 0.45)` e halo suave conforme Foto 3 (Etapa 1: lupa de pesquisa, Etapa 2: lápis/caneta, Etapa 3: bico de pena tinteiro); pílulas de entregáveis com formato retangular arredondado (`border-radius: 8px`), fundo `#111218`, contorno sutil `1px solid rgba(255, 255, 255, 0.1)` e texto cinza claro `#d1d5db` idênticas à Foto 3, estendidas a todos os banners da seção; badges de etapa no topo direito em pílulas retangulares com cantos de 8px; botão "Agendar conversa" em pílula retangular arredondada de 12px com glow quente; rosa dos ventos astronômica âmbar/laranja idêntica à Foto 5; e imagem lateral de moodboard envolta na moldura com borda de 28px e linha de acento âmbar.
6. **Diferenciais (Grade 3x2 Dark Modern SaaS Feature Cards Conforme Imagem 2):** Canvas background em preto puro (`#000000`) sem halos residuais; feixes de luz volumétricos laterais em corte trapezoidal invertido com borda superior iluminada; tag de status (`.tag-status--features`) com pílula escura, reflexo âmbar e ponto quadrado laranja vibrante; tipografia display em duas linhas monocromáticas ("Recursos de estúdio grande" / "com atenção de ateliê."); botão "Conheça a Brasa" em pílula com glow quente; grid 3x2 responsiva de cartões (.feature) com:
   - **Estrutura & Superfície:** Container em ultra-dark charcoal (`#0d0d0d`), cantos arredondados de 20px (`border-radius: 20px`) e padding interno de 2.1rem x 1.95rem x 2.2rem.
   - **Iluminação Atmosférica Difusa:** Glow radial difuso no canto superior esquerdo exatamente atrás do círculo do ícone em tons de âmbar quente e laranja queimado (`radial-gradient(circle 260px at 46px 46px, rgba(255, 107, 0, 0.17) 0%, rgba(135, 45, 0, 0.07) 42%, rgba(51, 21, 0, 0.02) 70%, transparent 95%)`), dissipando-se em direção ao canto inferior direito. Card 1 (`.feature--hot`) com destaque térmico adicional de reflexo acobreado na base e borda inferior âmbar (`border-bottom: 1px solid rgba(255, 110, 40, 0.52)`).
   - **Bordas Rim-Light:** Borda ultra-fina de 1px com highlight superior âmbar sutil (`border-top: 1px solid rgba(255, 120, 50, 0.28)`) desvanecendo para cinza escuro translúcido nas laterais e base (`border: 1px solid #1f2024`).
   - **Top Bar:** Botão circular (`.icon-orb` de 48x48px, 50% de raio) com borda laranja quente `1px solid rgba(255, 110, 40, 0.52)`, fundo em degradê escuro e ícones vetoriais em dourado/âmbar (`#ffa44a`), acompanhado por seta diagonal minimalista `↗` no canto superior direito (`stroke: #8e8e93`).
   - **Tipografia & Badges:** Títulos nítidos em branco puro (`#ffffff`, peso 700, 1.25rem), acompanhados por badge `PRO` em pílula laranja brilhante (`#ff551b`) com tipografia branca pura (`color: #ffffff; font-weight: 700;`) e glow térmico; subtítulo em cinza médio (`#8a8c96`), divisória `<hr class="rule">` e descrição suave (`#8e8e93`) com entrelinha 1.62.
7. **Por Que a Brasa (Refinada conforme Referência Visual da Foto 2):** Fundo totalmente preto puro (`#000000`); efeito trapezoidal cinza volumétrico apenas do lado direito (`.benefits-wing--right` com `clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%)`) amplamente suavizado com degradê contínuo radial e linear (`radial-gradient` no topo direito e `linear-gradient(165deg, rgba(255, 255, 255, 0.10) 0%, ..., transparent 92%)`), linha de luz superior iluminada (`border-top: 1px solid rgba(255, 255, 255, 0.24)`) com halo prateado interno, e máscara progressiva (`mask-image: linear-gradient(...)`) que dissolve a base do trapézio de forma orgânica e suave no preto absoluto da página; tag de status no topo (`.tag-status--benefits`) com pílula escura de cantos arredondados (9px), ponto quadrado laranja vibrante (`#ff5a1f`) com glow de 8px, reflexo âmbar no topo da borda e texto "Por que a Brasa" em Title Case idêntica à Foto 3; headline display elegante em duas linhas monocromáticas ("A gente não só desenha," / "a gente coloca no ar.") em degradê de branco suave para cinza prateado sem cor laranja; organização de pills refinadas estruturadas em duas linhas simétricas (5 itens na linha 1 e 6 itens na linha 2 com o botão de conversão) com fundo grafite mais claro (`#15161c`), contorno fino suave `1px solid rgba(255, 255, 255, 0.15)`, tipografia fina e elegante de peso regular (`font-weight: 400`), cor de texto cinza suave legível (`#b0b3bf`), e botão "Fale agora" em pílula sólida branca com tipografia preta fina (`font-weight: 500`) idêntica à Foto 2 de referência; grid Bento box com 5 cards refinados (`.bcard`) com superfície dark mode minimalista ultra-clean em sleek charcoal grey (`#0d0e13`), degradê radial suave de grafite profundo para near-black (`radial-gradient(ellipse 110% 75% at 50% 0%, ...)`) simulando iluminação de estúdio de baixo contraste, borda iluminada de 1px com faint glowing edge (`border-top: 1px solid rgba(255, 255, 255, 0.16); box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), ...`), cantos arredondados de 22px, banners 100% estáticos (remoção total de transformações ou zoom de hover), remoção de linhas horizontais divisórias `<hr>`, títulos em branco puro (`#ffffff`), badges `NOVO` em pílula sólida retangular laranja vibrante (`#ff551b`) com tipografia preta negrita (`#000000; font-weight: 700`) em caixa alta idênticas à Foto 2, botões estilizados no8. **Portfólio (Stacking Cards / Sticky Scroll & Cabeçalho Dark Mode Centralizado de Alta Precisão):** 3 cases de grande formato e impacto cinematográfico (*Casa Ocre · 2026*, *Torra Rubi · 2026*, *Lume Arquitetura · 2025*) com sistema avançado de **Stacking Cards (Empilhamento de Cartões / Sticky Scroll)** e cabeçalho hero moderno centralizado:
   - **Cabeçalho Hero Moderno Centralizado:**
      - *Fundo & Iluminação:* Base em preto puro absoluto `#000000` totalmente livre de clarões ou halos difusos alaranjados de fundo (remoção completa de `.portfolio-glow-bg`).
      - *Profundidade & Silhuetas Poligonais Laterais (`.portfolio-backdrop`):* Painéis escuros poligonais em perspectiva sutil nas laterais (`.portfolio-wing--left` e `.portfolio-wing--right`), com gradiente cinza escuro translúcido neutro, borda superior suave `border-top: 1px solid rgba(255, 255, 255, 0.12)` sem tons alaranjados, criando profundidade arquitetônica limpa e guiando o olhar diretamente para o centro.
     - *Badge Superior Estilo Cápsula (`.tag-status--portfolio`):* Pílula arredondada (`border-radius: 999px`) em fundo escuro semi-transparente (`rgba(18, 19, 24, 0.85)`), borda sutil `1px solid rgba(255, 255, 255, 0.12)`, borda de topo com iluminação âmbar viva `border-top: 1px solid rgba(255, 125, 45, 0.88)`, ponto indicador (bullet) laranja brilhante circular à esquerda (`#ff5a1f` com glow) e texto "Portfólio" em tipografia sans-serif limpa e clara em branco puro (`#ffffff`).
     - *Bloco Tipográfico Centralizado:* Título display com peso visual forte (`font-weight: 700`), branco puro (`#FFFFFF`) e espaçamento elegante em duas linhas ("Projetos selecionados" / "que acendem marcas."); subtítulo/descrição em cinza suave (`#A1A1AA`), entrelinha 1.65 e largura máxima de 660px ("Uma seleção de trabalhos recentes, de lojas autorais a escritórios de serviço, em setores diferentes.").
     - *Botão CTA Primário (`.portfolio-btn`):* Pílula arredondada (`border-radius: 999px`) com gradiente quente em tons de vermelho/laranja (`linear-gradient(180deg, #E04423 0%, #D13514 100%)`), texto "Pedir o portfólio completo" em branco e peso regular/médio (`font-weight: 500`), e efeito box-shadow marcante com drop shadow/glow alaranjado difuso projetado logo abaixo (`box-shadow: 0 12px 32px rgba(224, 68, 35, 0.55), 0 0 24px rgba(209, 53, 20, 0.35)`).
   - **Mecânica Sticky & Escalonamento:** A lista `.works` possui espaçamento generoso (`gap: clamp(4rem, 8vh, 7rem)`) e `overflow: visible` na seção. Cada item `.work` utiliza `position: sticky;` com valores de `top` escalonados progressivamente (`top: 90px`, `125px`, `160px` no desktop; `75px`, `95px`, `115px` no mobile), fixando os cartões no topo da janela conforme o usuário rola a página.
   - **Profundidade 3D & Horizonte Iluminado:** Os cartões `.work-card` possuem cantos arredondados de 24px, linha de luz de horizonte superior (`border-top: 1px solid rgba(255, 255, 255, 0.24)`), fundo escuro `#08080c` e dupla camada de sombra volumétrica (`box-shadow: 0 -14px 35px rgba(0, 0, 0, 0.75), 0 35px 80px rgba(0, 0, 0, 0.95)`).
   - **Interatividade Dinâmica com `requestAnimationFrame`:** Script em `main.js` monitora o scroll em 60fps calculando a sobreposição de cada cartão. À medida que o próximo sobe e cobre o anterior, o cartão inferior sofre contração gradual de escala (`scale(0.94)`) e escurecimento gradual (`brightness(0.65)`), recriando com realismo a sensação física tridimensional de cartões empilhados. A barra de progresso horizontal (`.work-progress i`) em gradiente âmbar/ouro acompanha o ciclo de fixação.
   - **Acessibilidade:** Suporte completo à diretiva `prefers-reduced-motion: reduce`, desativando as transformações de escala dinâmicas enquanto preserva o empilhamento funcional e estável via CSS.
9. **Serviços (Refinada conforme Referência Visual da Imagem 2):** 3 modalidades estruturadas (*Site sob medida*, *Identidade completa*, *Lançamento integrado*) com entregáveis e precificação transparente, calibradas fielmente à imagem de referência:
   - **Cabeçalho Moderno Dark Mode Minimalista (`.head--services`):**
     - *Fundo & Iluminação:* Base em preto puro (`#000000`) com brilho sutil avermelhado/laranja projetado no canto superior esquerdo (`radial-gradient(circle 650px at 8% 0%, rgba(255, 95, 30, 0.15) 0%, ...)` e pseudo-elemento `.head--services::before` com glow difuso quente de 280x150px e desfoque de 28px).
     - *Badge Superior (`.tag-status--services`):* Formato de pílula arredondada (`border-radius: 10px`), fundo cinzento-escuro (`rgba(18, 20, 26, 0.88)`), rebordo sutil `1px solid rgba(255, 255, 255, 0.12)`, borda superior iluminada `border-top: 1px solid rgba(255, 120, 45, 0.85)` com halo âmbar superior, ponto quadrado laranja vibrante à esquerda (`#ff5a1f`) com glow de 8px e texto "Serviços" em branco puro (`#ffffff`).
     - *Título Principal (`.title--services`):* Tipografia sans-serif grande (`clamp(2.45rem, 4.8vw, 3.85rem)`), peso 700 e entrelinha 1.12 em duas linhas nítidas: Linha 1 ("Serviços completos,") em branco puro brilhante (`#ffffff`) e Linha 2 ("do conceito ao código.") em cinzento prateado com opacidade reduzida (`#8c8e98`), sem cores alaranjadas no texto.
     - *Subtítulo (`.text--services`):* Texto em cinzento suave legível (`#9294a0`), tamanho proporcional (`1.05rem`), entrelinha 1.62 e largura máxima controlada de 630px para quebra equilibrada em duas linhas.
     - *Alinhamento:* Alinhamento à esquerda (`text-align: left`) com hierarquia visual precisa e espaçamento generoso.
   - **Estrutura dos Banners:** Fundo grafite profundo/preto (`#08090c`) com cantos de 24px, contorno sutil `1px solid rgba(255, 255, 255, 0.08)`, sombra volumétrica e comportamento 100% estático.
   - **Ícones Squircle:** Caixas de 52x52px com cantos arredondados (14px), fundo em degradê radial âmbar escuro, contorno em âmbar `1px solid rgba(255, 110, 40, 0.45)`, glow térmico e ícones vetoriais em laranja acobreado (`#ff7a3d`) representando browser/janela, símbolos geométricos de marca e megafone.
   - **Badges de Categoria:** Formato pílula (`border-radius: 999px`) em translúcido escuro com tipografia cinza suave (`#a0a2ac`).
   - **Linhas Divisórias & Tipografia:** `<hr class="rule">` separando o título branco robusto do texto descritivo.
   - **Pílulas de Entregáveis & Prazos:** Fundo `#111217`, contorno fino, valores em destaque laranja vibrante (`#ff551b; font-weight: 700;`) e texto descritivo em branco (`#ffffff; font-weight: 600;`).
   - **Checks de Selo Estrelado:** Ícone em laranja vibrante (`#ff5a1f`) e textos nítidos em branco puro (`#ffffff; font-weight: 600;`).
   - **Rosa dos Ventos Astronômica Dourada no Card 3:** Posicionada exatamente sobreposta atrás do título "Lançamento integrado" (`.svc-compass-wrap` com `position: absolute; top: 10px; left: 135px; width: 185px; height: 185px;`), com círculos concêntricos e eixos astronômicos em dourado `#c49a45`, estrela central de 4 pontas em ouro antigo fosco (`#d8b26e` a `#8a6320`) e halo dourado difuso, idêntica à imagem fornecida.
   - **Botão de Conversão ("Agendar conversa"):** Pílula em gradiente vermelho-laranja brasa (`#f76327` a `#db4611`) com contorno de luz e glow térmico projetado.
10. **Vitrine / Lance seu projeto (`.showcase` #lancamento — Galeria em Grid Interativa Dark Mode):**
    - **Fundo & Atmosfera:** Fundo dark mode premium absoluto (`#0a0a0a`) com moldura de profundidade nas laterais criada por blocos trapezoidais/angulares (`.showcase-wing--left` e `.showcase-wing--right`) com gradiente marrom-acobreado/terracota escuro e borda superior iluminada `border-top: 1px solid rgba(208, 59, 30, 0.42)`, guiando o olhar ao centro.
    - **Pill Badge Superior (`.tag-status--showcase`):** Fundo preto translúcido (`rgba(14, 15, 18, 0.85)`), borda sutil de 1px com rim light/glow avermelhado na borda superior `border-top: 1px solid rgba(255, 115, 45, 0.88)`, ponto quadrado alaranjado (`#FF5722` com glow) à esquerda e texto "Lance seu projeto" em branco puro.
    - **Título Principal (`.showcase-title`):** Tipografia moderna sem serifa (Inter/SF Pro Display), peso medium (500), cor branca pura (`#FFFFFF`), entrelinha 1.14 em duas linhas elegantes: "O parceiro criativo" / "de marcas em crescimento.".
    - **Subtítulo (`.showcase-text`):** Texto em cinza claro (`#A1A1AA`), peso regular (400), entrelinha 1.62 e largura de 660px.
    - **Botão CTA Principal (`.showcase-btn`):** Formato pílula arredondada (`border-radius: 999px`), cor terracota/vermelho-alaranjado vibrante (`#D03B1E`), texto "Ver como trabalhamos" em branco e sombra difusa com glow alaranjado projetada abaixo (`box-shadow: 0 12px 32px rgba(208, 59, 30, 0.58), 0 0 22px rgba(255, 87, 34, 0.35)`).
    - **Galeria em Grid Interativa Antigravidade (`.showcase-gallery`):**
      - *Grid Layout:* CSS grid responsivo com 4 colunas e 2 linhas (8 cards no total), organizados em 2 sequências de banners.
      - *Card Aspect Ratio:* Proporção 1:1 (quadrado perfeito) com largura fluida e responsiva.
      - *Bordas & Acabamento:* Cantos arredondados suaves (`border-radius: 18px`), `overflow: hidden`, contorno sutil `1px solid rgba(255, 255, 255, 0.06)` e base grafite `#0d0d0f`.
      - *Espaçamento:* Gap uniforme de 16px entre colunas e linhas.
      - *Imagens:* Preenchimento completo dos cards com `object-fit: cover` nas 8 peças autorais em altíssima definição (cerâmica, café coado, fachada noturna iluminada, mesa de trabalho de design, colar de ouro sobre linho, ciclista na rua de pedra, tecidos em terracota e arquitetura com luz rasante).
      - *Duas Barras de Rolagem Horizontais Dedicadas:* Uma barra em cada sequência de banners (`.showcase-scroll-row`), estilizadas com trilha translúcida fina (`height: 6px; background: rgba(255, 255, 255, 0.05)`) e polegar suave (`rgba(255, 255, 255, 0.25)` com hover iluminado), garantindo rolagem manual elegante.
      - *Remoção de Rolagem Infinita e Sobresaliência:* Eliminação de animações de marquee contínuo e transformações excessivas de escala no hover.
      - *Física & Interação Antigravity:* Levitação sutil ao hover (`transform: translateY(-4px)` com sombra volumétrica difusa e brilho âmbar suave), resposta elástica ao clique (`transform: translateY(-1px) scale(0.985)`) e arraste elástico interativo (*drag-to-scroll*) com inércia física amortecida em `main.js`.
11. **Planos / Precificação (`.pricing` #planos — Hero Banner & Pricing Cards Dark Mode Minimalista):**
    - **Fundo & Atmosfera:** Fundo preto absoluto (`#000000`) de altíssimo contraste e sem clarões difusos no topo.
    - **Polígono Geométrico Angular no Canto Inferior Direito (`.plans-backdrop` com `.plans-wing--right`):** Camada poligonal geométrica escura cinza no canto inferior direito com corte em perspectiva via `clip-path`, superfície dark glassmorphism e borda superior iluminada `1px solid rgba(255, 255, 255, 0.16)`.
    - **Hero Header Alinhado à Esquerda:** Pill badge translúcida com bullet laranja neon vibrante, headline massiva sans-serif em branco e degradê cinza-prateado suave, e subtítulo em cinza claro.
    - **Pricing Cards em 2 Colunas (`.plans`):**
      - *Superfície & Acabamento:* Fundo grafite fosco (`radial-gradient(ellipse 90% 70% at 50% 15%, #141416 0%, #0d0d0f 100%)`), cantos arredondados de 24px (`rounded-2xl`), contorno ultrafino `1px solid rgba(255, 255, 255, 0.08)`, top rim light alaranjado sutil e comportamento 100% estático.
      - *CARD 1 (Essencial):* Squircle escuro com ícone minimalista de chama alaranjada; badge translúcida "Mais escolhido"; título "Essencial"; valor "R$ 3.900 / mês" em negrito branco com valor original "R$ 4.600" riscado por uma linha diagonal alaranjada vibrante (`.price-diagonal-slash`); descrição em cinza suave; botões-pílula translúcidos "8 peças por mês" e "2 rodadas de ajuste" com números destacados em branco puro; 5 itens com ícone de escudo alaranjado e textos em branco; botão CTA pill-shaped em gradiente terracota/laranja com glow âmbar inferior e texto "Agendar conversa".
      - *CARD 2 (Estúdio):* Squircle com ícone outline de diamante/joia alaranjado; badge translúcida "Recomendado"; título "Estúdio"; valor "R$ 8.900 / mês" em negrito branco; descrição; botões-pílula "24 peças por mês" e "Ajustes sem limite" (com 'Ajustes' em negrito branco); 5 itens com ícone de escudo alaranjado e textos em branco; **Marca d'água geométrica da rosa dos ventos / estrela de 4 pontas no canto inferior direito** (`bottom: -55px; right: -55px;`) com círculos náuticos ultrafinos, eixos técnicos e degradê laranja suave com glow avermelhado; botão CTA pill-shaped com glow âmbar e texto "Agendar conversa".
12. **Depoimentos (`.testimonials` #depoimentos — Hero Section Dark Mode Ultrawide 21:9):**
    - **Fundo & Atmosfera:** Fundo preto absoluto (`#000000`) de proporção ultrawide 21:9, emoldurado nas laterais por blocos geométricos angulares trapezoidais em perspectiva em tom marrom-cobre escuro (`.testimonials-wing--left` e `.testimonials-wing--right`) com gradiente translúcido e borda superior iluminada `1px solid rgba(255, 110, 64, 0.22)`, criando uma atmosfera cinematográfica de profundidade.
    - **Pill Badge Superior (`.tag-status--testimonials`):** Pílula escura semi-transparente com borda sutil de 1px, ponto quadrado laranja vibrante (`#FF5722` com glow) à esquerda, halo térmico na borda superior e texto "Depoimentos" em Title Case.
    - **Título Centralizado Monocromático (`.testimonials-title`):** Tipografia sem serifa robusta em destaque, 100% branca (`#FFFFFF`), em duas linhas elegantes ("O que dizem as marcas" / "que passaram por aqui."), sem cores alaranjadas.
    - **Subtítulo Minimalista (`.testimonials-text`):** Texto em cinza claro (`#A1A1AA`), entrelinha confortável de 1.6 e largura máxima de 620px: "Clientes contam como foi trabalhar com o estúdio e o que mudou depois do lançamento.".
    - **Fileira Horizontal de 4 Cartões Quadrados (`.testimonials-brands-grid`):** 4 cartões estáticos em formato squircle (`width: 82px; height: 82px; border-radius: 20px; background: #111216; border: 1px solid rgba(255, 255, 255, 0.07)`), contendo ícones monocromáticos abstratos fiéis à referência:
      1. Cúpula com base horizontal inferior.
      2. Ondas sinuosas duplas.
      3. Losango vazado com cantos nítidos.
      4. Grade 2x2 de círculos simétricos.
    - **Botão Central CTA (`.testimonials-btn`):** Pílula arredondada em tom vermelho-alaranjado queimado (`#d84315`), texto "Ver portfólio" em branco, e efeito difuso volumétrico de iluminação projetada logo abaixo (*orange glow* de 40px).
    - **Grid de Depoimentos:** 3 cards com avaliações em dark glassmorphic, avatares reais, notas 5 estrelas e depoimentos detalhados.
13. **FAQ (Perguntas Frequentes):** 6 acordeões interativos com transição suave.
14. **CTA Final:** Chamada de fechamento para conversão imediata com garantia e agendamento.
15. **Footer:** Links institucionais, redes sociais e direitos reservados.
