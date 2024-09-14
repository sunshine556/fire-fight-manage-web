import request from '/@/utils/request';

/**
 * 安全评分api接口集合
 */
export function useSafetyScoreApi() {
  return {
    // 分页获取安全评分
    getPageList(data: object) {
      return request({
        url: '/system/safetyScore/getPageList',
        method: 'post',
        data: data
      })
    },
    // 查询安全评分详细
    getSafetyScoreById(id: number) {
      return request({
        url: '/system/safetyScore/' + id,
        method: 'get'
      })
    },
    // 新增安全评分
    createSafetyScore(data: object) {
      return request({
        url: '/system/safetyScore/createSafetyScore',
        method: 'post',
        data: data
      })
    },
    // 修改安全评分
    updateSafetyScore(data: object) {
      return request({
        url: '/system/safetyScore/updateSafetyScore',
        method: 'post',
        data: data
      })
    },
    // 删除安全评分
    deleteSafetyScore(id: number) {
      return request({
        url: '/system/safetyScore/' + id,
        method: 'delete'
      })
    },
  }
}