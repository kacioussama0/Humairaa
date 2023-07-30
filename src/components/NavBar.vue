<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      navList : [
        {
          name: 'الرئيسية',
          path:'/'
        },

        {
          name: 'التصنيفات',
          path:'/categories'
        },

        {
          name: 'المنتجات',
          path:'/products'
        },

        {
          name: 'تواصلوا معنا',
          path:'/contact-us'
        },
      ]
    }
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg py-3 bg-transparent">
    <div class="container">
      <a class="navbar-brand" href="">
        <img src="/logo-white.svg" alt="" style="width: 80px">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="item in navList">
            <a class="nav-link active " aria-current="page" href="#">{{item.name}}</a>
          </li>

        </ul>

      </div>
    </div>
  </nav>
</template>

<style scoped>

  li a {
    color: #fff !important;
  }

  .navbar-toggler {
    box-shadow: none !important;
    border: none !important;
  }



</style>