// Snackbar

export type SnackbarType = 'warning' | 'success'

export interface ISnackbarArgs {
  type?: SnackbarType,
  title?: string,
  text?: string
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
