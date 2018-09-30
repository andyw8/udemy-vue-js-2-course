  new Vue({
    el: "#exercise",
    data: {
      value: 1
    },
    methods: {
      showAlert: function() {
        alert('Hi');
      },
      storeKey: function(event) {
        this.value = event.target.value;
      }
    }
  });
