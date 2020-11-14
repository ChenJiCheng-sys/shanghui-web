import instance from './instance'


export const getMemberList = params => instance.get('/api/admin/userManage/numberList', { params })
export const getMemberDetail = params => instance.get('/api/admin/userManage/numberDetail', { params })