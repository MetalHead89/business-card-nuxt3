export default ({ $fetchService }: any) => ({
  auth: (params: Object) => {
    return $fetchService.post('/api/auth', params)
      .then((data: any) => data)
      .catch((error: any) => Promise.reject(error))
  }
})
