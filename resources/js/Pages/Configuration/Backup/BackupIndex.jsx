import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ConfigurationPageLinks from '@/Pages/Configuration/ConfigurationPageLinks'
import useLanguage from '@/hooks/useLanguage'
import { Chip } from '@mui/material'
import { fileSize } from '@/helper'

const BackupIndex = ({ active, lang, backups }) => {
    const { translate } = useLanguage()
    return (
        <Authenticated
            navBarOptions={
                <ConfigurationPageLinks active={active} lang={lang} />
            }
            active={'configuration'}
            title={'Backup page'}>
            <h2 className={'text-xl'}>{translate('All available backups')}</h2>
            {backups?.length < 1 ? (
                <p className={'text-center py-12 text-red-500'}>
                    {translate('No record found')}
                </p>
            ) : (
                <div className={'mt-6'}>
                    {backups?.map((backup, index) => (
                        <Chip
                            label={`${backup?.file_name} (${fileSize(
                                backup?.file_size,
                            )})`}
                        />
                    ))}
                </div>
            )}
        </Authenticated>
    )
}

export default BackupIndex
