import React from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout"
import useLanguage from "@/hooks/useLanguage"
import ConfigurationPageLinks from "@/Pages/Configuration/ConfigurationPageLinks"

const PublicWebsiteIndex = ({lang, active}) => {
    const {translate} = useLanguage()
    return (
        <Authenticated
            title={translate('Public website')}
            active={'configuration'}
            navBarOptions={<ConfigurationPageLinks active={active} lang={lang} />}
        >
            Test
        </Authenticated>
    )
}

export default PublicWebsiteIndex
