<script>
import Header from './components/Header.vue';
import SideBarNav from './components/SideBarNav.vue';

export default {
  name: 'App',
  components: {
    SideBarNav, Header
  },
  data() {
    return {
      darkMode: false,
      isLoggedIn: false,
      isSidebarCollapsed: false,
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    login(){
      this.isLoggedIn = true;
    },
    logout(){
      this.isLoggedIn = false;
    },
    toggleSidebar(){
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }
}

</script>


<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <div v-if="isLoggedIn">
      <Header 
        :darkMode="darkMode" 
        @toggle-dark-mode="toggleDarkMode" 
        @logout="logout"
        @toggle-sidebar="toggleSidebar"
      />

      <div class="main-container">
        <SideBarNav :isCollapsed="isSidebarCollapsed" />
        
        <main class="main-content" :class="{ 'expanded': isSidebarCollapsed }">
          <router-view />
        </main>
      </div>
    </div>
    
    <div v-else>
      <router-view @login="login" />
    </div>
  </div>
</template>
 

<style>

body{
  background-color: aquamarine;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease;
}

#app.dark-mode{
  background-color: #1a1a1a;
  color: #ffffff;
}

.main-container{
  display:flex;
  min-height:100vh;
}

.main-content{
  flex:1;
  padding: 20px;
  transition: margin-left 0.3s ease;
}

.main-content.expand{
  margin-left: 0;
}

</style>
