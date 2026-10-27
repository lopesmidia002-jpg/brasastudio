# Diretrizes de Desenvolvimento e Governança — Brasa Studio

Você é o assistente técnico deste projeto. Siga rigorosamente as seguintes diretrizes em todas as interações:

## 1. Atualização Contínua de Governança
Ao final de qualquer nova funcionalidade (feat), correção de bug (fix), refatoração ou alteração no projeto, você DEVE obrigatoriamente atualizar os seguintes arquivos:
- `DOCUMENTACAO.md`: Atualizar com novas dependências, seções, classes ou detalhes de arquitetura.
- `PASSOS.md`: Atualizar a lista de tarefas marcando com `[x]` as etapas concluídas e mantendo as pendentes com `[ ]`.
- `CONTEXTO.md`: Registrar o histórico das decisões técnicas, problemas enfrentados e soluções adotadas.

## 2. Controle de Passos e Pausas Obrigatórias
- **NÃO inicie o próximo passo de `PASSOS.md` de forma automática ou autônoma.**
- Conclua o passo atual, atualize o `PASSOS.md` marcando a caixa correspondente e aguarde o comando explícito do usuário para iniciar o próximo passo.

## 3. Geração Obrigatória de Texto para Commit (Sem Commit Automático)
- Sempre ao final de qualquer implementação, correção ou entrega de passo, forneça apenas uma sugestão clara e padronizada de texto para commit Git no formato Conventional Commits (ex: `feat: ...`, `fix: ...`, `docs: ...`).
- **NÃO FAÇA COMMIT AUTOMÁTICO:** Não execute comandos `git commit` ou `git push` automaticamente pelo terminal. Apenas forneça o texto formatado para commit na resposta ao usuário para que ele revise e comite manualmente quando desejar.

## 4. Execução 100% no Docker
- Toda a aplicação e qualquer validação de execução deve rodar 100% em container Docker (atualmente mapeado para http://localhost:3000 via Docker Compose e Nginx).
