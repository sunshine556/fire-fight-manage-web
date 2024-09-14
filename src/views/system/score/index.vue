<template>
  <div class="system-safetyScore-container layout-padding">
    <el-card shadow="hover" class="layout-padding-auto">
      <div class="system-safetyScore-search">
        <el-form :inline="true" ref="safetyScoreSearchRef" :model="state.tableData.param.query" size="default">
          <el-row>
            <el-form-item label="企业id" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.enterpriseId" placeholder="请输入企业id" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="实时状态评分" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.realtimeStatusScore" placeholder="请输入实时状态评分" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="企业资源评分" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.enterpriseResourceScore" placeholder="请输入企业资源评分" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="日常巡查评分" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.dailyInspectionScore" placeholder="请输入日常巡查评分" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="设备实际上报评分" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.deviceReportScore" placeholder="请输入设备实际上报评分" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="总评分" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.allScore" placeholder="请输入总评分" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-button size="default" type="primary" class="ml20" @click="getTableData">
              <el-icon><ele-Search /></el-icon> 查询
            </el-button>
            <el-button size="default" class="ml20" @click="resetQuery">
              <el-icon><ele-Refresh /></el-icon> 重置
            </el-button>
          </el-row>
        </el-form>
      </div>
      <el-row :gutter="35">
          <el-button size="default" type="success" plain class="ml30" @click="onOpenAdd('add')">
            <el-icon><ele-FolderAdd /></el-icon> 新增
          </el-button>
      </el-row>
      <el-table :data="state.tableData.records" v-loading="state.tableData.loading" style="width: 100%">
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column label="企业id" prop="enterpriseId" show-overflow-tooltip/>
        <el-table-column label="实时状态评分" prop="realtimeStatusScore" show-overflow-tooltip/>
        <el-table-column label="企业资源评分" prop="enterpriseResourceScore" show-overflow-tooltip/>
        <el-table-column label="日常巡查评分" prop="dailyInspectionScore" show-overflow-tooltip/>
        <el-table-column label="设备实际上报评分" prop="deviceReportScore" show-overflow-tooltip/>
        <el-table-column label="总评分" prop="allScore" show-overflow-tooltip/>
        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button size="small" text type="primary" @click="onOpenEdit('edit', scope.row)">修改</el-button>
            <el-button size="small" text type="primary" @click="onRowDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          @size-change="onHandleSizeChange"
          @current-change="onHandleCurrentChange"
          class="mt15"
          :pager-count="5"
          :page-sizes="[10, 20, 30]"
          v-model:current-page="state.tableData.param.page.current"
          background
          v-model:page-size="state.tableData.param.page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="state.tableData.total"
      >
      </el-pagination>
    </el-card>
    <SafetyScoreDialog ref="safetyScoreDialogRef" @refresh="getTableData()" />
  </div>
</template>

<script setup lang="ts" name="safetyScore">
  import { defineAsyncComponent, reactive, onMounted, ref, nextTick, getCurrentInstance } from 'vue';
  import { ElMessageBox, ElMessage } from 'element-plus';
  import { useSafetyScoreApi } from '/@/api/system/score';
  import { parseDateTime } from '/@/utils/formatTime';
  
  // 引入组件
  const SafetyScoreDialog = defineAsyncComponent(() => import('./dialog.vue'));

  // 定义变量内容
  const safetyScoreDialogRef = ref();
  const safetyScoreSearchRef = ref();
  const useSafetyScore = useSafetyScoreApi();
  const state = reactive({
    tableData: {
      records: [],
      total: 0,
      loading: false,
      param: {
        page: {
          current: 1,
          size: 10,
        },
        query: {
          enterpriseId: '',
          realtimeStatusScore: '',
          enterpriseResourceScore: '',
          dailyInspectionScore: '',
          deviceReportScore: '',
          allScore: '',
        },
      },
    },
  });

  // 初始化表格数据
  const getTableData = () => {
    state.tableData.loading = true;
    useSafetyScore.getPageList(state.tableData.param).then(res => {
      state.tableData.records = res.records;
      state.tableData.total = res.total;
    });
    setTimeout(() => {
      state.tableData.loading = false;
    }, 500);
  };
  // 打开新增安全评分弹窗
  const onOpenAdd = (type: string) => {
    safetyScoreDialogRef.value.openDialog(type);
  };
  // 打开修改安全评分弹窗
  const onOpenEdit = (type: string, row) => {
    safetyScoreDialogRef.value.openDialog(type, row);
  };
  // 删除安全评分
  const onRowDel = (row) => {
    ElMessageBox.confirm('此操作将永久删除数据，是否继续?', '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    })
        .then(() => {
          useSafetyScore.deleteSafetyScore(row.id).then(() => {
            getTableData();
            ElMessage.success('删除成功');
          });
        })
        .catch(() => {
          ElMessage.error('删除失败');
        });
  };
  // 重置搜索框
  const resetQuery = () => {
    nextTick(() => {
        safetyScoreSearchRef.value.resetFields();
    });
  }
  // 分页改变
  const onHandleSizeChange = (val: number) => {
    state.tableData.param.page.size = val;
    getTableData();
  };
  // 分页改变
  const onHandleCurrentChange = (val: number) => {
    state.tableData.param.page.current = val;
    getTableData();
  };
  // 页面加载时
  onMounted(() => {
    getTableData();
  });
</script>

<style scoped lang="scss">
  .system-safetyScore-container {
    :deep(.el-card__body) {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: auto;
      .el-table {
        flex: 1;
      }
    }
  }
</style>
