# 🎯 Prompt Master & Especificações — Brasa Studio Landing Page

Este documento documenta os parâmetros de prompt, regras de estilo e diretrizes criativas utilizadas para concepção e réplica exata da landing page da **Brasa Studio**.

---

## 🎨 Identidade Visual e Estética

- **Conceito:** Estúdio de design e tecnologia focado em produtos digitais de alta conversão, software moderno e marcas de autoridade.
- **Ambiente:** Dark Mode sofisticado e imersivo (`#050505`), com contrastes sutis de cinzas profundos (`#0f1015`, `#16171f`).
- **Ponto Focal de Luz:** Efeito brasa/fogo com cor de acento `#FF5A1F` e gradientes alaranjados, aplicado em:
  - Glows radiais de fundo (`backdrop-filter: blur()`).
  - Molduras inferiores iluminadas nos mockups de produto e cartões principais.
  - Botões de ação primária com aura âmbar pulsante ou estática elegante.
- **Tipografia:**
  - Títulos: `DM Sans` (700, 800) com tracking levemente condensado.
  - Subtítulos e Parágrafos: `Inter` (400, 500) com altura de linha 1.6 para leitura confortável.
  - Acentos & Badges: Pílulas escuras com borda fina translúcida e ícones pontuais.

---

## 📐 Diretrizes das 15 Seções

1. **Header / Navbar:** Fixo/Sticky com fundo translúcido `rgba(5, 5, 5, 0.85)` com blur de 12px, logo alinhado à esquerda com estrela de 4 pontas e botão "Agendar Diagnóstico" à direita.
2. **Hero:** Layout em grid equilibrado (55% texto / 45% mockup visual). Ticker contínuo de marcas de clientes no rodapé do texto.
3. **Sobre a Brasa:** Números grandes com gradiente e textos concisos de posicionamento.
4. **Resultados:** Marquee infinito horizontal com métricas e selos de validação.
5. **Como Trabalhamos:** Processo em 3 passos com numeração proeminente e cards com efeito glassmorphism.
6. **Diferenciais:** Grid 3x2 com ícones vetorizados, hover com iluminação sutil de borda.
7. **Por Que a Brasa:** Bento Grid com cards de proporções dinâmicas destacando agilidade, design de ponta e código escalável.
8. **Portfólio:** 3 cartões de projetos de destaque com imagens em proporção 16:9 ou 4:3, tags de segmento e descrições de entrega.
9. **Serviços:** 3 planos modulares com detalhamento de escopo, prazos e faixas de investimento.
10. **Vitrine:** Duplo carrossel contínuo (sentidos opostos) exibindo capturas de interfaces UI/UX.
11. **Planos / Preços:** Comparativo visual claro entre plano avulso e modelo de assinatura estúdio dedicado.
12. **Depoimentos:** Cards com citações reais, avatares redondos, nomes, cargos e avaliação de 5 estrelas.
13. **FAQ:** Acordeão vertical numerado de 1 a 6 com expansão suave e ícones toggle `+` / `-`.
14. **CTA Final:** Bloco de chamada para ação com gradiente âmbar sutil e botão de conversão.
15. **Footer:** Links institucionais, copyright e links de redes.

---

## ⚙️ Regras Técnicas de Implementação
- **Zero Frameworks Pesados:** Apenas HTML5 semântico, CSS3 moderno e Vanilla JS.
- **Responsividade Obrigatória:** Adaptação fluida para dispositivos móveis com menus retráteis e ajustes nos grids.
- **Execução Conteinerizada:** Toda a aplicação deve ser validada e executada através de container Docker (Nginx Alpine) na porta 3000.
