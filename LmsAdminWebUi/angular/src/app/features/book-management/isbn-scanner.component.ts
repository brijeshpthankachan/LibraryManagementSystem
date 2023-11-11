import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core'
import { NgxScannerQrcodeComponent, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'

@Component({
  selector: 'app-isbn-scanner',
  standalone: true,
  imports: [CommonModule, NgxScannerQrcodeModule, DialogModule, ButtonModule],
  templateUrl: './isbn-scanner.component.html',
})
export class IsbnScannerComponent implements AfterViewInit, OnDestroy {

  @Input() isScannerDialogDialogVisible = true;
  @Output() isScannerDialogDialogVisibleChange = new EventEmitter<string>()
  @ViewChild('action', { static: false }) scannerComponent: NgxScannerQrcodeComponent

  ngAfterViewInit(): void {
    this.scannerComponent.start()
  }

  ngOnDestroy(): void {
    this.scannerComponent.stop()
  }

  barcodeValue: string

  test() {
    this.scannerComponent.data
    this.scannerComponent.data.subscribe(e => this.barcodeValue = e[0].value)
    if (this.barcodeValue) {
      console.log(this.barcodeValue)
      this.scannerComponent.stop()
    }
    this.closeScannerDialog()
  }

  closeScannerDialog() {
    this.isScannerDialogDialogVisible = false
    this.isScannerDialogDialogVisibleChange.emit(this.barcodeValue)
  }
}
