<template>
  <transition name="slide-fade">
    <div
        v-if="modelValue"
        class="wrapper w-100 h-100 top-0 position-fixed fade show"
    >
      <div class="app-dialog__dialog modal-dialog modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title">{{ title }}</h5>
            <MDBBtn color="danger" @click="updateModelValue(false)" class="btn-modal">
              <i class="fas fa-times"></i>
            </MDBBtn>
          </div>

          <div class="modal-body">
            <slot/>
          </div>

          <div class="modal-footer d-flex justify-content-between">
            <MDBBtn color="light" @click="goToOwnerPage">owner's page</MDBBtn>
            <div class="arrows"><i class="fas fa-arrow-left"></i></div>
            <div class="go fw-bold text-danger">GO TO</div>
            <div class="arrows"><i class="fas fa-arrow-right"></i></div>
            <MDBBtn color="secondary" @click="goToGitPage">repository</MDBBtn>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {MDBBtn} from "mdb-vue-ui-kit";

export default {
  name: 'ModalWrapper',
  components: {
    MDBBtn,
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    package: {
      type: Object
    },
    title: {
      type: String,
      default: '',
    },
  },
  emits: ['update:model-value'],
  methods: {
    updateModelValue(value) {
      this.$emit('update:model-value', value);
    },
    goToOwnerPage() {
      window.open(this.package.owner.link)
    },
    goToGitPage() {
      window.open(this.package.repository.url)
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  z-index: 9;
}
.app-dialog {
  &__dialog {
    max-width: 700px;

    .modal-content {
      border-radius: 5px;
      box-shadow: 0px 0px 12px 1px #0000004a
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.9s cubic-bezier(.03, 1.22, .31, 1.16);
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(.42, 0, .21, .78);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20%);
  opacity: 0;
}

.btn-modal {
  padding: 4px 7px 2px 8px;

  i {
    font-size: 2em;
  }
}
</style>
