import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	resources: {
		en: {
			translation: {
				'Stadium Matching System': 'Stadium Matching System',
				'Home': 'Home',
				'Venue': 'Venue',
				'Login': 'Login',
			}
		},
		zh: {
			translation: {
				'Stadium Matching System': 'Stadium Matching System',
				'Home': '首頁',
				'Venue': '場地',
				'Login': '登入',
			}
		},
	},
});

export default i18n;