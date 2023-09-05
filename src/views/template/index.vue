<!--
 * @Author       : jiangronghua 613870505@qq.com
 * @Date         : 2023-09-04 08:46:32
 * @LastEditTime : 2023-09-05 08:25:45
 * @LastEditors  : jiangronghua
 * @Description  : 获取模版页面
-->
<template>
  <div class="content">213</div>
</template>

<script>
import { getTemplateDetail } from '@/api/vfrom.js'
import { setToken } from '@/utils/auth'
export default {
  data() {
    return {
      id: null,
      from: null,
      token: null,
      formData: null
    }
  },
  created() {
    this.id = this.$route.query.id
    this.from = this.$route.query.from
    this.token = this.$route.query.token
    // 存储页面带过来的token信息
    if (this.token) {
      setToken(this.token)
    }
    if (this.from === 'template') {
      this.fetchTemplateForm()
    }
  },
  methods: {
    fetchTemplateForm() {
      const params = {
        templateId: this.id
      }
      getTemplateDetail(params).then(res => {
        const { data } = res
        this.formData = data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  background: red;
}
</style>
