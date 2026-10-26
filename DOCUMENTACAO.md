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
  - Rosa dos Ventos: Vetor astronômico com círculos concêntricos pontilhados, eixos de mira e estrela de 4 pontas em tom dourado opaco nobre (`#d8b26e` -> `#b88d3c` -> `#8a6320`)
  - Iluminação do Hero: Gradientes radiais estáticos no topo direito (clarão âmbar 850px) e topo esquerdo (glow difuso 620px)

---

## 🧩 Seções Mapeadas e Implementadas

1. **Header / Navbar (Refinada conforme Referência Visual):** Logotipo com chama em gradiente de fogo, nome "brasa" em branco puro e "studio" em tom cinza médio/prata (`#8e8e93`), separador vertical sutil, links de navegação com destaque no item ativo "Início" em branco e itens seguintes em cinza claro, e botão "Fale com a gente" em pílula vermelha-alaranjada brasa aveludada com sombra quente suave.
2. **Hero Section (Refinada conforme Referência Visual):** Tag de status com pílula de borda fina e badge retangular `NOVO` em laranja vibrante (`#ff551f`) com texto preto negrito (`#000000`) e texto "Agenda aberta para 2027" em branco; Headline com tipografia elegante e aberta de peso regular (`font-weight: 400`), destacando "marcas criativas." em laranja brasa (`#ff6a2b`); Lead em cinza suave e legível (`#909096`); Botões de ação em formato pílula calibrados ("Começar um projeto" em branco puro com texto preto e "Conheça a Brasa" em translúcido escuro); container de marcas parceiras (`.hero-icons-wrap`) calibrado com precisão para 404px exibindo exatamente 4 ícones inicialmente (círculo, triângulo, cúpula com base e ondas duplas) sob scrollbar horizontal branca pura (`#ffffff`), revelando os outros 2 ícones (losango vazado oco e grade 2x2 de círculos) suavemente durante a rolagem; card de preview compacto (285px) 100% estático; e rosa dos ventos calibrada com dimensões reduzidas (200px x 200px com `bottom: -38px; right: -36px;`) e paleta clássica em dourado opaco fosco (`#d8b26e` / `#b88d3c`), com círculos orbitais e eixos de mira em dourado suave `#c49a45` e glow sutil.
3. **Sobre a Brasa (Refinada conforme Referência Visual):** Imagem com cantos arredondados limpos (26px) sem borda externa cinza e iluminação sutil na base, badge em pílula estilizada ("• Sobre a Brasa"), headline 100% branca monocromática, parágrafo direto sem linha divisória `<hr>`, ícones de diferenciais e botão "Como trabalhamos" em vermelho-laranja brasa.
4. **Resultados (Refinada conforme Referência Visual da Foto 2):** Fundo totalmente preto puro (`#000000` sem halos alaranjados no centro); formas trapezoidais laterais invertidas em degradê âmbar/bronze (`.stage-wing--left` com `polygon(0 0, 72% 0, 100% 100%, 0 100%)` e `.stage-wing--right` com `polygon(28% 0, 100% 0, 100% 100%, 0 100%)`, com base larga, topo estreito, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e fusão suave ao preto); tag de status ("• Resultados") em pílula translúcida com ponto quadrado âmbar; headline display elegante em fonte neo-grotesca (`Inter`), tamanho calibrado (`clamp(2.35rem, 4.3vw, 3.6rem)`), peso médio/regular (`font-weight: 500`), alinhamento centralizado em exatamente 2 linhas sem quebra prematura ("Resultados que aparecem" / "no caixa e na marca.") com degradê suave de branco puro para cinza prateado; subtítulo em cinza claro legível (`#9da3af`) em escala proporcional; botão "Agendar 15 minutos" em gradiente vermelho-laranja brasa com glow quente inferior (`box-shadow: 0 8px 26px rgba(235, 71, 20, 0.42)`); carrossel de cases com banners alargados e destacados (`min(clamp(390px, 34vw, 470px), 90vw)`), fotografias em proporção fotográfica natural `880/555` 100% estáticas (sem efeito de zoom/escala no hover) e enquadramento fotográfico calibrado sem artefatos ou molduras de mockup (com regeneração em altíssima definição da foto do anel de ouro de Âmbar Joias, perfeitamente centralizado em pedra vulcânica sob iluminação âmbar); banner informativo inferior compacto (`.case-box` com fundo preto grafite profundo `#07080c`, contorno suave `1px solid rgba(255, 255, 255, 0.07)`, cantos de 18px e padding reduzido `0.95rem 1.15rem 1.15rem`), ícones vetoriais de marca fiéis às imagens de referência na cor âmbar/laranja quente `#ff7a3d` (anel circular em Casa Ocre, cúpula/domo com barra inferior arredondada em Torra Rubi, losango vazado oco sem ponto central em Âmbar Joias e ondas duplas em Vento Sul Bikes), pílulas de resultados em formato retangular arredondado (`border-radius: 8px`) com fundo escuro `#101117`, e remoção total de efeitos alaranjados de hover (transição com borda neutra translúcida e sem halo colorido).
5. **Como Trabalhamos (Refinada conforme Referência Visual das Fotos 2 e 3):** Tag de status em pílula ("Como trabalhamos") com ponto quadrado laranja (`#ff5a1f`) e iluminação âmbar superior no topo da borda; headline refinada com tipografia leve e aberta (`font-weight: 400`), destacando "Do briefing ao ar," em branco puro e "sem atalhos." em cinza prata suave monocromático (`#8e8e96`); 3 cards compactos de etapas (Imersão, Criação, Entrega) com fundo grafite mais claro (`#101117`), 100% estáticos (sem elevação ou alteração de borda no hover); caixas squircle de ícones (`.icon-box`) com fundo alaranjado em degradê âmbar quente (`radial-gradient(circle at 45% 45%, #3d1f13 0%, #220e06 65%, #0f0502 100%)`), contorno fino âmbar `1px solid rgba(255, 110, 40, 0.45)` e halo suave conforme Foto 3 (Etapa 1: lupa de pesquisa, Etapa 2: lápis/caneta, Etapa 3: bico de pena tinteiro); pílulas de entregáveis com formato retangular arredondado (`border-radius: 8px`), fundo `#111218`, contorno sutil `1px solid rgba(255, 255, 255, 0.1)` e texto cinza claro `#d1d5db` idênticas à Foto 3, estendidas a todos os banners da seção; badges de etapa no topo direito em pílulas retangulares com cantos de 8px; botão "Agendar conversa" em pílula retangular arredondada de 12px com glow quente; rosa dos ventos astronômica âmbar/laranja idêntica à Foto 5; e imagem lateral de moodboard envolta na moldura com borda de 28px e linha de acento âmbar.
6. **Diferenciais (Refinada conforme Referência Visual da Imagem 2):** Fundo totalmente preto puro (`#000000` sem halos alaranjados residuais); efeito de feixes de luz volumétricos (*Volumetric Light Beams / Focos Angulares*) com formas trapezoidais diagonais invertidas nas laterais esquerda e direita (`.feature-beam--left` e `.feature-beam--right` com corte trapezoidal invertido de base larga e topo estreito, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e degradê bronze/âmbar que se dissipa no centro escuro); tag de status no topo (`.tag-status--features`) com pílula escura de cantos arredondados (10px), reflexo âmbar no topo da borda e ponto quadrado laranja vibrante (`#ff5a1f`) idêntica à Foto 3; tipografia e grafia do título em duas linhas monocromáticas ("Recursos de estúdio grande" / "com atenção de ateliê." com degradê suave de branco puro para cinza prateado); subtítulo em cinza claro suave (`#8e8e96`); botão "Conheça a Brasa" em pílula terracota com glow inferior suave; grid de 6 cards perfeitamente alinhados à Imagem 2 de referência com fundo grafite escuro limpo (`#0f1015`), cantos arredondados de 24px, contorno suave `1px solid rgba(255, 255, 255, 0.07)`, banners 100% estáticos (sem elevação brusca de hover); destaque no Card 1 ("Marca que vende PRO") com iluminação térmica alaranjada concentrada exclusivamente na base interna (`radial-gradient(ellipse 90% 55% at 50% 100%, ...)`) e borda inferior âmbar (`border-bottom: 1px solid rgba(255, 110, 40, 0.52)`), com topo e laterais escuros limpos sem vazamento externo; ícone 1 com moldura arredondada tipo box e gráfico com linha ascendente e seta; caixas de ícones em formato circular perfeito (`border-radius: 50%; 50x50px`), fundo em degradê radial âmbar escuro (`radial-gradient(circle at 50% 50%, #441a08 0%, #200c05 65%, #0e0502 100%)`), contorno fino em âmbar `1px solid rgba(255, 130, 40, 0.45)`, halo térmico suave e traço vetorial interno em dourado âmbar `#ffa44a`; seta diagonal minimalista `↗` no canto superior direito; subtítulos em cinza claro legível `#9294a0` em capitalização natural; linhas divisórias horizontais nítidas e sutis `<hr class="rule">` (`border-top: 1px solid rgba(255, 255, 255, 0.1); height: 0;`) separando o subtítulo do texto em todos os 6 cards; e badges `PRO` alaranjadas (`#ff551b`) com tipografia branca pura em caixa alta e glow térmico radiante.
7. **Por Que a Brasa (Refinada conforme Referência Visual da Foto 2):** Fundo totalmente preto puro (`#000000`); efeito trapezoidal cinza volumétrico apenas do lado direito (`.benefits-wing--right` com `clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%)`) amplamente suavizado com degradê contínuo radial e linear (`radial-gradient` no topo direito e `linear-gradient(165deg, rgba(255, 255, 255, 0.10) 0%, ..., transparent 92%)`), linha de luz superior iluminada (`border-top: 1px solid rgba(255, 255, 255, 0.24)`) com halo prateado interno, e máscara progressiva (`mask-image: linear-gradient(...)`) que dissolve a base do trapézio de forma orgânica e suave no preto absoluto da página; tag de status no topo (`.tag-status--benefits`) com pílula escura de cantos arredondados (9px), ponto quadrado laranja vibrante (`#ff5a1f`) com glow de 8px, reflexo âmbar no topo da borda e texto "Por que a Brasa" em Title Case idêntica à Foto 3; headline display elegante em duas linhas monocromáticas ("A gente não só desenha," / "a gente coloca no ar.") em degradê de branco suave para cinza prateado sem cor laranja; organização de pills refinadas estruturadas em duas linhas simétricas (5 itens na linha 1 e 6 itens na linha 2 com o botão de conversão) com fundo grafite mais claro (`#15161c`), contorno fino suave `1px solid rgba(255, 255, 255, 0.15)`, tipografia fina e elegante de peso regular (`font-weight: 400`), cor de texto cinza suave legível (`#b0b3bf`), e botão "Fale agora" em pílula sólida branca com tipografia preta fina (`font-weight: 500`) idêntica à Foto 2 de referência; grid Bento box com 5 cards refinados (`.bcard`) fiéis à segunda imagem de referência: fundo grafite escuro uniforme (`#0a0b0e`), borda suave `1px solid rgba(255, 255, 255, 0.08)`, cantos arredondados de 22px, banners 100% estáticos (remoção total de transformações ou zoom de hover), remoção de linhas horizontais divisórias `<hr>`, títulos em branco puro (`#ffffff`), badges `NOVO` em pílula sólida retangular laranja vibrante (`#ff551b`) com texto branco em caixa alta, botões estilizados no card grande ("Agendar conversa" com degradê e glow inferior + "Conheça a Brasa" em cinza translúcido), e as 5 fotografias oficiais extraídas da referência em altíssima fidelidade (Revisões: painel de cortiça com fotos polaroid; Preço: livro aberto com marcadores quentes em leque; Pedidos: esculturas orgânicas de vidro âmbar/rubi; Retorno: ampulheta clássica de latão com areia dourada; Publicação: mãos digitando em teclado de laptop sob luz noturna aconchegante), servidas em WebP e AVIF com suporte configurado no Nginx.
8. **Portfólio:** 3 cases de grande escala com imagens de alta definição e tags de segmento.
9. **Serviços:** 3 modalidades estruturadas com entregáveis e precificação transparente.
10. **Vitrine (Showcase):** Marquee duplo com direções opostas de telas e interfaces produzidas.
11. **Planos / Precificação:** Cards comparativos (Essencial vs. Estúdio sob Demanda).
12. **Depoimentos:** 6 avaliações de clientes reais com avatares e avaliação 5 estrelas.
13. **FAQ (Perguntas Frequentes):** 6 acordeões interativos com transição suave.
14. **CTA Final:** Chamada de fechamento para conversão imediata com garantia e agendamento.
15. **Footer:** Links institucionais, redes sociais e direitos reservados.
