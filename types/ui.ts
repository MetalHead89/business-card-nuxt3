// Snackbar

export type SnackbarType = 'warning' | 'success'

export type Snackbar = {
  id: number,
  type?: SnackbarType,
  title?: string,
  text?: string
}

export type SnackbarIcons = {
  [key in SnackbarType]: string
}
