<template>
  <div>
    <app-header />
    <image-list />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ImageList from "./components/ImageList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    ImageList,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
