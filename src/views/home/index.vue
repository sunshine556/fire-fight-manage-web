<template>
  <!-- 网格布局 -->
  <div class="layout-pd">
    <!-- 中部LOGO -->
    <el-row justify="center" >
      <el-col :span="8"></el-col>
      <el-col :span="8" justify="center">
        <el-image style="height:300px; display: block; margin: auto;" :src="state.url" fit="contain" />
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
    <!-- 底部搜索框 -->
    <el-row justify="center">
      <el-col :span="8"></el-col>
      <el-col :span="8" style="height:300px; display: block; margin: auto;">
        <!-- 搜索框 -->
        <el-input
            v-model="state.inputSearch"
            style="max-width: 600px"
            placeholder="随时创造你想要的！"
            class="input-with-select"
            size="large"
        >
          <template #append>
            <el-button :icon="Search"/>
          </template>
        </el-input>
      </el-col>
      <el-col :span="8"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="home">
import {reactive, onMounted} from 'vue';
import {Search} from '@element-plus/icons-vue';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '/@/stores/themeConfig';
import { useTagsViewRoutes } from '/@/stores/tagsViewRoutes';

// 定义变量内容
// 用于加载主题，必须有
const storesTagsViewRoutes = useTagsViewRoutes();
const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig);
const { isTagsViewCurrenFull } = storeToRefs(storesTagsViewRoutes);

const state = reactive({
  inputSearch: '',
  url: 'https://img.picui.cn/free/2024/06/15/666d912b0e648.png'
});

// 页面加载时
onMounted(() => {

});

</script>

<style scoped lang="scss">
.el-row {
  margin-top: 4em;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
</style>
