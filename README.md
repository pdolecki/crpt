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

To run tests:

> npm run test

To generate code coverage:

> npm run coverage

I've decided to try out experimental unit testing system that is being mentioned since about Angular version 18 - Vitest. The angular CLI provides an experimental support for going with it as a test runner.
Steps that needed to be taken care of:

- change angular.json test config from the one defaulting to Karma
- install vitest, vitest coverage and jsdom
- uninstall karma and jasmine
- update tsconfig.spec.json types from jasmine to vitest

## 🧑‍💻 Getting Started

Install dependencies:

> npm install

Run project:

> npm start
