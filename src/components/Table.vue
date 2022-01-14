<template>
  <MDBTable hover striped>
    <thead>
    <tr>
      <th scope="col"
          v-for="col of columns"
          :key="col.id"
      >{{ col }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="(item, index) of rows"
        :key="index"
        class="table-line table-light"
        @click="selectRow(item.name)"
    >
      <td class="column index-1">
        <img
            :src="item.owner.avatar"
            :alt="item.owner.name"
            :title="item.owner.name"
            class="column__owner-avatar"
        >
      </td>
      <td class="column index-2">
        <div class="column__name">
          {{ item.name }}
        </div>
      </td>
      <td class="column index-3">
        <div class="column__description">
          {{ item.description }}
        </div>
      </td>
      <td class="column index-4">
        <div class="column__license">
          {{ item.license }}
        </div>
      </td>
      <td class="column index-5">
        <div class="column__version">
          {{ item.version }}
        </div>
      </td>
    </tr>
    </tbody>
  </MDBTable>

  <Pagination
      :model-value="page"
      :pages-total="pagesTotal"
      class="mt-md-2"
      @update:model-value="selectPage"
  />

</template>

<script>
import {MDBTable} from 'mdb-vue-ui-kit';
import Pagination from '@/components/Pagination';

export default {
  name: 'Table',
  components: {
    MDBTable,
    Pagination,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      default: undefined,
    },
    rowsPerPage: {
      type: Number,
      default: 10,
    }
  },
  data() {
    return {
      columns: [
        'Owner',
        'Name',
        'Description',
        'Version',
        'License',
      ],
    };
  },
  computed: {
    pagesTotal() {
      return Math.ceil(this.total / this.rowsPerPage);
    },
  },
  emits: ['select-page', 'select-row'],
  methods: {
    selectPage(page) {
      this.$emit('select-page', page);
    },
    selectRow(name) {
      this.$emit('select-row', name);
    },
  },
}
</script>
