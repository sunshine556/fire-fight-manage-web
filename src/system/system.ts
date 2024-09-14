import request from '/@/utils/request';

/**
 * 系统详细信息api接口集合
 */
export function useSystemInfoApi() {
  return {
    // 分页获取系统详细信息
    getPageList(data: object) {
      return request({
        url: '/system/systemInfo/getPageList',
        method: 'post',
        data: data
      })
    },
    // 查询系统详细信息详细
    getSystemInfoById(id: number) {
      return request({
        url: '/system/systemInfo/' + id,
        method: 'get'
      })
    },
    // 新增系统详细信息
    createSystemInfo(data: object) {
      return request({
        url: '/system/systemInfo/createSystemInfo',
        method: 'post',
        data: data
      })
    },
    // 修改系统详细信息
    updateSystemInfo(data: object) {
      return request({
        url: '/system/systemInfo/updateSystemInfo',
        method: 'post',
        data: data
      })
    },
    // 删除系统详细信息
    deleteSystemInfo(id: number) {
      return request({
        url: '/system/systemInfo/' + id,
        method: 'delete'
      })
    },
  }
}