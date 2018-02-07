<template>
  <div>
    <span>Products --></span>
    <div>
      商品名称 : <input type="text" v-model="form.name" /> {{ form.name }}
    </div>
    <div>
      商品价格 : <input type="text" v-model="form.price" /> {{ form.price }}
    </div>
    <input type="submit" value="提交修改Product(mapActions)" @click="commit(form)" />
    <p v-text="info"></p>
    <button @click="axiosPost">axiosPost</button>
    <input type="text" v-model="articalId" />
    <button @click="axiosDelete">axiosDelete</button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('product')
import { COMMIT_PRODUCT } from '@store/types'

import { axiosPost, axiosDelete } from '@api/api'

export default {
  data () {
    return {
      form: {
        name: '1',
        price: 0.00
      },
      articalId: '-1'
    }
  },
  computed: {
    ...mapState([
      'name',
      'price'
    ]),
    ...mapGetters([
      'info'
    ])
  },
  methods: {
    ...mapActions({
      commit: COMMIT_PRODUCT
    }),
    axiosPost () {
      axiosPost({}, res => {
        this.articalId = res.data.id
      })
    },
    axiosDelete () {
      axiosDelete(this.articalId, res => {
        if (res.code === 0)
          this.articalId = -1
      })
    }
  }
}
</script>
