import React, {useRef, useState} from 'react'
import {Chip, IconButton} from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const SliderOrImageSelector = ({data, setData, translate}) => {
    const ref = useRef()
    const [selectedImages, setSelectedImages] = useState([])
    const [image, setImage] = useState(null)

    const handleChange = (event) => {
        const reader = new FileReader()
        if(data.slider_or_image === "image"){
            if (event.target.files[0]) {
                reader.readAsDataURL(event.target.files[0])
            }
            reader.onload = readerEvent => {
                setImage(readerEvent.target.result)
                setData('image', event.target.files[0])
            }
        }else{
            let fileNames = Object.entries(event.target.files)
            setData('sliders', fileNames)
            setSelectedImages(fileNames)
        }
    }

    const removeFileFromList = file => {
        let result = selectedImages.filter(item => {
            return item[1]?.name !== file
        })
        setSelectedImages(result)
        setData('slider', result)
    }

    return (
        <div className={'text-center'}>
            <div onClick={()=>ref.current.click()} className={'w-full p-4 border border-dashed dark:border-gray-600 text-center rounded-lg hover:dark:bg-gray-800 cursor-pointer'}>
                {(selectedImages.length  > 0 || image) ?(
                    data.slider_or_image === 'image'?(
                        <div >
                            {image && (
                                <>
                                    <IconButton onClick={()=>{
                                        setImage(null)
                                    }} className={'float-right'}>
                                        <CloseIcon />
                                    </IconButton>
                                    <img className={'mx-auto'} width={'30%'} src={image} />
                                </>
                            )}
                        </div>
                    ):(
                        <div>
                            {selectedImages < 1 ? (
                                <p className={'text-center'}>{translate('Select image sliders')}</p>
                            ):(
                                <div className={'space-x-1 space-y-1'}>
                                    <IconButton onClick={()=>{
                                        setSelectedImages([])
                                    }} className={'float-right'}>
                                        <CloseIcon />
                                    </IconButton>
                                    {selectedImages.map((slider, index)=>(
                                        <Chip variant={'outlined'} key={index} onDelete={()=>removeFileFromList(slider[1].name)}  label={slider[1]?.name} />
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                ):<div>{data.slider_or_image === 'slider'?translate('Select slider selectedImages'):translate('Select Image')}</div>}
            </div>
            <input onChange={handleChange} multiple={data.slider_or_image === 'slider'} accept={'image/*'} type={'file'} ref={ref} className={'hidden'} />
        </div>
    )
}

export default SliderOrImageSelector
