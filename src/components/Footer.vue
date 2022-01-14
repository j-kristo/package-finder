<template>
  <MDBFooter
      bg="none"
      :text="['center', 'white']"
      style="background-color: #0a4275"
  >
    <!-- Grid container -->
    <MDBContainer class="p-4 pb-0">

      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">To the code:</span>
          <MDBBtn @click="delayBeforeGoToGit"
                  color="light"
          >
            github
          </MDBBtn>
        </p>
      </section>

    </MDBContainer>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2022 :
      <a class="text-white"
         href="https://www.linkedin.com/in/jack-kristo-65172b56/"
         target="_blank"
      >Evgen Kosovsky</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script>
import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-vue-ui-kit';

export default {

  name: 'Footer',
  setup () {

    const externalUrl = 'https://github.com/j-kristo/package-finder'
    const toGithub = () => {
      window.open(externalUrl, '_blank')
    }
    const delayBeforeGoToGit = () => {
      setTimeout(() => {
        toGithub()
      }, 700)
    }

    return {

      externalUrl,
      delayBeforeGoToGit,
      toGithub
    }
  },
  components: {
    MDBFooter,
    MDBContainer,
    MDBBtn
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
}
</style>
