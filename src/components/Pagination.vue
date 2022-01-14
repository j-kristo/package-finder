<template>
  <div class="pagination d-flex justify-content-center">
    <ul class="pagination-list d-flex flex-row">
      <li
          v-if="modelValue > 1"
          class="page-item"
          @click="selectPage(modelValue - 1)"
      >
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
          v-for="button of pageButtons"
          :key="button"
          :class="{'active': button === modelValue}"
          class="page-item"
          @click="selectPage(button)"
      >
        <a class="page-link" href="#">
          {{ button }}
        </a>
      </li>
      <li
          v-if="modelValue < pagesTotal"
          class="page-item"
          @click="selectPage(modelValue + 1)"
      >
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
    pagesTotal: {
      type: Number,
      default: 30,
    }
  },
  computed: {
    pageButtons() {
      const result = [];
      let from = 0;
      let to = 0;

      if (this.modelValue < 3) {
        from = 1;
        to = 5;
      } else if (this.pagesTotal - this.modelValue < 3) {
        from = this.pagesTotal - 4;
        to = this.pagesTotal;
      } else {
        from = this.modelValue - 2;
        to = this.modelValue + 2;
      }

      for (let i = from; i <= to; i += 1) {
        result.push(i);
      }

      return result;
    },
  },
  emits: ['update:model-value'],
  methods: {
    selectPage(page) {
      this.$emit('update:model-value', page);
    },
  },
}
</script>
