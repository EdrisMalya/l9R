import React from 'react'
import Navbar from '@/Pages/PublicWebsite/Components/Navbar'
import { usePage } from '@inertiajs/inertia-react'
import useLanguage from '@/hooks/useLanguage'
import PageSliderOrImage from '@/Pages/PublicWebsite/Components/PageSliderOrImage'

const PublicLayout = ({ children, translate, website }) => {

    return (
        <div className={'h-screen'}>
            <Navbar translate={translate} website={website} />
            {children}
        </div>
    )
}

export default PublicLayout
