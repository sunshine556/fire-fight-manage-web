<template>
  <div class="system-regionInfo-container layout-padding">
    <el-card shadow="hover" class="layout-padding-auto">
      <div class="system-regionInfo-search">
        <el-form :inline="true" ref="regionInfoSearchRef" :model="state.tableData.param.query" size="default">
          <el-row>
            <el-form-item label="区域id" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.id" placeholder="请输入企业id" clearable
                        style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="层级" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.level" placeholder="请输入层级" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="区域名称" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.regionName" placeholder="请输入区域名称" clearable
                      style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="经度" class="ml20" size="default">
              <el-input v-model="state.tableData.param.query.longitude" placeholder="请输入经度" clearable
                        style="max-width: 180px"></el-input>
            </el-form-item>
            <el-form-item label="纬度" class="ml20" size="default">
            <el-input v-model="state.tableData.param.query.latitude" placeholder="请输入纬度" clearable
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
        <el-table-column label="区域id" prop="regionId" show-overflow-tooltip/>
        <el-table-column label="层级" prop="level" show-overflow-tooltip/>
        <el-table-column label="区域名称" prop="regionName" show-overflow-tooltip/>
        <el-table-column label="经度" prop="longitude" show-overflow-tooltip/>
        <el-table-column label="维度" prop="latitude" show-overflow-tooltip/>
        <el-table-column label="备注" prop="remark" show-overflow-tooltip/>
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
    <RegionInfoDialog ref="regionInfoDialogRef" @refresh="getTableData()" />
  </div>
</template>

<script setup lang="ts" name="regionInfo">
  import { defineAsyncComponent, reactive, onMounted, ref, nextTick, getCurrentInstance } from 'vue';
  import { ElMessageBox, ElMessage } from 'element-plus';
  import { useRegionInfoApi } from '/src/api/system/region';
  import { parseDateTime } from '/@/utils/formatTime';
  
  // 引入组件
  const RegionInfoDialog = defineAsyncComponent(() => import('./dialog.vue'));

  // 定义变量内容
  const regionInfoDialogRef = ref();
  const regionInfoSearchRef = ref();
  const useRegionInfo = useRegionInfoApi();
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
          id: '',
          belongDeptId: '',
          level: '',
          regionName: '',
          longitude: '',
          latitude: ''
        },
      },
    },
  });

  // 初始化表格数据
  const getTableData = () => {
    state.tableData.loading = true;
    useRegionInfo.getPageList(state.tableData.param).then(res => {
      state.tableData.records = res.records;
      state.tableData.total = res.total;
    });
    setTimeout(() => {
      state.tableData.loading = false;
    }, 500);
  };
  // 打开新增管辖区域弹窗
  const onOpenAdd = (type: string) => {
    regionInfoDialogRef.value.openDialog(type);
  };
  // 打开修改管辖区域弹窗
  const onOpenEdit = (type: string, row) => {
    regionInfoDialogRef.value.openDialog(type, row);
  };
  // 删除管辖区域
  const onRowDel = (row) => {
    ElMessageBox.confirm('此操作将永久删除数据，是否继续?', '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    })
        .then(() => {
          useRegionInfo.deleteRegionInfo(row.id).then(() => {
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
        regionInfoSearchRef.value.resetFields();
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
  .system-regionInfo-container {
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
