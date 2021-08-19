<template>
  <div class="bg-white w-screen mb-5">
    <nav
      class="
        items-center
        border-2 border-gray-100
        bg-gray-100
        p-3
        fixed
        top-0
        w-full
      "
    >
      <div class="flex flex-row items-center">
        <svg
          class="h-12 w-12"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
            fill="#4C51BF"
            stroke="#4C51BF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
            fill="white"
          ></path>
        </svg>
        <div class="px-4">
          <span class="text-gray-900 lxtext-xl">Dashboard Admin</span>
        </div>
        <div class="w-full">
          <div class="w-full inline-block">
          <ul class="flex flex-row-reverse">
            <ul class="flex flex-row-reverse" v-if="user">
              <li class="">
                <a class="" @click.prevent="logout">
                  <button
                    class="
                    bg-purple-600
                    text-white
                      rounded-md
                      block
                      w-full
                      text-left
                      px-4
                      py-2
                      text-base
                      hover:bg-gray-100
                      hover:text-purple-600
                    "
                    role="menuitem"
                  >
                    Log out
                  </button>
                </a>
              </li>
            </ul>
            <ul class="flex flex-row-reverse" v-else>
              <li class="m-5">
                <router-link class="" to="/Register">
                  <button
                    class="
                      bg-purple-600
                      text-white
                      rounded-md
                      block
                      w-full
                      px-4
                      py-2
                      text-base
                      hover:bg-gray-100
                      hover:text-purple-600
                    "
                    role="menuitem"
                  >
                     Sign in
                  </button>
                </router-link>
              </li>
              <li class="m-5">
                <router-link class="" to="/">
                  <button
                    class="
                     bg-purple-600
                      text-white
                      rounded-md
                      block
                      w-full
                      text-left
                      px-4
                      py-2
                      text-base
                      hover:bg-gray-100
                      hover:text-purple-600
                    "
                    role="menuitem"
                  >
                   Login
                  </button>
                </router-link>
              </li>
            </ul>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
import "@/firebaseDb";

export default {
  name: "Navigation",
  data() {
    return {
      user: null,
      //active: false
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((answer) => {
          console.log(answer + "Sesion cerrada!");
          this.$router.push("/");
        });
    },
    /* action(){
        this.active = true
        console.log(this.active);
      } */
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style>
</style>