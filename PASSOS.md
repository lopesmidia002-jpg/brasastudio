# 📋 Lista de Passos e Prioridades do Projeto — Brasa Studio

> **REGRA DE EXECUÇÃO OBRIGATÓRIA:**
> Só inicie o próximo passo quando o usuário solicitar explicitamente ("Pode fazer o próximo passo", "Inicie o passo X", etc).
> Ao final de cada passo, atualize este arquivo marcando a caixa de seleção correspondente com `[x]`, atualize os demais arquivos de governança (`DOCUMENTACAO.md`, `CONTEXTO.md`) e gere um texto de commit formatado.

---

### Fase 1: Arquitetura Base & Estrutura Visual (Concluída)
- [x] **Passo 1 — Mapeamento e Estruturação do HTML5**
  - Mapear as 15 seções idênticas ao design original da Brasa Studio.
  - Limpar CSPs restritivos de templates legados e integrar tipografia Google Fonts (DM Sans e Inter).
  - Configurar semântica, metatags de SEO e links âncora.

- [x] **Passo 2 — Processamento e Validação de Ativos Estáticos (WebP & Vetores)**
  - Copiar e organizar mais de 150 imagens e vídeos para a árvore de assets local.
  - Sanitizar tags `<source type="image/avif">` incompatíveis para priorizar renderização nativa em WebP legítimo.
  - Criar ícone vetorial da estrela dourada de 4 pontas da Brasa Studio com transparência nativa (alfa total) nos tamanhos 200px e 400px.

- [x] **Passo 3 — Estilização Global, Design System e Bento Grids (CSS Puro)**
  - Implementar paleta dark `#050505` com gradientes neon `#FF5A1F` e iluminação âmbar.
  - Estilizar Hero Section corrigindo compressão de colunas (`min-width: 0`) para alinhamento simétrico do mockup.
  - Construir Bento Grids, tickers contínuos (marquês infinitos), cards de planos, depoimentos e formulário.
  - Ajustar responsividade para telas móveis (breakpoints de 1024px, 768px e 480px).

- [x] **Passo 4 — Interatividade e Micro-animações (Vanilla JavaScript)**
  - Criar observer de scroll (`IntersectionObserver`) para reveal progressivo suave das seções.
  - Implementar sistema de acordeão com transição fluida para a seção de FAQ (6 perguntas).
  - Adicionar manipulação suave de âncoras e toasts de feedback para formulários.

- [x] **Passo 5 — Conteinerização 100% Docker & Nginx**
  - Configurar `Dockerfile` Nginx Alpine otimizado com compressão e cache estático.
  - Configurar `docker-compose.yml` expondo a aplicação na porta 3000 (`3000:80`).
  - Subir o container `brasa-studio-landing` e validar resposta HTTP 200 via porta 3000.

---

### Fase 2: Governança, Memória & Padrões (Concluída)
- [x] **Passo 6 — Criação dos Arquivos de Governança do Projeto**
  - Criar `DOCUMENTACAO.md` com arquitetura, stack e comandos.
  - Criar `PASSOS.md` com divisão sequencial, checkboxes e regra de pausar entre passos.
  - Criar `CONTEXTO.md` com histórico de decisões e mapeamento técnico.
  - Criar `PROMPT.md` com especificações completas do prompt de design e identidade.

- [x] **Passo 7 — Persistência nas Memórias Local e Global do Agente**
  - Salvar regra local no workspace (`GEMINI.md` e `.agents/rules/`).
  - Salvar regra global do usuário (`C:\Users\Nilto\.gemini\config\rules\`).
  - Configurar instrução mandatória: ao final de qualquer feat/fix, atualizar os arquivos de documentação, passos e contexto, e gerar mensagem para commit Git.

---

### Fase 3: Próximas Etapas e Melhorias Opcionais (Aguardando Solicitação)
- [x] **Passo 8 — Otimização de Performance e Auditoria Lighthouse**
  - Auditar tempo de carregamento e First Contentful Paint dentro do container Docker.
  - Otimizar cabeçalhos de cache HTTP, buffers I/O (`sendfile`, `tcp_nopush`) e compressão Gzip no Nginx.
  - Inserir `fetchpriority="high"`, `loading="eager"` e preloads para ativos críticos do Hero (LCP).

- [x] **Passo 9 — Integração Funcional de Formulário de Contato / Leads**
  - Implementação de modal interativo de diagnóstico em 15 minutos com backdrop blur e atalhos de fechamento (ESC / overlay).
  - Validação inline em tempo real de e-mails (regex RFC) e tamanho de campos com feedback visual (.is-valid / .is-invalid).
  - Envio assíncrono com spinner animado nos botões, persistência resiliente em LocalStorage e suporte a Webhook.
  - Notificações flutuantes de feedback via toast customizado da Brasa Studio.

- [x] **Passo 10 — PWA e Modo Offline Básico (Service Worker)**
  - Adicionar manifesto de aplicativo Web (`manifest.json`) com tema dark, acentos neon `#ff5a1f` e ícones nos tamanhos 200px e 400px.
  - Implementar Service Worker (`sw.js`) com estratégia de cache híbrida (Cache-First para estáticos e Network-First com fallback para navegação HTML).
  - Configurar cabeçalhos de controle e Service-Worker-Allowed no Nginx com validação 100% conteinerizada.

---

### Fase 4: Versionamento, Deploy & Repositório Remoto (Concluída)
- [x] **Passo 11 — Publicação e Sincronização com o Repositório GitHub**
  - Criação do arquivo de exclusão `.gitignore`.
  - Elaboração do `README.md` institucional e completo com badges, comandos Docker e documentação.
  - Inicialização do repositório Git na branch `main`, configuração do remote oficial (`https://github.com/lopesmidia002-jpg/brasastudio.git`), commit padronizado e push com sucesso.

- [x] **Passo 12 — Refinamento Visual Fiel da Hero Section (Idêntico à Foto 2)**
  - Remoção do vídeo de fundo e aplicação de plano de fundo estático com iluminação volumétrica âmbar no canto superior direito e glow suave no topo esquerdo.
  - Substituição da rolagem automática dos ícones de marcas por caixas generosas (68x68px, raio 20px) com barra de rolagem horizontal livre.
  - Posicionamento da rosa dos ventos no canto inferior direito do card com coloração laranja vibrante, eixos de mira e círculos astronômicos concêntricos.
  - Imagem do card de preview estática com proporção ajustada e botão circular central.

- [x] **Passo 13 — Refinamento Visual Fiel da Seção Sobre a Brasa (Idêntico à Foto 2)**
  - Remoção do efeito de borda cinza externa da imagem, aplicando cantos arredondados limpos (26px) e reflexo âmbar suave na base.
  - Substituição do texto simples no topo por badge em pílula estilizada ("• Sobre a Brasa") com pontinho indicador âmbar.
  - Ajuste do título para 100% branco monocromático ("Marcas mais fortes, impressões que ficam.") sem a linha laranja.
  - Remoção da linha divisória `<hr>` entre o parágrafo e a lista de diferenciais.
  - Botão "Como trabalhamos" estilizado no tom vermelho-laranja brasa idêntico à foto de referência.

- [x] **Passo 14 — Refinamento Visual Fiel da Seção Resultados (Idêntico à Foto 2)**
  - Implementação de painéis/asas poligonais nas laterais esquerda e direita com perspectiva geométrica e suave brilho âmbar no contorno superior.
  - Inserção de iluminação difusa central descendente no topo da seção.
  - Substituição do texto cru por badge em pílula estilizada ("• Resultados") com pontinho indicador âmbar.
  - Ajuste do título para 100% branco monocromático ("Resultados que aparecem no caixa e na marca.") sem a linha alaranjada.
  - Botão "Agendar 15 minutos" calibrado no tom vermelho-laranja brasa com cantos arredondados e glow âmbar na base.

- [x] **Passo 15 — Barra de Rolagem Horizontal Delimitada para Revelação de Ícones Ocultos**
  - Delimitação da largura máxima do container em 360px para exibir ~4 ícones inicialmente e manter os demais ocultos à direita.
  - Expansão do catálogo de marcas para 8 ícones geométricos estilizados.
  - Implementação de barra de rolagem horizontal personalizada em tom gradiente âmbar neon (`#ff7a3d` a `#ff5a1f`) permitindo rolar e revelar os ícones seguintes de forma fluida.

- [x] **Passo 16 — Card de Preview Compacto Estático e Rosa dos Ventos Ampliada (Foto 2)**
  - Redução proporcional do card de preview do Hero para 285px de largura com proporção compacta idêntica à foto 2.
  - Remoção de todos os efeitos de hover (passagem de mouse), desativando animações e transformações para comportamento 100% estático.
  - Ampliação da rosa dos ventos para 260px x 260px com sobreposição acentuada no canto inferior direito e desativação da animação de pulso.

- [x] **Passo 17 — Barra de Rolagem Horizontal Manual e Banners Quadrados na Seção Resultados (Foto 2)**
  - Remoção da animação infinita de rolagem automática (marquee) e eliminação de nós duplicados.
  - Implementação de barra de rolagem horizontal interativa e estilizável com track sutil e thumb âmbar neon com glow.
  - Redesenho dos banners dos cases para formato perfeitamente quadrado (`aspect-ratio: 1 / 1`), cantos arredondados de 24px, badges retangulares `NOVO`/`RECENTE` e pílulas de métricas refinadas idênticas à foto 2.

- [x] **Passo 18 — Refinamento Visual Fiel da Seção Como Trabalhamos (Idêntico à Foto 2)**
  - Implementação do eyebrow em texto caixa alta laranja vibrante `COMO TRABALHAMOS` e título com destaque âmbar em `sem atalhos.`.
  - Estilização refinada dos 3 cards de etapas (Imersão, Criação, Entrega) com divisórias `<hr>`, pílulas com texto âmbar e botão em pílula `Agendar conversa`.
  - Integração da rosa dos ventos vetorial astronômica dourada no canto inferior direito da Etapa 3 com círculos concêntricos e eixos de mira idênticos à foto 2.
  - Preservação da imagem da primeira foto (mãos organizando provas de cor e tecidos sobre fundo escuro) com acabamento limpo sem borda cinza externa.
- [x] **Passo 19 — Refinamento Visual Fiel da Barra Superior / Header (Idêntico à Foto 2)**
  - Ajuste do logotipo para "brasa" em branco puro e "studio" em tom cinza médio/prata (`#8e8e93`).
  - Calibração dos links da barra superior com destaque no item ativo "Início" em branco e itens seguintes em cinza suave.
  - Botão "Fale com a gente" estilizado em formato pílula em vermelho-laranja brasa intenso com sombra quente suave, idêntico à foto de referência.

- [x] **Passo 20 — Refinamento Tipográfico e Visual Fiel da Hero Section (Idêntico à Foto 2)**
  - Tag de status atualizada com pílula de borda sutil, badge retangular `NOVO` com cantos suaves em laranja vibrante (`#ff5a1f`) e tipografia em preto negrito (`#000000`), e texto "Agenda aberta para 2027" em branco.
  - Tipografia da headline principal "Design que acende marcas criativas." calibrada com peso leve/regular (`font-weight: 400`), kerning elegante e "marcas criativas." em laranja brasa vibrante (`#ff6a2b`).
  - Lead textual suavizado em cinza legível (`#909096`) com entrelinha equilibrada de 1.65.
  - Botão principal "Começar um projeto" calibrado com fundo branco puro, tipografia preta nítida e sombra sutil limpa, e botão secundário "Conheça a Brasa" com fundo translúcido escuro e borda fina suave.
  - Ícones geométricos de marcas parceiras refinados com traço e preenchimento em branco puro (`#ffffff`) nítido.

- [x] **Passo 21 — Ajuste Visual Fiel da Seção Resultados (Fundo Escuro e Asas em Degradê Alaranjado Sutil)**
  - Remoção total do clarão alaranjado difuso superior, deixando o fundo da seção em preto profundo puro (`#000000`) idêntico à Foto 2.
  - Asas laterais poligonais refinadas em corte diagonal simétrico (`clip-path`), posicionadas na altura média da seção com degradê suave alaranjado/âmbar quente e borda de topo com contorno sutil iluminado.
  - Tipografia da headline "Resultados que aparecem no caixa e na marca." ajustada para peso leve/regular (`font-weight: 400`), garantindo elegância e abertura idênticas à referência.
  - Lead em cinza suave (`#909096`) e botão "Agendar 15 minutos" mantido no padrão pílula aveludado.

- [x] **Passo 22 — Refinamento dos Ícones da Hero (Scrollbar Branca, Cards 84x84 Ampliados e Ícones da Foto 3)**
  - Barra de rolagem horizontal personalizada com polegar em branco puro (`#ffffff`) e trilha translúcida cinza, substituindo o tom alaranjado.
  - Dimensão dos cards de ícones aumentada para 84px x 84px com cantos arredondados de 22px e SVGs ampliados para 34px x 34px.
  - Container estendido horizontalmente para `max-width: 480px`, acomodando com conforto e amplitude os 4 ícones como na Foto 2.
  - Correção dos ícones da segunda metade da rolagem conforme a Foto 3: implementação do losango vazado/oco (`rect` rotacionado com traço de 4.2px) e calibração da grade de 4 círculos 2x2.

- [x] **Passo 23 — Refinamento dos Banners de Resultados (Extensão Lateral, Proporção Quadrada Ampla e Barra de Rolagem Branca)**
  - Barra de rolagem horizontal dos cases (`.results-cases-scroll`) calibrada em branco puro (`#ffffff`) com trilha translúcida, substituindo a barra alaranjada anterior.
  - Banners dos cases estendidos lateralmente para `clamp(380px, 32vw, 440px)` em largura, garantindo amplitude visual sem cortes laterais indesejados nas fotos (vaso, café, aliança e bike).
  - Proporção do topo do banner em quadrado perfeito 1:1 com cantos superiores arredondados de 24px (`border-radius: 24px 24px 0 0`) e `object-fit: cover`.
  - Calibração de todos os elementos e ícones em tom laranja vibrante (`#ff5a1f`) e badges de destaque (`NOVO` e `RECENTE`) idênticos à Foto 2.

- [x] **Passo 24 — Refinamento do Cabeçalho da Seção Como Trabalhamos (Tag com Luz Âmbar e Cores Monocromáticas da Foto 2 e 3)**
  - Implementação da tag de status em pílula `Como trabalhamos` com ponto quadrado laranja (`#ff5a1f`) com glow e efeito de iluminação âmbar superior no topo da borda idêntico à Foto 3.
  - Substituição da cor laranja no título: "Do briefing ao ar," em branco puro (`#ffffff`) e "sem atalhos." em cinza prata suave (`#8e8e96`), com tipografia leve e aberta (`font-weight: 400`, `letter-spacing: -0.025em`) conforme a Foto 2.
  - Lead em cinza suave e harmonizado (`#909096`).

- [x] **Passo 25 — Calibração do Fundo Atmosférico e Geometria das Asas em Resultados (Idêntico à Foto 2)**
  - Efeito do plano de fundo calibrado com gradiente elíptico difuso sutil de calor âmbar descendo do topo central (`rgba(225, 80, 20, 0.16)` fundindo ao preto profundo), recriando a atmosfera cinematográfica da Foto 2.
  - Geometria das asas laterais poligonais atualizada com topo perfeitamente horizontal alinhado à linha "no caixa e na marca." e corte diagonal em 48%, em degradê bronze/âmbar com fusão suave ao preto e borda superior iluminada.
  - Headline "Resultados que aparecem no caixa e na marca." calibrada com tipografia aberta (`clamp(2.8rem, 5.2vw, 4.4rem)`, peso 400, entrelinha 1.1) e texto de apoio com quebra balanceada em duas linhas.

- [x] **Passo 26 — Dimensões Fiel da Foto 2 e Card Informativo Sobressaindo à Foto nos Banners**
  - Calibração das dimensões dos banners para proporção compacta e vertical (`clamp(320px, 28vw, 385px)`), idêntica à Foto 2.
  - Padronização das bordas externas de todos os banners com cantos arredondados de 26px (`border-radius: 26px`), borda refinada `1px solid rgba(255, 255, 255, 0.09)` e padding interno simétrico de respiro (`10px 10px 12px 10px`).
  - Foto de fundo com formato quadrado 1:1 e cantos arredondados de 20px, servindo de base visual para a composição.
  - Implementação do card informativo interno sobreposto à foto (`margin-top: -65px`, `z-index: 2`) com fundo `#0d0e14`, borda de 1px, cantos arredondados de 20px e sombra projetada volumétrica, criando o acabamento onde o banner informativo sobressai sobre a foto conforme a Foto 2.

- [x] **Passo 27 — Padronização Tipográfica com Degradê Vertical e Fundo Preto Sólido em Resultados**
  - Aplicação de fundo preto absoluto e sólido (`background: #000000 !important; background-image: none !important`) na seção `.results`.
  - Configuração da tipografia sem serifa geométrica / neo-grotesca moderna com `Inter` como fonte primária e fallbacks contemporâneos (SF Pro Display, Helvetica Neue, Geist Sans).
  - Título principal (`.title--results`) em tamanho display grande com peso regular a médio (`font-weight: 500`), alinhamento centralizado e degradê vertical sutil do branco puro `#FFFFFF` no topo ao cinza médio/prateado suave `#A0A0A0` na base via `background-clip: text`, livre de sombras ou relevos pesados.
  - Subtítulo / corpo (`.text--results`) calibrado para 25% a 30% da escala do título, cor cinza claro ligeiramente dessaturado/azulado (`#949ca8`), peso regular (`font-weight: 400`), entrelinha confortável (`line-height: 1.65`) e alinhamento centralizado.

- [x] **Passo 28 — Remoção Total de Fundos, Asas e Reflexos Alaranjados em Resultados**
  - Desativação completa do container de backdrop com asas laterais (`.results-backdrop { display: none !important; }`), eliminando gradientes alaranjados, bronze e bordas âmbar da seção.
  - Ajuste da sombra do botão `.btn--results` para dispersão neutra escura (`rgba(0, 0, 0, 0.5)`), removendo o halo alaranjado e garantindo fundo 100% preto sólido e puro em toda a área de Resultados.

- [x] **Passo 29 — Nova Fotografia de Moodboard e Moldura com Bordas Idênticas à Foto 2 em Como Trabalhamos**
  - Substituição da fotografia da seção Como Trabalhamos (`processo-mesa-1040.webp`, `processo-mesa-520.webp`, AVIFs) pela nova imagem da Foto 2 (mãos organizando amostras de tecido, placas de latão e papéis sobre mesa escura em ateliê).
  - Implementação da moldura da Foto 2 (`.frame--process` / `.sticky-col .frame`) com cantos arredondados de 28px (`border-radius: 28px !important`), contorno `1px solid rgba(255, 255, 255, 0.12) !important`, fundo escuro e linha de acento âmbar neon centralizada na borda inferior com glow sutil.

- [x] **Passo 30 — Banners Escuros com Top-Right Glow, Ícone de Pena e Rosa dos Ventos Âmbar em Como Trabalhamos**
  - Estilização dos banners de etapas com fundo escuro `#08090d`, cantos arredondados de 24px, borda suave e efeito de iluminação âmbar suave na lateral superior direita (`radial-gradient` no canto superior direito) conforme a Foto 2.
  - Correção dos ícones: substituição do lápis duplicado da Etapa 3 pelo ícone clássico de bico de pena tinteiro (`pen-tool`) idêntico à Foto 5.
  - Calibração da rosa dos ventos da Etapa 3 conforme a Foto 5: estrela central de 4 pontas em degradê quente âmbar/laranja (`#ff9d5c` a `#9e2808`) com círculos astronômicos e miras em bronze/âmbar com glow sutil.
  - Pílulas de entregáveis com texto em cinza claro refinado (`#c8c8d2`) idênticas à Foto 3 e pill de etapa com texto branco nítido conforme a Foto 4.

- [x] **Passo 31 — Formato Quadrado dos Banners e Enquadramento das Fotos de Resultados conforme Foto 2**
  - Calibração das dimensões dos banners `.case` para formato quadrado padronizado (`flex: 0 0 clamp(360px, 32vw, 420px); width: clamp(360px, 32vw, 420px);`), eliminando o aspecto de fita vertical esticada e harmonizando largura e altura total em torno de 1:1.
  - Correção da proporção das fotos (`.case-img` com `aspect-ratio: 880 / 555`) preservando a escala fotográfica natural e evitando qualquer corte indevido de detalhes centrais (xícara com grãos flutuando e vapor, vaso de cerâmica, anel de ouro e bicicleta urbana).
  - Ajuste da sobreposição do card de texto inferior (`.case-box` com `margin-top: -48px`, padding compacto `1.25rem 1.35rem 1.45rem`), mantendo respiro superior amplo nas fotos e acabamento proporcional fiel à Foto 2 de referência.
  - Atualização dos atributos intrínsecos `height="555"` nas tags `<img>` dos cases em `index.html`.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 32 — Reativação das Asas em Degradê e Calibração Tipográfica em 2 Linhas conforme Foto 2**
  - Reativação do painel de asas geométricas laterais em degradê âmbar/bronze (`.stage-wing--left` e `.stage-wing--right` com corte diagonal em 48%, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e sombra difusa quente) alinhadas perfeitamente ao texto.
  - Restauração do glow atmosférico difuso de calor âmbar descendo do topo central (`radial-gradient` no `.results`).
  - Calibração tipográfica do título (`.title--results`) reduzindo o tamanho de exibição para escala elegante (`clamp(2.35rem, 4.3vw, 3.6rem)`), garantindo quebra limpa em exatamente 2 linhas ("Resultados que aparecem" / "no caixa e na marca.") com degradê suave de branco puro para cinza prateado.
  - Ajuste do botão "Agendar 15 minutos" com glow quente inferior âmbar (`box-shadow: 0 8px 26px rgba(235, 71, 20, 0.42)`) e tag de status translúcida idêntica à Foto 2.
  - Reconstrução e validação do container Docker na porta 3000 com retorno HTTP 200 OK.

- [x] **Passo 33 — Replicação Completa dos Banners, Ícones, Cores e Tipografia em Diferenciais conforme Foto 2**
  - Estilização dos 6 cards (`.feature`) com cantos arredondados de 26px, fundo escuro profundo `#090a0f`, bordas suaves de 1px e destaque no Card 1 ("Marca que vende PRO") com contorno e iluminação âmbar suave.
  - Atualização dos ícones em caixas squircle escuras (`.icon-orb`) de 52x52px com traço fino em laranja/âmbar vibrante `#ff7a3d`: gráfico de linha ascendente, 3 camadas empilhadas, tag de código `</>`, roseta com fitas, relógio às 3h e smartphone.
  - Inclusão do ícone minimalista de seta diagonal `↗` (`.feature-arrow`) no canto superior direito de cada card.
  - Subtítulos em caixa alta na cor laranja/âmbar vibrante `#ff6a2b` (`ESTRATÉGIA COMERCIAL`, `ARQUIVOS VIVOS`, `PERFORMANCE DE FÁBRICA`, `OLHAR AUTORAL`, `ENTREGAS SEMANAIS`, `RESPONSIVO DE VERDADE`).
  - Remoção das linhas horizontais divisórias (`<hr class="rule">`), garantindo acabamento limpo e moderno idêntico à Foto 2.
  - Adição de badge retangular arredondada `PRO` em tom alaranjado nos cards 1 e 5.
  - Reconstrução e validação do container Docker na porta 3000 com HTTP 200 OK.

- [x] **Passo 34 — Calibração dos Banners, Cor de Fundo, Tipografia e Pílulas Retangulares Arredondadas em Como Trabalhamos conforme Fotos 2 e 3**
  - Redimensionamento e ajuste de proporção dos banners `.step` com largura máxima contida (`minmax(0, 510px)` na grade de duas colunas) e padding compacto `1.6rem 1.7rem 1.75rem`, eliminando o aspecto excessivamente largo.
  - Aplicação do fundo preto grafite profundo `#050609` com efeito sutil de iluminação âmbar restrito ao canto superior direito (`radial-gradient` a 98% 2%) e cantos arredondados de 22px.
  - Calibração tipográfica moderada e elegante com título em `1.22rem` e corpo em `0.88rem` / `#8e8e96`.
  - Padronização de todas as pílulas de entregáveis com o estilo exato da Foto 3: formato retangular arredondado (`border-radius: 8px`), fundo `#111218`, contorno `1px solid rgba(255, 255, 255, 0.1)` e texto cinza claro `#d1d5db`.
  - Badges de etapa no canto superior direito ajustadas para o mesmo formato retangular arredondado (`border-radius: 8px`) e botão "Agendar conversa" calibrado com raio de 12px.
  - Reconstrução e validação do container Docker na porta 3000 com HTTP 200 OK.

- [x] **Passo 35 — Compactação do Banner Informativo, Cor Escura Sólida, Hover Neutro e Fotos Estáticas em Resultados conforme Foto 2**
  - Redução das dimensões do banner informativo (`.case-box` com padding de `0.95rem 1.15rem 1.15rem`, espaçamento de `0.52rem` e sobreposição contida `margin-top: -38px`), tornando o box visivelmente menor e deixando a fotografia superior em maior evidência conforme a Foto 2.
  - Aplicação de cor escura profunda e refinada nos cartões (`#06070a` no contêiner `.case` e `#07080c` no banner informativo `.case-box` com contorno suave `1px solid rgba(255, 255, 255, 0.07)`).
  - Remoção completa do efeito alaranjado de hover do mouse (`.case:hover` sem borda ou sombra alaranjada, transicionando exclusivamente com contorno neutro translúcido `rgba(255, 255, 255, 0.16)` e sombra escura).
  - Fotos 100% estáticas (`.case-img img` e `.case:hover .case-img img` com `transform: none !important; transition: none !important;`), sem efeito de zoom ou escala ao passar o cursor.
  - Pílulas de resultados em formato retangular arredondado (`border-radius: 8px`), fundo `#101117` e tipografia calibrada idêntica à Foto 2.
  - Preservação estrita das fotos e proporções nativas sem alteração de arquivos de imagem conforme solicitação do usuário.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 36 — Fundo Preto Puro, Feixes de Luz Volumétricos, Tag Status e Grafia Monocromática em Diferenciais conforme Fotos 2, 3 e 4**
  - Remoção total de halos ou efeitos alaranjados difusos do fundo de `#diferenciais`, estabelecendo fundo 100% preto sólido (`#000000`).
  - Implementação do efeito *Volumetric Light Beams* (feixes de luz/focos angulares) nas laterais esquerda e direita (`.feature-beam--left` e `.feature-beam--right` com corte diagonal em 48%, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e degradê bronze/âmbar suave que se dissipa no centro escuro) idêntico à Foto 2.
  - Substituição da tag simples pela tag de status da Foto 3 (`.tag-status--features`): pílula escura de cantos arredondados (10px), ponto quadrado laranja vibrante (`#ff5a1f`) com glow de 8px e reflexo de luz âmbar no topo da borda.
  - Aplicação da grafia exata da Foto 4 no título display (`.title--features`): "Recursos de estúdio grande" na primeira linha e "com atenção de ateliê." na segunda linha com tipografia elegante de peso regular/médio (500) e degradê sutil monocromático de branco puro para cinza prateado, eliminando completamente a cor laranja da segunda linha.
  - Ajuste do subtítulo em cinza claro e do botão "Conheça a Brasa" com fundo terracota suave e glow inferior.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 37 — Remoção do Brilho Alaranjado Central em Resultados Mantendo Efeitos Trapezoidais Laterais**
  - Eliminação cirúrgica do gradiente radial elíptico alaranjado (`background-image: none !important;`) no fundo central da seção `.results`.
  - Fixação do fundo central em preto sólido puro (`background-color: #000000;`).
  - Preservação intacta de todas as formas trapezoidais / asas geométricas laterais (`.stage-wing--left` e `.stage-wing--right`) com seu gradiente bronze/âmbar sutil, borda iluminada de 1px e corte diagonal de 48%.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 38 — Inversão dos Efeitos Trapezoidais nos Dois Lados conforme Foto 2 em Resultados e Diferenciais**
  - Inversão da geometria do `clip-path` dos efeitos trapezoidais laterais em todas as seções onde o efeito é utilizado (`#resultados` e `#diferenciais`), adotando o formato exato da Foto 2 (base larga e topo afunilado/estreito).
  - Lado esquerdo (`.stage-wing--left` e `.feature-beam--left`): `clip-path: polygon(0 0, 72% 0, 100% 100%, 0 100%)`.
  - Lado direito (`.stage-wing--right` e `.feature-beam--right`): `clip-path: polygon(28% 0, 100% 0, 100% 100%, 0 100%)`.
  - Preservação da linha de luz âmbar no topo (`border-top: 1px solid rgba(255, 120, 50, 0.48)`) e degradê suave bronze/âmbar que se funde ao preto absoluto.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 39 — Estilização Fiel dos Cards de Diferenciais: Ícones Circulares, Sombreamento Volumétrico, Badge PRO com Glow e Linhas Divisórias conforme Fotos 2, 3, 4 e 5**
  - Substituição do formato squircle dos ícones por círculos perfeitos (`border-radius: 50% !important; 54x54px`) com fundo degradê radial âmbar escuro, contorno fino iluminado e halo difuso quente suave (`box-shadow: 0 0 16px rgba(255, 90, 31, 0.35)`), com traço interno em dourado âmbar `#ffa44a` idêntico à Foto 3 e Foto 5.
  - Implementação de sombreamento volumétrico aveludado e linha de luz iluminada âmbar no topo de cada card (`border-top: 1px solid rgba(255, 120, 45, 0.45)` e `radial-gradient` a 50% 0%), com destaque térmico imersivo no Card 1 ("Marca que vende PRO") com glow superior e inferior e contorno âmbar iluminado idêntico à Foto 2 e Foto 5.
  - Atualização dos subtítulos para capitalização natural ("Estratégia comercial", "Arquivos vivos", "Performance de fábrica", "Olhar autoral", "Entregas semanais", "Responsivo de verdade") em cinza suave `#9294a0`.
  - Restauração de linhas divisórias horizontais sutis (`<hr class="rule">`) entre o subtítulo e o texto da descrição.
  - Estilização da badge `PRO` em laranja avermelhado vibrante (`#ff551b`) com texto preto negrito e glow radiante quente (`box-shadow: 0 0 12px rgba(255, 85, 27, 0.65)`) idêntica à Foto 4 e Foto 5.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 40 — Ícones em Formato Squircle Escuro com Borda Âmbar e Halo Suave em Diferenciais conforme Imagem de Referência**
  - Aplicação do estilo exato da imagem de referência enviada pelo usuário para os ícones dos cards de Diferenciais (`.icon-orb`).
  - Formato squircle com cantos suaves (`border-radius: 14px !important; width: 48px; height: 48px;`), fundo grafite escuro `#0d0e14`, contorno fino laranja/âmbar `1px solid rgba(255, 90, 31, 0.42)` e halo difuso suave (`box-shadow: 0 0 16px rgba(255, 90, 31, 0.22)`).
  - Traço vetorial dos ícones SVG ajustado para laranja vibrante `#ff7a3d` com `stroke-width: 1.8` idêntico à imagem da lupa.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 41 — Remoção dos Ícones de Losango com Ponto e Ampulheta da Hero Section**
  - Remoção dos dois ícones identificados na imagem enviada pelo usuário (`Marca 7`: losango com ponto central e `Marca 8`: ampulheta) dentro do contêiner `.hero-icons-scroll` em `index.html`.
  - Preservação da rolagem horizontal suave e dos 6 ícones restantes de marcas parceiras (círculo, triângulo, cúpula/arco com base, ondas duplas, losango vazado oco e grade 2x2 de círculos).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 42 — Aumento da Largura dos Banners de Resultados e Estilização Fiel dos Ícones na Cor Âmbar (#ff7a3d)**
  - Aumento da largura dos banners (`.case`) no carrossel de Resultados de `clamp(335px, 29vw, 390px)` para `min(clamp(390px, 34vw, 470px), 90vw)`, permitindo espaçamento mais generoso e alinhamento elegante das pílulas de métricas.
  - Ajuste nas dimensões de `.case-mark` para 24x24px em `style.css`.
  - Reestilização exata dos 4 ícones de marca nos cards de Resultados conforme as imagens de referência com a cor âmbar vibrante `#ff7a3d`:
    - **Casa Ocre:** Anel circular limpo (`<circle cx="20" cy="20" r="11" fill="none" stroke="#ff7a3d" stroke-width="4.5"/>`).
    - **Torra Rubi:** Cúpula/domo com barra inferior arredondada (`<path fill="#ff7a3d" d="M8 21a12 12 0 0 1 24 0z"/>` e `<rect x="8" y="24.5" width="24" height="4.5" rx="2.2" fill="#ff7a3d"/>`).
    - **Âmbar Joias:** Losango vazado oco sem ponto central (`<rect x="11.5" y="11.5" width="17" height="17" stroke="#ff7a3d" stroke-width="4.5" fill="none" transform="rotate(45 20 20)"/>`).
    - **Vento Sul Bikes:** Ondas duplas sinusoidais em traço arredondado (`stroke="#ff7a3d"`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 43 — Refinamento Visual Fiel da Seção Por Que a Brasa conforme Fotos 2 e 3**
  - Implementação do efeito trapezoidal cinza volumétrico apenas do lado direito (`.benefits-wing--right`) com corte trapezoidal `polygon(32% 0, 100% 0, 100% 100%, 0% 100%)`, degradê suave grafite/cinza e linha de luz superior de 1px idêntica à Foto 2.
  - Substituição do texto simples no topo pela tag de status (`.tag-status--benefits`) com pílula escura (cantos de 9px), ponto quadrado laranja âmbar (`#ff5a1f`) com glow de 8px, linha iluminada superior e texto "Por que a Brasa" em Title Case idêntico à Foto 3.
  - Atualização da tipografia e grafia do título (`.title--benefits`): exibição em exatamente 2 linhas monocromáticas ("A gente não só desenha," / "a gente coloca no ar.") com degradê suave de branco puro para cinza prateado, eliminando completamente a cor laranja.
  - Reorganização das pílulas de benefícios em duas linhas confortáveis (`.pills--benefits`) com fundo escuro `#0d0e14`, contorno suave e destaque no botão "Fale agora" em pílula sólida branca com tipografia preta negrita.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 44 — Fundo Mais Claro dos Banners de Diferenciais, Remoção do Brilho Superior e Ícones em Círculos Perfeitos com Halo Âmbar**
  - Ajuste do fundo dos banners (`.feature`) para uma superfície grafite mais clara e aconchegante (`#13141a`).
  - Remoção completa do efeito de sombreamento e contorno alaranjado da parte de cima dos banners (adotando contorno neutro `rgba(255, 255, 255, 0.08)` no topo).
  - Posicionamento do sombreamento volumétrico alaranjado exclusivamente na parte de baixo dos banners, com destaque térmico imersivo no Card 1 ("Marca que vende PRO") com glow inferior e borda âmbar na base (`border-bottom: 1px solid rgba(255, 110, 40, 0.55)`).
  - Reestilização dos ícones (`.icon-orb`) em formato de círculos perfeitos (`border-radius: 50% !important; 50x50px`) com fundo em degradê radial âmbar escuro, contorno fino âmbar `rgba(255, 135, 45, 0.45)`, halo difuso quente e traço interno em dourado âmbar `#ffa44a` idêntico às fotos 2, 3, 4 e 5.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 45 — Fundo Mais Claro nas Etapas de Como Trabalhamos, Banners Estáticos e Ícones em Degradê Alaranjado**
  - Ajuste do plano de fundo dos cards de etapas (`.step`) para um tom grafite mais claro e aconchegante (`#101117`) idêntico à Foto 2.
  - Desativação completa do efeito hover nos banners de etapas (`transform: none !important; transition: none !important; border-color: rgba(255, 255, 255, 0.08) !important;`), tornando os banners 100% estáticos conforme solicitado pelo usuário.
  - Aplicação de fundo alaranjado com degradê âmbar quente nas caixas de ícones (`.icon-box` com `radial-gradient(circle at 45% 45%, #3d1f13 0%, #220e06 65%, #0f0502 100%)`), contorno fino âmbar `1px solid rgba(255, 110, 40, 0.45)` e halo difuso suave idêntico à Foto 3.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 46 — Calibração do Container da Hero Section para Exibir 4 Ícones Iniciais e 2 na Rolagem**
  - Calibração da largura do contêiner `.hero-icons-wrap` para `max-width: 404px` e gap de `1.25rem` (20px), fazendo com que exatamente 4 ícones (Marca 1 a Marca 4) fiquem visíveis no viewport inicial.
  - Os outros 2 ícones parceiros (Marca 5: losango vazado oco e Marca 6: grade 2x2 de círculos) ficam ocultos à direita e são revelados suavemente assim que o usuário aciona a rolagem horizontal pela barra branca estilizada.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 47 — Correção de Enquadramento e Remoção de Artefato de Moldura no Banner de Âmbar Joias**
  - Identificada a causa raiz do desalinhamento: o arquivo original continha uma moldura curva escura de mockup gravada no canto superior esquerdo e topo, além do anel estar deslocado para a base.
  - Regeneração fotográfica de alta definição com enquadramento centralizado do anel de ouro martelado sobre pedra vulcânica sob luz dourada e atmosfera quente, sem bordas ou molduras externas.
  - Processamento e substituição dos assets `caso-ambar-joias-880.webp`, `caso-ambar-joias-880.avif`, `caso-ambar-joias-440.webp` e `caso-ambar-joias-440.avif` em proporção nativa `880x555` com foco nítido e respiro perfeito acima do `.case-box`.
  - Validação de entrega dos assets e renderização no container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK.

- [x] **Passo 48 — Padronização Completa dos Banners Bento Grid de Por Que a Brasa Conforme Foto 2**
  - Substituição das 5 fotografias oficiais pelos recortes exatos da imagem de referência enviada pelo usuário (Revisões: moodboard de cortiça com polaroids; Preço: livro aberto com cartões quentes em leque; Pedidos: esculturas orgânicas de vidro soprado âmbar/rubi; Retorno: ampulheta dourada clássica de latão com areia; Publicação: mãos digitando em laptop iluminado à noite).
  - Geração e exportação dos 20 assets otimizados em formatos WebP e AVIF nas resoluções responsivas para cada slot.
  - Remoção de todas as linhas divisórias horizontais `<hr class="rule">` nos cards.
  - Ajuste do fundo dos banners (`.bcard`) para superfície grafite escura e profunda (`#0a0b0e`) com contorno sutil `1px solid rgba(255, 255, 255, 0.08)` e cantos arredondados de 22px.
  - Banners 100% estáticos: remoção total de elevação, sombras e transformações de zoom no hover (`transform: none !important; transition: none !important;`).
  - Badges `NOVO` em pílula sólida retangular laranja vibrante (`#ff551b`) com texto branco em caixa alta.
  - Estilização completa dos botões de ação no card grande ("Agendar conversa" e "Conheça a Brasa").
  - Adição de suporte a arquivos `.avif` no `nginx.conf` e rebuild do container Docker `brasa-studio-landing` na porta 3000 retornando HTTP 200 OK para todas as rotas e assets.

- [x] **Passo 49 — Suavização e Efeito de Degradê Contínuo no Trapézio Cinza de Por Que a Brasa**
  - Eliminação da quina dura e do preenchimento escuro opaco anterior no elemento `.benefits-wing--right`.
  - Implementação de degradê composto: radial luminoso no topo direito (`radial-gradient`) combinado com linear angular suave (`linear-gradient(165deg, ...)`) que transiciona de cinza prateado translúcido para 100% transparente.
  - Aplicação de máscara progressiva vertical (`mask-image: linear-gradient(...)`) que dissolve suave e organicamente a base do trapézio no preto absoluto da página idêntica à Foto 2.
  - Linha de luz superior refinada (`border-top: 1px solid rgba(255, 255, 255, 0.24)`) com iluminação interna suave de 1px.
  - Validação da renderização e execução no container Docker `brasa-studio-landing` na porta 3000 com status HTTP 200 OK.

- [x] **Passo 50 — Calibração das Caixas de Texto (Pills) de Por Que a Brasa Conforme Foto 2**
  - Ajuste da cor de fundo das pílulas para uma tonalidade grafite mais clara (`#15161c` / `#17181c`) com contorno fino suave `1px solid rgba(255, 255, 255, 0.15)`.
  - Ajuste da tipografia para letras mais finas de peso regular (`font-weight: 400`), eliminando o negrito pesado anterior.
  - Calibração da cor do texto para cinza claro suave e nítido (`#b0b3bf`).
  - Estruturação da quebra de linha idêntica à Foto 2 (5 itens na linha 1 e 6 itens na linha 2) através de elemento `li.pill-break`.
  - Refinamento do botão "Fale agora" em pílula sólida branca (`#ffffff`) com tipografia preta fina (`font-weight: 500`).
  - Validação da renderização no container Docker `brasa-studio-landing` na porta 3000 com status HTTP 200 OK.

- [x] **Passo 51 — Padronização Completa dos Banners de Diferenciais Conforme Imagem 2 de Referência**
  - Ajuste de fundo dos 6 cards para tom grafite escuro limpo e elegante (`#0f1015`) com cantos arredondados de 24px e contorno fino suave `1px solid rgba(255, 255, 255, 0.07)`.
  - Refinamento do Card 1 ("Marca que vende PRO"): sombreamento e degradê térmico alaranjado sutil concentrado exclusivamente na base interna (`radial-gradient(ellipse 90% 55% at 50% 100%, ...)`) com borda inferior âmbar (`border-bottom: 1px solid rgba(255, 110, 40, 0.52)`), eliminando qualquer vazamento externo alaranjado no topo e laterais.
  - Atualização do ícone do Card 1 em `index.html` com a moldura retangular com cantos arredondados e gráfico com linha ascendente e ponta de seta idêntico à Imagem 2.
  - Implementação de linha divisória horizontal nítida e sutil (`.feature .rule` com `border-top: 1px solid rgba(255, 255, 255, 0.1); height: 0;`) separando o subtítulo do texto descritivo em todos os 6 cards.
  - Badges `PRO` alaranjadas (`#ff551b`) calibradas com tipografia branca pura em caixa alta e glow quente.
  - Remoção completa de transformações e elevações bruscas ao passar o mouse (`transform: none`, banners 100% estáticos).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 52 — Calibração de Dimensões e Cores da Rosa dos Ventos do Hero para Dourado Opaco**
  - Redução das dimensões da rosa dos ventos vetorial (`.spark-compass-wrap`) de 260px para 200px x 200px (desktop com `bottom: -38px; right: -36px;`) e 160px x 160px no mobile, equilibrando sua presença sobre o card de vídeo.
  - Substituição da paleta de laranja neon/fogo por uma paleta clássica de dourado opaco fosco:
    - Estrela central de 4 pontas em gradiente nobre de ouro antigo (`#d8b26e` -> `#b88d3c` -> `#8a6320`).
    - Círculos concêntricos e eixos de mira astronômicos em dourado suave `#c49a45` com opacidades equilibradas.
    - Glow interno e sombra externa calibrados para halo dourado opaco (`drop-shadow(0 0 20px rgba(200, 155, 70, 0.4))`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 53 — Padronização dos Badges NOVO e PRO com Tipografia Preta Conforme Foto 2**
  - Substituição da tipografia branca nos badges `NOVO` e `PRO` por texto preto negrito (`color: #000000; font-weight: 700;`) idêntico à Foto 2 de referência enviada pelo usuário.
  - Calibração do formato retangular com cantos arredondados suaves (`border-radius: 6px`) e fundo em laranja vibrante (`#ff551b`).
  - Aplicação global e consistente em todas as seções que utilizam badges: Hero (`.tag-new .badge`), Diferenciais (`.badge--pro`) e Bento Grid de Por Que a Brasa (`.bcard .card-title .badge`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 54 — Aplicação de Superfície Minimalist Dark Mode Sleek Charcoal Grey nos Banners**
  - Implementação de fundo minimalista dark mode ultra-clean em sleek charcoal grey (`#0d0e13`) nos banners Bento Grid (`.bcard`) e Diferenciais (`.feature`).
  - Aplicação de degradê radial sutil e acetinado de deep charcoal para near-black (`radial-gradient(ellipse 110% 75% at 50% 0%, ...)`) recriando iluminação de estúdio de baixo contraste (low-contrast studio lighting).
  - Adição de borda com realce de luz de 1px (faint glowing edge border) com `border-top: 1px solid rgba(255, 255, 255, 0.16)` e reflexo interno `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 20px 48px -12px rgba(0, 0, 0, 0.85)`.
  - Harmonização da moldura interna de imagem (`.bcard-img`) com contorno refinado e fundo escuro.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 55 — Aplicação de Fundo Dark Mode SaaS Tech com Gradiente Radial Âmbar e Laranja Acobreado**
  - Implementação de fundo dark mode estilo SaaS tech com preto profundo absoluto (`#050609`) nos banners de Diferenciais (`.feature` e `.feature--hot`) e Bento Grid (`.bcard`).
  - Iluminação suave e difusa centralizada em gradiente radial âmbar e laranja acobreado (`radial-gradient(circle 320px at 50% 38%, rgba(225, 100, 32, 0.13) 0%, rgba(165, 62, 18, 0.05) 50%, rgba(5, 6, 9, 0.98) 90%)`), criando contraste elevado com os títulos brancos puros e ícones circulares.
  - Refinamento do Card 1 ("Marca que vende PRO") com gradiente centralizado âmbar/cobre combinado com o brilho térmico inferior e borda inferior iluminada em âmbar (`border-bottom: 1px solid rgba(255, 110, 40, 0.55)`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 56 — Efeito Stacking Cards (Empilhamento de Cartões / Sticky Scroll) no Portfólio**
  - Implementação de sistema moderno de empilhamento de cartões na seção `#portfolio` (`.works` e `.work`).
  - Posicionamento sticky (`position: sticky`) com escalonamento vertical progressivo (`top: 90px`, `125px` e `160px` no desktop; `75px`, `95px` e `115px` no mobile) e `overflow: visible` garantindo ancoragem perfeita.
  - Visual de profundidade 3D nos cartões `.work-card` com cantos de 24px, borda com linha de luz superior de horizonte (`border-top: 1px solid rgba(255, 255, 255, 0.24)`) e sombreamento profundo (`box-shadow: 0 -14px 35px rgba(0, 0, 0, 0.75), 0 35px 80px rgba(0, 0, 0, 0.95)`).
  - Script JavaScript dinâmico (`main.js`) com `requestAnimationFrame` para alta performance (60fps), calculando o overlap de rolagem entre cartões sucessivos:
    - Redução progressiva de escala de `1.0` para `0.94` (`scale(0.94)`) no cartão coberto.
    - Escurecimento gradual de luminosidade de `1.0` para `0.65` (`brightness(0.65)`), simulando sombra física projetada do cartão de cima.
    - Preenchimento da barra de progresso horizontal (`.work-progress i`) em gradiente âmbar quente.
    - Respeito à preferência do sistema por acessibilidade (`prefers-reduced-motion`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 57 — Refinamento Visual Fiel do Cabeçalho do Portfólio Conforme Imagem de Referência**
  - Implementação de clarão difuso atmosférico âmbar (`.portfolio-glow-bg` com `radial-gradient(ellipse 65% 55% at 50% 36%, rgba(225, 85, 20, 0.17) 0%, rgba(165, 55, 12, 0.05) 50%, transparent 75%)` e `filter: blur(28px)`) centralizado atrás do texto sobre fundo preto absoluto (`#000000`).
  - Calibração de `PORTFÓLIO` (`.portfolio-eyebrow`) em caixa alta, sem ponto ou badge, com tipografia display, tamanho 0.85rem, kerning expandido (`letter-spacing: 0.18em`) e cor âmbar suave (`#e55a20`).
  - Tipografia precisa do título display (`.portfolio-title`):
    - Linha 1: "Projetos selecionados" em branco puro (`#ffffff`) seguido por "que" em laranja vibrante (`#f76020`).
    - Linha 2: "acendem marcas." em nova linha (`display: block`) inteiramente em laranja vibrante (`#f76020`), com peso 700 e entrelinha 1.15.
  - Subtítulo (`.portfolio-text`) em cinza suave (`#9295a0`), entrelinha 1.65 e largura máxima de 660px com quebra harmoniosa em duas linhas.
  - Botão de ação (`.portfolio-btn`) em pílula perfeita (`border-radius: 999px`), gradiente vertical vermelho-laranja brasa (`linear-gradient(180deg, #f76327 0%, #db4611 100%)`), contorno suave de luz `1px solid rgba(255, 130, 60, 0.45)` e glow térmico inferior e ao redor (`box-shadow: 0 10px 30px rgba(235, 75, 20, 0.45), 0 0 20px rgba(255, 90, 31, 0.28)`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 58 — Padronização Visual Fiel dos Banners de Serviços Conforme Imagem de Referência**
  - Ajuste de fundo dos 3 cards (`.svc`) para preto profundo/grafite escuro (`#08090c`) com cantos de 24px, contorno fino sutil `1px solid rgba(255, 255, 255, 0.08)` e sombra volumétrica de profundidade (`box-shadow: 0 20px 45px -15px rgba(0, 0, 0, 0.85)`).
  - Caixas squircle de ícones (`.icon-box` 52x52px, raio 14px) com degradê radial âmbar escuro (`radial-gradient(circle at 45% 45%, #2a1308 0%, #150904 70%, #0c0502 100%)`), contorno fino `1px solid rgba(255, 110, 40, 0.45)`, glow térmico suave e ícones vetoriais em laranja acobreado (`#ff7a3d`): Card 1 (janela de browser), Card 2 (círculo, quadrado e triângulo geométricos) e Card 3 (megafone/alto-falante).
  - Badges de categoria no topo direito (`.pill--dark`) em formato pílula arredondada (`border-radius: 999px`) com fundo translúcido escuro, borda fina e texto em cinza claro (`#a0a2ac`).
  - Linha divisória horizontal nítida e sutil `<hr class="rule">` (`border-top: 1px solid rgba(255, 255, 255, 0.07)`) separando o título do texto descritivo em todos os 3 cards.
  - Pílulas de entregáveis e prazos (`.pills--strong li`) em formato pílula com fundo escuro grafite (`#111217`), borda sutil, destaque numérico em laranja vibrante (`#ff551b; font-weight: 700;`) e texto descritivo em branco/cinza claro (`#ffffff; font-weight: 600;`).
  - Lista de diferenciais com ícones de selo recortado estrelado em laranja vibrante (`#ff5a1f`) e textos nítidos em branco puro (`#ffffff; font-weight: 600;`).
  - **Rosa dos Ventos Astronômica Dourada no Card 3:** posicionada com extrema precisão sobreposta atrás do título "Lançamento integrado" (`.svc-compass-wrap` com `position: absolute; top: 10px; left: 135px; width: 185px; height: 185px;` e `transform: translate(-50%, 0);`), com círculos concêntricos e eixos de mira astronômicos em dourado suave (`#c49a45`), estrela central de 4 pontas em gradiente nobre de ouro antigo (`#d8b26e` a `#8a6320`) e halo dourado difuso, idêntica à imagem enviada pelo usuário.
  - Botão "Agendar conversa" (`.btn--svc`) em pílula com gradiente vermelho-laranja brasa e glow térmico inferior e perimétrico.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 59 — Implementação da Grade 3x2 Dark Modern SaaS Feature Cards Conforme Imagem 2**
  - Configuração do canvas background em preto profundo puro (`#000000`).
  - Container dos cards (`.feature`) em ultra-dark charcoal (`#0d0d0d`) com cantos arredondados de 20px (`border-radius: 20px`) e padding simétrico (`2.1rem 1.95rem 2.2rem`).
  - Iluminação atmosférica difusa em degradê radial saindo do canto superior esquerdo atrás do círculo do ícone em tons âmbar quente e laranja queimado (`radial-gradient(circle 260px at 46px 46px, rgba(255, 107, 0, 0.17) 0%, rgba(135, 45, 0, 0.07) 42%, rgba(51, 21, 0, 0.02) 70%, transparent 95%)`), dissipando-se em direção ao canto inferior direito.
  - Card 1 (`.feature--hot`) com destaque térmico: além do glow no topo esquerdo, reflexo acobreado na base e borda inferior âmbar (`border-bottom: 1px solid rgba(255, 110, 40, 0.52)`).
  - Borda ultra-fina de 1px com degradê sutil: realce superior sutilmente iluminado em tom âmbar/avermelhado (`border-top: 1px solid rgba(255, 120, 50, 0.28)`), desvanecendo para cinza escuro translúcido nas laterais e base (`border: 1px solid #1f2024`).
  - Top bar com botão circular (`.icon-orb` de 48x48px, raio 50%) com contorno em laranja quente (`border: 1px solid rgba(255, 110, 40, 0.52)`), fundo em degradê escuro âmbar e ícone em dourado/laranja quente (`#ffa44a`), e seta diagonal minimalista `↗` no canto superior direito (`stroke: #8e8e93`).
  - Títulos display nítidos em branco puro (`#ffffff; font-weight: 700; font-size: 1.25rem;`), acompanhados por badge `PRO` em pílula retangular laranja brilhante (`#ff551b`) com tipografia branca pura (`color: #ffffff; font-weight: 700;`) e glow térmico idêntico à Foto 2.
  - Subtítulo conciso em cinza médio (`#8a8c96`) logo abaixo do título, linha divisória `<hr class="rule">` e texto descritivo suave (#8e8e93) com entrelinha 1.62.
  - Grade 3x2 responsiva com gap de 1.5rem, adaptando-se para 2 colunas em telas médias e 1 coluna em mobile.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 60 — Criação do Ícone Vetorial Retículo Tático HUD Sci-Fi e Rosa dos Ventos de Alta Precisão**
  - Criação do arquivo vetorial mestre independente `assets/img/compass-rose-hud.svg` de acordo com a especificação técnica geométrica e visual:
    - Fundo preto sólido (`#000000`) de alto contraste.
    - Estrela sólida de 4 pontas no centro com bordas côncavas curvas em gradiente laranja-âmbar brilhante nobre (`#fedc82` a `#945d0e`) e filtro de luminescência âmbar sutil.
    - Halo de luminescência radial suave central (`r=48`).
    - Anel interno concêntrico pontilhado (`r=32`, `stroke-dasharray="2.5, 3.5"`).
    - Círculo intermediário contínuo fino tangente às 4 pontas da estrela (`r=58`, `stroke-width="1.2"`).
    - Anel concêntrico externo pontilhado (`r=76`, `stroke-dasharray="3, 4"`).
    - Eixos ortogonais longos cruzados vertical e horizontal (`184px`).
    - Linhas diagonais técnicas de mira e referência a 45 graus (`175px`).
  - Atualização completa com a nova geometria vetorial padronizada em todas as 3 instâncias da Rosa dos Ventos no site:
    1. Hero Section (`.spark-compass-wrap`) sobreposta ao card de vídeo preview.
    2. Seção Como Trabalhamos (`.step-compass-wrap`) na Etapa 3 ("Entrega sem atrito").
    3. Seção Serviços (`.svc-compass-wrap`) no Card 3 ("Lançamento integrado").
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 com HTTP 200 OK tanto na raiz quanto na rota do asset vetorial `/assets/img/compass-rose-hud.svg`.

- [x] **Passo 61 — Cabeçalho Moderno Dark Mode Minimalista da Seção Serviços (Idêntico à Imagem 2)**
  - Configuração do fundo em preto puro absoluto (`#000000`) com iluminação difusa avermelhada/laranja no canto superior esquerdo (`radial-gradient` de 650px e pseudo-elemento `.head--services::before` com glow térmico de 280x150px e blur de 28px).
  - Implementação do badge superior em pílula arredondada (`.tag-status--services`):
    - Fundo cinzento-escuro (`rgba(18, 20, 26, 0.88)`), cantos arredondados de 10px e rebordo sutil `1px solid rgba(255, 255, 255, 0.12)`.
    - Destaque no topo com borda iluminada `border-top: 1px solid rgba(255, 120, 45, 0.85)` e gradiente elíptico âmbar superior com sombra sutil.
    - Ponto quadrado cor de laranja à esquerda (`.dot` com 7x7px, `#ff5a1f` e glow de 8px).
    - Texto "Serviços" em branco puro (`#ffffff`) com peso 500.
  - Título principal (`.title--services`) em tipografia sans-serif grande (`clamp(2.45rem, 4.8vw, 3.85rem)`), peso 700 e entrelinha 1.12 em duas linhas nítidas:
    - Linha 1: "Serviços completos," em branco brilhante (`#ffffff`).
    - Linha 2: "do conceito ao código." em cinzento prateado com opacidade reduzida (`#8c8e98`), sem degradê alaranjado.
  - Subtítulo (`.text--services`): texto em cinzento suave (`#9294a0`), tamanho 1.05rem, entrelinha 1.62 e largura máxima de 630px para quebra elegante em duas linhas.
  - Alinhamento à esquerda (`text-align: left`), espaçamento generoso e hierarquia visual refinada idêntica à Imagem 2 de referência.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 62 — Cabeçalho Hero Dark Mode Moderno e Centralizado da Seção Portfólio**
  - Fundo da seção `#portfolio` calibrado em preto profundo `#0B0B0B` com gradiente radial sutil âmbar/laranja escuro ao fundo (`.portfolio-glow-bg` de 840px com desfoque de 32px).
  - Composição e profundidade: implementação de silhuetas geométricas poligonais nas laterais (`.portfolio-backdrop` com `.portfolio-wing--left` e `.portfolio-wing--right`), com corte diagonal em perspectiva sutil (`clip-path`), borda superior iluminada `border-top: 1px solid rgba(255, 120, 50, 0.42)` e halo difuso guiando o olhar diretamente para o centro.
  - Badge superior estilo cápsula (`.tag-status--portfolio`):
    - Formato de pílula arredondada (`border-radius: 999px`) em fundo escuro semi-transparente (`rgba(18, 19, 24, 0.85)`).
    - Borda sutil de 1px com iluminação âmbar projetada na parte superior `border-top: 1px solid rgba(255, 125, 45, 0.88)` e glow suave.
    - Ponto indicador (bullet) laranja brilhante circular à esquerda (`#ff5a1f` com glow de 8px).
    - Texto: "Portfólio" em tipografia sans-serif limpa e clara em branco puro (`#ffffff`).
  - Bloco tipográfico centralizado:
    - Título (`.portfolio-title`): "Projetos selecionados que acendem marcas." com peso visual forte (700 bold), branco puro (`#FFFFFF`) e espaçamento elegante em duas linhas.
    - Subtítulo/descrição (`.portfolio-text`): "Uma seleção de trabalhos recentes, de lojas autorais a escritórios de serviço, em setores diferentes." em cinza suave (`#A1A1AA`) e entrelinha 1.65 para contraste hierárquico impecável.
  - Botão CTA primário (`.portfolio-btn`):
    - Botão arredondado (`border-radius: 999px`) com gradiente quente em tons de vermelho/laranja (`#E04423` para `#D13514`).
    - Texto: "Pedir o portfólio completo" em branco puro e peso médio (`font-weight: 500`).
    - Efeito box-shadow marcante com drop shadow/glow alaranjado difuso projetado logo abaixo do botão (`box-shadow: 0 12px 32px rgba(224, 68, 35, 0.55), 0 0 24px rgba(209, 53, 20, 0.35)`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 63 — Cabeçalho Hero Dark Mode Minimalista da Seção Lance Seu Projeto (Showcase)**
  - Background preto profundo absoluto (`#000000`).
  - Moldura de profundidade com silhuetas e painéis angulares trapezoidais nas laterais (`.showcase-wing--left` e `.showcase-wing--right`), com gradiente sutil marrom-acobreado/terracota escuro, corte via `clip-path` e borda superior iluminada `border-top: 1px solid rgba(208, 59, 30, 0.42)`, guiando o olhar ao centro.
  - Pill Badge Superior (`.tag-status--showcase`):
    - Fundo preto translúcido (`rgba(14, 15, 18, 0.85)`), borda sutil de 1px e rim light/glow avermelhado na borda superior `border-top: 1px solid rgba(255, 115, 45, 0.88)` com halo âmbar superior.
    - Ponto quadrado alaranjado (`#FF5722` com glow) à esquerda.
    - Texto "Lance seu projeto" em branco puro com peso 500.
  - Título Principal (`.showcase-title`):
    - "O parceiro criativo / de marcas em crescimento.", tipografia moderna sem serifa (Inter/SF Pro Display), peso medium (500), cor branca pura (`#FFFFFF`), entrelinha 1.14 e grande destaque em duas linhas, sem cores alaranjadas.
  - Subtítulo (`.showcase-text`):
    - "Do primeiro esboço ao site no ar, com acompanhamento próximo e um time que responde rápido.", texto em cinza claro (`#A1A1AA`), peso regular (400) e largura calibrada de 660px.
  - Botão CTA Principal (`.showcase-btn`):
    - Formato pílula/arredondado (`border-radius: 999px`), cor terracota/vermelho-alaranjado vibrante (`#D03B1E`), texto "Ver como trabalhamos" em branco e peso 500.
    - Sombra difusa marcante com glow alaranjado projetada abaixo do botão (`box-shadow: 0 12px 32px rgba(208, 59, 30, 0.58), 0 0 22px rgba(255, 87, 34, 0.35)`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 64 — Implementação Fiel dos Cards de Planos e Serviços Dark Mode (Idêntico à Foto 2)**
  - Fundo da página e seção mantido em preto profundo (`#050505` / `#0a0a0a`).
  - Superfície dos Cards (`.svc`):
    - Fundo em gradiente radial sutil (`#141416` no centro decaindo suavemente para `#0d0d0f` nas bordas).
    - Cantos arredondados acentuados (`border-radius: 24px`) e borda suave `1px solid rgba(255, 255, 255, 0.08)`.
    - Top Rim Light com gradiente/linha discreta na borda superior refletindo luminosidade alaranjada (`border-top: 1px solid rgba(255, 87, 34, 0.28)`) e glow interno suave.
    - Remoção de elevação indesejada no hover mantendo estabilidade 100% estática.
  - Cabeçalho dos Cards:
    - Card 1 ("Site sob medida"): ícone squircle de janela de navegador/código com contorno fino alaranjado; badge à direita em pílula translúcida com texto "Site".
    - Card 2 ("Identidade completa"): ícone squircle de formas vetoriais/marca com traço alaranjado; badge à direita com texto "Marca".
    - Card 3 ("Lançamento integrado"): ícone squircle de megafone/comunicação com traço alaranjado; badge à direita com texto "Campanha".
  - Tipografia & Hierarquia de Preços/Prazos:
    - Título H3 bold branco puro (`#FFFFFF; font-weight: 700;`).
    - Textos descritivos em cinza neutro legível (`#A1A1AA; line-height: 1.6`).
    - Pílulas de metadados em efeito de vidro (`backdrop-filter: blur(8px)`, `background: rgba(255, 255, 255, 0.05)`) com destaque nos valores numéricos em branco puro (`#FFFFFF; font-weight: 700`) e textos secundários em cinza neutro (`#71717A`):
      - Card 1: `R$ 24 mil` / projeto e `5–7 semanas`.
      - Card 2: `R$ 16 mil` / projeto e `3–4 semanas`.
      - Card 3: `R$ 12 mil` / projeto e `2–3 semanas`.
  - Lista de Benefícios (Checks):
    - Marcador com selo dentado/escudo laranja vibrante (`#FF5722`) e check interno.
    - Textos em branco puro (`#FFFFFF; font-weight: 500; line-height: 1.6`).
  - Botão CTA no Card 3 (`.btn--svc`):
    - Formato pílula com gradiente quente em tons de vermelho/laranja escuro (`#E04423` para `#D13514`), texto "Agendar conversa" em branco puro e iluminação difusa externa com glow alaranjado (`box-shadow: 0 0 24px rgba(230, 74, 25, 0.35)`).
  - Grafismo Decorativo Rosa dos Ventos / Bússola no Card 3 (`.svc-compass-wrap`):
    - Posicionado de forma absoluta no canto inferior direito (`bottom-right`, `bottom: -55px; right: -55px; pointer-events: none; overflow: hidden`), idêntico à Foto 2.
    - Ilustração vetorial com círculos concêntricos pontilhados e contínuos, eixos ortogonais e diagonais, e estrela central de 4 pontas preenchida com gradiente laranja suave (`#svc-bottom-star`), emitindo glow difuso avermelhado no fundo.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 65 — Implementação da Galeria em Grid Interativa Dark Mode com 2 Linhas e Rolagem Horizontal (Idêntico à Foto 2)**
  - Fundo da seção calibrado em dark mode `#0a0a0a`.
  - Estrutura da Galeria (`.showcase-gallery`):
    - Grid layout com 4 colunas e 2 linhas (8 cards no total), divididos em duas sequências horizontais fluídas e responsivas.
    - Proporção 1:1 (quadrado perfeito) para todos os 8 cards em qualquer resolução de tela.
    - Cantos arredondados suaves (`border-radius: 18px`), `overflow: hidden` e contorno sutil `1px solid rgba(255, 255, 255, 0.06)`.
    - Espaçamento (gap) de 16px uniforme entre colunas e entre as sequências de banners.
  - Imagens com Preenchimento Completo:
    - Linha 1: 1: Cerâmica/torno, 2: Café filtrado na xícara, 3: Fachada de loja à noite, 4: Mesa de trabalho do estúdio.
    - Linha 2: 5: Colar de ouro sobre linho, 6: Ciclista ao entardecer, 7: Tecidos dobrados em terracota, 8: Arquitetura com luz rasante.
    - Todas com `object-fit: cover` e dimensões nítidas.
  - Duas Barras de Rolagem Horizontais Dedicadas:
    - Uma barra de rolagem horizontal personalizada em cada sequência de banners (`#showcase-row-1` e `#showcase-row-2`).
    - Scrollbar estilizada com trilha translúcida fina (`height: 6px`) e polegar suave com feedback visual ao hover.
  - Remoção de Rolagem Infinita e Efeito de Sobresaliência:
    - Removidas as animações contínuas de marquee e nós duplicados.
    - Eliminado o efeito de zoom agressivo/sobresalência no hover.
  - Física & Interação Antigravity:
    - Levitação sutil ao hover (`transform: translateY(-4px)` com física amortecida e sombra volumétrica).
    - Resposta elástica suave ao clique/pressão (`transform: translateY(-1px) scale(0.985)`).
    - Arraste interativo com inércia física (drag-to-scroll elástico com atrito dinâmico em `main.js`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 66 — Implementação do Hero Section Banner Dark Mode da Seção Planos (Idêntico à Foto 2)**
  - Fundo da seção calibrado em preto profundo `#0A0A0A`.
  - Ambient Top Warm Orange Glow: iluminação difusa sutil âmbar/laranja projetada no topo direito (`.plans-glow-bg` com desfoque de 32px).
  - Polígono Geométrico Angular em Dark Glassmorphism no Canto Direito (`.plans-wing--right`): corte angular via `clip-path`, borda superior iluminada `border-top: 1px solid rgba(255, 255, 255, 0.14)`, desfoque e fusão suave com o fundo.
  - Alinhamento do cabeçalho estritamente à esquerda (`text-align: left`).
  - Dark Glassmorphic Rounded Pill Badge (`.tag-status--plans`):
    - Pílula translúcida com cantos arredondados, fundo escuro semi-transparente e borda superior iluminada em tom âmbar.
    - Ponto indicador (bullet) laranja neon brilhante (`#FF5722` com glow) à esquerda.
    - Texto crisp "Planos" em branco puro.
  - Título Principal Monocromático de Alto Contraste (`.plans-title`):
    - Linha 1: "Planos mensais para manter" em branco puro (`#FFFFFF`).
    - Linha 2: "sua marca sempre acesa." em branco puro (`#FFFFFF`), eliminando a cor laranja anterior conforme a Foto 2.
    - Tipografia sans-serif moderna de alto impacto, peso 600 e entrelinha compacta de 1.14.
  - Subheadline (`.plans-text`): texto em cinza neutro suave (`#A1A1AA`), entrelinha 1.62 e largura de 630px.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 67 — Remoção do Fundo Alaranjado da Seção Portfólio**
  - Remoção total do clarão difuso alaranjado/avermelhado de fundo (`.portfolio-glow-bg` removido do HTML e desativado no CSS).
  - Fundo da seção `.portfolio` ajustado para preto puro absoluto (`#000000`).
  - Painéis/asas laterais em perspectiva (`.portfolio-wing--left` e `.portfolio-wing--right`) calibradas para degradê neutro ultra-escuro (`rgba(255, 255, 255, 0.04)` a transparente) com borda superior neutra `border-top: 1px solid rgba(255, 255, 255, 0.12)`, eliminando qualquer sombra ou halo térmico alaranjado residual.
  - Preservados intactos todos os demais elementos visuais: pill badge "Portfólio" com ponto laranja, título monocromático branco puro, subtítulo cinza e botão CTA com gradiente e glow.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 68 — Refinamento Ultra-Minimalista do Hero UI de Planos (Idêntico à Foto 2)**
  - Fundo calibrado em deep pitch-black (`#050505`), com eliminação completa de halos/clarões difusos no topo.
  - Polígono geométrico angular reposicionado com precisão no canto inferior direito (`bottom right`), com corte via `clip-path`, sombra angular suave e borda superior iluminada `border-top: 1px solid rgba(255, 255, 255, 0.16)`.
  - Layout alinhado à esquerda com espaço negativo limpo e acabamento premium SaaS.
  - Dark glassmorphic rounded pill badge:
    - Borda fina com ambient orange top-edge glow (`border-top: 1px solid rgba(255, 115, 45, 0.88)`).
    - Ponto indicador quadrado laranja neon vibrante (`#FF5722` de 7x7px com glow).
    - Texto crisp "Planos" em branco puro.
  - Headline massiva sans-serif em alto contraste:
    - Linha 1: "Planos mensais para manter" em branco puro (`#FFFFFF`).
    - Linha 2: "sua marca sempre acesa." em gradiente cinza-prateado suave (`linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 65%, #8E8E93 100%)`).
  - Subtítulo conciso em cinza claro limpo (`#A1A1AA`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 69 — Implementação Fiel dos Pricing Cards de Planos Dark Mode em 2 Colunas (Idêntico à Foto 2)**
  - Background da seção calibrado em preto absoluto (`#000000`).
  - Cards em 2 colunas com superfície cinza grafite fosco (`#141416` a `#0d0d0f`), cantos arredondados de 24px (`rounded-2xl`), stroke ultrafino cinza escuro e iluminação de topo rim light sutil.
  - Card 1 (Essencial):
    - Squircle escuro com ícone minimalista de chama alaranjada e badge "Mais escolhido".
    - Título "Essencial" e valor principal "R$ 3.900 / mês" em negrito branco.
    - Preço original "R$ 4.600" riscado por uma linha diagonal alaranjada vibrante (`.price-diagonal-slash`).
    - Descrição em cinza suave e pílulas translúcidas "8 peças por mês" e "2 rodadas de ajuste" com números destacados em branco puro.
    - 5 benefícios com ícones de selo/escudo alaranjado e textos em branco puro.
    - Botão CTA pill-shaped em gradiente terracota/laranja com glow âmbar inferior e texto "Agendar conversa".
  - Card 2 (Estúdio):
    - Squircle com ícone outline de diamante/joia alaranjado e badge "Recomendado".
    - Título "Estúdio" e valor principal "R$ 8.900 / mês" em negrito branco.
    - Descrição e pílulas translúcidas "24 peças por mês" e "Ajustes sem limite" (com 'Ajustes' em negrito).
    - 5 benefícios com ícones de selo/escudo alaranjado e textos em branco puro.
    - Marca d'água geométrica da rosa dos ventos / estrela de 4 pontas no canto inferior direito com retículos náuticos e brilho central alaranjado difuso.
    - Botão CTA pill-shaped idêntico ao Card 1 com glow âmbar inferior e texto "Agendar conversa".
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 70 — Hero Section Dark Mode Ultrawide 21:9 em Depoimentos (Idêntico à Foto 2)**
  - Fundo preto absoluto (`#000000`) em proporção ultrawide 21:9 com blocos geométricos angulares em perspectiva nas laterais em tom marrom-cobre escuro (`.testimonials-wing--left` e `.testimonials-wing--right`) com borda superior iluminada `1px solid rgba(255, 110, 64, 0.22)`.
  - Pill badge centralizada no topo (`.tag-status--testimonials`) com fundo cinza-escuro translúcido, borda sutil, ponto quadrado laranja vibrante (`#FF5722` de 6x6px com glow) e texto "Depoimentos".
  - Título tipográfico centralizado em destaque 100% branco (`#FFFFFF`), sem texto laranja, em duas linhas elegantes ("O que dizem as marcas" / "que passaram por aqui.").
  - Subtítulo em cinza claro minimalista (`#A1A1AA`): "Clientes contam como foi trabalhar com o estúdio e o que mudou depois do lançamento.".
  - Fileira horizontal de 4 cartões quadrados com cantos arredondados escuros (`.brand-squircle-card` de 82x82px, cantos de 20px, fundo `#111216` e borda suave) com ícones monocromáticos abstratos fiéis à Foto 2:
    1. Cúpula com base horizontal inferior.
    2. Ondas sinuosas duplas.
    3. Losango vazado com cantos nítidos.
    4. Grade 2x2 de círculos simétricos.
  - Botão pill-shape central na base (`.testimonials-btn`) em vermelho-alaranjado queimado (`#d84315`) com texto "Ver portfólio" e iluminação difusa (*orange glow*) volumétrica projetada logo abaixo.
  - Eliminação da animação contínua de marquee/carrossel anterior (`.marquee--logos`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 71 — Barras de Rolagem Horizontais no Topo e Base e Ampliação Lateral da Galeria Vitrine (Idêntico à Foto 2)**
  - Posicionamento de duas barras de rolagem horizontais dedicadas:
    - Linha 1 (`#showcase-row-1`): barra de rolagem horizontal posicionada na parte de **cima** (topo da sequência) através de espelhamento vertical invertido no container e no track.
    - Linha 2 (`#showcase-row-2`): barra de rolagem horizontal posicionada na parte de **baixo** (base da sequência).
  - Ampliação da largura dos banners (`.showcase-grid-track` com `grid-template-columns: repeat(4, clamp(340px, 30.5vw, 440px))`):
    - Exatamente 3 banners cabem inteiros na largura do viewport visível em desktop e telas médias.
    - Os dois banners da extremidade direita (o 4º banner da linha 1 e o 4º banner da linha 2) ficam parcialmente cortados na lateral, revelando-se completamente somente quando a barra de rolagem for acionada (ou via drag-to-scroll elástico), idêntico à Foto 2 enviada pelo usuário.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 72 — Remoção Total de Manchas Alaranjadas do Fundo em Serviços (Fundo Preto Puro #000000)**
  - Fundo da seção `.sec.services` configurado como preto absoluto puro (`background-color: #000000; background-image: none;`), eliminando o gradiente radial avermelhado/laranja anterior.
  - Desativação completa do pseudo-elemento de iluminação difusa `.head--services::before` (`display: none;`), removendo o foco de luz alaranjada no topo/fundo esquerdo.
  - Remoção da projeção de halo alaranjado na badge `.tag-status--services` (`box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);`), impedindo qualquer vazamento de luz no fundo escuro.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 73 — Calibração dos Efeitos de Fundo do Portfólio de Cinza para Alaranjado/Marrom-Cobre (Idêntico à Foto 2)**
  - Atualização dos painéis poligonais angulares laterais de profundidade do Portfólio (`.portfolio-wing--left` e `.portfolio-wing--right`) substituindo o gradiente cinza/neutro por degradê marrom-cobre / terracota alaranjado escuro quente (`rgba(55, 22, 12, 0.5)` a `rgba(32, 12, 6, 0.22)`).
  - Linha de topo iluminada ajustada para o tom âmbar/alaranjado do design system (`border-top: 1px solid rgba(208, 59, 30, 0.42)`) com sombra difusa suave (`drop-shadow(0 0 35px rgba(208, 59, 30, 0.12))`), idêntica à Foto 2 de referência.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 74 — Redução das Dimensões do Efeito Cinza Lateral em Por Que a Brasa (Idêntico à Foto 2)**
  - Redução da escala, altura e posição do efeito trapezoidal cinza da lateral direita (`.benefits-wing--right`):
    - Topo rebaixado de `0` para `clamp(80px, 9.5vw, 140px)`, alinhando o início do corte superior à altura da segunda linha do título e liberando respiro preto ao redor da badge e da primeira linha.
    - Largura reduzida de `clamp(380px, 45vw, 680px)` para `clamp(240px, 26vw, 420px)`, evitando sobreposição indesejada no centro.
    - Altura compactada para `clamp(240px, 26vw, 380px)` com degradê cinza sutil translúcido (`rgba(255, 255, 255, 0.05)` a `rgba(20, 22, 28, 0.28)`) e máscara progressiva, exatamente conforme a Foto 2 de referência.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 75 — Calibração do Ícone de Marca que Vende com Eixos em L e Tendência Ascendente (Idêntico à Foto 1)**
  - Atualização do SVG do Card 1 em Diferenciais ("Marca que vende PRO"): remoção do retângulo/moldura externa e implementação dos eixos cartesianos em L com linha de tendência em zigue-zague e ponta de seta `↗` (`d="M5 6v13h13 m8 14 3-3 2 2 4-4 M14 9h3v3"`).
  - Traço calibrado com `stroke-width="2.2"` em tom dourado/âmbar nobre (`#ffa44a`) dentro do botão circular esférico `.icon-orb` com contorno fino âmbar e fundo degradê escuro, perfeitamente alinhado à Foto 1 e Foto 2 de referência.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 76 — Padronização Fiel dos Banners de Como Trabalhamos Conforme Foto 2**
  - Remoção completa das linhas divisórias horizontais (`<hr class="rule">`) abaixo dos títulos em todos os 3 banners de etapas, proporcionando leitura fluida e respiro limpo.
  - Fundo dos banners `.step` padronizado em preto grafite escuro uniforme (`#0d0e12`) sem gradientes ou manchas avermelhadas no topo direito.
  - Caixas de ícones em squircle translúcido escuro (`rgba(255, 255, 255, 0.03)`) com contorno fino âmbar `1px solid rgba(255, 110, 40, 0.45)` (lupa na etapa 1, e caneta/pena inclinada idêntica nas etapas 2 e 3).
  - Rosa dos ventos na etapa 3 calibrada com estrela central de 4 pontas em terracota/laranja vibrante sólida (`#ff7043` a `#bf360c`) com halo térmico difuso no centro.
  - Botão de CTA da etapa 3 atualizado para formato de pílula perfeita (`border-radius: 9999px`) em gradiente terracota quente (`#e04423` a `#c43212`) com glow difuso volumétrico, exatamente idêntico à Foto 2.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 77 — Posicionamento Fiel do Efeito Trapézio Cinza no Cabeçalho de Planos (Idêntico à Foto 1)**
  - Reposicionamento do container `.plans-backdrop` e da asa geométrica `.plans-wing--right` para a lateral direita do cabeçalho de Planos (`top: clamp(140px, 15vw, 210px); width: clamp(360px, 38vw, 620px); height: clamp(340px, 36vw, 560px)`).
  - Alinhamento da linha superior iluminada (`border-top: 1px solid rgba(255, 255, 255, 0.2)`) com a segunda linha do título display ("sua marca sempre acesa."), descendo diagonalmente em perspectiva com corte via `clip-path: polygon(32% 0, 100% 0, 100% 100%, 0% 100%)`.
  - Superfície dark glassmorphism em degradê cinza translúcido fosco com desfoque e fade progressivo na base, exatamente idêntico à Foto 1 de referência.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 78 — Remoção da Barra de Rolagem Superior, Posicionamento na Base e Galeria de Tela a Tela Lateralmente (Conforme Foto 2)**
  - Remoção completa da barra de rolagem horizontal do topo da Linha 1 (`#showcase-row-1`), retirando o `scaleY(-1)` e despoluindo a margem superior da vitrine.
  - Posicionamento da barra de rolagem horizontal na base inferior da galeria (`#showcase-row-2`), com trilha fina e thumb translúcido acetinado.
  - Sincronização dinâmica de rolagem bidirecional em tempo real entre Linha 1 e Linha 2 em `main.js`, garantindo navegação integrada e fluida.
  - Expansão da galeria `.showcase-gallery` para layout *full-width* de tela a tela lateralmente (`width: 100%; max-width: 100%; padding: 0 clamp(12px, 1.8vw, 24px)`).
  - Calibração do grid track `.showcase-grid-track` com 4 colunas proporcionais cobrindo de ponta a ponta a viewport lateralmente no desktop (`grid-template-columns: repeat(4, minmax(260px, 1fr))`), exatamente idêntico à Foto 2.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 79 — Padronização Fiel da Seção de Planos com Fundo Preto Puro e Rosa dos Ventos Perfeita (Conforme Foto 2)**
  - Fundo da seção `.sec.pricing` padronizado em preto absoluto puro (`#000000`), removendo o trapézio/polígono cinza do fundo dos cards (`.plans-backdrop` desativado).
  - Posicionamento da marca d'água da rosa dos ventos / estrela de 4 pontas no Card 2 (`.plan-compass-wrap`) no canto inferior direito (`bottom: -15px; right: -15px; width: 230px; height: 230px;`), com o centro da estrela perfeitamente visível dentro do card, alinhado atrás do botão CTA.
  - Calibração dos botões "Agendar conversa" (`.plan-btn`) com gradiente terracota suave (`#D83D1E` a `#C13014`), borda fina e iluminação difusa controlada na base.
  - Linha diagonal alaranjada do valor riscado R$ 4.600 (`.price-diagonal-slash`) perfeitamente alinhada.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 80 — Padronização Fiel de Depoimentos: 4 Ícones das Marcas e Grid 3x2 sem Divisórias (Conforme Foto 2)**
  - Atualização dos 4 cartões com ícones geométricos em `.testimonials-brands-grid`: 1º Círculo/Anel (O), 2º Triângulo sólido (▲), 3º Cúpula com base, 4º Ondas duplas sinuosas (≈), perfeitamente fiéis à Foto 2.
  - Confinamento das asas em marrom-cobre (`.testimonials-wing`) no cabeçalho em perspectiva, sem invadir o grid de depoimentos.
  - Remoção de todas as linhas divisórias horizontais (`<hr class="rule">`) dentro dos 6 cards de depoimentos.
  - Estruturação limpa da identificação em duas linhas: `Nome • Cargo` em cima e `Empresa` em baixo com tipografia e cores equilibradas.
  - Linha de base `.tray` calibrada com glow térmico central âmbar.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 81 — Barra de Rolagem Horizontal de Cor Branca na Base dos Banners**
  - Implementação da barra de rolagem horizontal em branco puro (`#ffffff`) na parte de baixo dos banners da vitrine (`#showcase-row-2`), tanto na scrollbar nativa Webkit/Firefox quanto no elemento visual interativo (`#showcase-scrollbar-track` com `#showcase-scrollbar-thumb`).
  - Trilha horizontal translúcida sutil com thumb em branco sólido brilhante com sombra volumétrica acetinada.
  - Calibração de `.showcase-grid-track` com banners amplos (`clamp(340px, 28.5vw, 460px)`) para ativação suave da rolagem horizontal.
  - Implementação em `main.js` de arraste e clique interativo no thumb e na trilha, sincronizado com a Linha 1 em tempo real.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 82 — Barra de Rolagem Horizontal de Cor Branca na Base da Linha 1 de Banners**
  - Implementação da barra de rolagem horizontal em branco puro (`#ffffff`) na parte de baixo dos banners da Linha 1 da vitrine (`#showcase-row-1`).
  - Criação do elemento visual dedicado `#showcase-scrollbar-track-1` com `#showcase-scrollbar-thumb-1` logo abaixo da Linha 1 e identificação correspondente `#showcase-scrollbar-track-2` na Linha 2.
  - Atualização do CSS (`style.css`) unificando as regras para `#showcase-row-1` e `#showcase-row-2`: scrollbar nativa branca com thumb acetinado `#ffffff` e trilha translúcida `rgba(255, 255, 255, 0.12)`.
  - Atualização do script (`main.js`) com a função modular `setupCustomScrollbar`, garantindo cálculo de rolagem, arraste (*drag-to-scroll*) do thumb e clique na trilha para ambas as fileiras.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 83 — Remoção de Efeitos e Banners em Grid 100% Estático (Idêntico à Foto)**
  - Remoção de todas as barras de rolagem (tracks customizados `#showcase-scrollbar-track-1` e `#showcase-scrollbar-track-2` removidos de `index.html`, CSS e JS).
  - Configuração de `.showcase-grid-track` com `display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; width: 100%;` exibindo perfeitamente os 8 cards em 4 colunas x 2 linhas fixas e simétricas.
  - Desativação completa de todos os efeitos dinâmicos de levitação, zoom ou sombra no hover/active (`cursor: default; transform: none; transition: none;`).
  - Remoção dos event listeners de drag/inércia/scroll no `main.js`.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 84 — Reformulação da Seção FAQ para Layout Split em 2 Colunas (Idêntico à Foto 2)**
  - Reestruturação do container `.faq-in` com CSS Grid de 2 colunas (`display: grid; grid-template-columns: minmax(280px, 360px) 1fr; gap: clamp(36px, 5.5vw, 84px);`).
  - Coluna da Esquerda (Cabeçalho):
    - Dark rounded pill badge (`.tag-status--faq`) com bullet quadrado laranja neon (`#ff5722` com glow) e texto "FAQ" em branco puro.
    - Título massivo em duas linhas ("Perguntas" / "frequentes.") 100% branco puro (`#ffffff`), eliminando o texto laranja anterior.
    - Subtítulo em cinza claro (`#a1a1aa`) com quebra fluida e alinhamento à esquerda.
  - Coluna da Direita (Grid de 6 Acordeões):
    - Cartões escuros (`#0d0e12`) com borda suave (`rgba(255, 255, 255, 0.07)`), números destacados em laranja vibrante (`#ff5722`) e perguntas em branco puro com ícone de cruz (`+`).
  - Fundo em preto absoluto (`#000000`) e responsividade fluida para mobile e tablet.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 85 — Reformulação da Seção CTA (Contato) com Gradiente Térmico e Tipografia Monocromática (Idêntico à Foto 2)**
  - Fundo do card `.cta-card` com gradiente radial térmico acobreado no topo direito (`radial-gradient(circle 600px at 84% 18%, ...)`), cantos arredondados de 32px e camada de iluminação cênica `.cta-glow`.
  - Inserção da dark rounded pill badge (`.tag-status--cta`) com bullet quadrado laranja neon (`#ff5722` com glow) e texto "Vamos conversar" em branco puro.
  - Título monocromático 100% branco puro (`#ffffff`) em duas linhas ("Cada projeto é uma brasa" / "que a gente acende junto."), eliminando a cor laranja da segunda linha.
  - Subtítulo em cinza claro (`#a1a1aa`) perfeitamente centralizado em 2 linhas.
  - Formulário inline com input pílula escuro e botão "Quero conversar" em gradiente terracota/laranja com glow suave.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 86 — Padronização Visual do Acordeão de FAQ Aberto (Idêntico à Foto 2)**
  - Fundo do card `.qa[open]` calibrado para preto absoluto (`#000000`).
  - Borda fina contínua em laranja vibrante (`rgba(255, 90, 31, 0.7)`) contornando o card aberto.
  - Ícone de abertura e fechamento `.qa-i` estilizado em **laranja vibrante (`#ff5722`)**:
    - Fechado: cruz/mais (`+`) nítido em laranja.
    - Aberto: transição geométrica com rotação de 45deg formando um **`✕` (fechamento)** em laranja vibrante idêntico à Foto 2.
  - Resposta `.text-sm` com largura confortável (`max-width: 640px`) e quebra em 3 linhas idêntica à imagem.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 87 — Desativação do Efeito de Rolagem no Cabeçalho do FAQ (Texto 100% Estático)**
  - Remoção de `position: sticky; top: 100px;` de `.faq-head`, definindo como `position: static;`.
  - O bloco contendo a pill badge "FAQ", o título "Perguntas frequentes." e o subtítulo permanece 100% estático no topo da seção, sem flutuar ou acompanhar a rolagem da página.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 88 — Calibração do Formato Widescreen e Efeitos Cênicos de Fundo do Banner de CTA (Idêntico à Foto 2)**
  - Reestruturação do formato do card `.cta-card` para proporção widescreen panorâmica (`width: 100%; max-width: 100%; box-sizing: border-box;`), preenchendo a amplitude horizontal do contêiner de 1240px com cantos arredondados de 32px (`border-radius: 32px;`).
  - Ajuste de padding vertical e horizontal balanceado (`padding: clamp(3.4rem, 5.2vw, 4.8rem) clamp(1.8rem, 4.5vw, 4.5rem);`) para eliminar a altura excessiva e estabelecer a exata proporção ultrawide/panorâmica da Foto 2.
  - Implementação do sistema de iluminação térmica e cênica de dois pontos no fundo do card:
    - **Foco Incandescente Primário (Topo Direito):** Gradiente radial acobreado vivo (`rgba(225, 78, 20, 0.62)`) associado à camada difusa `.cta-glow--right` (650px x 600px, blur de 52px), criando clarão térmico intenso no quadrante superior direito.
    - **Reflexo Atmosférico Secundário (Lado Esquerdo Médio):** Gradiente radial bronze suave (`rgba(140, 45, 14, 0.24)`) associado à camada difusa `.cta-glow--left` (520px x 520px, blur de 58px) a 15% do topo, conferindo profundidade atmosférica equilibrada à composição.
    - **Base & Centro Preto Profundo:** Gradiente linear vertical sutil de `#0e0f14` a `#07080a` garantindo contraste visual para o título e textos centrais.
  - Acabamento de borda com contorno fino de 1px em `rgba(255, 255, 255, 0.08)`, rim light superior acobreado `border-top: 1px solid rgba(255, 115, 45, 0.38)` e projeção de sombra `box-shadow: 0 24px 70px rgba(0, 0, 0, 0.95), 0 0 55px rgba(210, 75, 20, 0.14)`.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 89 — Reformulação do Card de Showreel no Rodapé (Idêntico à Foto 2)**
  - Correção da estrutura do badge superior:
    - Criação da classe `.footer-reel-badge` com formato de retângulo de cantos arredondados (`border-radius: 12px;`).
    - Tipografia 100% branca pura (`#ffffff`) sem serifa e com peso semi-bold (`font-weight: 600;`), eliminando o destaque alaranjado no ano ("2026") e a cápsula pill genérica anterior.
    - Fundo translúcido escuro (`rgba(255, 255, 255, 0.05)`) com borda suave de 1px (`rgba(255, 255, 255, 0.1)`).
  - Correção da proporção e formato do banner `.preview--sm`:
    - Redefinição com `flex: none; height: auto; align-self: flex-start; max-width: 250px;`, neutralizando o `flex-basis: 380px` herdado de `.preview` que causava esticamento vertical do card e gerava um bloco vazio preto de ~220px na parte inferior.
    - O card agora abraça perfeitamente a imagem do vídeo com proporção 3:2 e cantos arredondados de 18px (`border-radius: 18px;`).
  - Eliminação da duplicidade do ícone de reprodução:
    - Ocultado/removido o `<span class="play">` em HTML, aproveitando o botão circular de reprodução já renderizado na imagem autoral `rodape-showreel`, eliminando o ícone flutuante duplicado.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 90 — Correção do Enquadramento dos Avatares e Banners 100% Estáticos em Depoimentos (Idêntico à Foto 2)**
  - Correção do enquadramento dos avatares circulares (`.avatar`):
    - Identificado que as imagens `assets/img/depoimento-*-160.webp` e `80.webp` estavam sofrendo um corte vertical incorreto (deslocamento para cima de ~20px), gerando um corte brusco no topo do aro circular e uma área escura em crescente no fundo inferior (visível principalmente no avatar de Helena Duarte / Foto 1).
    - Regeneração direta e conversão em alta fidelidade de todos os 6 avatares (`depoimento-1` a `depoimento-6`) em WebP e AVIF a partir das matrizes fotográficas de 160x160 (`avatar-helena.jpg`, etc.), garantindo enquadramento centralizado, ombros balanceados e aro circular completo idêntico à Foto 2.
    - Estilização de `.avatar` com `overflow: hidden;`, `border-radius: 50%` e `object-fit: cover; object-position: center;`.
  - Desativação de efeitos de hover nos banners e cards da seção:
    - Removido `transform: translateY(-3px);` de `.quote:hover`, mantendo os 6 cards de depoimentos 100% estáticos com `cursor: default;`.
    - Removido `transform: translateY(-3px);` de `.brand-squircle-card:hover`, mantendo os 4 cartões de marcas 100% estáticos com `cursor: default;`.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 91 — Aplicação dos Efeitos Cênicos da Foto 1 em Todos os Cards de Depoimentos**
  - Análise dos efeitos de iluminação e profundidade do card de referência (Foto 1):
    - Top rim light acobreado (`border-top: 1px solid rgba(255, 115, 45, 0.35)`) com pseudo-elemento central `::before` de 1.5px em gradiente laranja neon (`rgba(255, 115, 45, 0.95)`), gerando uma linha de calor incandescente no topo de cada card.
    - Atmosfera térmica interna no fundo do card com gradiente radial elíptico na base (`radial-gradient(ellipse 85% 55% at 50% 100%, rgba(185, 55, 18, 0.2) 0%, rgba(110, 32, 10, 0.08) 55%, transparent 85%)`) sobre fundo escuro (`#0e0f13` a `#08090c`).
    - Linha divisória horizontal sutil (`border-top: 1px solid rgba(255, 255, 255, 0.08)`) separando a citação do cliente da identificação do autor (`figcaption`).
    - Halo de iluminação difuso ao redor do avatar circular (`box-shadow: 0 0 16px rgba(255, 90, 31, 0.2)` e borda acobreada `rgba(255, 115, 45, 0.28)`).
    - Projeção de sombra com leve calor térmico no topo: `box-shadow: 0 16px 45px rgba(0, 0, 0, 0.85), 0 -2px 25px rgba(255, 90, 31, 0.16)`.
  - Aplicação unificada em todos os 6 cards de depoimentos (`.quote`) na proporção 3x2, mantendo comportamento 100% estático sem elevação/flutuação.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 92 — Inclusão de 2 Novos Ícones e Barra de Rolagem Horizontal Branca em Depoimentos**
  - Inclusão dos 2 novos ícones na fileira de marcas (`.testimonials-brands-grid`):
    - 5º Ícone: Losango / Diamante vazado com contorno de 4.2px (`stroke="#d4d4d4"` e `transform="rotate(45 20 20)"`).
    - 6º Ícone: Quatro esferas/círculos preenchidos em matriz 2x2 com raio 3.8px centralizados.
  - Barra de rolagem horizontal branca pura:
    - Configurado `overflow-x: auto; overflow-y: hidden;` com largura máxima de `440px` centralizada.
    - Estilização da scrollbar com `scrollbar-color: #ffffff rgba(255, 255, 255, 0.12)`, `::-webkit-scrollbar` de 5px com thumb `#ffffff` arredondado e track translúcido.
    - Suporte a rolagem horizontal via mouse wheel (`main.js`), toque e arrasto.
    - Ajustado `flex: 0 0 72px` (e `flex: 0 0 68px` em mobile) em `.brand-squircle-card` para impedir contração dos cartões.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 93 — Calibração das Asas Trapezoidais em Perspectiva e Iluminação da Badge em Depoimentos (Idêntico à Foto 2)**
  - Reestruturação das asas laterais de profundidade (`.testimonials-wing`):
    - Posicionamento rebaixado em `top: clamp(140px, 16vw, 190px)`, altura de `clamp(140px, 15vw, 190px)` e máscara vertical progressiva dissolvendo em preto absoluto em 45% do trajeto antes da linha do botão CTA, replicando com exatidão as coordenadas medidas da Foto 2.
    - Geometria trapezoidal em perspectiva com topo horizontal e corte diagonal para dentro: `clip-path: polygon(0 0, 72% 0, 100% 100%, 0 100%)` na asa esquerda e `clip-path: polygon(28% 0, 100% 0, 100% 100%, 0 100%)` na asa direita.
    - Rim light fino superior em cobre `border-top: 1px solid rgba(208, 59, 30, 0.42)` com halo luminoso âmbar `box-shadow: 0 -2px 16px rgba(208, 59, 30, 0.18)` e gradiente térmico translúcido idêntico à Foto 2.
  - Intensificação do halo na pill badge superior (`.tag-status--testimonials`):
    - Rim light superior vibrante `border-top: 1px solid rgba(255, 115, 45, 0.95)`.
    - Halo alaranjado ascendente suave `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 -4px 18px rgba(255, 87, 34, 0.35)`.
  - Calibração da quebra tipográfica do subtítulo (`.testimonials-text`):
    - Largura máxima ajustada para `520px`, reproduzindo fielmente a quebra em duas linhas da Foto 2: "Clientes contam como foi trabalhar com o estúdio e o que mudou depois" / "do lançamento.".
  - Acabamento ultra-clean na fileira de ícones squircle (`.testimonials-brands-grid`):
    - Ocultada a barra de rolagem física visual (`scrollbar-width: none; -ms-overflow-style: none; ::-webkit-scrollbar { display: none; }`) mantendo a rolagem fluida e suave por toque, arrasto e scroll horizontal, eliminando interferências visuais conforme a Foto 2.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 94 — Unificação do Formulário de Contato em Cápsula Pílula Integrada (Idêntico à Foto 2)**
  - Reestruturação do contêiner do formulário `.cta-card .inline-form`:
    - Integração do input e do botão de ação em uma única barra pílula unificada (`border-radius: 9999px; max-width: 480px; width: 100%;`).
    - Fundo escuro translúcido com glassmorphism (`background: rgba(14, 15, 20, 0.72); backdrop-filter: blur(12px);`), contorno sutil `1px solid rgba(255, 255, 255, 0.16)` e sombra suave `box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5)`.
    - Padding perfeitamente ajustado de `6px 6px 6px 24px` para acomodar o botão com margem uniforme interna de 6px.
  - Estilização do campo de entrada `.cta-card .inline-form input[type="email"]`:
    - Remoção de bordas e fundos individuais (`background: transparent; border: none; outline: none; padding: 8px 12px 8px 0;`), integrando perfeitamente o texto com placeholder `#71717a`.
  - Estilização do botão embutido `.cta-card .btn--brasa`:
    - Encaixe fluido na lateral direita da cápsula com `padding: 11px 24px; font-weight: 600; font-size: 0.92rem; border-radius: 9999px;`.
    - Gradiente terracota suave (`#d84315` a `#c43812`), sombra contida `box-shadow: 0 4px 14px rgba(196, 53, 26, 0.45)`, eliminando o antigo glow excessivo externo e a separação dos elementos conforme a Foto 2.
    - Media query responsiva para mobile abaixo de 480px mantendo encaixe ergonômico.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 95 — Inclusão de Duas Barras de Rolagem Horizontais e Remoção do Efeito Mãozinha do Mouse na Vitrine**
  - Implementação de duas barras de rolagem horizontais dedicadas (`.showcase-scroll-row`):
    - **Barra no Meio (`#showcase-row-1`):** Posicionada na base da Linha 1 de banners (entre a Linha 1 e a Linha 2), com `overflow-x: auto; padding-bottom: 14px;` e scrollbar estilizada fina de 6px (`scrollbar-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.06);`).
    - **Barra Embaixo (`#showcase-row-2`):** Posicionada na base da Linha 2 de banners (embaixo de toda a galeria), com `overflow-x: auto; padding-bottom: 14px;` e scrollbar estilizada fina de 6px.
    - Trilho com margem lateral fluida e thumb arredondado com efeito de realce no hover (`rgba(255, 255, 255, 0.65)`).
  - Remoção total do efeito mãozinha do mouse:
    - Aplicado `cursor: default !important;` em `.showcase-scroll-row`, `.showcase-grid-track`, `.gallery-card`, `picture`, `img`, `:hover` e `:active`, assegurando que o cursor permaneça sempre como a seta padrão do sistema operacional sem alternar para `pointer`, `grab` ou `hand`.
  - Grid track e rolagem fluida:
    - Cards quadrados com `repeat(4, clamp(280px, 28vw, 380px))` e `width: max-content;`, permitindo rolagem horizontal suave e responsiva.
    - Adicionado suporte a rolagem horizontal via roda do mouse (`wheel`) em `main.js` para ambas as linhas de forma independente.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 96 — Redução Dimensional da Rosa dos Ventos no Canto do Banner de Serviços**
  - Redução proporcional da rosa dos ventos / bússola vetorial no Card 3 ("Lançamento integrado"):
    - Dimensões de `.svc-compass-wrap` reduzidas de 280px para 200px no desktop (`width: 200px; height: 200px; bottom: -35px; right: -35px;`) e de 220px para 165px no mobile (`width: 165px; height: 165px; bottom: -28px; right: -28px;`).
    - Atributos SVG em `index.html` calibrados para `width="200" height="200"`.
    - Drop-shadow atenuado suavemente (`filter: drop-shadow(0 0 16px rgba(230, 74, 25, 0.4))`).
    - O grafismo agora fica perfeitamente contido no canto inferior direito do card, eliminando a invasão visual sobre os itens de checks e o botão de ação "Agendar conversa".
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 97 — Eliminação da Moldura Externa do Botão Fale Agora (Idêntico à Foto 2)**
  - Correção da herança de estilos em `li.pill-cta-item`:
    - Neutralizados `background: transparent !important;`, `border: none !important;`, `padding: 0 !important;`, `margin: 0 !important;` e `border-radius: 0 !important;`, eliminando a cápsula oval escura duplicada que envolvia o botão.
  - Calibração do botão `.btn-pill-cta`:
    - Pílula sólida branca pura (`#ffffff`) com cantos suaves (`border-radius: 9px;`), tipografia preta nítida (`color: #000000 !important; font-weight: 500; font-size: 0.83rem;`) e padding refinado de `0.42rem 1.05rem`.
    - O botão agora se apresenta de forma limpa, direta e individual, perfeitamente alinhado na segunda linha de pílulas sem molduras aninhadas, exatamente idêntico à Foto 2.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 98 — Substituição e Calibração Compacta dos Banners de Planos (Conforme Foto 2)**
  - Remoção das linhas horizontais divisórias `<hr class="rule">` em ambos os cards ("Essencial" e "Estúdio"), permitindo fluxo visual direto entre o valor do plano e o texto descritivo.
  - Calibração dimensional compacta e elegante dos cards (`.plan`):
    - Padding interno reduzido de `2.5rem 2.25rem` para `1.85rem 1.65rem 1.65rem`, com bordas arredondadas em `border-radius: 22px;` e altura vertical proporcional (~520px) idêntica à Foto 2.
    - Ícones squircle do topo (`.icon-box`) compactados para 42x42px com raio de 11px, glow contido e SVGs ajustados para 20x20px.
    - Pílulas de destaque ("Mais escolhido" e "Recomendado") com tipografia refinada de 0.76rem e padding de 0.26rem 0.78rem.
    - Título do plano (`.plan-name`) calibrado para `font-size: 1.08rem; font-weight: 600;` com margem inferior enxuta de 0.45rem.
    - Preço (`.price-v`) refinado para 2.15rem, `/ mês` em 0.82rem cinza `#71717a` e risco diagonal alaranjado suave (`#ff5722; height: 1.5px; transform: rotate(-13deg);`) sobre `R$ 4.600`.
    - Descrição (`.text-sm`) ajustada para `0.82rem; line-height: 1.5; color: #8e8e96;`.
    - Pílulas de quantidade (`.pills--strong`) compactadas com padding `0.3rem 0.75rem` e gap de `0.45rem`.
    - Lista de 5 checks (`.checks`) com espaçamento vertical de 0.62rem, tipografia de 0.85rem e ícones de 18x18px.
    - Botão CTA (`.plan-btn`) compacto em pílula com gradiente terracota, padding de `0.72rem 1.8rem`, `font-size: 0.88rem` e glow sutil.
    - Rosa dos ventos no Card 2 perfeitamente posicionada e dimensionada no canto inferior direito (`width: 220px; height: 220px; bottom: -25px; right: -25px;`).
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 99 — Barra de Rolagem Horizontal na Fileira de Marcas com 4 dos 6 Ícones à Mostra**
  - Calibração dimensional da fileira `.testimonials-brands-grid`:
    - Largura fixa estipulada em `width: 336px; box-sizing: content-box;` no desktop e `width: 308px;` no mobile (`max-width: 768px`), correspondendo à largura exata de 4 cartões squircle com seus respectivos espaçamentos (`gap: 16px` no desktop e `gap: 12px` no mobile).
    - Exatamente 4 dos seis cartões permanecem visíveis à mostra no carregamento inicial, com os outros 2 cartões ocultos no overflow horizontal.
  - Implementação da barra de rolagem horizontal personalizada:
    - Ativada scrollbar horizontal visível estilizada com altura de 6px (`scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, 0.45) rgba(255, 255, 255, 0.08);`).
    - Trilho arredondado translúcido (`::-webkit-scrollbar-track`) e thumb em branco suave com brilho volumétrico (`::-webkit-scrollbar-thumb`).
  - Interatividade e Acionamento:
    - Ao acionar a barra de rolagem (arraste do thumb, rolagem horizontal via roda do mouse ou arraste direto dos cartões com suporte a `drag-to-scroll` no `main.js`), os outros dois ícones aparecem de forma fluida.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 100 — Calibração da Cor do Segundo Texto no Título da Seção Sobre (Conforme Foto 2)**
  - Estruturação do título em [index.html](file:///c:/Users/Nilto/OneDrive/Documentos/brasa/index.html) (`#sobre-titulo`):
    - Primeira linha: `<span class="title-line-1">Marcas mais fortes,</span>`
    - Segunda linha: `<span class="title-line-2">impressões que ficam.</span>`
  - Estilização de contraste cromático editorial em [style.css](file:///c:/Users/Nilto/OneDrive/Documentos/brasa/style.css):
    - `.title--about .title-line-1`: cor branca pura `#ffffff` em destaque massivo.
    - `.title--about .title-line-2`: cor cinza suave / prateada `#8e8e93` idêntica à Foto 2, gerando harmonia visual e refinamento de hierarquia entre a primeira e a segunda linha do título.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 101 — Calibração da Cor da Rosa dos Ventos do Hero para Laranja Térmico / Brasa (Conforme Foto 2)**
  - Substituição da paleta dourada/âmbar clara da rosa dos ventos do Hero (`.spark-compass-wrap`) pela paleta laranja térmico / brasa vibrante da Foto 2:
    - Gradiente da estrela (`#star-gradient`): degradê com 4 paradas em tons de brasa viva (`#ff7a3d` -> `#f4511e` -> `#d84315` -> `#bd3609`).
    - Halo difuso central (`#compass-glow`): luminescência alaranjada suave (`#ff5722` a `#bf360c`).
    - Marcações técnicas / retículo HUD: anéis concêntricos pontilhados e contínuos, eixos ortogonais e linhas diagonais calibrados com traço em tom laranja acobreado (`#d46022`) com opacidades equilibradas.
  - Ajuste de drop-shadow em [style.css](file:///c:/Users/Nilto/OneDrive/Documentos/brasa/style.css):
    - `.spark-compass-wrap`: filtro atualizado para `filter: drop-shadow(0 0 20px rgba(230, 74, 25, 0.45));`, emitindo uma iluminação alaranjada coesa com o preview de vídeo e a identidade da Brasa.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [x] **Passo 102 — Slide Horizontal Contínuo Full-Width para a Esquerda com Pausa no Hover nos Cases**
  - Implementação de contêiner de largura total horizontal (`.results-scroll-wrap`):
    - Configurado com `width: 100vw; max-width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; padding: 0; overflow: hidden;`, cobrindo 100% da viewport de ponta a ponta sem cortes laterais.
  - Arquitetura de marquee infinito contínuo em [index.html](file:///c:/Users/Nilto/OneDrive/Documentos/brasa/index.html) e [style.css](file:///c:/Users/Nilto/OneDrive/Documentos/brasa/style.css):
    - Estruturado `.results-marquee-track` com dois grupos idênticos de 4 cases (`.results-cases-group`), onde o segundo grupo possui `aria-hidden="true"`.
    - Animação CSS `@keyframes slideResultsLeft` deslizando continuamente de `translate3d(0, 0, 0)` para `translate3d(-50%, 0, 0)` em `35s linear infinite`, garantindo um loop matematicamente perfeito e imperceptível.
  - Pausa interativa no hover:
    - Aplicado `animation-play-state: paused;` em `.results-scroll-wrap:hover .results-marquee-track` e `.results-marquee-track:hover`, pausando instantaneamente o deslizamento ao posicionar o mouse sobre qualquer case e retomando com fluidez ao retirar o cursor.
  - Reconstrução e validação do container Docker `brasa-studio-landing` na porta 3000 retornando status HTTP 200 OK.

- [ ] **Passo 103 — Próxima Etapa de Refinamento ou Nova Seção (Aguardando Solicitação do Usuário)**
  - Aguardar instruções explícitas do usuário para o próximo passo.













