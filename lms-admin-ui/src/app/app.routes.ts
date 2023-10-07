import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { LayoutComponent } from './layout/layout.component'


export const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				component: AppComponent,
			},
		]
	}
]