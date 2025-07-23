# QA - Avanti/Atlântico

🚀 Projeto de automação de testes, realizado no site Orange HRM

🔗 [Site do Orange HRM](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

## 📽️ Apresentação do projeto:  
🔗 [Apresentação - Canva](https://www.canva.com/design/DAF2WkH3QXY/1quH86NcI1tDLIuohNLCLQ/edit)

## O que vais encontrar neste projeto

- Suíte de testes automatizados com Cypress

- Implementação de pipeline de testes automatizados com CI/CD via GitHub Actions

- Configuração de Git Hooks para execução de linters no pre-push com Husky

- Configuração de plugins (Cypress plugin API e Allure Report)

## Pre-requisitos

É pré-requisito ter instalado o Node.js para poder rodar o projeto.

> Considere usar as seguintes versões ou superiores: Node.js `v21.4.0`, npm `10.2.5`.

## Instalação

Run `npm install` (ou `npm i` para a short version) para instalar as dependências de desenvolvedor.

# Testes
## Desktop

Run `npm test` (ou `npm t` para a short version) para rodar os testes em headless
no desktop viewport.

Ou, run `npm run cy:open` para abrir o Cypress no modo interativo no desktop viewport.

## Mobile

Run `npm run test:mobile` pra rodar o teste em headless mode no mobile viewport.

Ou, run `npm run cy:open` para abrir o Cyprees no modo interativo no mobile viewport.

## Relatórios de teste

Run `npm run report:allure` para abrir a interface local do allure.

## Apoie esse projeto

Se você gostou do projeto, considere deixar uma ⭐.
