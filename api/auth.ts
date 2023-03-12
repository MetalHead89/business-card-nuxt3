export default ({ $fetchService }: any) => ({
  auth: () => {
    return $fetchService.get('/api/auth')
      .then((data: any) => data)
      .catch((error: any) => Promise.reject(error))
  }
})
