import request from '/@/utils/request';

/**
 * 管辖区域api接口集合
 */
export function useRegionInfoApi() {
  return {
    // 分页获取管辖区域
    getPageList(data: object) {
      return request({
        url: '/system/regionInfo/getPageList',
        method: 'post',
        data: data
      })
    },
    // 查询管辖区域详细
    getRegionInfoById(id: number) {
      return request({
        url: '/system/regionInfo/' + id,
        method: 'get'
      })
    },
    // 新增管辖区域
    createRegionInfo(data: object) {
      return request({
        url: '/system/regionInfo/createRegionInfo',
        method: 'post',
        data: data
      })
    },
    // 修改管辖区域
    updateRegionInfo(data: object) {
      return request({
        url: '/system/regionInfo/updateRegionInfo',
        method: 'post',
        data: data
      })
    },
    // 删除管辖区域
    deleteRegionInfo(id: number) {
      return request({
        url: '/system/regionInfo/' + id,
        method: 'delete'
      })
    },
  }
}