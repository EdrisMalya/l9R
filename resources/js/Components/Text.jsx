import React, { useEffect, useState } from 'react'
import { usePage } from '@inertiajs/inertia-react'

const Text = ({ text, variables }) => {
    const { translations } = usePage().props
    const [textString, setTextString] = useState(text)

    /*useEffect(() => {
        let outputString = text.replace(/ /g, '-').toLowerCase()
        if (typeof translations[outputString] === 'undefined') {
            setText(children)
        } else {
            let string = translations[outputString]
            for (let key in variables) {
                string = string.replace(`[${key}]`, variables[key])
            }
            setText(string)
        }
    }, [])
    return <>{text}</>*/
    return textString
}

export default Text
