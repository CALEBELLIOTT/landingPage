<template>
  <div class="row">
    <div class="col-12">
      <div class="navbar">
        <h4 class="nav-link nav-link-ltr" id="about" href="#" @click="setActive(1)">About</h4>
        <h4 class="nav-link nav-link-ltr" id="myWork" href="#" @click="setActive(2)">My Work</h4>
        <h4 class="nav-link nav-link-ltr" id="contact" href="#" @click="setActive(3)">Contact</h4>
      </div>
      <div class="nav-bar d-flex position-relative">
        <div id="nav-bar-bar" class="nav-bar-bar left"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      setActive(position) {
        if (position == 1) {
          document.getElementById("about").classList.add("active")
          document.getElementById("myWork").classList.remove("active")
          document.getElementById("contact").classList.remove("active")
        }
        if (position == 2) {
          document.getElementById("myWork").classList.add("active")
          document.getElementById("about").classList.remove("active")
          document.getElementById("contact").classList.remove("active")
        }
        if (position == 3) {
          document.getElementById("contact").classList.add("active")
          document.getElementById("myWork").classList.remove("active")
          document.getElementById("about").classList.remove("active")
        }
      }
    };
  },
};
</script>

<style scoped>
.nav-link {
  padding: 20px 0px;
  margin: 0px 20px;
  display: inline-block;
  position: relative;
  color: #797f98;
}

.nav-link:hover {
  opacity: 1;
  cursor: pointer;
  color: #5484FF;
}

.nav-link.active {
  color: #5484FF;
}

.nav-link::before.active {
  width: 100%;
  transition: 300ms;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #5484FF;
}

.nav-link::before {
  transition: 300ms;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #5484FF;
}

.nav-link-ltr::before {
  width: 0%;
  bottom: 10px;
}

.nav-link-ltr:hover::before {
  width: 100%;
}
</style>
