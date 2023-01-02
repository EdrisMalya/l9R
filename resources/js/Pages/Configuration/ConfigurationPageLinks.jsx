import React from 'react'
import ProtectedComponent from '@/Components/ProtectedComponent'
import { Link } from '@inertiajs/inertia-react'
import { Button } from '@mui/material'
import {GlobeAltIcon, LanguageIcon} from '@heroicons/react/24/outline'
import useLanguage from '@/hooks/useLanguage'

const ConfigurationPageLinks = ({ active, lang }) => {
    const { translate } = useLanguage()
    const activeLink = () => {
        switch (active) {
            case 'language':
                return 'language'
            case 'backup':
                return 'backup'
            case 'public-website':
                return 'public-website'
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
            <ProtectedComponent role={'language-access'}>
                <Link href={route('website.index', { lang, active: 'main-page' })}>
                    <Button
                        startIcon={<GlobeAltIcon className={'h-4'} />}
                        variant={
                            activeLink() === 'public-website'
                                ? 'contained'
                                : 'outlined'
                        }>
                        {translate('Public website')}
                    </Button>
                </Link>
            </ProtectedComponent>
            <ProtectedComponent role={'backups-access'}>
                <Link href={route('backup.index', { lang })}>
                    <Button
                        startIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                                />
                            </svg>
                        }
                        variant={
                            activeLink() === 'backup' ? 'contained' : 'outlined'
                        }>
                        {translate('Backups')}
                    </Button>
                </Link>
            </ProtectedComponent>
        </>
    )
}

export default ConfigurationPageLinks
