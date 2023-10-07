import { CommonModule } from '@angular/common'
import { Component, ElementRef, ViewChild } from '@angular/core'
import { RouterLink } from '@angular/router'
import { MenuItem } from 'primeng/api'
import { LayoutService } from "./service/app.layout.service"

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    standalone: true,
    imports: [CommonModule, RouterLink]
})
export class TopBarComponent {
    items!: MenuItem[]
    @ViewChild('menubutton') menuButton!: ElementRef
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef
    @ViewChild('topbarmenu') menu!: ElementRef
    constructor(public layoutService: LayoutService) { }
}
