import instance from './instance'


export const login = params => instance.get('/api/admin/auth/login', { params })
export const logout = () => instance.post('/api/admin/auth/logout')