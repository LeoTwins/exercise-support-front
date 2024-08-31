import { createRouter, createWebHistory } from "vue-router";
import IndexPage from "@/features/categories/routes/IndexPage.vue";
import { PublicLayout, PrivateLayout } from "@/components/layout";
import TodoListPage from "@/features/todo/list/TodoListPage.vue";
import LoginPage from "@/features/login/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
      meta: {
        layout: PublicLayout
      }
    },
    {
      path: "/category",
      name: "category",
      component: IndexPage,
      meta: {
        layout: PrivateLayout
      }
    },
    {
      path: "/todo",
      name: "todo",
      component: TodoListPage,
      meta: {
        layout: PrivateLayout
      }
    },
  ]
});

export default router;
