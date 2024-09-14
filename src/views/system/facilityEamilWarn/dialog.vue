<template>
  <div class="system-facilityEmailWarn-dialog-container">
    <el-dialog :title="state.dialog.title" v-model="state.dialog.isShowDialog" width="60%">
          <el-form ref="facilityEmailWarnDialogFormRef" :model="state.ruleForm" :rules="state.rules" size="default" label-width="90px">
            <el-row :gutter="35">
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
  import { useFacilityEmailWarnApi } from '/@/api/system/facilityEamilWarn';
  import { ElMessage } from "element-plus";
  
  
  // 定义子组件向父组件传值/事件
  const emit = defineEmits(['refresh']);


  // 定义变量内容
  const useFacilityEmailWarn = useFacilityEmailWarnApi();
  const facilityEmailWarnDialogFormRef = ref();
  const state = reactive({
    ruleForm: {
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
      useFacilityEmailWarn.getFacilityEmailWarnById(row.id).then(res => {
        state.ruleForm = res;
        state.dialog.title = '修改设备预警';
        state.dialog.submitTxt = '修 改';
      });
    } else {
      state.dialog.title = '新增设备预警';
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
      currentValidate(facilityEmailWarnDialogFormRef),
    ]).then(res => {
      const validateResult = res.every(item => !!item);
      if (validateResult) {
        if(state.dialog.type == 'add'){
          useFacilityEmailWarn.createFacilityEmailWarn(state.ruleForm).then(() => {
            ElMessage.success('创建成功');
            closeDialog();
            emit('refresh');
          });
        } else {
          useFacilityEmailWarn.updateFacilityEmailWarn(state.ruleForm).then(() => {
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
    }
  }
  // 暴露变量
  defineExpose({
    openDialog,
  });
</script>

