import instance from './instance'


export const login = params => instance.get('/api/admin/auth/login', { params })