<template>
  <div>
    <button @click="increment_a">A++(Mutation)</button>
    <button @click="decrement_a">A--(Mutation)</button>
    <button @click="increment_b">B++(Action)</button>
    <button @click="decrement_b">B--(Action)</button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations, mapActions } = createNamespacedHelpers('number')
import * as types from '@store/types'

export default {
  methods: {
    ...mapMutations({
      increment_a: types.INCREMENT_NUM_A,
      decrement_a: types.DECREMENT_NUM_A
    }),
    ...mapActions({
      increment_b: types.INCREMENT_NUM_B,
      decrement_b: types.DECREMENT_NUM_B
    })
  }
}
</script>
