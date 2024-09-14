<template>
  <div class="system-boxCameraUrl-container layout-padding">
    <el-card shadow="hover" class="layout-padding-auto">
      <div class="system-boxCameraUrl-search">
        <el-form :inline="true" ref="boxCameraUrlSearchRef" :model="state.tableData.param.query" size="default">
          <el-row>
            <el-form-item label="数据归属部门ID" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.belongDeptId" placeholder="请输入数据归属部门ID" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="摄像头id" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.cameraId" placeholder="请输入摄像头id" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="视频传输日期" class="ml20" prop="videoDate">
              <el-date-picker clearable
                              v-model="state.tableData.param.query.videoDate"
                              type="date"
                              value-format="yyyy-MM-dd"
                              placeholder="选择视频传输日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="出现的问题" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.problem" placeholder="请输入出现的问题" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="设备编号" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.deviceSn" placeholder="请输入设备编号" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="设备版本号" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.deviceVersion" placeholder="请输入设备版本号" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="标记" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.label" placeholder="请输入标记" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="识别系统" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.alias" placeholder="请输入识别系统" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.count" placeholder="请输入" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.sourceName" placeholder="请输入" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.ch" placeholder="请输入" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.objectId" placeholder="请输入" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.left" placeholder="请输入" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.top" placeholder="请输入" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.right" placeholder="请输入" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.bottom" placeholder="请输入" clearable
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
        <el-table-column label="唯一标识id" prop="id" show-overflow-tooltip/>
        <el-table-column label="数据归属部门ID" prop="belongDeptId" show-overflow-tooltip/>
        <el-table-column label="摄像头id" prop="cameraId" show-overflow-tooltip/>
        <el-table-column label="视频地址" prop="url" show-overflow-tooltip/>
        <el-table-column label="视频传输日期" prop="videoDate" show-overflow-tooltip>
          <template #default="scope">
            <span>{{ parseDateTime(scope.row.videoDate) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="出现的问题" prop="problem" show-overflow-tooltip/>
        <el-table-column label="视频封面" prop="img" show-overflow-tooltip/>
        <el-table-column label="设备编号" prop="deviceSn" show-overflow-tooltip/>
        <el-table-column label="设备版本号" prop="deviceVersion" show-overflow-tooltip/>
        <el-table-column label="" prop="timestamp" show-overflow-tooltip/>
        <el-table-column label="标记" prop="label" show-overflow-tooltip/>
        <el-table-column label="识别系统" prop="alias" show-overflow-tooltip/>
        <el-table-column label="" prop="count" show-overflow-tooltip/>
        <el-table-column label="" prop="sourceName" show-overflow-tooltip/>
        <el-table-column label="" prop="ch" show-overflow-tooltip/>
        <el-table-column label="" prop="objectId" show-overflow-tooltip/>
        <el-table-column label="" prop="left" show-overflow-tooltip/>
        <el-table-column label="" prop="top" show-overflow-tooltip/>
        <el-table-column label="" prop="right" show-overflow-tooltip/>
        <el-table-column label="" prop="bottom" show-overflow-tooltip/>
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
    <BoxCameraUrlDialog ref="boxCameraUrlDialogRef" @refresh="getTableData()" />
  </div>
</template>

<script setup lang="ts" name="boxCameraUrl">
  import { defineAsyncComponent, reactive, onMounted, ref, nextTick, getCurrentInstance } from 'vue';
  import { ElMessageBox, ElMessage } from 'element-plus';
  import { useBoxCameraUrlApi } from '/@/api/system/cameraUrl';
  import { parseDateTime } from '/@/utils/formatTime';
  
  // 引入组件
  const BoxCameraUrlDialog = defineAsyncComponent(() => import('./dialog.vue'));

  // 定义变量内容
  const boxCameraUrlDialogRef = ref();
  const boxCameraUrlSearchRef = ref();
  const useBoxCameraUrl = useBoxCameraUrlApi();
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
          belongDeptId: '',
          cameraId: '',
          url: '',
          videoDate: '',
          problem: '',
          img: '',
          deviceSn: '',
          deviceVersion: '',
          timestamp: '',
          label: '',
          alias: '',
          count: '',
          sourceName: '',
          ch: '',
          objectId: '',
          left: '',
          top: '',
          right: '',
          bottom: '',
        },
      },
    },
  });

  // 初始化表格数据
  const getTableData = () => {
    state.tableData.loading = true;
    useBoxCameraUrl.getPageList(state.tableData.param).then(res => {
      state.tableData.records = res.records;
      state.tableData.total = res.total;
    });
    setTimeout(() => {
      state.tableData.loading = false;
    }, 500);
  };
  // 打开新增摄像头视频弹窗
  const onOpenAdd = (type: string) => {
    boxCameraUrlDialogRef.value.openDialog(type);
  };
  // 打开修改摄像头视频弹窗
  const onOpenEdit = (type: string, row) => {
    boxCameraUrlDialogRef.value.openDialog(type, row);
  };
  // 删除摄像头视频
  const onRowDel = (row) => {
    ElMessageBox.confirm('此操作将永久删除数据，是否继续?', '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    })
        .then(() => {
          useBoxCameraUrl.deleteBoxCameraUrl(row.id).then(() => {
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
        boxCameraUrlSearchRef.value.resetFields();
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
  .system-boxCameraUrl-container {
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
