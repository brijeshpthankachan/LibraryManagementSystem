import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { MenuModule } from 'primeng/menu'
import { menuConfig } from '../configs/menu.config'
import { MenuitemComponent } from './menuitem.component'


@Component({
    selector: 'app-menu',
    template: `
		<ul class="layout-menu">
			<ng-container *ngFor="let item of model; let i = index">
				<li
					app-menuitem
					*ngIf="!item.separator"
					[item]="item"
					[index]="i"
					[root]="true"
				></li>
				<li *ngIf="item.separator" class="menu-separator"></li>
			</ng-container>
		</ul>
	`,
    standalone: true,
    imports: [MenuModule, MenuitemComponent, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
    model: any[] = []

    ngOnInit() {
        this.model = menuConfig
    }
}
