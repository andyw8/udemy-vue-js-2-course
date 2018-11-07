<template>
    <div class="col-xs-12 col-sm-6">
      <div v-if="!server">
        Please select a server.
      </div>
      <div v-else>
        <p>Server {{ server.id }} has status {{ server.status }}</p>
      </div>
      <button @click="reset">Reset to Normal</button>
    </div>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data: function() {
      return {
        server: null,
      }
    },
    methods: {
      reset() {
        this.server.status = "Normal";
      }
    },
    created() {
      eventBus.$on('showDetailsClicked', (server) => {
        this.server = server;
      } )
    }
  }
</script>

<style>

</style>
