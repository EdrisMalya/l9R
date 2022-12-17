import React, { useEffect } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import useLanguage from '@/hooks/useLanguage'
import { Inertia } from '@inertiajs/inertia'
import { useRecoilState } from 'recoil'
import { directionAtom } from '@/atoms/directionAtom'

const LanguageSelect = () => {
    const { all_languages, lang, dir } = useLanguage()
    const [direction, setDirection] = useRecoilState(directionAtom)

    const [language, setLanguage] = React.useState(lang)
    const handleChange = event => {
        let new_lang = event.target.value
        setLanguage(new_lang)
        let param = {
            ...route().params,
            lang: new_lang,
        }
        window.location.href = route(route().current(), param)
    }

    useEffect(() => {
        if (lang === 'eng') {
            setDirection('ltr')
        } else {
            setDirection(dir)
        }
    }, [dir])

    const { translate } = useLanguage()

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size={'small'}>
            <InputLabel htmlFor="language-select">
                {translate('Language')}
            </InputLabel>
            <Select
                value={language}
                onChange={handleChange}
                startAdornment={
                    <GlobeAltIcon className={'h-8 mr-2 rtl:ml-2'} />
                }>
                <MenuItem value={'eng'}>English</MenuItem>
                {all_languages?.map(item => (
                    <MenuItem key={item?.id} value={item?.abbr}>
                        {translate(item?.name)}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default LanguageSelect
