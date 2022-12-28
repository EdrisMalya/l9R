import React, { useEffect } from 'react'

const PageSliderOrImage = ({ translate, website }) => {
    const [image, setImage] = React.useState(null)

    useEffect(() => {
        setImage(route().t.url + '/storage/' + website.image)
    }, [])

    return (
        <div
            className={'h-screen brightness-90'}
            style={{
                background: `url('${image}')`,
                backdropFilter: 'test',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
            }}></div>
    )
}

export default PageSliderOrImage
