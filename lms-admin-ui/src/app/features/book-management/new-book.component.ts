import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { NgxScannerQrcodeComponent, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, NgxScannerQrcodeModule],
  templateUrl: './new-book.component.html',
})
export class NewBookComponent {

  @Input() isNewBookDialogVisible = true
  @Output() isNewBookDialogVisibleChange = new EventEmitter<boolean>()
  onDialogHide() {
    this.isNewBookDialogVisibleChange.emit(false)
  }

  @ViewChild('action', { static: false }) scannerComponent: NgxScannerQrcodeComponent

  barcodeValue: string

  test() {
    this.scannerComponent.data
    this.scannerComponent.data.subscribe(e => this.barcodeValue = e[0].value)
    if (this.barcodeValue) {
      console.log(this.barcodeValue)
      this.scannerComponent.stop()
    }

  }
}
