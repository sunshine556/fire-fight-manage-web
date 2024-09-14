import request from '/@/utils/request';

/**
 * 打卡记录api接口集合
 */
export function usePunchCardRecordApi() {
  return {
    // 分页获取打卡记录
    getPageList(data: object) {
      return request({
        url: '/system/punchCardRecord/getPageList',
        method: 'post',
        data: data
      })
    },
    // 查询打卡记录详细
    getPunchCardRecordById(id: number) {
      return request({
        url: '/system/punchCardRecord/' + id,
        method: 'get'
      })
    },
    // 新增打卡记录
    createPunchCardRecord(data: object) {
      return request({
        url: '/system/punchCardRecord/createPunchCardRecord',
        method: 'post',
        data: data
      })
    },
    // 修改打卡记录
    updatePunchCardRecord(data: object) {
      return request({
        url: '/system/punchCardRecord/updatePunchCardRecord',
        method: 'post',
        data: data
      })
    },
    // 删除打卡记录
    deletePunchCardRecord(id: number) {
      return request({
        url: '/system/punchCardRecord/' + id,
        method: 'delete'
      })
    },
  }
}