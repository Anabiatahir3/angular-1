import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  private openSnackBar(message: string, panelClass: string[]) {
    const config = new MatSnackBarConfig();
    config.panelClass = panelClass;
    config.duration = 1500;
    return this._snackBar.open(message, undefined, config);
  }

  error(message: string) {
    return this.openSnackBar(message, ['snackbar-error']);
  }

  success(message: string) {
    return this.openSnackBar(message, ['snackbar-success']);
  }

  info(message: string) {
    return this.openSnackBar(message, ['snackbar-info']);
  }
}
