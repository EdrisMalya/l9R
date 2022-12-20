import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ConfigurationPageLinks from '@/Pages/Configuration/ConfigurationPageLinks'
import useLanguage from '@/hooks/useLanguage'

const ConfigurationIndex = ({ lang }) => {
    const { translate } = useLanguage()
    return (
        <Authenticated
            active={'configuration'}
            title={'Configuration page'}
            navBarOptions={<ConfigurationPageLinks active={''} lang={lang} />}>
            <div className={'flex items-center justify-center content-center'}>
                <h2 className={'text-2xl mt-24'}>
                    {translate('Welcome to configuration page')}
                </h2>
            </div>
        </Authenticated>
    )
}

export default ConfigurationIndex
