import i18n from "i18next";
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            workTime: "Work Time",
            shortBreak: "Short Break",
            longBreak: "Long Break",
            start: 'Start',
            stop: 'Stop',
            reset: 'Reset',
            save: 'Save',
            sound: 'Sound',
            saveDescription: 'change the time of the timers ',
            lang: 'Language'
        }
    },
    es: {
        translation: {
            workTime: "Tiempo de Trabajo",
            shortBreak: "Descanso Corto",
            longBreak: "Descanso Largo",
            start: 'Empezar',
            stop: 'Parar',
            reset: 'comenzar otra ves',
            save: 'Gaurdar',
            sound: 'alarma',
            saveDescription: 'Ajustes',
            lang: 'Idioma'
        }
    }

}
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;