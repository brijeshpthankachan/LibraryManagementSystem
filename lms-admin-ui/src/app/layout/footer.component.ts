import { Component } from '@angular/core'
import { LayoutService } from "./service/app.layout.service"

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    standalone: true,
    imports: []
})
export class FooterComponent {
    constructor(public layoutService: LayoutService) { }
}
