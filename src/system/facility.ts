import request from '/@/utils/request';

/**
 * 设备详细信息api接口集合
 */
export function useFacilityInfoApi() {
  return {
    // 分页获取设备详细信息
    getPageList(data: object) {
      return request({
        url: '/system/facilityInfo/getPageList',
        method: 'post',
        data: data
      })
    },
    // 查询设备详细信息详细
    getFacilityInfoById(id: number) {
      return request({
        url: '/system/facilityInfo/' + id,
        method: 'get'
      })
    },
    // 新增设备详细信息
    createFacilityInfo(data: object) {
      return request({
        url: '/system/facilityInfo/createFacilityInfo',
        method: 'post',
        data: data
      })
    },
    // 修改设备详细信息
    updateFacilityInfo(data: object) {
      return request({
        url: '/system/facilityInfo/updateFacilityInfo',
        method: 'post',
        data: data
      })
    },
    // 删除设备详细信息
    deleteFacilityInfo(id: number) {
      return request({
        url: '/system/facilityInfo/' + id,
        method: 'delete'
      })
    },
  }
}