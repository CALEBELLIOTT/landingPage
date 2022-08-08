<template>
  <div class="row position-relative">
    <div class="col-12">
      <div class="d-flex flex-column justify-content-around height-100">
        <h3 class="text-primary">
          My Recent Software Projects
        </h3>
        <div class="h-50 project-description">
        </div>
        <div class="projects">
          <div class="row">
            <div class="col-md-6">
              <div class="project" id="tower" style="background-image: url(/src/assets/img/tower.png);"
                @click="setActive('tower')">
              </div>
            </div>
            <div class="col-md-6">
              <div class="project" id="onTracker" style="background-image: url(/src/assets/img/on-tracker.png);"
                @click="setActive('onTracker')">
              </div>
            </div>
            <!-- <div class="col-12">
              <div class="project" style="background-image: url(/src/assets/img/tower.png);">
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {
      setActive(id) {
        document.getElementById(id).classList.add("active")
      }
    }
  }
}
</script>


<style lang="scss" scoped>
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

.project.active {
  height: 15rem;
  width: 60vw;
  background-size: cover;
  border: 3px solid #5484FF;
  border-radius: 5px;
  position: absolute;
  top: 15vh;
  right: 0vw;
  transition: 300ms;
}

.project.inactive {
  display: none;
}
</style>
