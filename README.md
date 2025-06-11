# 💸 Crpt – KAS Portfolio Tracker

Live Demo: https://pd-crpt.netlify.app/portfolio

**Crpt** is a lightweight Angular 20 application for tracking investments in KAS and associated meme coins. It uses modern Angular features and applies best practices in architecture, SCSS styling, and performance.

App generated with:
> ng new crpt --defaults --style=scss --standalone --routing --inline-template --inline-style

## 🚀 Features

- 📈 Live price fetching for KAS and custom tokens
- 🧠 Clean reactive store using Angular 20 signals & `httpResource`
- 🧮 Real-time portfolio calculations (total KAS, USD value, gains/losses)
- 📦 Expandable list UI for token positions and operation history
- 💅 Custom styling with modular SCSS and dark mode-ready palette

## 🛠️ Tech Stack

- **Angular 20 Zoneless**
- **SCSS (modular with variables)**
- **RxJS Signals & Computed Store**
- **httpResource** for declarative HTTP
- **Type-safe architecture with interfaces**

## 🧪 Unit Testing

Since Angular 20 new default testing is now being done using Jest/Web Runner and the current documentation is lacking information about zoneless testing I've decided to go without testing as of now. (I'm going to come back to this when there will be a clear, supported by Angular way for testing zoneless apps with Karma decomissioned)

## 🧑‍💻 Getting Started

Install dependencies:
> npm install

Run project:
> npm start
