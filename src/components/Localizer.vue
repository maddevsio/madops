<template>
  <div v-if="uiTranslationsLoaded">
    <slot/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { switchDocumentLocale } from '../services/i18n/util';
  import { setUiLocale, t, currentLocale } from '../services/i18n';

  export default {
    data() {
      return {
        uiTranslationsLoaded: false,
      };
    },

    methods: {
      set(locale) {
        this.uiTranslationsLoaded = false;
        document.title = locale === 'ru' ?
          'Mad Ops – Девопс-инженеры, профессионально решающие инфраструктурные проблемы у команд разработчиков\n' :
          'Mad Ops – DevOps engineers who professionally solve infrastructure problems of the developers teams\n';
        setUiLocale(locale)
          .then(() => {
            Vue.prototype.$t = t;
            this.uiTranslationsLoaded = true;
            switchDocumentLocale(
              locale,
            );
          })
          /* eslint-disable no-console */
          .catch(err => console.error(err));
      },
    },

    mounted() {
      this.set(this.$route.params.locale);
    },

    watch: {
      /* eslint-disable object-shorthand */
      '$route'(to) {
        if (to.params.locale !== currentLocale()) {
          this.set(to.params.locale);
        }
      },
    },
  };
</script>
