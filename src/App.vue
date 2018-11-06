<template>
  <v-app dark>
      <v-container fluid>
          <v-layout column align-center>
            <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <router-view></router-view>
          </v-layout>
      </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    computed: {
        alert () {
            return this.$store.state.alert
        }
    },
    watch:{
        $route (to, from){
            // clear alert on location change
            this.$store.dispatch('alert/clear');
        }
    } 
};
</script>