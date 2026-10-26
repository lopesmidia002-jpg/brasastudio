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
