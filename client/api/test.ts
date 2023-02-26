export default ({ $fetchService }: any) => ({
  testMethod: () => {
    return $fetchService.get('/posts')
      .then((data: any) => { console.dir(data) })
      .catch((error: any) => { throw new Error(error) })
  }
})
