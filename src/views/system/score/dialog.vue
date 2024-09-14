<template>
  <div class="system-safetyScore-dialog-container">
    <el-dialog :title="state.dialog.title" v-model="state.dialog.isShowDialog" width="60%">
          <el-form ref="safetyScoreDialogFormRef" :model="state.ruleForm" :rules="state.rules" size="default" label-width="90px">
            <el-row :gutter="35">

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="企业id" prop="enterpriseId">
                  <el-input v-model="state.ruleForm.enterpriseId" placeholder="请输入企业id" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="实时状态评分" prop="realtimeStatusScore">
                  <el-input v-model="state.ruleForm.realtimeStatusScore" placeholder="请输入实时状态评分" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="企业资源评分" prop="enterpriseResourceScore">
                  <el-input v-model="state.ruleForm.enterpriseResourceScore" placeholder="请输入企业资源评分" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="日常巡查评分" prop="dailyInspectionScore">
                  <el-input v-model="state.ruleForm.dailyInspectionScore" placeholder="请输入日常巡查评分" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="设备实际上报评分" prop="deviceReportScore">
                  <el-input v-model="state.ruleForm.deviceReportScore" placeholder="请输入设备实际上报评分" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="总评分" prop="allScore">
                  <el-input v-model="state.ruleForm.allScore" placeholder="请输入总评分" clearable></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="onCancel" size="default">取 消</el-button>
          <el-button type="primary" @click="onSubmit" size="default">{{ state.dialog.submitTxt }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="dictDialog">
  import { defineAsyncComponent, nextTick, reactive, ref, getCurrentInstance, defineProps, defineEmits } from 'vue';
  import { useSafetyScoreApi } from '/@/api/system/score';
  import { ElMessage } from "element-plus";
  
  
  // 定义子组件向父组件传值/事件
  const emit = defineEmits(['refresh']);


  // 定义变量内容
  const useSafetyScore = useSafetyScoreApi();
  const safetyScoreDialogFormRef = ref();
  const state = reactive({
    ruleForm: {
      enterpriseId: '',
      realtimeStatusScore: '',
      enterpriseResourceScore: '',
      dailyInspectionScore: '',
      deviceReportScore: '',
      allScore: '',
    },
    dialog: {
      isShowDialog: false,
      type: '',
      title: '',
      submitTxt: '',
    },
    rules: {
    },
  });

  // 打开弹窗
  const openDialog = (type: string, row) => {
    resetForm();
    if (type === 'edit') {
      useSafetyScore.getSafetyScoreById(row.id).then(res => {
        state.ruleForm = res;
        state.dialog.title = '修改安全评分';
        state.dialog.submitTxt = '修 改';
      });
    } else {
      state.dialog.title = '新增安全评分';
      state.dialog.submitTxt = '新 增';
    }
    state.dialog.type = type;
    state.dialog.isShowDialog = true;
  };
  // 关闭弹窗
  const closeDialog = () => {
    state.dialog.isShowDialog = false;
  };
  // 取消
  const onCancel = () => {
    closeDialog();
  };

  // 提交
  const onSubmit = () => {
    // 验证表单
    Promise.all([
      currentValidate(safetyScoreDialogFormRef),
    ]).then(res => {
      const validateResult = res.every(item => !!item);
      if (validateResult) {
        if(state.dialog.type == 'add'){
          useSafetyScore.createSafetyScore(state.ruleForm).then(() => {
            ElMessage.success('创建成功');
            closeDialog();
            emit('refresh');
          });
        } else {
          useSafetyScore.updateSafetyScore(state.ruleForm).then(() => {
            ElMessage.success('修改成功');
            closeDialog();
            emit('refresh');
          });
        }
      } else {
        ElMessage.error("表单校验未通过，请重新检查提交内容");
      }
    });
  };

  // 主表-表单组件验证
  const currentValidate = (pageRef) => {
    return new Promise((resolve) => {
      pageRef.value.validate((valid: boolean) => {
        if (valid) resolve(valid);
      });
    });
  };


  
  const resetForm = () => {
    state.ruleForm = {
      enterpriseId: '',
      realtimeStatusScore: '',
      enterpriseResourceScore: '',
      dailyInspectionScore: '',
      deviceReportScore: '',
      allScore: '',
    }
  }
  // 暴露变量
  defineExpose({
    openDialog,
  });
</script>

