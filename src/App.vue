<template>
  <div id="app">
    <Administrator />
    <Addshop />
  </div>
</template>

<script>
import Administrator from './components/qiang/Administrator.vue'

import Addshop from './components/qiang/Addshop.vue'
export default {
  name: 'app',
  components: {
    Administrator,
    Addshop
  }
}
</script>


