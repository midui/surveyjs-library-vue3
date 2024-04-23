import { createApp } from "vue";
import { surveyPlugin } from "survey-vue3-ui";
import App from "./App.vue";
import "survey-core/defaultV2.min.css";

const app = createApp(App).use(surveyPlugin);
app.mount("#app");