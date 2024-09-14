<template>
  <div class="system-boxCameraUrl-dialog-container">
    <el-dialog :title="state.dialog.title" v-model="state.dialog.isShowDialog" width="60%">
          <el-form ref="boxCameraUrlDialogFormRef" :model="state.ruleForm" :rules="state.rules" size="default" label-width="90px">
            <el-row :gutter="35">

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="数据归属部门ID" prop="belongDeptId">
                  <el-input v-model="state.ruleForm.belongDeptId" placeholder="请输入数据归属部门ID" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="摄像头id" prop="cameraId">
                  <el-input v-model="state.ruleForm.cameraId" placeholder="请输入摄像头id" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
                <el-form-item label="视频地址" prop="url">
                  <el-input type="textarea" :rows="3"  v-model="state.ruleForm.url" placeholder="请输入视频地址" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="视频传输日期" prop="videoDate">
                  <el-date-picker clearable
                                  v-model="state.ruleForm.videoDate"
                                  type="date"
                                  value-format="yyyy-MM-dd"
                                  placeholder="选择视频传输日期">
                  </el-date-picker>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="出现的问题" prop="problem">
                  <el-input v-model="state.ruleForm.problem" placeholder="请输入出现的问题" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
                <el-form-item label="视频封面" prop="img">
                  <el-input type="textarea" :rows="3"  v-model="state.ruleForm.img" placeholder="请输入视频封面" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="设备编号" prop="deviceSn">
                  <el-input v-model="state.ruleForm.deviceSn" placeholder="请输入设备编号" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="设备版本号" prop="deviceVersion">
                  <el-input v-model="state.ruleForm.deviceVersion" placeholder="请输入设备版本号" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
                <el-form-item label="" prop="timestamp">
                  <el-input type="textarea" :rows="3"  v-model="state.ruleForm.timestamp" placeholder="请输入" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="标记" prop="label">
                  <el-input v-model="state.ruleForm.label" placeholder="请输入标记" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="识别系统" prop="alias">
                  <el-input v-model="state.ruleForm.alias" placeholder="请输入识别系统" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="" prop="count">
                  <el-input v-model="state.ruleForm.count" placeholder="请输入" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="" prop="sourceName">
                  <el-input v-model="state.ruleForm.sourceName" placeholder="请输入" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="" prop="ch">
                  <el-input v-model="state.ruleForm.ch" placeholder="请输入" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="" prop="objectId">
                  <el-input v-model="state.ruleForm.objectId" placeholder="请输入" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="" prop="left">
                  <el-input v-model="state.ruleForm.left" placeholder="请输入" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="" prop="top">
                  <el-input v-model="state.ruleForm.top" placeholder="请输入" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="" prop="right">
                  <el-input v-model="state.ruleForm.right" placeholder="请输入" clearable></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
                <el-form-item label="" prop="bottom">
                  <el-input v-model="state.ruleForm.bottom" placeholder="请输入" clearable></el-input>
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
  import { useBoxCameraUrlApi } from '/@/api/system/cameraUrl';
  import { ElMessage } from "element-plus";
  
  
  // 定义子组件向父组件传值/事件
  const emit = defineEmits(['refresh']);


  // 定义变量内容
  const useBoxCameraUrl = useBoxCameraUrlApi();
  const boxCameraUrlDialogFormRef = ref();
  const state = reactive({
    ruleForm: {
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
      useBoxCameraUrl.getBoxCameraUrlById(row.id).then(res => {
        state.ruleForm = res;
        state.dialog.title = '修改摄像头视频';
        state.dialog.submitTxt = '修 改';
      });
    } else {
      state.dialog.title = '新增摄像头视频';
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
      currentValidate(boxCameraUrlDialogFormRef),
    ]).then(res => {
      const validateResult = res.every(item => !!item);
      if (validateResult) {
        if(state.dialog.type == 'add'){
          useBoxCameraUrl.createBoxCameraUrl(state.ruleForm).then(() => {
            ElMessage.success('创建成功');
            closeDialog();
            emit('refresh');
          });
        } else {
          useBoxCameraUrl.updateBoxCameraUrl(state.ruleForm).then(() => {
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
    }
  }
  // 暴露变量
  defineExpose({
    openDialog,
  });
</script>

