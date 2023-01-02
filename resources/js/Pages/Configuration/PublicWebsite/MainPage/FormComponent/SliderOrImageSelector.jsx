import React, { useEffect, useRef, useState } from 'react'
import { Chip, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const SliderOrImageSelector = ({ data, setData, translate, errors }) => {
    const ref = useRef()
    const [selectedImages, setSelectedImages] = useState([])
    const [image, setImage] = useState(null)

    const handleChange = event => {
        const reader = new FileReader()
        if (data.image_or_slider === 'image') {
            if (event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0])
            }
            reader.onload = readerEvent => {
                setImage(readerEvent.target.result)
                setData('image', event.target.files[0])
            }
        } else {
            let fileNames = Object.entries(event.target.files)
            setData('sliders', fileNames)
            setSelectedImages(fileNames)
        }
    }

    useEffect(() => {
        if (data.image_or_slider === 'image') {
            if (data.image) {
                setImage(route().t.url + '/storage/' + data.image)
            }
        }
    }, [])

    const removeFileFromList = file => {
        let result = selectedImages.filter(item => {
            return item[1]?.name !== file
        })
        setSelectedImages(result)
        setData('slider', result)
    }

    return (
        <div className={'text-center'}>
            <div
                onClick={() => ref.current.click()}
                className={`w-full p-4 border border-dashed dark:border-gray-600 text-center rounded-lg hover:dark:bg-gray-800 cursor-pointer ${
                    (errors.image || errors.slider) && '!border-red-500'
                }`}>
                {selectedImages.length > 0 || image ? (
                    data.image_or_slider === 'image' ? (
                        <div>
                            {image && (
                                <>
                                    <IconButton
                                        onClick={() => {
                                            setImage(null)
                                            setData('image', null)
                                        }}
                                        className={'float-right'}>
                                        <CloseIcon />
                                    </IconButton>
                                    <img
                                        className={'mx-auto'}
                                        width={'30%'}
                                        src={image}
                                    />
                                </>
                            )}
                        </div>
                    ) : (
                        <div>
                            {selectedImages < 1 ? (
                                <p className={'text-center'}>
                                    {translate('Select image sliders')}
                                </p>
                            ) : (
                                <div className={'space-x-1 space-y-1'}>
                                    <IconButton
                                        onClick={() => {
                                            setSelectedImages([])
                                            setData('slider', [])
                                        }}
                                        className={'float-right'}>
                                        <CloseIcon />
                                    </IconButton>
                                    {selectedImages.map((slider, index) => (
                                        <Chip
                                            variant={'outlined'}
                                            key={index}
                                            onDelete={() =>
                                                removeFileFromList(
                                                    slider[1].name,
                                                )
                                            }
                                            label={slider[1]?.name}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                ) : (
                    <div>
                        {data.image_or_slider === 'slider'
                            ? translate('Select slider selectedImages')
                            : translate('Select Image')}
                    </div>
                )}
            </div>
            <p className={'text-left text-xs text-red-500'}>{errors.image}</p>
            <p className={'text-left text-xs text-red-500'}>{errors.slider}</p>
            <input
                onChange={handleChange}
                multiple={data.image_or_slider === 'slider'}
                accept={'image/*'}
                type={'file'}
                ref={ref}
                className={'hidden'}
            />
        </div>
    )
}

export default SliderOrImageSelector
