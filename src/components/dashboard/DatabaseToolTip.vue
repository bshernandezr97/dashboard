<template>
  <div class="tooltip-container">
    <div class="title-container">
      <br />
      <strong>
        Base de datos
      </strong>
    </div>
    <div class="content-container">
      <strong>Estado</strong>
      <ul>
        <li><v-icon large color="green"> mdi-database </v-icon>Activas: 4</li>
        <li><v-icon large color="red"> mdi-database </v-icon>Inactivas: 1</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tooltip-container {
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 0px solid gray;
  box-shadow: 0 2px 8px gray;
}

ul {
  list-style: none;
}

.tooltip-container div {
  text-align: center;
  padding: 5px;
  margin: 15px;
}
.title-container {
  border-right: 1px solid lightgray;
}
</style>
