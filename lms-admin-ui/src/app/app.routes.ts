import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { BookManagementComponent } from './features/book-management/book-management.component'
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
			{
				path: 'book',
				component: BookManagementComponent
			}
		]
	}
]