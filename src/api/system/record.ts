import request from '/@/utils/request';

/**
 * 巡检记录api接口集合
 */
export function useInspectionRecordApi() {
  return {
    // 分页获取巡检记录
    getPageList(data: object) {
      return request({
        url: '/system/inspectionRecord/getPageList',
        method: 'post',
        data: data
      })
    },
    // 查询巡检记录详细
    getInspectionRecordById(id: number) {
      return request({
        url: '/system/inspectionRecord/' + id,
        method: 'get'
      })
    },
    // 新增巡检记录
    createInspectionRecord(data: object) {
      return request({
        url: '/system/inspectionRecord/createInspectionRecord',
        method: 'post',
        data: data
      })
    },
    // 修改巡检记录
    updateInspectionRecord(data: object) {
      return request({
        url: '/system/inspectionRecord/updateInspectionRecord',
        method: 'post',
        data: data
      })
    },
    // 删除巡检记录
    deleteInspectionRecord(id: number) {
      return request({
        url: '/system/inspectionRecord/' + id,
        method: 'delete'
      })
    },
  }
}