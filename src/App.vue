<script>
import {defineComponent} from "vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  components: {NavBar}
})
</script>

<template>

  <header class="bg-transparent">
    <nav-bar/>
  </header>

  <main>
    <router-view/>
  </main>

</template>

<style>
header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}




</style>
