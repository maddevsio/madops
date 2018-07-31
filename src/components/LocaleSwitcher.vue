<template>
  <div>
    <router-link
      v-for="locale in locales"
      :key="locale.code"
      :to="`/${locale.code}`"
      class="header-lang"
    >
      <span class="header-lang--item">{{ $t("changeButton")}}</span>
    </router-link>
  </div>
</template>

<script>
  import { locales } from '../config/i18n';

  export default {
    data() {
      return {
        locales,
      };
    },
    methods: {

    },
    name: 'LocaleSwitcher',
  };
</script>

<style scoped>

</style>
