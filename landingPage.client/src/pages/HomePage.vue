<template>
  <div class="container-fluid text-light">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-12">
            <navbar class=""></navbar>
          </div>
          <div class="col-12 height-100">
            <div class="profile-text d-flex flex-column">
              <h2 class="muted-heading mb-0">Software</h2>
              <h2 class="muted-heading ms-5">Developer</h2>
              <h2>Hello, I'm </h2>
              <div class="d-flex align-items-end mb-3">
                <h1 class="">Caleb</h1>
                <h1 class="period m-0">.</h1>
              </div>
              <div class="position-relative muted-heading-container">
                <p class="text-muted">A lifelong learner who is passionate about solving problems creatively and finding
                  solutions where there previously were none. The medium to do so just happens to be software
                  development.
                </p>
              </div>
              <div class=" d-none d-md-flex align-items-center flex-column scroll-for-more mt-5">
                <p class="mt-5 mb-0 border-bottom border-primary">Scroll for more</p>
                <i class="mdi mdi-arrow-down-bold text-primary"></i>
              </div>
            </div>
            <div class=" d-md-none d-flex align-items-center flex-column scroll-for-more mt-5">
              <p class="mt-5 mb-0 border-bottom border-primary">Scroll for more</p>
              <i class="mdi mdi-arrow-down-bold text-primary"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-block">
        <div class="right-side bg-secondary position-relative">
          <img src="../assets/img/IMG_0655.JPG" class="head-shot rounded-start" alt="">

        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 bg-dark height-100">
        <div class="mt-3 section-div position-relative" id="aboutSection">
          <div class="reveal">
            <h3 class="text-primary">Passionate Developer</h3>
            <p class="text-muted">I am a lifelong learner and am always enthusiastic to learn a new skill. I have spent
              my
              adult life so far exploring new opportunities and trying new things. From Biology to firefighting to
              medicine
              and finance, my curiosity among various fields has known no bounds<br><br>

              However, none have piqued my interest as much as software development. The opportunity to learn new things
              and solve different problems every day has kept me passionately learning ever since I typed my first line
              of
              code.</p>
          </div>
          <div class="reveal text-end">
            <h3 class="text-primary">Passionate Developer</h3>
            <p class="text-muted">I am a lifelong learner and am always enthusiastic to learn a new skill. I have spent
              my
              adult life so far exploring new oppurtunites and trying new things. From Biology to firefighting to
              medicine
              and finance, my curiousity among various fields has known no bounds<br><br>

              However, none have piqued my interest as much as software development. The opportunity to learn new things
              and solve different problems every day has kept me passionatly learning ever since I typed my first line
              of
              code.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="" id="myWorkSection">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 20;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", reveal);
      reveal()
    })
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.reveal {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 2s all ease;
}

.reveal.active {
  transform: translateY(0);
  opacity: 1;
}

.right-side {
  min-height: 100vh;
  min-width: 100%;
}

.height-100 {
  min-height: 100vh;
}

.head-shot {
  height: 70vh;
  width: 60vw;
  object-fit: cover;
  object-position: middle;
  position: absolute;
  top: 10vh;
  left: -10vw;
  right: 0;
  animation: from-right 600ms ease-out 300ms;
  filter: grayscale(.15);
  transform: translateY(-130%);
  opacity: 0;
  animation-fill-mode: forwards;
}

// .head-shot {
//   height: 50vh;
//   width: 60vw;
//   object-fit: cover;
//   object-position: top;
//   top: 10vh;
//   left: -10vw;
//   right: 0;
// }

.muted-heading {
  letter-spacing: .3rem;
  color: #323540ae;
  font-weight: bold;
  transform: translateY(2.1rem);
  z-index: 1;
  opacity: 0;
  transform: translateX(-130%);
  animation: from-left 1500ms;
  animation-fill-mode: forwards;

}

.profile-text {
  margin-top: 10vh;
  margin-left: 5vw;
  margin-right: 20vw;
  font-size: larger;
  animation: fade-in 1500ms;
}

.section-div {
  margin-left: 5vw;
  margin-right: 30vw;
}

.profile-text h2 {
  font-size: 2rem;
  z-index: 3;
}


.profile-text h1 {
  margin-left: 3rem;
  font-size: 4rem;
  line-height: 44px;
  font-weight: bold;
}

.period {
  color: #5484FF;
  // transform: scale(500%);
  // line-height: 44px;
}

.scroll-for-more:hover {
  i {
    transform: translateY(1rem);
    transition: 300ms;
  }

  p {
    cursor: default;

  }
}



.scroll-for-more i {
  transition: 300ms;
}

.vue-icon {
  position: absolute;
  top: 10rem;
  right: -10rem;
  font-size: 20rem;
}


@keyframes from-bottom {
  0% {
    transform: translateY(130%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes from-right {
  0% {
    transform: translateX(130%);
    opacity: 0;
  }

  30% {
    transform: translateX(-15%);
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes from-left {
  0% {
    transform: translateX(-130%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
    transform: translateY(2.1rem);

  }
}
</style>
