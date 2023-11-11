import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { InputTextModule } from 'primeng/inputtext'
import { IsbnScannerComponent } from "./isbn-scanner.component"


@Component({
  selector: 'app-new-book',
  standalone: true,
  templateUrl: './new-book.component.html',
  imports: [CommonModule, ButtonModule, DialogModule, NgxScannerQrcodeModule, InputTextModule, IsbnScannerComponent, FormsModule]
})
export class NewBookComponent {

  isbn = ''
  setValue(event: string) {
    console.log(event)
    this.isbn = event
    this.closeScannerDialog()
  }

  @Input() isNewBookDialogVisible = true
  @Output() isNewBookDialogVisibleChange = new EventEmitter<boolean>()

  isScannerDialogVisible = false

  showScannerDialog() {
    this.isScannerDialogVisible = true
  }

  closeScannerDialog() {
    this.isScannerDialogVisible = false
  }

  onDialogHide() {
    this.isNewBookDialogVisible = false
    this.isNewBookDialogVisibleChange.emit(false)
  }
}
