new Vue({
  el: '#exercise',
  data: {
    value: 0,
    result: "not there yet"
  },
  watch: {
    value: function(val) {
      if (val == 37) {
        this.result = "done";
      }
    },
    result: function(val) {
      var original = this;
      setTimeout(function() { original.value = 0 } , 5000)
    }
  }
});
