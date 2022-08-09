<template>
  <div class="row">
    <div class="col-12">
      <div class="navbar height-10">
        <h4 class="nav-link nav-link-ltr" id="about" @click="scrollFirst()">About</h4>
        <h4 class="nav-link nav-link-ltr" id="myWork" @click="scrollSecond()">My Work</h4>
        <h4 class="nav-link nav-link-ltr" id="contact" @click="openMail()">Contact</h4>
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
      // setActive(position) {
      //   if (position == 1) {
      //     document.getElementById("about").classList.add("active")
      //     document.getElementById("myWork").classList.remove("active")
      //     document.getElementById("contact").classList.remove("active")
      //   }
      //   if (position == 2) {
      //     document.getElementById("myWork").classList.add("active")
      //     document.getElementById("about").classList.remove("active")
      //     document.getElementById("contact").classList.remove("active")
      //   }
      //   if (position == 3) {
      //     document.getElementById("contact").classList.add("active")
      //     document.getElementById("myWork").classList.remove("active")
      //     document.getElementById("about").classList.remove("active")
      //   }
      // },
      scrollFirst() {
        let target = document.getElementById('aboutSection')
        console.log(target);
        target.scrollIntoView(true)
      },
      scrollSecond() {
        let target = document.getElementById('myWorkSection')
        console.log(target);
        target.scrollIntoView(true)
      },
      openMail() {
        window.open('mailto:caleb123elliott@gmail.com?subject=Lets Work Together&body=body');
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

.height-10 {
  height: 10vh;
}
</style>
