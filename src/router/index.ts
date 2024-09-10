import { createRouter, createWebHistory } from "vue-router";
import { PublicLayout, PrivateLayout } from "@/components/layout";
import { LoginPage } from "@/features/login";
import { CategoryPage } from "@/features/categories";
import { TodoListPage } from "@/features/todo/list";

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
      component: CategoryPage,
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
