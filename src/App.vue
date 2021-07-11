<template>
  <div class="app-container">
    <sidebar-component class="sidebar-container" />
    <router-view class="router-container"></router-view>
  </div>
</template>

<script>
import SidebarComponent from "./components/ui/SideBar.vue";
export default {
  components: { SidebarComponent },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: row;
  margin: 0px;
  width: 100vw;
}
.router-container {
  width: 80vw;
  overflow: scroll;
}
.sidebar-container {
  box-shadow: 0 2px 8px gray;
  width: 20vw;
}
</style>

<style>
* {
  font-family: Helvetica, sans-serif;
}
</style>
