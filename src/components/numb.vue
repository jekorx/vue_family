<template>
  <div>
    num B :{{ numB }}
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('number')

export default {
  computed: {
    ...mapState([
      'numB'
    ])
  }
}
</script>
