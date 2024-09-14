import request from '/@/utils/request';

/**
 * 设备预警api接口集合
 */
export function useFacilityEmailWarnApi() {
  return {
    // 分页获取设备预警
    getPageList(data: object) {
      return request({
        url: '/system/facilityEmailWarn/getPageList',
        method: 'post',
        data: data
      })
    },
    // 查询设备预警详细
    getFacilityEmailWarnById(id: number) {
      return request({
        url: '/system/facilityEmailWarn/' + id,
        method: 'get'
      })
    },
    // 新增设备预警
    createFacilityEmailWarn(data: object) {
      return request({
        url: '/system/facilityEmailWarn/createFacilityEmailWarn',
        method: 'post',
        data: data
      })
    },
    // 修改设备预警
    updateFacilityEmailWarn(data: object) {
      return request({
        url: '/system/facilityEmailWarn/updateFacilityEmailWarn',
        method: 'post',
        data: data
      })
    },
    // 删除设备预警
    deleteFacilityEmailWarn(id: number) {
      return request({
        url: '/system/facilityEmailWarn/' + id,
        method: 'delete'
      })
    },
  }
}