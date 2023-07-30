<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Card"
})
</script>

<template>
  <div class="card border-0 shadow">


    <slot name="header" v-if="this.$slots.header">


    </slot>


      <div class="card-body" v-if="this.$slots.body">
        <slot name="body" ></slot>
      </div>


    <div class="card-footer p-0" v-if="this.$slots.footer">
      <slot name="footer" ></slot>
    </div>



  </div>
</template>

<style scoped>

.card {
  transition: .3s;
}

.card:hover {
  transform: translateY(5px);
  cursor: pointer;
}
</style>