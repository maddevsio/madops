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
  import initIntercom from '@/config/intercom';
  import Localizer from './components/Localizer';

  export default {
    name: 'App',
    components: {
      Localizer,
    },

    mounted() {
      initIntercom();
    },
  };
</script>

<style lang="scss" src="./assets/styles/index.scss"></style>
