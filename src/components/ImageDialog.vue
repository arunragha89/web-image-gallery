<template>
  <modal v-if="showDialog" @close="closeDialog">
    <template v-slot:header>
      <div class="image-header flex justify-content-space-between">
        <div class="flex flex-auto">
          <img
            class="user-picture"
            :src="imageSelected.user.profile_image.small"
            alt="User picture"
          />
          <div class="align-self-center">{{ imageSelected.user.name }}</div>
        </div>
        <button class="close-button" type="button" @click="closeDialog">
          <img
            src="~@/assets/img/close-icon.svg"
            class="close-icon"
            alt="close-icon"
          />
        </button>
      </div>
    </template>
    <template v-slot:body>
      <img
        :src="imageSelected.urls.small"
        :alt="imageSelected.alt_description"
      />
    </template>
  </modal>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  props: {
    showImageDialog: {
      type: Boolean,
      default: false,
    },
    imageSelected: {
      type: Object,
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
      showDialog: false,
    };
  },
  watch: {
    showImageDialog() {
      this.showDialog = this.showImageDialog;
    },
  },
  methods: {
    closeDialog() {
      this.showDialog = false;
      this.$emit("image-dialog-closed");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/abstracts/variables";

.image-header {
  width: 100%;
  position: fixed;
  width: 100%;
  background: $color-grey-light-4;
  z-index: 100;
  left: 0;
  top: 0;
  padding: 0.5rem;
}

.user-picture {
  border-radius: 50px;
  padding-right: 0.5rem;
}

.close-icon {
  height: 2.5rem;
  width: 2.5rem;
}
</style>
>
