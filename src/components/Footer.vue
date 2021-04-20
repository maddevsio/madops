<template>
  <footer>
    <section>
      <div class="madops-section">
        <div class="footer-section--block">
          <a href="/" class="footer-section--logo"><img src="./../assets/img/logo/madopswhite.svg" alt=""></a>
          <div class="footer-section--title">{{ $t("footer_1") }}</div>
          <a href="/" class="footer-section--site madops-section-color">madops.io</a>
          <a href="tel:442039848555" class="footer-section--phone">+44 20 3984 8555</a>
          <a href="mailto:ops@maddevs.io" class="footer-section--mail mail-btn">ops@maddevs.io</a>
        </div>
      </div>
      <div class="maddevs-section">
        <div class="footer-section--block">
          <a href="https://maddevs.io" class="footer-section--logo"><img src="./../assets/img/logo/MaddevsLogo.svg" alt=""></a>
          <div class="footer-section--title">{{ $t("footer_2") }}</div>
          <a href="https://maddevs.io" class="footer-section--site maddevs-section-color">maddevs.io</a>
          <a href="tel:442039848555" class="footer-section--phone">+44 20 3984 8555</a>
          <a href="mailto:team@maddevs.io" class="footer-section--mail mail-btn">team@maddevs.io</a>
        </div>
      </div>
      <div class="social-section">
        <a href="https://github.com/maddevsio" target="_blank" rel="nofollow">
          <img src="./../assets/img/social/wh-git.svg" alt="">
        </a>
        <a href="https://www.instagram.com/maddevsio/" target="_blank" rel="nofollow">
          <img src="./../assets/img/social/wh-in.svg" alt="">
        </a>
        <a href="https://blog.maddevs.io/" target="_blank" rel="nofollow">
          <img src="./../assets/img/social/wh-medium.svg" alt="">
        </a>
      </div>
    </section>
    <div class="sub-footer">
      © Mad Devs <img src="../assets/img/horns.png" alt=""> {{ year }}
    </div>
  </footer>

</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        year: 0,
      };
    },
    mounted() {
      this.year = new Date().getFullYear();
    },
  };
</script>

<style scoped>
  .sub-footer img {
    width: 15px;
    height: 15px;
  }
</style>
