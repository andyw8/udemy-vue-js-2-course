<template>
  <li class="list-group-item">
    <div @click="showDetails">
      Server #{{ server.id }}
    </div>
  </li>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    props: ['server'],
    methods: {
      showDetails: function() {
        eventBus.$emit("showDetailsClicked", this.server);
      }
    }
  }
</script>

<style>

</style>
