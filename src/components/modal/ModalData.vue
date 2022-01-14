<template>
  <ModalWrapper
      :package="package"
      :model-value="modelValue"
      :title="packageName"
      @update:model-value="updateModelValue"
  >
    <template v-if="package">
      <div class="row">
        <div class="col d-flex flex-row align-items-center">
          <img
              :src="package.owner.avatar"
              alt=""
              class="package-modal__avatar"
          >
          <div class="mx-2 fw-bold">{{ package.owner.name }}</div>
        </div>
        <div class="col d-flex flex-column align-items-end">
          <div><span class="fw-bold">version</span>{{ package.version }}</div>
          <div><span class="fw-bold">license</span>{{ package.license }}</div>
          <div>
            last month downloads :
            <span class="digit text-danger">
              {{ package.humanDownloadsLast30Days }}
            </span>
          </div>
        </div>
      </div>
      <div class="separator">
        <hr>
        <div class="separator__title">description:</div>
      </div>
      <p class="text-start my-3">
        {{ package.description }}
      </p>

      <div class="separator">
        <hr>
        <div class="separator__title">keywords:</div>
      </div>

      <div class="d-flex flex-wrap">
        <div
            v-for="word of package.keywords"
            class="card py-1 px-2 me-2 mb-2"
        >
          {{ word }}
        </div>
      </div>
    </template>
  </ModalWrapper>
</template>

<script>
import ModalWrapper from '@/components/modal/ModalWrapper';
import {GET_PACKAGE_INFO} from "@/store/action.types";

export default {
  name: 'ModalData',
  components: {
    ModalWrapper,
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    packageName: {
      type: String,
      required: true,
    }
  },
  computed: {
    package() {
      return this.$store.getters.package;
    },
  },
  watch: {
    packageName(value) {
      this.$store.dispatch(GET_PACKAGE_INFO, {packageName: value});
    },
  },
  emits: ['update:model-value'],
  methods: {
    updateModelValue(value) {
      this.$emit('update:model-value', value);
    }
  },
}
</script>

<style lang="scss">
.package-modal {
  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
}
</style>
