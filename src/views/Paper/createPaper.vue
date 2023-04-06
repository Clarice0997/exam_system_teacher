<template>
  <div class="create-paper-container">
    <div class="left-question-list">
      <div class="list-header-container">
        <div>
          题量：<span style="color: #d45100">{{ countQuestion }}</span>
        </div>
        <div>
          总分：<span style="color: #d45100">{{ totalScore }}</span>
        </div>
      </div>
      <div class="list-body-container">
        <div class="question-list-container">
          <div class="question-type" v-if="singleQuestions.length !== 0"><span>1 单选题</span></div>
          <div v-for="item in singleQuestions" class="question-container" @click="clickExistQuestionHandler('single', item)">
            <span>（{{ item.questionNum }}） {{ item.content }}</span>
          </div>
        </div>
        <div class="question-list-container">
          <div class="question-type" v-if="multipleQuestions.length !== 0"><span>2 多选题</span></div>
          <div v-for="item in multipleQuestions" class="question-container" @click="clickExistQuestionHandler('multiple', item)">
            <span>（{{ item.questionNum }}） {{ item.content }}</span>
          </div>
        </div>
        <div class="question-list-container">
          <div class="question-type" v-if="judgmentQuestions.length !== 0"><span>3 判断题</span></div>
          <div v-for="item in judgmentQuestions" class="question-container" @click="clickExistQuestionHandler('judgment', item)">
            <span>（{{ item.questionNum }}） {{ item.content }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right-question-form">
      <div class="question-type-btns">
        <el-button :type="questionBtnType === 1 ? 'success' : undefined" @click="clickChangeBtnType('single')">单选题</el-button>
        <el-button :type="questionBtnType === 2 ? 'success' : undefined" @click="clickChangeBtnType('multiple')">多选题</el-button>
        <el-button :type="questionBtnType === 3 ? 'success' : undefined" @click="clickChangeBtnType('judgment')">判断题</el-button>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          questionNum: 1,
          type: '1',
          content: '题干1',
          score: 5,
          answer: 2,
          options: ['A', 'B', 'C']
        },
        {
          questionNum: 2,
          type: '1',
          content: '题干2',
          score: 5,
          answer: 1,
          options: ['A', 'B', 'C']
        },
        {
          questionNum: 3,
          type: '2',
          content: '题干3',
          score: 5,
          answer: [1, 2],
          options: ['A', 'B', 'C']
        },
        {
          questionNum: 4,
          type: '2',
          content: '题干4',
          score: 5,
          answer: [0, 1],
          options: ['A', 'B', 'C']
        },
        {
          questionNum: 5,
          type: '3',
          content: '题干5',
          score: 5,
          answer: true,
          options: null
        },
        {
          questionNum: 6,
          type: '3',
          content: '题干6',
          score: 5,
          answer: false,
          options: null
        }
      ],
      questionBtnType: 0,
      selectedQuestion: {}
    }
  },
  computed: {
    countQuestion() {
      return this.questions.length
    },
    totalScore() {
      return this.questions.reduce((total, item) => (total += item.score), 0)
    },
    singleQuestions() {
      return this.questions.filter(item => item.type === '1')
    },
    multipleQuestions() {
      return this.questions.filter(item => item.type === '2')
    },
    judgmentQuestions() {
      return this.questions.filter(item => item.type === '3')
    }
  },
  components: {},
  mounted() {
    if (this.$route.query.data) {
      this.selectedQuestion = JSON.parse(this.$route.query.data)
    }
  },
  methods: {
    clickChangeBtnType(type) {
      if (Object.keys(this.selectedQuestion).length === 0 && this.selectedQuestion.constructor === Object) {
        this.$router.replace(`/paper/create/${type}`)
      } else {
        this.$router.replace({ path: `/paper/create/${type}`, query: { data: JSON.stringify(this.selectedQuestion) } })
      }
    },
    clickExistQuestionHandler(type, data) {
      this.selectedQuestion = data
      this.$router.replace({ path: `/paper/create/${type}`, query: { data: JSON.stringify(this.selectedQuestion) } })
    }
  },
  watch: {
    // 侦听路由变化 改变按钮状态
    $route(to) {
      const path = to.path.split('/').pop()
      if (path === 'single') {
        this.questionBtnType = 1
      } else if (path === 'multiple') {
        this.questionBtnType = 2
      } else if (path === 'judgment') {
        this.questionBtnType = 3
      } else {
        this.questionBtnType = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.create-paper-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 35% 65%;
}
.left-question-list {
  background: aqua;
  margin: 30px;
  display: flex;
  flex-direction: column;
  border: 2px solid #e7e7e7;
  border-radius: 10px;
  .list-header-container {
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    background: #f0f0f0;
    border-bottom: 2px solid #e7e7e7;
    div {
      margin: 20px;
    }
  }
  .list-body-container {
    background: #f0f0f0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .question-list-container {
      display: flex;
      flex-direction: column;
      .question-type {
        width: 100%;
        background: #fdfdfd;
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid #e7e7e7;
        span {
          margin-left: 15px;
        }
      }
      .question-container {
        cursor: pointer;
        transition: 0.3s;
        width: 100%;
        height: 40px;
        background: #a6a6a6;
        line-height: 40px;
        border-bottom: 2px solid #e7e7e7;
        span {
          font-size: 14px;
          margin-left: 18px;
        }
      }
      .question-container:hover {
        background: #d1d1d1;
      }
    }
  }
}
.right-question-form {
  margin: 30px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  .question-type-btns {
    display: flex;
    align-items: center;
    height: 55px;
    background: white;
    border-bottom: 2px solid #e3e3e3;
    .el-button {
      margin: 10px;
    }
  }
}
</style>
