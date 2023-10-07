import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { MenuModule } from 'primeng/menu'
import { menuConfig } from '../configs/menu.config'
import { MenuitemComponent } from './menuitem.component'


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    standalone: true,
    imports: [MenuModule, MenuitemComponent, CommonModule]
})
export class MenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = menuConfig
    }
}
