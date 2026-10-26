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


