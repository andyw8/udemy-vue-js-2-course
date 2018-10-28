<template>
    <div class="container">
        <my-header />
        <hr>
        <div class="row">
          <my-servers />
          <my-server-details />
        </div>
        <hr>
        <div class="row">
            <my-footer />
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Servers from './Servers.vue'
import ServerDetails from './ServerDetails.vue'

export default {
  components: {
    'my-header': Header,
    'my-footer': Footer,
    'my-servers': Servers,
    'my-server-details': ServerDetails
  }
}

</script>


<style>

</style>
