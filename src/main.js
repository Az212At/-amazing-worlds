import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/styles/styles.scss";
import App from ".@/App.vue.vue";
import router from "@/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
