<template>
  <div class="container">
    <img
      class="sidebar-menu-brand"
      src="/assets/watchman-monitoring-brands.svg"
    />
    <router-link to="/">
      <div class="sidebar-menu-option">
        <v-icon large>
          mdi-database
        </v-icon>
        Base de datos
      </div>
    </router-link>
    <router-link to="/">
      <div class="sidebar-menu-option">
        <v-icon large>
          mdi-application-settings
        </v-icon>
        Aplicaciones
      </div>
    </router-link>
    <router-link to="/">
      <div class="sidebar-menu-option">
        <v-icon large>
          mdi-account-group
        </v-icon>
        Miembros
      </div>
    </router-link>
    <router-link to="/">
      <div class="sidebar-menu-option">
        <v-icon large>
          mdi-cogs
        </v-icon>
        Configuración
      </div>
    </router-link>
    <router-link to="/">
      <div class="sidebar-menu-option">
        <v-icon large>
          mdi-logout-variant
        </v-icon>
        Cerrar Sesión
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: rgb(79, 221, 174);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.container a {
  text-decoration: none;
}

.sidebar-menu-option {
  margin-left: 15px;
  padding: 7px;
  color: black;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background-color ease 0.5s;
}

.sidebar-menu-option:hover {
  color: rgb(158, 158, 158);
  background-color: rgb(49, 200, 150);
}

.sidebar-menu-brand {
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  height: 4rem;
  width: 4rem;
}
</style>
