import React from 'react'
import { usePage } from '@inertiajs/inertia-react'

const useLanguage = () => {
    const { translations, all_languages, lang, dir } = usePage().props
    const translate = (text, variables = null) => {
        if (typeof text === 'undefined' || text === null) {
            return text
        } else {
            let outputString = text.replace(/ /g, '-').toLowerCase()
            if (typeof translations[outputString] === 'undefined') {
                for (let key in variables) {
                    text = text.replace(`[${key}]`, variables[key])
                }
                return text
            } else {
                let string = translations[outputString]
                for (let key in variables) {
                    string = string.replace(`[${key}]`, variables[key])
                }
                return string
            }
        }
    }
    return {
        translate,
        all_languages,
        lang,
        dir,
    }
}

export default useLanguage
