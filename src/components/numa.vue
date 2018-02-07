<template>
  <div>
    num A :{{ numA }}
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('number')

export default {
  computed: {
    ...mapState([
      'numA'
    ])
  }
}
</script>
