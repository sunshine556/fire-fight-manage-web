import request from '/@/utils/request';

/**
 * 摄像头视频api接口集合
 */
export function useBoxCameraUrlApi() {
  return {
    // 分页获取摄像头视频
    getPageList(data: object) {
      return request({
        url: '/system/boxCameraUrl/getPageList',
        method: 'post',
        data: data
      })
    },
    // 查询摄像头视频详细
    getBoxCameraUrlById(id: number) {
      return request({
        url: '/system/boxCameraUrl/' + id,
        method: 'get'
      })
    },
    // 新增摄像头视频
    createBoxCameraUrl(data: object) {
      return request({
        url: '/system/boxCameraUrl/createBoxCameraUrl',
        method: 'post',
        data: data
      })
    },
    // 修改摄像头视频
    updateBoxCameraUrl(data: object) {
      return request({
        url: '/system/boxCameraUrl/updateBoxCameraUrl',
        method: 'post',
        data: data
      })
    },
    // 删除摄像头视频
    deleteBoxCameraUrl(id: number) {
      return request({
        url: '/system/boxCameraUrl/' + id,
        method: 'delete'
      })
    },
  }
}