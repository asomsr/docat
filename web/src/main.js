import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "@/App.vue";

// configure vue material (https://vuematerial.io/getting-started/)
import {
  MdCard,
  MdButton,
  MdAvatar,
  MdApp,
  MdToolbar,
  MdContent,
  MdList,
  MdField,
  MdMenu,
  MdProgress,
  MdSnackbar,
  MdIcon,
  MdTooltip,
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

// configure to use vue-markdown (https://github.com/miaolz123/vue-markdown)
import VueMarkdown from "vue-markdown";

// configure the app's routing
import Home from "@/pages/Home.vue";
import Docs from "@/pages/Docs.vue";
import Help from "@/pages/Help.vue";
import Upload from "@/pages/Upload.vue";
import Claim from "@/pages/Claim.vue";
import Delete from "@/pages/Delete.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/help", component: Help },
  { path: "/upload", component: Upload },
  { path: "/claim", component: Claim },
  { path: "/delete", component: Delete },
  { path: "/:project/:version?/:location(.*)?", component: Docs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// configure vue
// Vue.config.productionTip = false;

createApp(App)
  .use(router)
  .use(MdApp)
  .use(MdContent)
  .use(MdField)
  .use(MdMenu)
  .use(MdList)
  .use(MdToolbar)
  .use(MdCard)
  .use(MdAvatar)
  .use(MdProgress)
  .use(MdSnackbar)
  .use(MdButton)
  .use(MdIcon)
  .use(MdTooltip)
  .use(VueMarkdown)
  .mount("#app-container");
