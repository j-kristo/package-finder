<template>
  <MDBInput label="Click to search the package"
            size="lg"
            white
            :value="modelValue"
            :placeholder="placeholder"
            type="search"
            class="form-control fw-bold"
            @input="input"
  />
</template>

<script>

import {MDBInput} from 'mdb-vue-ui-kit';
import {ref} from 'vue';

export default {
  name: 'SearchField',
  components: {
    MDBInput,
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['update:model-value'],
  setup() {
    const input1 = ref('');

    return {
      input1,
    };
  },
  methods: {
    input(evt) {
      this.$emit('update:model-value', evt.target.value);
    },
  },
}
</script>

<style lang="scss" scoped>
.form-control {
  font-weight: bold;
}
</style>
