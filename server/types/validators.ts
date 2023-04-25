export type ValidatorErrorResponse = {
  statusCode: number
  data: {
    errorMessage: string,
    errors: {
      field: String,
      messages: String[]
    }[]
  }
}
