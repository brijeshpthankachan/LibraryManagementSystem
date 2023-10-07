import { Component, ElementRef } from '@angular/core'
import { MenuComponent } from "./menu.component"
import { LayoutService } from "./service/app.layout.service"

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [MenuComponent]
})
export class SidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

