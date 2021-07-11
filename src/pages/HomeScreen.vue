<template>
  <div class="container">
    <div class="dashboard-container">
      <div>
          <database-tooltip />
      </div>

      <div>
          <application-tooltip />
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseTooltip from "../components/dashboard/DatabaseToolTip.vue";
import ApplicationTooltip from "../components/dashboard/ApplicationToolTip.vue";

export default {
  components: { DatabaseTooltip, ApplicationTooltip },
};
</script>

<style scoped>
.container {
  height: 100vh;
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
    background-color: rgba(168, 168, 168, 0.239);
}
.dashboard-container {
  width: 80%;
  padding: 10px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
