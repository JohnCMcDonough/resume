<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <jmcd-header/>
    <router-view/>
    <jmcd-footer/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app'
}
</script>

<style>
body {
  padding: 0px !important;
  margin: 0px !important;
  background-color: #EAE9E7 !important;
}
#app {
  max-width: 1600px;
  margin: auto;
}
@media (min-width: 1200px) {
    .container{
        max-width: 1600px;
    }
}
</style>
