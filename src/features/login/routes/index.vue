<script setup lang="ts">
import { useInteract } from "@/features/login";

const { defineField, errors, onClickSignIn } = useInteract();

const [email, emailProps] = defineField("email");
const [password, passwordProps] = defineField("password");
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            ログイン
          </h1>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メールアドレス</label>
            <input type="email" name="email" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="email" v-bind="emailProps" placeholder="name@company.com" />
            {{ errors.email }}
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">パスワード</label>
            <input type="password" name="password" id="password" placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="password" v-bind="passwordProps" />
            {{ errors.password }}
          </div>
          <div class="flex items-center justify-between">
            <a href="#"
              class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">パスワードを忘れた方はこちら</a>
          </div>
          <div class="flex flex-wrap">
            <button type="button" @click="onClickSignIn"
              class="w-1/2 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Sign in
            </button>
            <!-- LINE LOGIN APIへリクエストし、リダイレクトさせる（hooksで定義して、200だったら、リダイレクトするっていう処理の認識であっている？） -->
            <a href="">
              <img class="btn_line" src="@/assets/btn_login_base.png" />
              <img class="btn_line" src="@/assets/btn_login_hover.png" />
            </a>
          </div>
          <hr />
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">利用申し込みはこちら</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
a img:last-child {
  display: none;
}

a:hover img:last-child {
  display: block;
}

a:hover img:first-child {
  display: none;
}
</style>
