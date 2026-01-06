# 💰 Sistema de Planejamento Financeiro

Uma aplicação web moderna e intuitiva para **gestão financeira pessoal e familiar**, utilizando **HTML, CSS e JavaScript puro no front-end**, com **back-end em Java (Spring Boot)** e **MySQL** para persistência de dados.

![Java](https://img.shields.io/badge/Java-21-orange.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen.svg)
![MySQL](https://img.shields.io/badge/MySQL-8.x-00758f.svg)
![Node](https://img.shields.io/badge/Node.js-18.x-339933.svg)

---

## 📋 Sobre o Projeto

O **Sistema de Planejamento Financeiro** é uma aplicação desenvolvida para facilitar o controle de **receitas, despesas e investimentos**, com foco em:

- 📅 **Visualização mensal inteligente**
- 📊 **Organização financeira clara**
- 🧠 **Uso simples e intuitivo**

O projeto foi pensado para uso **pessoal ou familiar**, mas com arquitetura próxima da realidade do mercado, separando **front-end e back-end**.

---

## ✨ Diferenciais

- 📆 **Visualização Mensal Inteligente**  
  Permite selecionar qualquer mês (passado, presente ou futuro) e visualizar os impactos financeiros.

- 💳 **Parcelamento Automático**  
  Compras parceladas são distribuídas automaticamente entre os meses correspondentes.

- 💵 **Receitas Fixas e Variáveis**  
  Controle de rendas recorrentes e eventuais.

- 📈 **Módulo de Investimentos**  
  Acompanhamento de investimentos com cálculo automático de rentabilidade.

- 🔐 **Back-end com Spring Boot**  
  API REST responsável por autenticação, regras de negócio e persistência.

- 🗄️ **Persistência em MySQL**  
  Dados armazenados de forma segura e estruturada.

---

## 🚀 Funcionalidades

### 📊 Planejamento e Visão Geral
- Seleção de ano e mês
- Resumo financeiro:
  - Total de receitas
  - Total de gastos
  - Saldo mensal
- Gráficos:
  - Gastos por categoria
  - Receitas vs despesas
- Listagem detalhada dos lançamentos
- Diferenciação visual:
  - Gastos diretos
  - Gastos parcelados
  - Gastos previstos

---

### 💳 Cadastro de Gastos
- Descrição, valor, categoria e forma de pagamento
- Sistema de parcelamento:
  - Número de parcelas
  - Valor por parcela
  - Mês inicial
- Exclusão inteligente:
  - Remover parcela específica
  - Remover parcelas futuras

---

### 💵 Cadastro de Receitas
- Receitas fixas (mensais)
- Receitas variáveis (pontuais)
- Possibilidade de exclusão por mês

---

### 📈 Investimentos
- Cadastro por categoria:
  - Renda Fixa
  - Renda Variável
  - Criptomoedas
  - Outros
- Cálculo automático de rentabilidade
- Gráficos de evolução
- Status visual dos investimentos

---

### 🏷️ Categorias
- Cadastro e edição de categorias
- Personalização de cores
- Categorias padrão:
  - Alimentação
  - Transporte
  - Moradia
  - Saúde
  - Educação
  - Lazer
  - Outros

---

### ⚙️ Configurações
- Nome do usuário ou família
- Mês inicial do planejamento
- Limite mensal de gastos
- Reset completo do sistema

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Bootstrap Icons** (ícones)
- **Charts.js / Recharts (opcional)**

### Back-end
- **Java 21**
- **Spring Boot**
- **Spring Web**
- **Spring Data JPA**
- **JWT (autenticação)**

### Banco de Dados
- **MySQL 8**

### Outros
- **Node.js** (scripts, utilidades e suporte ao projeto)
- **Git & GitHub**



# Execute o projeto
mvn spring-boot:run


👤 Autor

Guilherme Queiroz de Lima
LinkedIn: https://www.linkedin.com/in/guilhermeqlima/
