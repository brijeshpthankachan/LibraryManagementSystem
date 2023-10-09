import { CommonModule } from '@angular/common'
import { Component, ViewChild } from '@angular/core'
import { NgxScannerQrcodeComponent, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode'
import { DialogModule } from 'primeng/dialog'

@Component({
  selector: 'app-isbn-scanner',
  standalone: true,
  imports: [CommonModule, NgxScannerQrcodeModule, DialogModule],
  templateUrl: './isbn-scanner.component.html',
})
export class IsbnScannerComponent {

  isScannerDialogDialogVisible = false;
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
