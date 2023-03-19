export type authDataValidationResult = {
  isValid: boolean,
  data?: {
    path: string | number,
    messages: string[]
  }[]
}
