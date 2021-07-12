<template>
  <div>
    <main
      class="images grid justify-items-center"
      v-infinite-scroll="loadImages"
      infinite-scroll-disabled="busy"
    >
      <div class="loader" v-if="isLoading" />
      <a
        v-else
        v-for="(image, index) in images"
        :key="image.id"
        :title="image.alt_description"
        href="#"
        @click="expandImage(image)"
        :data-testid="`image-${index}`"
        ><img
          :src="image.urls.thumb"
          :alt="image.alt_description"
          loading="lazy"
        />
      </a>
      <div v-if="showError" class="error-message">Something went wrong</div>
    </main>
    <ImageDialog
      :showImageDialog="showImageDialog"
      :imageSelected="imageSelected"
      @image-dialog-closed="onCloseImageDialog"
    />
  </div>
</template>

<script>
import apiClient from "../apiClient";
import ImageDialog from "./ImageDialog.vue";
import { GET_PHOTOS_API } from "../constants";

export default {
  components: { ImageDialog },
  data() {
    return {
      images: [],
      pageData: 1,
      busy: false,
      imageSelected: {},
      showImageDialog: false,
      showError: false,
      isLoading: true,
    };
  },

  created() {
    this.loadImages();
  },

  methods: {
    async loadImages() {
      this.busy = true;
      try {
        const imageData = await apiClient(
          `${GET_PHOTOS_API.url}?${new URLSearchParams({
            page: this.pageData,
            per_page: GET_PHOTOS_API.per_page,
          })}`
        );
        this.images = [...this.images, ...imageData];
        this.busy = this.pageData >= GET_PHOTOS_API.numberOfPages;
        this.pageData++;
        this.isLoading = false;
      } catch (error) {
        this.showError = true;
      }
    },
    expandImage(image) {
      this.imageSelected = image;
      this.showImageDialog = true;
    },
    onCloseImageDialog() {
      this.imageSelected = {};
      this.showImageDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/abstracts/variables";

.images {
  background: $color-grey-light-3;
  padding: 10rem 5rem 5rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 1.2rem;
}

.image-list-end {
  text-align: center;
  font-size: 1.5rem;
}

.error-message {
  position: fixed;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
