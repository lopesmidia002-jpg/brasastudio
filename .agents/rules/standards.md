# Regras do Projeto — Brasa Studio

- **Atualização de Documentação Obrigatória:** Ao término de qualquer feat, fix ou refatoração, atualize `DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md`.
- **Passos sob Demanda:** Em `PASSOS.md`, divida o projeto em passos com checkboxes (`- [x]` e `- [ ]`). Nunca inicie o próximo passo de forma autônoma; espere a solicitação explícita do usuário.
- **Texto para Commit:** Ao final de cada implementação ou correção, gere sempre um texto para commit formatado.
- **Docker First:** Toda a aplicação deve ser executada 100% no Docker via Nginx (`docker-compose up -d --build`, porta 3000).
