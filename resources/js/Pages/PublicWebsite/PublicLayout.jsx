import React from 'react'
import Navbar from '@/Pages/PublicWebsite/Components/Navbar'
import { usePage } from '@inertiajs/inertia-react'
import useLanguage from '@/hooks/useLanguage'
import PageSliderOrImage from '@/Pages/PublicWebsite/Components/PageSliderOrImage'

const PublicLayout = ({ children }) => {
    const { website } = usePage().props
    const { translate } = useLanguage()

    return (
        <div className={'h-screen'}>
            <Navbar translate={translate} website={website} />
            <PageSliderOrImage translate={translate} website={website} />
        </div>
    )
}

export default PublicLayout
