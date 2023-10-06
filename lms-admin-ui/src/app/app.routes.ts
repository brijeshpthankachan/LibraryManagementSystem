import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { AppLayoutComponent } from './layout/app.layout.component'


export const routes: Routes = [
	{
		path: '',
		component: AppLayoutComponent,
		children: [
			{
				path: '',
				component: AppComponent,
			},
		]
	}
]