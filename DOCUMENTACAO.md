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

1. **Header / Navbar (Refinada conforme Referência Visual):** Logotipo com chama em gradiente de fogo, nome "brasa" em branco puro e "studio" em tom cinza médio/prata (`#8e8e93`), separador vertical sutil, links de navegação com destaque no item ativo "Início" em branco e itens seguintes em cinza claro, e botão "Fale com a gente" em pílula vermelha-alaranjada brasa aveludada com sombra quente suave.
2. **Hero Section (Refinada conforme Referência Visual):** Tag de status com pílula de borda fina e badge retangular `NOVO` em laranja vibrante (`#ff5a1f`) com texto preto negrito (`#000000`) e texto "Agenda aberta para 2027" em branco; Headline com tipografia elegante e aberta de peso regular (`font-weight: 400`), destacando "marcas criativas." em laranja brasa (`#ff6a2b`); Lead em cinza suave e legível (`#909096`); Botões de ação em formato pílula calibrados ("Começar um projeto" em branco puro com texto preto e "Conheça a Brasa" em translúcido escuro); 8 ícones parceiros de ateliê ampliados para 84x84px sob scrollbar horizontal branca pura (`#ffffff`) estendida até 480px, incluindo o losango vazado/oco e grade 2x2 de círculos idênticos à Foto 3; card de preview compacto (285px) 100% estático; e rosa dos ventos ampliada para 260px com círculos astronômicos e eixos no canto inferior direito.
3. **Sobre a Brasa (Refinada conforme Referência Visual):** Imagem com cantos arredondados limpos (26px) sem borda externa cinza e iluminação sutil na base, badge em pílula estilizada ("• Sobre a Brasa"), headline 100% branca monocromática, parágrafo direto sem linha divisória `<hr>`, ícones de diferenciais e botão "Como trabalhamos" em vermelho-laranja brasa.
4. **Resultados (Refinada conforme Referência Visual da Foto 2):** Fundo preto profundo (`#030303`) com atmosfera cinematográfica composta por glow elíptico sutil âmbar descendo do topo (`radial-gradient` central) e asas geométricas laterais em degradê âmbar/bronze (`.stage-wing--left` e `.stage-wing--right` com corte diagonal em 48%, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e fusão suave ao preto); tag de status ("• Resultados") em pílula translúcida com ponto quadrado âmbar; headline display elegante em fonte neo-grotesca (`Inter`), tamanho calibrado (`clamp(2.35rem, 4.3vw, 3.6rem)`), peso médio/regular (`font-weight: 500`), alinhamento centralizado em exatamente 2 linhas sem quebra prematura ("Resultados que aparecem" / "no caixa e na marca.") com degradê suave de branco puro para cinza prateado; subtítulo em cinza claro legível (`#9da3af`) em escala proporcional; botão "Agendar 15 minutos" em gradiente vermelho-laranja brasa com glow quente inferior (`box-shadow: 0 8px 26px rgba(235, 71, 20, 0.42)`); carrossel de cases com banners em formato quadrado padronizado (`clamp(360px, 32vw, 420px)`), fotos em proporção fotográfica natural `880/555` exibindo todos os produtos e cafés sem cortes e card informativo inferior sobreposto (`margin-top: -48px`).
5. **Como Trabalhamos (Refinada conforme Referência Visual):** Tag de status em pílula ("Como trabalhamos") com ponto quadrado laranja (`#ff5a1f`) e iluminação âmbar superior no topo da borda idêntica à Foto 3; headline refinada com tipografia leve e aberta (`font-weight: 400`), destacando "Do briefing ao ar," em branco puro e "sem atalhos." em cinza prata suave monocromático (`#8e8e96`) conforme Foto 2; 3 cards estruturados de etapas (Imersão, Criação, Entrega) com estilo escuro aveludado da Foto 2 (`#08090d`), cantos arredondados de 24px, borda sutil `1px solid rgba(255, 255, 255, 0.08)` e efeito de iluminação suave âmbar na lateral superior direita (`radial-gradient(ellipse 70% 60% at 100% 0%, rgba(220, 75, 25, 0.15) 0%, transparent 75%)`); ícones diferenciados por etapa (Etapa 1: lupa de pesquisa, Etapa 2: caneta/lápis, Etapa 3: bico de pena tinteiro conforme Foto 5); pílulas de entregáveis com texto cinza suave refinado (`#c8c8d2`) idênticas à Foto 3 e badge de etapa em pílula escura com texto branco conforme Foto 4; botão em pílula "Agendar conversa"; rosa dos ventos astronômica em tons de brasa/âmbar neon idêntica à Foto 5 (estrela de 4 pontas em degradê quente `#ff9d5c` a `#9e2808`, círculos concêntricos e miras âmbar/bronze com glow quente); e imagem lateral de moodboard com nova fotografia de ateliê envolta na moldura com borda de 28px e linha de acento âmbar.
6. **Diferenciais (Refinada conforme Referência Visual da Foto 2):** Grid responsivo de 6 cards com cantos arredondados generosos de 26px (`border-radius: 26px`), fundo escuro profundo `#090a0f`, bordas sutis `1px solid rgba(255, 255, 255, 0.08)` e destaque no Card 1 ("Marca que vende PRO") com contorno iluminado âmbar `1px solid rgba(220, 75, 25, 0.45)` e suave radial glow interno; ícones em formato squircle de 52x52px com fundo escuro `#14151c` e traços finos em laranja/âmbar vibrante `#ff7a3d` (Card 1: gráfico de linha ascendente, Card 2: 3 camadas/camadas empilhadas, Card 3: tag de código `</>`, Card 4: medalha/roseta com fitas, Card 5: relógio às 3h, Card 6: smartphone); seta minimalista diagonal `↗` no canto superior direito de cada card; títulos em branco puro com badge `PRO` alaranjada (`#d84518`) nos cards 1 e 5; subtítulos em caixa alta na cor laranja/âmbar vibrante (`#ff6a2b`) sem linhas divisórias (`<hr>` removido para visual clean e moderno); e descrições em cinza suave legível `#9295a0`.
7. **Por Que a Brasa (Bento Grid):** Layout moderno no padrão Bento box com foco em storytelling visual.
8. **Portfólio:** 3 cases de grande escala com imagens de alta definição e tags de segmento.
9. **Serviços:** 3 modalidades estruturadas com entregáveis e precificação transparente.
10. **Vitrine (Showcase):** Marquee duplo com direções opostas de telas e interfaces produzidas.
11. **Planos / Precificação:** Cards comparativos (Essencial vs. Estúdio sob Demanda).
12. **Depoimentos:** 6 avaliações de clientes reais com avatares e avaliação 5 estrelas.
13. **FAQ (Perguntas Frequentes):** 6 acordeões interativos com transição suave.
14. **CTA Final:** Chamada de fechamento para conversão imediata com garantia e agendamento.
15. **Footer:** Links institucionais, redes sociais e direitos reservados.
