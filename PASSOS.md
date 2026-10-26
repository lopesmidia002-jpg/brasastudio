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




