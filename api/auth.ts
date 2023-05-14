export default ({ $fetchService }: any) => ({
  auth: (params: Object) => {
    return $fetchService.post('/api/auth', params)
      .catch((error: any) => Promise.reject(error))
  },

  logout: () => {
    return $fetchService.get('/api/auth/logout')
      .catch((error: any) => Promise.reject(error))
  }
})
