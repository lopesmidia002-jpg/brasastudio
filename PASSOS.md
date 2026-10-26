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

- [ ] **Passo 64 — Próxima Etapa de Refinamento ou Nova Seção (Aguardando Solicitação do Usuário)**
  - Aguardar instruções explícitas do usuário para o próximo passo.











