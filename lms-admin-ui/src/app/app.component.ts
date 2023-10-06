import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	imports: [CommonModule, RouterOutlet, TranslateModule]
})
export class AppComponent {
	title = 'lms-admin-ui'

	constructor(public translate: TranslateService) {
		translate.addLangs(['en', 'fr'])
		translate.setDefaultLang('en')

		// This language will be used as a fallback when a translation isn't found in the current language
		// translateService.setDefaultLang('en')
		// the lang to use, if the lang isn't available, it will use the current loader to get them
		// this.translateService.use(this.appConstants.defaultLanguage)

		// const browserLang = translate.getBrowserLang()
		// translate.use(browserLang.match(/en|fr/) ? browserLang : 'en')


	}
}
