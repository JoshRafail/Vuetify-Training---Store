<template>
  <v-app>
    <TopNav />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
const TopNav = require('./components/TopNav')

module.exports = {
  name: 'app',
  components: {
    TopNav
  }
}
</script>
