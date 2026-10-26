# 🧠 Contexto do Projeto — Brasa Studio

## 1. Visão Geral
Este documento registra o contexto arquitetural, histórico de decisões técnicas, estrutura do ambiente e regras de governança para o projeto da **Brasa Studio Landing Page**.

---

## 2. Histórico e Decisões de Engenharia

### 2.1 Reconstrução Visual Fiel
- O objetivo inicial foi replicar com fidelidade de pixel todas as 15 seções da landing page da Brasa Studio, mantendo estética dark moderna (`#050505`), com iluminação âmbar inferior e acentos no tom vibrante da marca (`#FF5A1F`).
- **Problema encontrado com AVIF:** Arquivos estáticos continham extensões `.avif`, porém possuíam assinatura de cabeçalho WebP. Os navegadores modernos rejeitavam a decodificação da tag `<source type="image/avif">`.
  - **Decisão:** Foi executada sanitização das tags de imagem para renderizar diretamente os arquivos WebP legítimos, garantindo renderização instantânea sem falhas visuais.
- **Problema de Layout no Hero:** O container de marcas parceiras (`.hero-logos`) com `width: max-content` forçou a coluna de texto do grid a expandir além de 1000px, espremendo o mockup do dashboard para 50px de largura.
  - **Decisão:** Inserido `min-width: 0` nas colunas do grid CSS e `overflow: hidden` no wrapper do ticker contínuo, restaurando a divisão equilibrada e a visibilidade ampla do mockup.
- **Estrela de 4 Pontas com Fundo Transparente:**
  - O ícone central da marca necessitava de transparência com canal alfa perfeito sobre o fundo escuro.
  - **Decisão:** Foi renderizado e exportado o vetor da estrela dourada de 4 pontas com `--default-background-color=00000000`, gerando `brasa-estrela.webp` em 200px e 400px com fundo transparente limpo.

### 2.2 Otimização de Performance e Core Web Vitals (Passo 8)
- **Problema de LCP com Lazy Loading no Hero:** Elementos críticos da primeira dobra visual (`hero-preview` e `brasa-estrela`) estavam herdando comportamento de lazy loading, postergando o disparo do LCP.
  - **Decisão:** Inseridos `<link rel="preload">` no `<head>` com `fetchpriority="high"` e comutação para `loading="eager"`, priorizando o download desses recursos antes dos elementos posteriores do DOM.
- **Otimização de Servidor Nginx:**
  - Habilitado `sendfile`, `tcp_nopush`, compressão `gzip` de nível 6 (reduzindo CSS de ~35KB para ~7KB em trânsito) e políticas de cache HTTP diferenciadas para garantir atualização instantânea de HTML e retenção estática imutável de imagens e fontes.

### 2.3 Integração de Formulários e Modal de Diagnóstico (Passo 9)
- **Problema de Formulários Estáticos:** A landing page possuía botões de conversão e inputs sem envio real ou validação interativa.
- **Decisão:**
  - Criado o modal de diagnóstico interativo conectado aos botões principais de CTA.
  - Implementada validação inline dinâmica para e-mails e campos de texto com feedback em tempo real (`is-valid` / `is-invalid`).
  - Adicionada persistência híbrida: envia para Webhook se configurado e retém localmente no `localStorage` do navegador para zero perda de contatos.
  - Adicionado componente de toast visual flutuante e spinner nos botões de submissão.

### 2.4 Progressive Web App & Suporte Offline (Passo 10)
- **Instalabilidade & Confiabilidade Offline:**
  - Configurado o manifesto web oficial (`manifest.json`) com tema dark e identificadores da marca Brasa Studio.
  - Criado o Service Worker (`sw.js`) com estratégia de cache híbrida (Cache-First para imagens/CSS/JS e Network-First com fallback de cache para navegação HTML).
  - Otimizado o Nginx para servir `/sw.js` com `no-cache` (garantindo que atualizações do site cheguem aos usuários imediatamente) e `manifest.json` com MIME type `application/manifest+json`.

### 2.5 Versionamento e Publicação no GitHub (Passo 11)
- Repositório Git local inicializado na branch `main`.
- Criação do `.gitignore` com exclusões de SO, temporários e logs.
- Elaboração do `README.md` institucional e completo com badges, arquitetura e instruções Docker.
- Vinculado ao remote remoto: `https://github.com/lopesmidia002-jpg/brasastudio.git`.
- Realizado commit inicial e push com sucesso para a branch `main`.

### 2.6 Refinamento Visual Fiel da Hero Section (Passo 12)
- **Adequação à Imagem de Referência do Usuário:**
  - **Plano de Fundo Estático:** Removido o elemento `<video>` de background para evitar animação excessiva e consumo de GPU; implementada iluminação ambiente estática através de múltiplos gradientes radiais CSS (clarão âmbar potente de 850px no topo direito e glow suave de 620px no topo esquerdo).
  - **Cards de Ícones com Scroll Horizontal:** Removido o ticker de rolagem automática contínua. Implementadas caixas individuais em formato squircle (68x68px, raio 20px, fundo `#0b0c10`) com barra de rolagem horizontal nativa com suporte touch e mouse.
  - **Rosa dos Ventos Laranja no Canto Inferior Direito:** Substituído o ícone pequeno antigo por uma rosa dos ventos vetorial com círculos concêntricos pontilhados, eixos de mira e estrela de 4 pontas em gradiente laranja vibrante (`#ff5a1f` a `#ffa64d`), posicionada exatamente no canto inferior direito do preview com efeito glow âmbar.
  - **Card de Preview:** Ajustada a proporção e borda com iluminação sutil e botão de play central.

### 2.7 Refinamento Visual Fiel da Seção Sobre a Brasa (Passo 13)
- **Adequação Fiel à Foto 2 de Referência:**
  - **Remoção de Borda da Imagem:** Retirado o container com borda cinza clara saliente; a imagem agora possui acabamento limpo com cantos arredondados de 26px e suave brilho âmbar inferior.
  - **Badge Pílula no Topo:** Substituído o texto cru por badge em pílula translúcida com pontinho indicador âmbar ("• Sobre a Brasa").
  - **Título Monocromático:** O título "Marcas mais fortes, impressões que ficam." foi ajustado para 100% branco puro, sem gradientes alaranjados, conforme a referência visual.
  - **Eliminação de Divisores Artificiais:** Removida a linha horizontal `<hr>`, garantindo fluidez direta entre o texto e a lista de diferenciais.
  - **Botão com Sombra & Tom Quente:** Botão "Como trabalhamos" calibrado no tom vermelho-laranja brasa com sombra âmbar e texto branco.

### 2.8 Refinamento Visual Fiel da Seção Resultados (Passo 14)
- **Palco Geométrico em Perspectiva:** Criação dos painéis/asas poligonais nas laterais esquerda e direita com corte trapezoidal, reflexo sutil de iluminação âmbar no topo e gradiente carvão.
- **Iluminação Cenográfica:** Adicionado clarão central âmbar descendente no topo da seção via gradiente radial difuso.
- **Badge de Status Padronizada:** Implementada a pílula "• Resultados" com fundo translúcido e ponto indicador de calor.
- **Tipografia & Botão:** Título "Resultados que aparecem no caixa e na marca." ajustado para 100% branco monocromático e botão "Agendar 15 minutos" calibrado em vermelho-laranja brasa com cantos arredondados e glow âmbar inferior.

### 2.9 Barra de Rolagem Horizontal Delimitada para Revelação de Ícones (Passo 15)
- **Problema/Objetivo:** Ocultar parte dos ícones de marcas do Hero para que fiquem fora da visão inicial e sejam revelados progressivamente à medida que o usuário rola a barra horizontal.
- **Decisão e Implementação:**
  - Delimitada a largura máxima do container `.hero-icons-wrap` para 360px (`max-width: 360px; overflow-x: auto; overflow-y: hidden;`), comportando confortavelmente ~4 cards visíveis inicialmente.
  - Expandido o catálogo para 8 símbolos geométricos minimalistas (`circle`, `triangle`, `dome`, `waves`, `diamond`, `dots`, `star-octo`, `hourglass`).
  - O 5º, 6º, 7º e 8º ícones ficam ocultos além da margem direita e são exibidos de forma fluida conforme o usuário rola a barra.
  - Scrollbar visível e estilizada com gradiente âmbar neon (`#ff7a3d` a `#ff5a1f`), curvatura arredondada (9999px) e sombra luminosa, oferecendo affordance intuitiva tanto em mouse quanto em touch e teclado.

### 2.10 Card de Preview Compacto Estático e Rosa dos Ventos Ampliada (Passo 16)
- **Problema/Objetivo:** O card de preview na primeira dobra visual apresentava escala excessiva e efeitos dinâmicos ao passar o mouse (hover translateY, mudança de cor do botão play, pulso contínuo), divergindo da segunda foto de referência que exibia o card mais compacto, 100% estático e uma rosa dos ventos substancialmente ampliada no canto inferior direito.
- **Decisão e Implementação:**
  - Reduzida a largura do card `.preview--hero` de 380px para 285px (`width: min(100%, 285px); flex: 0 1 285px;`), recuando a imagem para proporção harmoniosa.
  - Convertida a tag de link interativo `<a>` para `<div>`, adicionando `pointer-events: none` e removendo quaisquer elevações ou alterações de cor/escala ao passar o mouse (`transform: none`, `transition: none`).
  - Ampliadas as dimensões da rosa dos ventos vetorial (`.spark-compass-wrap`) para 260px x 260px com `bottom: -58px` e `right: -52px`, cobrindo de forma destacada o quadrante inferior direito do card com seus eixos de mira, círculos astronômicos concêntricos e estrela alaranjada.
  - Desativada a animação de pulso contínuo (`animation: none;`), garantindo renderização nítida, estável e 100% estática.

### 2.11 Barra de Rolagem Horizontal Manual e Banners Quadrados na Seção Resultados (Passo 17)
- **Problema/Objetivo:** A seção Resultados utilizava animação automática contínua de marquee infinito com cards altos (`aspect-ratio: 7/8`), enquanto a segunda foto de referência exigia navegação por barra de rolagem horizontal manual e banners com enquadramento proporcional perfeitamente quadrado.
- **Decisão e Implementação:**
  - Removido o ticker automático infinito (`animation: marquee`) e os nós duplicados de renderização da lista.
  - Implementado container com rolagem horizontal livre (`.results-scroll-wrap` e `.results-cases-scroll`), com `overflow-x: auto` e scrollbar personalizada em gradiente neon âmbar/laranja (`#ff7a3d` a `#ff5a1f`) com track translúcido e thumb arredondado com glow.
  - Redesenhada a imagem dos banners para proporção 1:1 quadrada (`aspect-ratio: 1 / 1`), eliminando a distorção vertical e destacando o enquadramento do produto.
  - Atualizados os badges dos títulos para etiquetas retangulares com cantos arredondados vermelhas-laranjas (`NOVO` e `RECENTE`) e pílulas de métricas com fundo escuro e tipografia limpa idênticas à foto de referência.

### 2.12 Refinamento Visual Fiel da Seção Como Trabalhamos (Passo 18)
- **Problema/Objetivo:** A seção Como Trabalhamos precisava incorporar com exatidão a identidade visual da segunda foto (eyebrow "COMO TRABALHAMOS" em caixa alta laranja, headline com "sem atalhos." em laranja vibrante, divisórias `<hr>`, pílulas com texto âmbar e rosa dos ventos vetorial astronômica dourada no 3º card), preservando a foto da primeira imagem (mãos organizando amostras de design e tecidos sobre fundo escuro).
- **Decisão e Implementação:**
  - Atualizado o eyebrow para texto cru em caixa alta laranja vibrante `COMO TRABALHAMOS` e headline com destaque âmbar em `sem atalhos.`.
  - Estruturados os cards das etapas com fundo escuro elegante `#0c0d12`, divisórias `<hr class="rule">`, pílulas de entregáveis com texto em tom âmbar `#ff7a3d` e botão de CTA "Agendar conversa" em pílula vermelha-alaranjada com sombra suave.
  - Implementada rosa dos ventos vetorial astronômica dourada no canto inferior direito da Etapa 3 ("Entrega"), composta por dois círculos astronômicos concêntricos, eixos de mira em cruz `+` e `x` finos dourados, glow difuso e estrela de 4 pontas pontiaguda dourada em gradiente.
  - Mantida a foto da primeira imagem (`processo-mesa-1040.webp`) com acabamento limpo em cantos arredondados de 26px sem borda cinza externa pesada.
### 2.13 Refinamento Visual Fiel da Barra Superior / Header (Passo 19)
- **Problema/Objetivo:** O header apresentava o sufixo "studio" na cor laranja vibrante e botão CTA em tom laranja claro com forte brilho, enquanto a segunda foto de referência estabelecia o sufixo "studio" em tom cinza médio/prata suave (`#8e8e93`) e botão "Fale com a gente" em vermelho-laranja brasa intenso aveludado com cantos em pílula.
- **Decisão e Implementação:**
  - Calibrado o logotipo da marca para exibir "brasa" em branco puro `#ffffff` e "studio" em tom cinza médio/prata `#8e8e93` com peso refinado, harmonizando com a referência visual.
  - Ajustada a tipografia e cores dos links da navbar com o item ativo "Início" em branco e os demais em cinza claro `#c8c8cc` com espaçamento generoso de 2rem.
  - Estilizado o botão "Fale com a gente" no gradiente vermelho-laranja brasa aveludado (`#d84518` a `#b82b08`) com cantos de pílula (`9999px`) e sombra quente suave.

### 2.14 Refinamento Tipográfico e Visual da Hero Section (Passo 20)
- **Problema/Objetivo:** A Hero Section precisava ficar idêntica à segunda foto enviada pelo usuário, ajustando tamanho do texto, design dos ícones, cores e estilos dos elementos textuais e dos botões.
- **Decisão e Implementação:**
  - **Tag de status (`.tag-new`):** Atualizado o badge para retângulo com cantos suaves (`border-radius: 6px`) em fundo laranja vibrante sólido (`#ff5a1f`) com tipografia preta em negrito (`#000000; font-weight: 700; text-transform: uppercase`) contendo `NOVO`. O container da tag recebeu borda cinza translúcida fina (`rgba(255, 255, 255, 0.16)`) e texto "Agenda aberta para 2027" em branco puro `#ffffff`.
  - **Tipografia da Headline (`.hero-title`):** Ajustado o peso da fonte de 700 para 400 (regular/aberta), conferindo leveza, sofisticação e kerning elegante idêntico à Foto 2, com a primeira linha ("Design que acende") em branco e a segunda ("marcas criativas.") em laranja brasa `#ff6a2b`.
  - **Lead (`.lead`):** Calibrado o tom para cinza suave e legível (`#909096`) com entrelinha equilibrada (1.65) e tamanho responsivo.
  - **Botões (`.actions`):** Botão primário "Começar um projeto" calibrado com fundo branco puro `#ffffff`, texto preto `#000000` em peso 600 e sombra suave sem efeito estourado de glow; botão secundário "Conheça a Brasa" com fundo translúcido escuro `rgba(255, 255, 255, 0.08)`, borda discreta `rgba(255, 255, 255, 0.14)` e texto branco.
  - **Ícones de Marcas:** Todos os 8 ícones geométricos atualizados com traço e preenchimento em branco puro acetinado `#ffffff` (`opacity: 0.95`), padronizando acabamento de ateliê conforme o design da foto.

### 2.15 Ajuste Visual Fiel da Seção Resultados (Passo 21)
- **Problema/Objetivo:** O usuário solicitou retirar o fundo alaranjado difuso no topo da seção Resultados, mantendo o fundo totalmente escuro como na segunda foto de referência, além de tornar as asas laterais poligonais mais sutis com um degradê em tom alaranjado/âmbar quente e harmonizar a tipografia do título e textos.
- **Decisão e Implementação:**
  - **Fundo Escuro:** Removido integralmente o `background-image` radial alaranjado difuso de `.results`, configurando `background-color: #000000`, garantindo preto puro e contraste nítido com o palco.
  - **Asas Laterais com Degradê Alaranjado Sutil:** Redefinidas as asas `.stage-wing` com posicionamento na altura média (altura do subtítulo), dimensões proporcionais e corte poligonal diagonal simétrico (`clip-path`). Aplicado degradê suave `linear-gradient` com tons alaranjados/âmbar (`rgba(235, 95, 25, 0.32)` a `rgba(160, 55, 12, 0.18)` e `rgba(45, 14, 4, 0.06)`), fundindo sutilmente ao fundo escuro com borda superior iluminada `rgba(255, 115, 45, 0.35)`.
  - **Tipografia Leve e Elegante:** Headline `.title--results` calibrada para `font-weight: 400` com `letter-spacing: -0.025em`, acompanhando a identidade visual aberta e sofisticada da segunda foto.
  - **Lead Textual:** Ajustado `.text--results` em cinza suave `#909096` com entrelinha balanceada de 1.62.

### 2.16 Refinamento dos Ícones da Hero (Passo 22)
- **Problema/Objetivo:** O usuário solicitou que a barra de rolagem horizontal da hero fosse branca (em substituição ao degradê alaranjado), que os ícones fossem ampliados e o container estendido horizontalmente para exibir os 4 ícones com maior folga (conforme a foto 2), além de corrigir dois ícones específicos para ficarem idênticos à foto 3 (losango oco e matriz 2x2 de círculos).
- **Decisão e Implementação:**
  - **Barra de Rolagem Branca:** Atualizado o polegar (`::-webkit-scrollbar-thumb`) para branco puro `#ffffff` com glow suave e trilha translúcida `rgba(255, 255, 255, 0.08)`, e `scrollbar-color: #ffffff rgba(255, 255, 255, 0.12)`.
  - **Ampliação e Espaçamento dos Cards:** Ampliado o tamanho de `.icon-card` para 84px x 84px com raio de curvatura de 22px, e estendido o container `.hero-icons-wrap` para `max-width: 480px` com gap de 1.35rem, exibindo os 4 primeiros ícones com grande folga horizontal idêntica à Foto 2.
  - **Calibração dos Ícones da Foto 3:** Implementado o losango vazado/oco (Marca 5) usando `<rect>` rotacionado em 45° com `stroke-width="4.2"` e fundo vazado, e calibrada a matriz 2x2 de 4 círculos proporcionais (Marca 6). Todos os SVGs foram ampliados para 34px x 34px.

### 2.17 Refinamento dos Banners de Resultados (Passo 23)
- **Problema/Objetivo:** O usuário solicitou que os banners dos cases fossem estendidos lateralmente, tivessem formato quadrado sem cortes indesejados nas fotos, que todos os elementos e ícones fossem idênticos à Foto 2 e que a barra de rolagem horizontal fosse branca pura.
- **Decisão e Implementação:**
  - **Barra de Rolagem Branca:** A barra de rolagem horizontal dos cases (`.results-cases-scroll`) foi configurada com polegar em branco puro `#ffffff`, bordas em pílula e trilha translúcida `rgba(255, 255, 255, 0.08)`, e `scrollbar-color: #ffffff rgba(255, 255, 255, 0.12)`.
  - **Extensão Lateral dos Cards:** Largura de `.case` aumentada para `clamp(380px, 32vw, 440px)` com gap de `1.85rem` e container estendido para `1560px`, permitindo que os cards respirem lateralmente com amplitude e presença conforme a Foto 2.
  - **Banners Quadrados sem Cortes:** O container `.case-img` foi calibrado em proporção quadrada perfeita (`aspect-ratio: 1 / 1`) com cantos superiores arredondados em 24px (`border-radius: 24px 24px 0 0`) e `object-fit: cover`, garantindo enquadramento completo e harmonioso das imagens (vaso de cerâmica, café, joia e bicicleta).
  - **Padronização de Ícones e Badges:** Os ícones `.case-mark` foram padronizados na cor laranja vibrante `#ff5a1f` com o terceiro ícone (Âmbar Joias) ajustado para o losango com ponto no centro, e os badges `NOVO` e `RECENTE` calibrados em tom vibrante `#ff5a1f`.

### 2.18 Refinamento do Cabeçalho da Seção Como Trabalhamos (Passo 24)
- **Problema/Objetivo:** O usuário solicitou alterar as cores de texto da seção Como Trabalhamos e modificar o elemento "COMO TRABALHAMOS" para uma tag de status exatamente igual à Foto 2, tendo como referência de detalhe a Foto 3 (pílula com ponto quadrado laranja e luz âmbar superior).
- **Decisão e Implementação:**
  - **Tag de Status (`.tag-status--process`):** Criada a pílula de status substituindo o eyebrow de texto cru. O container foi configurado com cantos arredondados de 10px, borda cinza translúcida e uma sutil iluminação âmbar superior no topo (`border-top: 1px solid rgba(255, 120, 45, 0.7)` e `background-image: radial-gradient(ellipse 65% 55% at 50% -10%, rgba(255, 95, 30, 0.6) 0%, transparent 75%)`) idêntica à Foto 3, contendo o ponto quadrado laranja `#ff5a1f` com glow e o texto "Como trabalhamos" em branco puro `#ffffff`.
  - **Cores e Tipografia da Headline (`.title--process`):** Removido o tom laranja em "sem atalhos.". A headline foi calibrada para peso leve (`font-weight: 400`, `letter-spacing: -0.025em`) com a primeira linha ("Do briefing ao ar,") em branco puro `#ffffff` e a segunda ("sem atalhos.") em cinza prata suave monocromático `#8e8e96`, estabelecendo o visual limpo, sofisticado e idêntico à Foto 2.
  - **Lead Textual:** Texto descritivo ajustado em tom cinza suave legível `#909096`.

### 2.19 Calibração do Fundo Atmosférico e Geometria das Asas em Resultados (Passo 25)
- **Problema/Objetivo:** O usuário solicitou calibrar o plano de fundo da seção Resultados com o mesmo padrão difuso da Foto 2 e ajustar a geometria das asas e a tipografia do texto para ficarem idênticos à referência.
- **Decisão e Implementação:**
  - **Fundo Atmosférico:** Aplicado gradiente elíptico difuso sutil no topo central de `.results` (`radial-gradient(ellipse 65% 45% at 50% 0%, rgba(225, 80, 20, 0.16) 0%, rgba(130, 40, 8, 0.06) 42%, transparent 70%)`), criando a aura quente de brasa sem poluir a legibilidade do texto.
  - **Geometria das Asas Laterais:** As asas `.stage-wing` foram calibradas com topo perfeitamente horizontal alinhado com a base da headline ("no caixa e na marca.") e corte diagonal preciso em 48% (`clip-path: polygon(0 0, 100% 0, 48% 100%, 0 100%)` na esquerda e simétrico em 52% na direita), com degradê em tom bronze/âmbar com profundidade (`rgba(175, 55, 15, 0.35)` a `rgba(30, 10, 4, 0.08)`) e borda superior iluminada `rgba(255, 115, 45, 0.45)`.
  - **Tipografia e Quebras de Texto:** Headline `.title--results` calibrada com tipografia aberta (`font-size: clamp(2.8rem, 5.2vw, 4.4rem)`, `font-weight: 400`, `line-height: 1.1`, `letter-spacing: -0.025em`) em branco puro, e lead `.text--results` em cinza suave `#909096` distribuído em duas linhas centralizadas.

### 2.20 Dimensões Fiel da Foto 2 e Card Informativo Sobressaindo à Foto nos Banners (Passo 26)
- **Problema/Objetivo:** O usuário solicitou que os banners dos cases da seção Resultados adotassem as dimensões da segunda imagem enviada, implementando o estilo em que a foto de fundo preenche o card e o banner informativo sobressai sobre a foto, com as mesmas bordas padronizadas em todos os banners.
- **Decisão e Implementação:**
  - **Dimensões e Proporção dos Banners (`.case`):** Reajustada a largura dos cards para a proporção mais vertical e compacta da Foto 2 (`clamp(320px, 28vw, 385px)`), substituindo o formato excessivamente largo anterior.
  - **Bordas Padronizadas e Moldura:** Definido contorno externo uniforme para todos os banners com cantos arredondados de 26px (`border-radius: 26px`), borda refinada translúcida `1px solid rgba(255, 255, 255, 0.09)`, fundo `#08090d` e padding interno de respiro (`10px 10px 12px 10px`).
  - **Foto de Fundo (`.case-img`):** Proporção quadrada 1:1 mantida, com cantos arredondados de 20px integrados na moldura do card, servindo de fundo superior.
  - **Card Informativo Sobressaindo (`.case-box`):** Implementada a sobreposição vertical sobre a base da foto com margem negativa (`margin-top: -65px`), `z-index: 2`, cantos arredondados de 20px, fundo escuro aveludado `#0d0e14`, borda sutil `1px solid rgba(255, 255, 255, 0.08)` e sombra volumétrica projetada (`box-shadow: 0 12px 32px rgba(0,0,0,0.85), 0 -4px 20px rgba(0,0,0,0.65)`), garantindo que o banner informativo sobressaia à foto com relevo tridimensional idêntico à Foto 2 em todos os banners.

### 2.21 Padronização Tipográfica com Degradê Vertical e Fundo Preto Sólido em Resultados (Passo 27)
- **Problema/Objetivo:** O usuário forneceu parâmetros detalhados de estilo tipográfico para a seção de Resultados: fonte sem serifa geométrica/neo-grotesca moderna (estilo Inter), título display com peso regular/médio centralizado e degradê vertical sutil (#FFFFFF a #A0A0A0) sem sombras pesadas, subtítulo em cinza claro levemente azulado/dessaturado com 25% a 30% da escala do título e espaçamento entrelinhas confortável, e fundo preto absoluto/sólido.
- **Decisão e Implementação:**
  - **Fundo Preto Sólido:** Atualizado `.results` com `background: #000000 !important; background-image: none !important`, eliminando gradientes residuais e entregando o fundo preto absoluto idêntico à referência.
  - **Tipografia e Título Principal (`.title--results`):** Adotada a fonte `Inter` com fallbacks neo-grotescos modernos, escala display (`clamp(3rem, 5.8vw, 4.6rem)`), peso `500` (médio/regular), alinhamento centralizado, entrelinha de 1.12 e degradê vertical do `#FFFFFF` ao `#A0A0A0` aplicado com `-webkit-background-clip: text` e `color: transparent`, sem sombras ou relevos pesados.
  - **Subtítulo / Lead (`.text--results`):** Configurado com tamanho proporcional de 25% a 30% do título (`clamp(1rem, 1.4vw, 1.18rem)`), tom cinza claro azulado/dessaturado suave (`#949ca8`), peso regular (`font-weight: 400`), entrelinha confortável de `1.65` e alinhamento centralizado.

### 2.22 Remoção Total de Fundos, Asas e Reflexos Alaranjados em Resultados (Passo 28)
- **Problema/Objetivo:** O usuário solicitou retirar todo o fundo alaranjado da seção Resultados, tornando a imagem 100% escura e sem vazamento de luz quente.
- **Decisão e Implementação:**
  - **Desativação do Backdrop com Asas:** Aplicado `.results-backdrop { display: none !important; }`, eliminando os painéis poligonais laterais que emitiam gradientes âmbar/alaranjados (`rgba(175, 55, 15, 0.35)`) e bordas iluminadas.
  - **Eliminação de Halos e Sombra do Botão:** O botão `.btn--results` teve sua sombra reconfigurada para tom escuro neutro (`box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5)`), erradicando qualquer halo alaranjado e consolidando o visual preto sólido puro e limpo em toda a seção.

### 2.23 Nova Fotografia de Moodboard e Moldura com Bordas Idênticas à Foto 2 em Como Trabalhamos (Passo 29)
- **Problema/Objetivo:** O usuário solicitou trocar a fotografia da seção Como Trabalhamos pela nova foto enviada (mãos em mesa preta com amostras de tecido, metal dourado/latão e papéis) e aplicar as bordas idênticas às da segunda foto de referência.
- **Decisão e Implementação:**
  - **Nova Imagem de Processo:** Extraída em alta resolução a nova fotografia e gerados os ativos otimizados em WebP e AVIF (`processo-mesa-1040.webp` e `processo-mesa-520.webp`), substituindo a imagem anterior de mesa rústica de madeira com lâmpada.
  - **Moldura e Bordas Idênticas à Foto 2:** Configurada a classe `.frame--process` e `.sticky-col .frame` com cantos arredondados de 28px (`border-radius: 28px !important`), contorno refinado `1px solid rgba(255, 255, 255, 0.12) !important`, fundo escuro e linha de acento âmbar neon centralizada na borda inferior (`::after`) com glow sutil, entregando a fidelidade exata à imagem de referência.

### 2.24 Banners Escuros com Top-Right Glow, Ícone de Pena e Rosa dos Ventos Âmbar em Como Trabalhamos (Passo 30)
- **Problema/Objetivo:** O usuário solicitou que os banners das etapas em Como Trabalhamos adotassem o estilo escuro com leve efeito na lateral superior direita conforme a Foto 2, atualizassem o ícone para o modelo da terceira imagem (bico de pena tinteiro) e corrigissem as cores e estilo da rosa dos ventos para o padrão âmbar/laranja da Foto 5.
- **Decisão e Implementação:**
  - **Cards com Efeito Top-Right Glow (`.step`):** Implementado gradiente radial translúcido no canto superior direito (`radial-gradient(ellipse 70% 60% at 100% 0%, rgba(220, 75, 25, 0.15) 0%, transparent 75%), #08090d`), com cantos arredondados de 24px e sombra profunda.
  - **Ícone de Pena Tinteiro (`pen-tool`):** Na Etapa 3 ("Entrega"), substituído o ícone de lápis duplicado pelo bico de pena tinteiro clássico com corpo e corte central em tom âmbar vibrante `#ff7a3d`, idêntico à Foto 5.
  - **Rosa dos Ventos Âmbar/Laranja Brasa:** Substituídos os tons dourados/amarelados anteriores pelo gradiente quente âmbar/laranja (`#ff9d5c` a `#9e2808`) na estrela central de 4 pontas, miras e círculos concêntricos finos em tom bronze/âmbar com glow difuso quente.
  - **Pílulas de Informação e Etapa:** Texto das pílulas de entregáveis ajustado para tom cinza claro suave (`#c8c8d2`) idêntico à Foto 3 ("Plano de projeto") e pílula escura de identificação da etapa com texto branco nítido conforme a Foto 4 ("Etapa 1").

### 2.25 Formato Quadrado dos Banners e Enquadramento das Fotos de Resultados conforme Foto 2 (Passo 31)
- **Problema/Objetivo:** O usuário solicitou que as fotos dos banners fiquem no padrão semelhante à segunda foto (Torra Rubi) e que os banners adotem formato quadrado, sem o aspecto alongado/cortado visualizado anteriormente.
- **Decisão e Implementação:**
  - **Dimensões e Proporção Quadrada dos Banners (`.case`):** Ajustada a largura base dos cards para `clamp(360px, 32vw, 420px)` com bordas de raio `28px` e padding de respiro de `10px 10px 12px 10px`. Com a nova altura calculada do conjunto foto + box sobreposto (~410px a 430px), o banner atinge uma silhueta praticamente 1:1 (quadrada), fiel à proporção da Foto 2 de referência.
  - **Enquadramento e Aspect Ratio Fotográfico (`.case-img`):** As fotografias originais dos cases possuem resolução nativa 880x555. A aplicação forçada anterior de `aspect-ratio: 1/1` com `object-fit: cover` cortava até 40% das laterais ou comprimia elementos essenciais. Atualizado `.case-img` para `aspect-ratio: 880 / 555`, permitindo que toda a área de imagem (xícara de café com grãos flutuando e vapor, vaso de cerâmica autoral, anel de ouro reciclado e bike urbana) seja exibida com integridade visual e respiro.
  - **Overlap Balanceado do Card Informativo (`.case-box`):** A margem superior de sobreposição foi calibrada para `-48px` com padding enxuto de `1.25rem 1.35rem 1.45rem` e gap de `0.72rem`. Isso faz o banner informativo sobrepor suavemente apenas a base escura da mesa, deixando a xícara inteira e os detalhes centrais da foto em destaque.
  - **Atributos de Imagem em `index.html`:** Atualizado o atributo intrínseco `height="880"` para `height="555"` nas tags `<img>` dos 4 cases para refletir as dimensões reais e evitar qualquer oscilação de layout (CLS).
  - **Execução e Validação Docker:** Container reconstruído e validado com status HTTP 200 OK na porta 3000.

### 2.26 Reativação das Asas em Degradê e Calibração Tipográfica em 2 Linhas conforme Foto 2 (Passo 32)
- **Problema/Objetivo:** O usuário expressou que as letras do título estavam grandes demais (quebrando em 3 linhas de forma desarmônica) e que faltavam os efeitos laterais das asas em degradê, solicitando copiar e replicar com fidelidade exata todos os elementos da Foto 2 (asas em degradê, tipo e cor de letras, tamanho equilibrado e botão com glow).
- **Decisão e Implementação:**
  - **Reativação das Asas Laterais em Degradê (`.stage-wing`):** Reativado o contêiner `.results-backdrop` com as asas geométricas poligonais (`.stage-wing--left` e `.stage-wing--right`). Aplicado recorte trapezoidal (`clip-path`) com corte diagonal em 48%, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e degradê bronze/âmbar aveludado (`rgba(185, 60, 16, 0.42)` fundindo suavemente ao preto profundo).
  - **Atmosfera de Fundo com Calor Âmbar (`.results`):** Restaurado o degradê radial elíptico superior (`radial-gradient(ellipse 65% 45% at 50% 0%, rgba(225, 80, 20, 0.16) 0%, ...)`), proporcionando a atmosfera aconchegante e de alto contraste da Foto 2.
  - **Calibração Tipográfica em Exatamente 2 Linhas (`.title--results`):** Reduzido o tamanho da fonte para `clamp(2.35rem, 4.3vw, 3.6rem)` e ampliado o `max-width` do cabeçalho para `960px`, garantindo que "Resultados que aparecem" ocupe a primeira linha e "no caixa e na marca." a segunda linha com quebra balanceada. Aplicado degradê suave prateado (`#FFFFFF` no topo para `#B0B0B8` na base) e peso regular a médio (`font-weight: 500`).
  - **Botão com Glow Âmbar e Tag de Status:** O botão "Agendar 15 minutos" recebeu gradiente quente vermelho-alaranjado (`#eb4714` a `#c2330a`) e sombra com glow âmbar inferior (`box-shadow: 0 8px 26px rgba(235, 71, 20, 0.42)`), replicando com precisão o destaque do CTA da Foto 2.
  - **Execução e Validação Docker:** Container reconstruído e validado com status HTTP 200 OK na porta 3000.

### 2.27 Replicação dos Banners, Ícones, Cores e Tipografia em Diferenciais conforme Foto 2 (Passo 33)
- **Problema/Objetivo:** O usuário solicitou analisar e replicar exatamente os banners, ícones, cores e tipografia da Foto 2 nos cards da seção Diferenciais.
- **Decisão e Implementação:**
  - **Cards com Acabamento Refinado (`.feature`):** Bordas externas com cantos arredondados generosos de 26px (`border-radius: 26px`), fundo escuro profundo `#090a0f`, contorno fino `1px solid rgba(255, 255, 255, 0.08)` e padding amplo de `2.2rem 2.1rem 2.4rem`. O Card 1 ("Marca que vende PRO") recebeu o destaque da Foto 2 com contorno iluminado âmbar `1px solid rgba(220, 75, 25, 0.45)`, sutil gradiente radial quente no fundo e sombra interna.
  - **Ícones em Caixas Squircle e Cor Âmbar Vibrante (`.icon-orb`):** Caixas com cantos arredondados de 16px (52x52px) em tom escuro `#14151c` e traços finos em laranja/âmbar vibrante `#ff7a3d`:
    1. *Marca que vende:* Gráfico de linha ascendente com pontos.
    2. *Sistema editável:* 3 camadas/losangos empilhados.
    3. *Código leve:* Tag de código limpa `</>`.
    4. *Direção de arte:* Medalha / roseta com fitas.
    5. *Prazo combinado:* Relógio circular com ponteiros às 3h.
    6. *Pensado para o celular:* Smartphone com botão e traço sutil.
  - **Seta Diagonal Minimalista (`.feature-arrow`):** Inserido o ícone `↗` no canto superior direito de cada card em tom cinza suave `#8e8e95`.
  - **Subtítulos em Caixa Alta e Cor Laranja/Âmbar (`.sub`):** Tipografia `Inter` em negrito (`font-weight: 700`), cor `#ff6a2b`, maiúsculas e espaçamento entrelinhas (`letter-spacing: 0.06em`).
  - **Remoção de Linhas Divisórias (`.rule`):** Desativadas as linhas horizontais cinzas `<hr>`, replicando o layout moderno, fluido e desobstruído da Foto 2.
  - **Badges `PRO` (`.badge--pro`):** Adicionada a pílula retangular arredondada alaranjada `#d84518` ao lado dos títulos dos cards 1 e 5.
  - **Execução e Validação Docker:** Container reconstruído e validado com status HTTP 200 OK na porta 3000.

### 2.28 Calibração dos Banners, Cor de Fundo, Tipografia e Pílulas Retangulares Arredondadas em Como Trabalhamos conforme Fotos 2 e 3 (Passo 34)
- **Problema/Objetivo:** O usuário apontou que os banners de Como Trabalhamos estavam diferentes do padrão pretendido (largos demais, fundo com gradiente excessivo, pílulas ovais 9999px), solicitando ajustar tamanho dos banners, cor de fundo, tamanho e formato das letras e padronizar as pílulas com o estilo retangular arredondado da Foto 3 em todos os banners da seção.
- **Decisão e Implementação:**
  - **Dimensões e Proporção dos Banners (`.step` e `.split--steps`):** Redefinido o grid de `.split--steps` para `minmax(0, 510px) 1fr`, delimitando a largura máxima dos banners para 510px (eliminando o esticamento horizontal) com padding compacto de `1.6rem 1.7rem 1.75rem` e cantos arredondados de 22px.
  - **Cor de Fundo e Iluminação Sutil (`.step`):** Substituído o fundo anterior por preto grafite profundo `#050609` com leve iluminação âmbar difusa restrita ao canto superior direito (`radial-gradient(ellipse 55% 45% at 98% 2%, rgba(200, 60, 20, 0.11) 0%, transparent 65%)`), eliminando tons alaranjados excessivos.
  - **Pílulas Retangulares Arredondadas idênticas à Foto 3 (`.step .pills li`):** Substituído o raio oval de 9999px pelo formato retangular com cantos suaves de 8px (`border-radius: 8px`), fundo escuro `#111218`, contorno fino `1px solid rgba(255, 255, 255, 0.1)` e texto cinza claro `#d1d5db` idêntico à Foto 3, aplicado uniformemente a todas as pílulas dos 3 banners.
  - **Badges de Etapa e Botão de Ação:** Badges no canto superior direito (`.step .pill--dark`) padronizadas com o mesmo raio de 8px e botão "Agendar conversa" calibrado com raio de 12px e glow quente inferior.
  - **Tipografia:** Títulos das etapas ajustados para `1.22rem` (peso 700 em branco puro) e textos descritivos em `0.88rem` / `#8e8e96` com entrelinha de 1.55.

### 2.29 Compactação do Banner Informativo, Cor Escura Sólida, Hover Neutro e Fotos Estáticas em Resultados conforme Foto 2 (Passo 35)
- **Problema/Objetivo:** O usuário solicitou diminuir o banner informativo de Resultados para ficar idêntico ao da Foto 2 de referência, alterar a cor com base na Foto 2, remover o efeito alaranjado ao passar o mouse e deixar as fotos 100% estáticas, ressaltando expressamente a instrução: "nao altere as fotos somente os banners que assim solicirados".
- **Decisão e Implementação:**
  - **Banner Informativo Compacto (`.case-box`):** Reduzido o padding para `0.95rem 1.15rem 1.15rem`, diminuído o espaçamento interno para `gap: 0.52rem`, cantos arredondados de 18px e ajustada a sobreposição para `margin-top: -38px`. Isso tornou o bloco de informações consideravelmente mais baixo e compacto, valorizando a fotografia sem cobrir o assunto principal.
  - **Fundo Escuro Sólido e Refinado:** Aplicado `#07080c` no banner informativo (`.case-box`) e `#06070a` no card container (`.case`) com contorno sutil `1px solid rgba(255, 255, 255, 0.07)`, conferindo a estética escura profunda e limpa da Foto 2.
  - **Remoção Completa do Hover Alaranjado (`.case:hover`):** Eliminadas as propriedades de `border-color: rgba(255, 90, 31, 0.45)` e `box-shadow` alaranjados, adotando transição neutra e sóbria com `border-color: rgba(255, 255, 255, 0.16)` e sombra preta aveludada.
  - **Fotografias 100% Estáticas:** Desativada qualquer transição ou ampliação no cursor (`.case-img img` e `.case:hover .case-img img` com `transform: none !important; transition: none !important;`).
  - **Pílulas Retangulares Arredondadas (`.case .pills li`):** Cantos definidos em `border-radius: 8px`, fundo escuro `#101117`, contorno discreto e texto cinza claro `#c5c5cf` idêntico à Foto 2.
  - **Tipografia e Badges:** Títulos calibrados em `1.12rem`, badges em pílulas retangulares de 5px e descrições em `0.82rem` / `#82828a`.
  - **Integridade das Imagens:** As fotos originais e seus caminhos foram integralmente mantidos intactos, alterando estritamente os banners conforme requisitado.
  - **Execução e Validação Docker:** Container reconstruído e validado com status HTTP 200 OK na porta 3000.

### 2.30 Fundo Preto Puro, Feixes de Luz Volumétricos, Tag Status e Grafia Monocromática em Diferenciais conforme Fotos 2, 3 e 4 (Passo 36)
- **Problema/Objetivo:** O usuário solicitou retirar o efeito alaranjado do fundo da seção Diferenciais deixando-o totalmente preto, adicionar o efeito *Volumetric Light Beams* (feixes de luz / focos angulares com formas trapezoidais diagonais nas laterais esquerda e direita que se dissipam no centro escuro) idêntico à Foto 2, mudar os ícones/tag para o padrão da Foto 3 (pílula com ponto quadrado laranja e reflexo âmbar no topo da borda), e colocar a mesma grafia e tipografia da Foto 4 (título display em duas linhas monocromáticas sem texto laranja).
- **Decisão e Implementação:**
  - **Fundo Totalmente Preto Puro (`#000000`):** Desativado o pseudo-elemento `.glow-sides::before` que projetava halo alaranjado centralizado no cabeçalho e fixado `background-color: #000000 !important;` na seção `.features`.
  - **Feixes de Luz Volumétricos (`.features-backdrop`):** Criado contêiner de feixes com duas formas angulares/trapezoidais (`.feature-beam--left` e `.feature-beam--right`). Utilizado `clip-path: polygon(...)` com corte inclinado em 48%, borda superior iluminada `1px solid rgba(255, 120, 50, 0.48)` e sombra difusa quente, preenchido com gradiente bronze/âmbar suave (`linear-gradient(135deg, rgba(185, 60, 16, 0.42) 0%, ..., transparent 100%)`) simulando focos luminosos laterais que se dissipam harmonicamente no centro escuro idênticos à Foto 2.
  - **Tag de Status da Foto 3 (`.tag-status--features`):** Substituído o `<p class="eyebrow">` por pílula estilizada translúcida com borda de 10px, contorno fino, reflexo difuso âmbar no topo (`radial-gradient` a 50% -10% e `border-top: 1px solid rgba(255, 120, 45, 0.7)`), ponto quadrado laranja vibrante `#ff5a1f` com halo de 8px e tipografia em branco puro.
  - **Grafia Monocromática da Foto 4 (`.title--features`):** Título formatado em display regular a médio (500), fonte sem serifa neo-grotesca (`Inter`), dividido em "Recursos de estúdio grande" na primeira linha e "com atenção de ateliê." na segunda linha, ambas com degradê prateado suave (de `#FFFFFF` para `#B0B0B8` / `#A8A8B2`), eliminando qualquer cor alaranjada no título conforme a Foto 4.
  - **Subtítulo e Botão de Ação:** Subtítulo refinado em cinza suave `#8e8e96` com entrelinha 1.62 e botão "Conheça a Brasa" estilizado em gradiente terracota suave com glow inferior idêntico à Foto 2.
  - **Execução e Validação Docker:** Container reconstruído e validado com status HTTP 200 OK na porta 3000.

### 2.31 Remoção do Brilho Alaranjado Central em Resultados Mantendo Efeitos Trapezoidais Laterais (Passo 37)
- **Problema/Objetivo:** O usuário solicitou retirar exclusivamente a parte do meio alaranjada da seção Resultados, mantendo preservados os efeitos trapezoidais laterais ("tire somente esta parte do meio alaranjado, mantenha as os efeitos trapeziodais").
- **Decisão e Implementação:**
  - **Eliminação do Gradiente Central (`.results`):** Removido o `background-image: radial-gradient(...)` elíptico âmbar que iluminava o centro superior da seção Resultados, definindo `background-image: none;` e mantendo `background-color: #000000;`. O centro da seção passou a ser preto absoluto e limpo.
  - **Preservação dos Efeitos Trapezoidais (`.stage-wing`):** Mantidos integralmente intactos os painéis geométricos laterais (`.stage-wing--left` e `.stage-wing--right`), com corte diagonal em 48% (`clip-path: polygon(...)`), borda superior iluminada em 1px e degradê bronze/âmbar que se dissipa harmonicamente do canto externo para o centro escuro.
  - **Execução e Validação Docker:** Container reconstruído e validado com status HTTP 200 OK na porta 3000.

### 2.32 Inversão dos Efeitos Trapezoidais nos Dois Lados conforme Foto 2 em Resultados e Diferenciais (Passo 38)
- **Problema/Objetivo:** O usuário solicitou inverter a orientação dos efeitos trapezoidais em ambos os lados ("inverta este efeito dos dois lados de modo que fique igual esse da segunda foto e aplique nas paginas que onde este efeito essta sendo usado"). Na Foto 2 enviada, a forma trapezoidal possui base larga e afunila em direção ao topo (com diagonal inclinada que sobe em direção ao topo estreito).
- **Decisão e Implementação:**
  - **Inversão da Geometria do `clip-path`:**
    - *Lado Esquerdo (`.stage-wing--left` e `.feature-beam--left`):* Ajustado o polígono para `polygon(0 0, 72% 0, 100% 100%, 0 100%)`. O topo horizontal agora ocupa 72% e a base alarga para 100%, gerando a diagonal descendente externa idêntica à Foto 2.
    - *Lado Direito (`.stage-wing--right` e `.feature-beam--right`):* Ajustado o polígono para `polygon(28% 0, 100% 0, 100% 100%, 0 100%)`. A diagonal sobe de `0% 100%` até `28% 0%`, encontrando o topo horizontal que vai até `100% 0%`, replicando com exatidão matemática a silhueta da Foto 2 de referência.
  - **Propagação Uniforme nas Seções:** A nova geometria invertida foi aplicada de forma coerente em todas as seções onde o efeito é empregado no projeto (`#resultados` e `#diferenciais`).
  - **Execução e Validação Docker:** Container reconstruído e validado com status HTTP 200 OK na porta 3000.

### 2.33 Estilização Fiel dos Cards de Diferenciais: Ícones Circulares, Sombreamento Volumétrico, Badge PRO com Glow e Linhas Divisórias conforme Fotos 2, 3, 4 e 5 (Passo 39)
- **Problema/Objetivo:** O usuário solicitou mudar o estilo dos banners da seção Diferenciais para ficar idêntico aos da Foto 2, alterando efeitos, ícones e adicionando efeitos de sombreamento ("mude o estilo de dos banners para que fique identico a estes da segunda imagem, mude os efeito, icones, coloque este efeitos de sombreamento").
- **Decisão e Implementação:**
  - **Ícones em Círculos Perfeitos (`.icon-orb`):** Modificado o formato de squircle para círculo perfeito (`border-radius: 50% !important; width: 54px; height: 54px;`), preenchido com gradiente radial âmbar/marrom quente (`radial-gradient(circle at 45% 45%, #381204 0%, #1a0802 65%, #0e0502 100%)`), contorno fino em ouro/âmbar (`1px solid rgba(255, 130, 45, 0.48)`), halo térmico suave (`box-shadow: 0 0 16px rgba(255, 90, 31, 0.35)`) e traço interno em dourado vibrante `#ffa44a` idêntico à Foto 3 e Foto 5.
  - **Sombreamento Volumétrico e Iluminação Superior dos Cards (`.feature`):** Implementada linha de luz no topo da borda de cada card (`border-top: 1px solid rgba(255, 120, 45, 0.45)`), sutil reflexo âmbar no topo (`radial-gradient` a 50% 0%) e sombra volumétrica aveludada (`box-shadow: 0 18px 45px rgba(0, 0, 0, 0.85)`). O Card 1 ("Marca que vende PRO") recebeu destaque térmico imersivo com glow radial âmbar superior e inferior e contorno âmbar iluminado com sombra quente.
  - **Badge `PRO` com Glow Radiante (`.badge--pro`):** Estilizada em pílula retangular arredondada alaranjada (`#ff551b`), texto preto negrito (`#000000`) e halo/glow quente radiante (`box-shadow: 0 0 12px rgba(255, 85, 27, 0.65)`) idêntica à Foto 4 e Foto 5.
  - **Subtítulos e Linhas Divisórias:** Subtítulos atualizados para capitalização natural ("Estratégia comercial", "Arquivos vivos", "Performance de fábrica", "Olhar autoral", "Entregas semanais", "Responsivo de verdade") em tom cinza suave legível `#9294a0`. Reativadas as linhas divisórias horizontais (`<hr class="rule">`) entre os subtítulos e as descrições.
  - **Execução e Validação Docker:** Container reconstruído e validado com status HTTP 200 OK na porta 3000.

---

## 3. Arquitetura de Execução (100% Docker)
- A aplicação é servida através de um container **Docker** baseado na imagem oficial leve `nginx:alpine`.
- O arquivo `nginx.conf` inclui configuração de tipos MIME corretos para imagens modernas (WebP/SVG), compressão Gzip e cabeçalhos de controle de cache.
- O mapeamento de porta local é fixado em `3000:80` via `docker-compose.yml`.

---

## 4. Memória e Regras de Operação
Conforme alinhado com o usuário:
1. **Pausas Obrigatórias entre Passos:** O agente não deve executar passos subsequentes de forma contínua ou autônoma. Deve concluir o passo atual, registrar no `PASSOS.md`, e aguardar o comando explícito do usuário antes de iniciar o próximo.
2. **Atualização Contínua de Governança:** Ao término de qualquer modificação, correção de bug ou nova funcionalidade, os seguintes arquivos devem ser obrigatoriamente revisados e atualizados:
   - `DOCUMENTACAO.md`
   - `PASSOS.md`
   - `CONTEXTO.md`
3. **Geração de Texto para Commit:** Toda resposta final de implementação ou correção deve conter uma sugestão de mensagem para commit Git clara, padronizada e descritiva.
4. **Execução Exclusiva em Docker:** Qualquer validação de ambiente deve garantir que o serviço esteja ativo e operacional no container Docker na porta 3000.
