<template>
  <el-card shadow="hover" class="paper-manage-card">
    <el-table ref="paperManageTable" :data="paperData" tooltip-effect="dark" height="500" max-height="900" fit>
      <!-- 试卷名称列 -->
      <el-table-column label="试卷名称" width="200" prop="paperName"></el-table-column>
      <!-- 考试时间列 -->
      <el-table-column label="考试时间">
        <!-- 自定义列模板 -->
        <template slot-scope="scope">
          <span v-if="scope.row.startTime && scope.row.endTime">{{ scope.row.startTime }} - {{ scope.row.endTime }}</span>
        </template>
      </el-table-column>
      <!-- 考生人数列 -->
      <el-table-column label="考生人数" width="100" prop="examineeNumber"></el-table-column>
      <!-- 状态列 -->
      <el-table-column label="状态" width="100" prop="status">
        <template slot-scope="scope">
          <span>{{ scope.row.status | statusFilter }}</span>
        </template>
      </el-table-column>
      <!-- 操作列  -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!--          <el-button type="danger" size="mini" @click="handleAuthorize(scope.$index, scope.row)">修改</el-button>-->
          <el-button type="primary" v-if="scope.row.status === '1'">修改</el-button>
          <el-button type="success" v-if="scope.row.status === '1'">发布</el-button>
          <el-button type="danger" v-if="scope.row.status === '1'">删除</el-button>
          <el-button type="success" v-if="scope.row.status === '3'">查看成绩</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      paperData: [
        {
          id: 41,
          paperId: 'a48fb12f-9362-4c21-b26f-6bd785bfe8a6',
          paperName: '高等数学',
          startTime: '2023-04-05 22:00:00',
          endTime: '2023-04-05 24:00:00',
          examineeNumber: 10,
          status: '1'
        },
        {
          id: 41,
          paperId: 'a48fb12f-9362-4c21-b26f-6bd785bfe8a6',
          paperName: '高等数学',
          startTime: '2023-04-05 22:00:00',
          endTime: '2023-04-05 24:00:00',
          examineeNumber: 10,
          status: '1'
        },
        {
          id: 41,
          paperId: 'a48fb12f-9362-4c21-b26f-6bd785bfe8a6',
          paperName: '高等数学',
          startTime: '2023-04-05 22:00:00',
          endTime: '2023-04-05 24:00:00',
          examineeNumber: 10,
          status: '1'
        },
        {
          id: 41,
          paperId: 'a48fb12f-9362-4c21-b26f-6bd785bfe8a6',
          paperName: '高等数学',
          startTime: '2023-04-05 22:00:00',
          endTime: '2023-04-05 24:00:00',
          examineeNumber: 10,
          status: '2'
        },
        {
          id: 41,
          paperId: 'a48fb12f-9362-4c21-b26f-6bd785bfe8a6',
          paperName: '高等数学',
          startTime: '2023-04-05 22:00:00',
          endTime: '2023-04-05 24:00:00',
          examineeNumber: 10,
          status: '3'
        }
      ]
    }
  },
  filters: {
    statusFilter(val) {
      if (val === '1') {
        return '未发布'
      } else if (val === '2') {
        return '已发布'
      } else if (val === '3') {
        return '已结束'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.paper-manage-card {
  margin: 30px;
}
</style>
