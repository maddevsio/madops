<template>
  <header>
    <div class="header">
      <a href="/" class="header-logo">
        <img src="./../assets/img/logo/madopsblack.svg" alt="">
      </a>
      <locale-switcher/>
    </div>
    <div class="header-info">
      <div class="header-info--text">
        {{ $t("headerText") }}
      </div>
      <a href="mailto:ops@maddevs.io" class="header-info--action mail-btn">ops@maddevs.io</a>
      <div class="header-info--social">
        <a href="#">
          <img src="./../assets/img/social/git.svg" alt="">
        </a>
        <a href="#">
          <img src="./../assets/img/social/insta.svg" alt="">
        </a>
        <a href="#">
          <img src="./../assets/img/social/medium.svg" alt="">
        </a>
      </div>
    </div>
  </header>
</template>

<script>
  import LocaleSwitcher from './LocaleSwitcher';

  export default {
    name: 'Header',
    components: {
      LocaleSwitcher,
    },
  };
</script>

<style scoped></style>
