<template>
  <div class="bg-dark main-container d-flex justify-content-around p-2">
    <div class="d-flex mail-container" @click="openMail()">
      <p class="m-0">Lets Work Together! <i class="mdi mdi-mail"></i></p>
    </div>
    <p class="text-muted m-0 mx-2">Built From Scratch by Me : )</p>
  </div>
</template>


<script>
export default {
  setup() {
    return {
      openMail() {
        window.open('mailto:caleb123elliott@gmail.com?subject=Lets Work Together&body=body');
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.main-container {}

.mail-container {
  letter-spacing: .2rem;
  border-bottom: 1.5px solid #5484FF;
}

.mail-container:hover {
  cursor: pointer;
  border-bottom: 1.5px solid #5484FF;
}
</style>