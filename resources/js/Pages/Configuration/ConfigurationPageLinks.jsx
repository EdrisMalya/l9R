import React from 'react'
import ProtectedComponent from '@/Components/ProtectedComponent'
import { Link } from '@inertiajs/inertia-react'
import { Button } from '@mui/material'
import { LanguageIcon } from '@heroicons/react/24/outline'
import useLanguage from '@/hooks/useLanguage'

const ConfigurationPageLinks = ({ active, lang }) => {
    const { translate } = useLanguage()
    const activeLink = () => {
        switch (active) {
            case 'language':
                return 'language'
        }
    }
    return (
        <>
            <ProtectedComponent role={'language-access'}>
                <Link href={route('language.index', { lang })}>
                    <Button
                        startIcon={<LanguageIcon className={'h-4'} />}
                        variant={
                            activeLink() === 'language'
                                ? 'contained'
                                : 'outlined'
                        }>
                        {translate('Languages')}
                    </Button>
                </Link>
            </ProtectedComponent>
        </>
    )
}

export default ConfigurationPageLinks
