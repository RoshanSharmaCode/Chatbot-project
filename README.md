<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# 🤖 React Chatbot

A simple chatbot built using React that performs utility tasks like flipping a coin, rolling a dice, getting today’s date, and generating random IDs. This project will be improved with more features in the future.

## 🚀 Features
- 💬 Interactive chat interface
- 🪙 Flip a coin
- 🎲 Roll a dice
- 📅 Get today’s date
- 🆔 Generate random unique ID
- ⚡ Fast and responsive UI

## 🛠️ Tech Stack
- React.js
- JavaScript
- HTML5
- CSS3

## ▶️ How to Run
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
3. Start the app:
   ```bash
   npm run dev

## 🔮 Future Improvements
1. Add AI-based responses
2. More commands/features
3. Better UI/UX
   
## 💡 Learning
1. React components & state
2. Event handling
3. Building interactive apps
4. Logic implementation

## 📫 Contact
- LinkedIn: https://www.linkedin.com/in/roshansharma9379
- Email: roshansharma9379@gmail.com
>>>>>>> 222618904252cf2b87a07b3543350d52b889064b
