<!-- Kuhle -->
<script>
import Header from './components/Header.vue';
import SideBarNav from './components/SideBarNav.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Header, SideBarNav, Login
  },
  data() {
    return {
      darkMode: false,
      isLoggedIn: false,
      isCollapsed: false,
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    }
  }
}

</script>



<!-- Phoenix -->
<template>

  <div id="app" :class="{ 'dark-mode': darkMode }">

    <div v-if="isLoggedIn">
      <Header :darkMode="darkMode" @toggle-dark-mode="toggleDarkMode" @logout="logout" />

      <div class="main-container">
        <SideBarNav :isCollapsed="isCollapsed" />

        <main class="main-content" :class="{ 'expanded': isCollapsed }">
          <RouterView />
        </main>
      </div>
    </div>

    <div v-else>
      <Login @login-success="loginSuccess" />
    </div>
  </div>
</template>
 




<!-- Zahraa -->
<style></style>
