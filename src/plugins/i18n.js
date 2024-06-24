import { createI18n } from 'vue-i18n' // Ensure this is the correct import path
import en from '../lang/en'
import ru from '../lang/ru'
import uz from '../lang/uz'

export const i18n = createI18n({
	locale: 'uz', // Set default locale to 'uz'
	messages: {
		en, // English messages
		ru, // Russian messages
		uz, // Uzbek messages
	},
})

export default i18n
