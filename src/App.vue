<template>
  <div class="container s">

    <div class="row">
      <div class="col">
        <SearchField
            v-model="query"
            placeholder="Enter the package name"
        />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <Table
            v-if="packages.list.length"
            :rows="packages.list"
            :total="packages.size"
            :page="pagination.page"
            @select-row="selectPackage"
            @select-page="setPage"
        />
      </div>
    </div>

  </div>

  <Footer
      class="fixed-bottom footer"
  />

  <Cube
      class="cube"
      v-if="!packages.list.length"
  />

  <ModalData
      v-model="packageInfoOpened"
      :package-name="selectedPackage"
  />

</template>

<script>

import SearchField from '@/components/SearchField';
import Table from '@/components/Table';
import ModalData from '@/components/modal/ModalData';
import Footer from "@/components/Footer";
import Cube from "@/components/effects/Cube";
import {SEARCH_PACKAGES} from "@/store/action.types";
import {MDBContainer, MDBCol} from 'mdb-vue-ui-kit';

import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from 'mdb-vue-ui-kit';

export default {
  name: 'App',
  components: {
    SearchField,
    Table,
    Footer,
    ModalData,
    Cube,

    MDBContainer,
    MDBCol,
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn
  },
  setup() {

    function setFocus() {
      const autofocusInput = document.getElementById('autofocusInput')
      autofocusInput.focus()
    }

    return {
      setFocus
    }
  },
  data() {
    return {
      query: '',
      pagination: {
        page: 1,
        hitsPerPage: 10,
      },
      selectedPackage: null,
      link: null,
      packageInfoOpened: false,
    };
  },
  computed: {
    packages() {
      return this.$store.getters.packages;
    },
  },
  watch: {
    query() {
      this.pagination.page = 1;
      this.search(this.pagination);
    },
    getOpenModalW() {
      this.staticBackdrop = true
    },
    pagination: {
      deep: true,
      handler(value) {
        this.search(value);
      },
    },
  },
  methods: {
    setPage(page) {
      this.pagination.page = page;
    },

    search() {
      const payload = {
        query: this.query,
        ...this.pagination,
      };

      this.$store.dispatch(SEARCH_PACKAGES, payload);
    },

    selectPackage(packageName) {
      this.selectedPackage = packageName;
      this.packageInfoOpened = true;
    }
  }
}
</script>
