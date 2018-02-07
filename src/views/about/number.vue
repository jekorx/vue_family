<template>
  <div>
    <span>Numbers --></span>
    <NumA />
    <NumB />
    <p v-text="'count : ' + count"></p>
    <Buttons />
  </div>
</template>
<script>
import NumA from '@components/numa'
import NumB from '@components/numb'
import Buttons from '@components/buttons'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('number')

export default {
  components:{
    NumA,
    NumB,
    Buttons
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  }
}
</script>
