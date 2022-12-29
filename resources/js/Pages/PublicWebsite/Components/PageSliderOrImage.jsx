import React, { useEffect } from 'react'
import PageLinks from "@/Pages/PublicWebsite/Components/PageLinks"
import {Button} from "@mui/material"

const PageSliderOrImage = ({ translate, website }) => {
    const [logo, setLogo] = React.useState(null)
    const [image, setImage] = React.useState(null)

    useEffect(() => {
        setImage(route().t.url + '/storage/' + website.image)
        setLogo(route().t.url + '/storage/' + website.logo)
    }, [])

    return (
        <div
            className={'bg-center bg-no-repeat h-screen brightness-90 !bg-cover'}
            style={{
                background: `url('${image}')`,
            }}>
            <div className={'max-w-6xl mx-auto'}>
                <div className={'grid pb-4 grid-cols-4'}>
                    <div className={'relative w-32 mt-3'}>
                        <img loading={'lazy'} src={logo}/>
                    </div>
                    <div className={'col-span-3'}>
                        <PageLinks />
                    </div>
                </div>
                <div className={'mt-44 max-w-2xl'}>
                    <p className={'text-2xl dark:text-white drop-shadow-2xl'}>{translate('FINANCE CONSULTING')}</p>
                    <h3 className={'mt-10 text-5xl font-bold '}>
                        {website.title}
                    </h3>
                    <p className={'font-semibold mt-3 pb-7'}>{website.short_description}</p>
                    <Button size={'large'} color={'primary'} variant={'contained'}>
                        {translate('Get started')}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PageSliderOrImage
