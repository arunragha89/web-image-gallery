<template>
  <header class="header flex flex-wrap">
    <img
      src="~@/assets/img/icon-camera.svg"
      alt="Camera Icon logo of application"
    />
    <div class="align-self-center logo-text">IGallery</div>
    <form
      action="#"
      role="search"
      class="search flex align-items-center justify-content-center"
    >
      <input
        type="search"
        class="search__input"
        placeholder="Search Images"
        aria-label="Search through site content for images"
        name="search_image"
      />
    </form>
    <a href="#" class="align-self-center login-link" title="Log In">Log In</a>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles/abstracts/mixins";
@import "../assets/styles/abstracts/variables";

.header {
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: $color-grey-light-4;
  @include respond(phone) {
    justify-content: space-between;
  }
}

.login-link {
  color: inherit;
}

.search {
  flex: 1 0 60%;

  @include respond(phone) {
    order: 1;
    margin-top: 1rem;
    flex: 1 0 95%;
    background-color: $color-grey-light-2;
  }

  &__input {
    font-family: inherit;
    font-size: $default-font-size;
    background-color: $color-grey-light-2;
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 100px;
    width: 80%;
    transition: all 0.2s;
    &:focus {
      outline: none;
      width: 90%;
      background-color: $color-grey-light-3;
    }

    &::-webkit-input-placeholder {
      font-weight: 100;
      color: $color-grey-light-4;
    }
  }
}
</style>
