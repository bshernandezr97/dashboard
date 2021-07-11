<template>
  <div class="tooltip-container">
    <div class="mb-5">
      <strong>Aplicaciones</strong>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Fallos Mes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app of apps" :key="app.id">
          <td>{{ app.name }}</td>
          <td>
            <v-icon large :color="app.status === 'Activa' ? 'green' : 'red'">
              {{
                app.status === 'Activa' ? "mdi-power" : "mdi-radioactive-off"
              }}
            </v-icon>
            {{ app.status }}
          </td>
          <td>{{ app.fails }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from "../../fixtures/apps";
export default {
  setup() {
    const { apps } = data();
    return { apps };
  },
};
</script>

<style scoped>
.tooltip-container {
  box-shadow: 0 2px 8px gray;
  border-radius: 5px;
  margin: 5px;
  background-color: white;
  padding: 10px;
  text-align: center;
}
table {
  width: 70vw;
  border-spacing: 0px;
}

th {
  background-color: rgb(79, 221, 174);
  padding: 5px;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
}

td {
  padding: 5px;
  border-bottom: 1px solid lightgray;
}
</style>
