// import App from './App.svelte'
import App from "./App.svelte"
/* Add JavaScript code here! */
console.log('Hello World! You did! Welcome to Snowpack :D');

const app = new App({
    target: document.body,
})
// const doc = new GoogleSpreadsheet(SHEET_ID);

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// // Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
// if (import.meta.hot) {
//     import.meta.hot.accept();
//     import.meta.hot.dispose(() => {
//         app.$destroy();
//     });
// }
