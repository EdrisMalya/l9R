import React from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout"
import useLanguage from "@/hooks/useLanguage"
import ConfigurationPageLinks from "@/Pages/Configuration/ConfigurationPageLinks"
import PublicWebsiteSidebarLinks from "@/Pages/Configuration/PublicWebsite/Components/PublicWebsiteSidebarLinks"
import MainPageIndex from "@/Pages/Configuration/PublicWebsite/MainPage/MainPageIndex"
import WidgetsIndex from "@/Pages/Configuration/PublicWebsite/Widgets/WidgetsIndex"

const PublicWebsiteIndex = ({lang, active, active_component}) => {
    const {translate} = useLanguage()

    const switchActiveComponent = () => {
        switch (active_component){
            case 'main-page':
                return <MainPageIndex translate={translate} />
            case 'widgets':
                return <WidgetsIndex translate={translate} />
        }
    }

    return (
        <Authenticated
            title={translate('Public website')}
            active={'configuration'}
            navBarOptions={<ConfigurationPageLinks active={active} lang={lang} />}
        >
            <div className={'grid grid-cols-5'}>
                <div className={'border dark:border-gray-700'}>
                    <PublicWebsiteSidebarLinks active={active_component} translate={translate} />
                </div>
                <div className={'col-span-4 pl-4'}>
                    {switchActiveComponent()}
                </div>
            </div>
        </Authenticated>
    )
}

export default PublicWebsiteIndex
