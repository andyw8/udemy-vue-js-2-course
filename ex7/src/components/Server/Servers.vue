<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server
              v-for="server in servers"
              :server="server" />
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        components: {
            'app-server': Server
        },
        data: function() {
          return {
            servers: [
              { id: 1, status: "Normal" },
              { id: 2, status: "Degraded" },
              { id: 3, status: "Error" },
              { id: 4, status: "Failed" },
              { id: 5, status: "Unknown" }
            ]
          }
        }
    }
</script>

<style>

</style>
