<template>
  <div id="paper-manager-container">
    <h1>试卷列表</h1>
    <div class="create-button-container">
      <el-button @click="clickCreatePaperHandler" type="primary">创建试卷</el-button>
    </div>
    <paperManage></paperManage>
  </div>
</template>

<script>
import paperManage from '@/components/paperManage/paperManage.vue'
export default {
  components: {
    paperManage
  },
  methods: {
    clickCreatePaperHandler() {
      this.$router.replace('/paper/create')
    }
  }
}
</script>

<style lang="less" scoped>
#paper-manager-container {
  display: flex;
  flex-direction: column;
}
h1 {
  margin: 40px;
  font-size: 3vw;
  font-weight: 600;
  text-align: center;
}
.create-button-container {
  text-align: right;
  margin-right: 30px;
}
</style>
