import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { MainLayoutComponent } from './layout/main-layout.component'


export const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '',
				component: AppComponent,
			},
		]
	}
]