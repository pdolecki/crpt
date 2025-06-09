# 💸 Crpt – KAS Portfolio Tracker

Live Demo: https://pd-crpt.netlify.app/portfolio

**Crpt** is a lightweight Angular 20 application for tracking investments in KAS and associated meme coins. It uses modern Angular features and applies best practices in architecture, SCSS styling, and performance.

## 🚀 Features

- 📈 Live price fetching for KAS and custom tokens
- 🧠 Clean reactive store using Angular 20 signals & `httpResource`
- 🧮 Real-time portfolio calculations (total KAS, USD value, gains/losses)
- 📦 Expandable list UI for token positions and operation history
- 💅 Custom styling with modular SCSS and dark mode-ready palette

## 🛠️ Tech Stack

- **Angular 20**
- **SCSS (modular with variables)**
- **RxJS Signals & Computed Store**
- **httpResource** for declarative HTTP
- **Type-safe architecture with interfaces**

## 🧪 Unit Testing

Since Angular 20 new default testing is now being done using Jest/Web Runner. I've decided to go with Web Test Runner, since it uses the real web browser somewhat just like Karma did.

Run tests:
> ng test

## 🧑‍💻 Getting Started

Install dependencies:
> npm install

Run project:
> npm start
