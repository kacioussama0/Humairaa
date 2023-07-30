<script>
import {defineComponent} from 'vue'
import Card from "./Card.vue";

export default defineComponent({
  name: "Home",
  components: {Card},
  data() {
    return {
      products : [
        {
          title: 'حجاب يمنى أحمر آجوري',
          image: '/src/assets/imgs/products/1.png',
          price: 3900
        },

        {
          title: 'حجاب أزرق رمادي',
          image: '/src/assets/imgs/products/2.png',
          price: 3900
        },


        {
          title: 'حجاب أسود ملكي',
          image: '/src/assets/imgs/products/3.png',
          price: 3900
        },

      ]
    }
  }
})
</script>

<template>

  <!--  Start Landing -->
  <div class="landing-page d-flex flex-column  align-items-center justify-content-center">

    <h1 class="bellarose text-white display-1">Humairaa</h1>
    <h2 class=" text-white display-2">حمـيــراء</h2>
    <p class="text-white fs-4 mt-3 text-center bg-light p-2 rounded-3 text-primary fw-bold">
      حجابك يصنع بكل حب وشغف
      ليكون سترا وعفة وحياء لك
    </p>
  </div>

  <!--  End Landing -->


  <!--  Start Latest Products -->

  <div class="latest-products">

    <div class="container py-5">
      <h3 class="text-center fw-bold display-4">أخر منتجاتنا</h3>
      <h5 class="text-center text-muted">تجريبي تجريبي تجريبي تجريبي تجريبي تجريبي</h5>

      <div class="row my-5 g-5">

        <div class="col-md-4 " v-for="product in products">

          <card class="overflow-hidden rounded-2">
            <template v-slot:header class="">
              <img :src="product.image" alt="test" class="object-fit-cover my-1 rounded-top-2">
            </template>

            <template v-slot:body class="">
              <div class="vstack gap-3 justify-content-center align-items-center">
                <h3>{{product.title}}</h3>
                <div>السعر : {{product.price}} دج</div>
              </div>

            </template>

            <template v-slot:footer>
              <a href="#" class="btn btn-primary bg-primary border-0 rounded-0 w-100 px-2">تصفح المنتج</a>
            </template>
          </card>

        </div>

      </div>

    </div>


  </div>

  <!--  End Latest Products -->

   


</template>

<style scoped>
  div.landing-page {
    position: relative;
    height: 100vh !important;
    background-image: url("../assets/imgs/landing-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  div.landing-page::before {
    content: '';
    width: 100%;
    height: 100%;
    background: #663399;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0.7;
  }

  .latest-products .row img {
    height: 400px;
    object-position: top;
  }


</style>