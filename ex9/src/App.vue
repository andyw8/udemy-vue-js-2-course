<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <p>First Name: <input v-model="firstName" type="text"></p>
                    <p>Last Name: <input v-model="lastName" type="text"></p>
                    <p>Mail: <input v-model="mail" type="text" /></p>
                    <p>Password: <input v-model="password" type="password" /></p>
                    <p>Store in Database?:
                        <label>
                            <input type="radio" v-model="store" value="yes" id="store-yes" name="store"> Yes
                        </label>

                        <label>
                            <input type="radio" v-model="store" value="no" id="store-no" name="store"> No
                        </label>
                    </p>
                    <input @click.prevent="stuff" type="submit" />
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div v-if="submitted" class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data: function() {
        return {
          submitted: false,
          firstName: "",
          lastName: "",
          mail: "",
          password: "",
          store: "yes"
        };
      },
      computed: {
        fullName: function() {
          return this.firstName + ' ' + this.lastName;
        },
      },
      methods: {
        stuff: function(event) {
          this.submitted = true;
          console.log("stuff");
        }
      }
    }
</script>

<style>
</style>
