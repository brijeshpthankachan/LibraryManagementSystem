import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core'
import { MenuComponent } from "./menu.component"
import { LayoutService } from "./service/app.layout.service"

@Component({
    selector: 'app-sidebar',
    template: ` <app-menu></app-menu> `,
    standalone: true,
    imports: [MenuComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

