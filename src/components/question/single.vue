<template>
  <div class="question-form-container">
    <quill-editor ref="myLQuillEditor" v-model="question.content" class="editor" @change="onEditorBlur"> > </quill-editor>
    <div class="submit-reset-btns">
      <el-button class="save-btn" type="success">保存该题</el-button>
      <el-button class="reset-btn" type="warning">重置</el-button>
      <el-button class="cancel-btn" type="danger" @click="clickCancelBtnHandler">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: {}
    }
  },
  mounted() {
    if (this.$route.query.data) {
      this.question = JSON.parse(this.$route.query.data)
      this.question.type = '1'
    }
  },
  methods: {
    onEditorBlur(e) {
      this.question.content = e.text
    },
    clickCancelBtnHandler() {
      // 清空选择问题
      this.$parent.selectedQuestion = {}
      this.$router.replace('/paper/create')
    }
  },
  watch: {
    $route(to) {
      if (to.query.data) {
        this.question = JSON.parse(to.query.data)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.question-form-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .editor {
    margin: 10px;
  }
  .ql-snow {
    border: 0;
  }
  .submit-reset-btns {
    height: 80px;
    .el-button {
      margin: 20px;
    }
  }
}
</style>
