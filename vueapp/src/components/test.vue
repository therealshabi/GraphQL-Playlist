<template>
  <div class="test container">
    <h1>{{title}}</h1>
    <input type="text" v-model="title"/><br>
    <p>{{user.firstName}}</p>
    <p v-text = "user.lastName"></p>
    <p v-if = "formal">How do you do?</p>
    <p v-else>Wassup Man?</p>
    <p>What would you like to have?</p>
    <ol>
      <li v-for = "item in items">{{item.title}}</li>
    </ol>
    <button v-on:click="greet('Hey Shabi!')">Say Greetings</button> <br><br>
    <input type = "text" v-on:keyup.enter = "showEnterMessage"/>
    <hr>

    <label>First Name : </label><input type="text" v-model = "user.firstName">
    <label>Last Name : </label><input type="text" v-model = "user.lastName">
    <h3 v-text="fullName"></h3>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name : 'test',
    props: {
      msg: {
        type : String,
        default : "Hey"
      }
    },
    data() {
      return {
          title : "Good Morning",
          user : {
            firstName : "Shahbaz",
            lastName : "Hussain"
          },
          formal: true,
          items : [
              {title : "Cold Coffee"},
              {title : "Samosa"},
              {title : "Oreo Shake"},
              {title : "Sandwiches"}
          ]
      }
    },

    methods : {
        greet : function(message) {
          alert(message);
        },
        showEnterMessage : function(e) {
          alert("You have just pressed an Enter button with text '"+e.target.value+"'");
        }
    },

    computed : {
      fullName : function() {
        return this.user.firstName + " " + this.user.lastName;
      }
    }
  }
</script>

<style scoped>
.container {
  margin: 0 auto;
}
</style>
