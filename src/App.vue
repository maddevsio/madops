<template>
  <div id="app">
    <localizer>
      <Header/>
      <router-view/>
      <Footer/>
    </localizer>
  </div>
</template>

<script>
  import Localizer from './components/Localizer';

  export default {
    name: 'App',
    components: {
      Localizer,
    },
  };
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
