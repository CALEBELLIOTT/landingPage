<template>
  <div class="row position-relative">
    <div class="col-12">
      <div class="d-flex flex-column justify-content-evenly height-100">

        <transition>
          <div class="text-center" v-if="!project.name">
            <h3 class="text-primary">
              My Recent Software Projects
            </h3>
            <p class="text-muted">Some things that I have built</p>
          </div>
        </transition>


        <transition>
          <div class="align-items-center d-none d-md-flex" v-if="project.name">
            <div class="d-flex flex-column">
              <button class="btn btn-outline-primary mb-2 reset-btn" @click="reset()">Reset</button>
              <img class="project-img" :src="project?.img" :alt="project.name + ' home page'">
            </div>
            <div class="mx-3" v-if="project.name">
              <h3 class="text-primary">{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </transition>

        <transition>
          <div class="row d-md-none" v-if="project.name">
            <div class="col-12">
              <div class="d-flex flex-column">
                <button class="btn btn-outline-primary mb-2 reset-btn" @click="reset()">Reset</button>
                <img class="img-fluid" :src="project?.img" :alt="project.name + ' home page'">
              </div>
            </div>
            <div class="col-12">
              <h3 class="text-primary mt-2">{{ project.name }}</h3>
              <p class="mt-3 mx-2">
                {{ project.description }}
              </p>
            </div>

          </div>
        </transition>

        <transition>
          <div class="d-flex justify-content-between" v-if="project.name">
            <div>
              <h3 class="text-primary">Technologies Used</h3>
              <ul class="justify-content-between">
                <li v-for="t in project.technologiesUsed">{{ t }}</li>
              </ul>
            </div>
            <div>
              <h1><a :href="project.repoLink"><i class="mdi mdi-github"></i></a></h1>
              <h1><a :href="project.liveLink"><i class="mdi mdi-search-web"></i></a></h1>
            </div>
          </div>
        </transition>










        <transition>
          <div class="projects reveal" id="projectsSection" v-if="!project.name">
            <div class="row">
              <div class="col-md-6">
                <div class="project my-2" id="tower-inactive"
                  :style="`background-image: url(${projectData.tower.img});`" @click="setActive('tower-inactive')">
                </div>
              </div>
              <div class="col-md-6 my-2">
                <div class="project" id="onTracker-inactive"
                  :style="`background-image: url(${projectData.onTracker.img});`"
                  @click="setActive('onTracker-inactive')">
                </div>
              </div>
              <div class="col-12 d-md-block d-none">
                <div class="row d-flex justify-content-center mt-2">
                  <div class="col-md-6">
                    <div class="project" id="keepr-inactive" :style="`background-image: url(${projectData.keepr.img});`"
                      @click="setActive('keepr-inactive')">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"
import { AppState } from "../AppState"
import { AppData } from "../AppState"

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
    return {
      project: computed(() => AppState.activeProject),
      projectData: computed(() => AppData),
      setActive(id) {
        document.getElementById(id).classList.add("inactive")
        if (id == "tower-inactive") {
          AppState.activeProject = AppData.tower
          document.getElementById("onTracker-inactive").classList.add("inactive")
        }
        if (id == "onTracker-inactive") {
          AppState.activeProject = AppData.onTracker
          document.getElementById("tower-inactive").classList.add("inactive")
        }
        if (id == "keepr-inactive") {
          AppState.activeProject = AppData.keepr
        }
      },
      reset() {
        AppState.activeProject = {}
        reveal()
      },

    }
  }
}
</script>


<style lang="scss" scoped>
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  transition-delay: 500ms;
}

.v-enter-from,
.v-leave-to {
  transition: opacity .5s ease;
  opacity: 0;
}

.height-100 {
  min-height: 100vh;
}

.project {
  height: 15rem;
  background-size: cover;
  border: 3px solid #5484FF;
  border-radius: 5px;
  transition: 300ms;
}

.project:hover {
  cursor: pointer;
  transform: scale(1.01);
  transition: 300ms;
}

// .project.active {
//   height: 15rem;
//   width: 60vw;
//   background-size: cover;
//   border: 3px solid #5484FF;
//   border-radius: 5px;
//   position: absolute;
//   top: 15vh;
//   right: 0vw;
// }

.project.inactive {
  opacity: 0;
  transition: 500ms;
}

.project-img {
  height: 40vh;
  width: 50vw;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
}

.reset-btn {
  width: fit-content;
}
</style>
