<template>
  <div class="container-fluid text-light">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-12">
            <navbar></navbar>
          </div>
          <div class="col-12">
            <div class="profile-text">
              <h2>Hello, I'm </h2>
              <h1>Caleb<span class="period">.</span></h1>
              <p class="text-muted">A lifelong learner who is passionate about solving problems creativly and finding
                solutions where there previously were none. The medium to do so just happens to be software development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="right-side bg-secondary position-relative">
          <img src="../assets/img/IMG_0655.JPG" class="head-shot rounded-start" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.right-side {
  min-height: 100vh;
  min-width: 50vw;
}

.head-shot {
  height: 70vh;
  width: 60vw;
  object-fit: cover;
  object-position: middle;
  position: absolute;
  top: 15vh;
  left: -10vw
}

.profile-text {
  margin-top: 10vh;
  margin-left: 5vw;
  margin-right: 20vw;
}

.profile-text h2 {
  font-size: 2rem;
}

.profile-text h1 {
  margin-left: 3rem;
  font-size: 4rem;
  position: relative;
}

// .period {
//   content: ".";
//   color: #5484FF;
//   font-size: 5em;
//   position: absolute;
// }
</style>
