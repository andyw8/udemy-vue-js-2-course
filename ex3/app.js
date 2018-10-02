new Vue({
  el: '#exercise',
  data: {
    value: 0
  },
  computed: {
    result: function() {
      if (this.value == 37) {
        return "done";
      } else {
        return "not there yet"
      }
    },
  },
  watch: {
    result: function(val) {
      var original = this;
      setTimeout(function() { original.value = 0 } , 5000)
    }
  }
});
