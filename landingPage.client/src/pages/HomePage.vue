<template>

  <!-- <BackToTopFab /> -->


  <div class="container-fluid text-light">
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-12">
            <navbar class=""></navbar>
          </div>
          <div class="col-12 h-90">
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
              <p class="mt-5 mt- mb-0 border-bottom border-primary">Scroll for more</p>
              <i class="mdi mdi-arrow-down-bold text-primary"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-block">
        <div class="right-side bg-secondary position-relative">
          <img src="https://i.imgur.com/Kx2Mh8r.jpg" class="head-shot rounded-start" alt="">
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-12 bg-dark height-100">
        <div class=" section-div position-relative d-flex flex-column justify-content-evenly h-100 pt-md-0 pt-5"
          id="aboutSection">
          <div class="right-side-text reveal mt-5 position-relative d-flex flex-column">
            <h3 class="text-primary text-md-start text-center">Passionate Problem Solver</h3>
            <p class="text-muted about-paragraph">Most of my adult life has been spent trying to find something I'm
              passionate about.
              I've explored areas such as medicine, firefighting, and finance - but none of these careers felt right to
              me. Until I discovered software development.</p>
            <p class="text-muted d-md-block d-none">
              I wake up every day excited to build amazing solutions to real problems. The limitless opportunity to
              learn new
              skills and innovate motivates me more than anything else ever has.</p>
            <!-- <h1 class="about-underlay about-underlay-1 reveal">
              &lt;Div&gt;
            </h1> -->
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="d-flex flex-column reveal mt-md-5 mt-3 align-items-center position-relative reveal">
                <h3 class="mt-md-5 text-primary">My skills</h3>
                <div class=" mt-3 d-flex justify-content-center text-muted flex-wrap skills">
                  <p class="mx-3 skill">HTML</p>
                  <p class="mx-3 skill">CSS</p>
                  <p class="mx-3 skill">JavaScript</p>
                  <p class="mx-3 skill">BootStrap</p>
                  <p class="mx-3 skill">MVC</p>
                  <p class="mx-3 skill">Node.js</p>
                  <p class="mx-3 skill">Mongoose</p>
                  <p class="mx-3 skill">Vue.js</p>
                  <p class="mx-3 skill">C#</p>
                  <p class="mx-3 skill">.net</p>
                  <p class="mx-3 skill">MySql</p>
                  <p class="mx-3 skill">Git</p>
                  <p class="mx-3 skill">Scrum</p>
                </div>
                <p class="text-primary">And More!</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="position-relative d-flex flex-column align-items-center links-section mt-5 reveal">
                <h3 class="text-primary mt-md-5">
                  My Links
                </h3>
                <div class="mt-3 d-flex justify-content-around text-muted w-100">
                  <a href="https://github.com/CALEBELLIOTT" class="link text-muted"><i
                      class="mdi mdi-github link-icon"></i></a>
                  <a href="https://www.linkedin.com/in/caleb-elliott1/" class="link text-muted"><i
                      class="mdi mdi-linkedin link-icon"></i></a>
                  <a href="https://www.dropbox.com/s/vv31xngsg7agrod/Caleb-Elliott-Resume.pdf?dl=0"
                    class="link text-muted"><i class="mdi mdi-file link-icon"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-12">
        <div class="" id="myWorkSection">
          <div class="section-div height-100 my-work-section" id="myWorkSection">
            <WorkSection></WorkSection>
          </div>
        </div>
      </div>
    </div>

    <ContactBar></ContactBar>




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
          if (reveals[i].classList.contains("about-underlay")) {
            reveals[i].classList.add("underlay-reveal");
          }
          if (reveals[i].classList.contains("skill")) {
            reveals[i].classList.add("active-skill");
          }
        } else {
          reveals[i].classList.remove("active");
          if (reveals[i].classList.contains("about-underlay")) {
            reveals[i].classList.remove("underlay-reveal");
          }
        }
      }
    }
    onMounted(() => {
      reveal()
      window.addEventListener("scroll", reveal);
    })
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.reveal {
  position: relative;
  opacity: 0;
  transform: translateY(4rem);
  transition: 1s all ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.right-side {
  min-height: 100vh;
  min-width: 100%;
}

.height-100 {
  height: 100vh;
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
  animation: from-right 1500ms ease-out 300ms;
  filter: grayscale(.15);
  transform: translateY(-130%);
  opacity: 0;
  animation-fill-mode: forwards;
}

.muted-heading {
  letter-spacing: .3rem;
  color: #1b1e279c;
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
  padding-left: 5vw;
  padding-right: 5vw;
}

.right-side-text {
  padding-right: 30vw;
}

.left-side-text {
  padding-left: 30vw;
}

@media (max-width: 840px) {
  .right-side-text {
    padding-right: 5vw;
    text-align: justify;
  }
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

.about-underlay-1 {
  color: #323540ae;
  position: absolute;
  left: -20vw;
  top: 35rem;
  font-size: 12rem;
  font-weight: bold;
  z-index: 1;
  transition: 400ms;
}

.about-underlay-1.underlay-reveal {
  left: 45vw;
  top: 8rem;
  transition: 400ms ease-in;
}


.about-underlay-2 {
  color: #323540ae;
  position: absolute;
  left: 5vw;
  top: -8rem;
  font-size: 12rem;
  font-weight: bold;
  z-index: 1;
}


@media (max-width: 840px) {
  .about-underlay-1.underlay-reveal {
    left: 25vw;
    top: 17rem;
    transition: 400ms ease-in;
    font-size: 8rem;
    display: none;
  }

  .about-underlay-2 {
    font-size: 9rem;
    top: -5rem;

  }


}


.about-paragraph {
  z-index: 200;
}

.skills {
  z-index: 200;
}

.skill {}

.skill.active-skill {
  transform: translateY(0);
  opacity: 1;
  transition: 400ms;
}

.links-section h3 {
  z-index: 200;
}

.link {
  text-decoration: none;
}

.link-icon {
  font-size: 3rem;
  transition: 500ms;
}

.link-icon:hover {
  color: #5484FF;
  transition: 500ms;
}

.my-work-section {
  background-color: #393c46;
}

.h-90 {
  min-height: 90vh;
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
