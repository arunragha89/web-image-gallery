<template>
  <transition name="modal-fade">
    <div
      class="modal-backdrop flex align-items-center justify-content-center"
      role="dialog"
    >
      <div class="modal flex flex-direction-column">
        <header class="modal-header flex justify-content-space-between">
          <slot name="header"> </slot>
        </header>
        <section class="modal-body">
          <slot name="body"> </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/abstracts/variables";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $color-grey-dark-1;
}

.modal {
  background: $color-grey-light-1;
  overflow-x: auto;
  width: 100vw;
  height: 100vh;
}

.modal-header {
  padding: 2rem;
}

.modal-body {
  text-align: center;
  position: relative;
  padding: 2rem 1rem;
  margin-top: 3rem;
  background: $color-grey-light-1;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
