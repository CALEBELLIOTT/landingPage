
<template>
  <div class="fab text-dark bg-primary p-1 revealFab">
    <small class="m-0">Back To Top</small>
  </div>
</template>


<script>
import { onMounted } from "vue";

export default {
  setup() {
    function revealFab() {
      var reveals = document.querySelectorAll(".revealFab");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = 5
        var elementVisible = 5;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", revealFab);
      revealFab()
    })
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
.fab {
  position: fixed;
  left: 50%;
  bottom: 2rem;
  border-radius: 15px;
}

.fab:hover {
  cursor: pointer;
}

.revealFab {
  position: relative;
  opacity: 0;
  transform: translateY(4rem);
  transition: 1s all ease;
}

.revealFab.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
