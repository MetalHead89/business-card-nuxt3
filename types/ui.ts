// Snackbar

export type SnackbarType = 'error' | 'success'

export interface ISnackbarArgs {
  type?: SnackbarType,
  title?: string,
  text?: string
  time?: number
}

export interface ISnackbar extends ISnackbarArgs {
  id: string
}

export interface ISnackbarAdd extends ISnackbarArgs {
  (args: ISnackbarArgs): void
}

export type SnackbarIcons = {
  [key in SnackbarType]: string
}

// Circular progress

export type CircularProgress = {
  time: number
}
