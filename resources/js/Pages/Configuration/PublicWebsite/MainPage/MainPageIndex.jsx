import React from 'react'
import {useForm, usePage} from "@inertiajs/inertia-react"
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, TextField} from "@mui/material"
import LogoSelector from "@/Pages/Configuration/PublicWebsite/MainPage/FormComponent/LogoSelector"
import Editor from "@/Components/Editor"
import WebsiteContactComponent from "@/Pages/Configuration/PublicWebsite/MainPage/FormComponent/WebsiteContactComponent"
import WebsiteSocialMediaComponents
    from "@/Pages/Configuration/PublicWebsite/MainPage/FormComponent/WebsiteSocialMediaComponents"
import SaveIcon from '@mui/icons-material/Save';
import {LoadingButton} from "@mui/lab"
import SliderOrImageSelector from "@/Pages/Configuration/PublicWebsite/MainPage/FormComponent/SliderOrImageSelector"

const MainPageIndex = ({translate}) => {
    const {public_website, lang} = usePage().props

    const { post, data, setData, errors, processing } = useForm({
        status: false,
        logo: null,
        slider_or_image: 'image',
        image: null,
        slider: [],
        company_name: null,
        title: null,
        short_description: null,
        long_description: null,
        email: null,
        address: null,
        phone_number: null,
        facebook: null,
        tweeter: null,
        youtube: null,
        instagram: null,
        copy_write: null
    })

    const handleInputChange = (event) => {
        setData(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        post(route('website.index', { lang }))
    }

    return (
        <div>
            <h2 className={'text-xl text-center'}>{translate('Public website main page')}</h2>
            <form onSubmit={handleSubmit}>
                <FormControlLabel
                    control={<Switch checked={data.status} onChange={e=>{setData('status', e.target.checked)}} />} label={translate('Status')}
                />
                <LogoSelector
                    translate={translate}
                    data={data}
                    setData={setData}
                />
                <FormControl>
                    <FormLabel className={'mt-3'}>
                        {translate('Slider or image?')}
                    </FormLabel>
                    <RadioGroup row={true} value={data.slider_or_image} onChange={event=>{
                        setData('slider_or_image', event.target.value)
                    }}>
                        <FormControlLabel value={'slider'} control={<Radio />} label={translate('Slider')} />
                        <FormControlLabel value={'image'} control={<Radio />} label={translate('Image')} />
                    </RadioGroup>
                </FormControl>
                <SliderOrImageSelector
                    data={data}
                    setData={setData}
                    translate={translate}
                />
                <div className={'grid grid-cols-5 mt-4 gap-2'}>
                    <TextField
                        onChange={handleInputChange}
                        name={'company_name'}
                        value={data.company_name}
                        error={errors.company_name}
                        helpText={errors.company_name}
                        size={'small'}
                        label={translate('Company name')}
                    />
                    <TextField
                        onChange={handleInputChange}
                        className={'col-span-4'}
                        label={translate('Main page title')}
                        name={'title'}
                        value={data.title}
                        error={errors.title}
                        helpText={errors.title}
                        size={'small'}
                    />
                    <div className={'col-span-5'}>
                        <p>{translate('Main page short description')}</p>
                        <textarea
                            name={'short_description'}
                            onChange={handleInputChange}
                            value={data.title}
                            rows={1}
                            placeholder={translate('Write your title')}
                            className={`rounded-lg ${
                                errors.title && 'border-red-500'
                            } resize w-full shadow-lg p-4 resize-none bg-transparent focus:outline-none focus:shadow-outline`}
                        />
                        <p className={'text-xs text-red-500'}>
                            {errors.title}
                        </p>
                    </div>
                    <div className={'col-span-5'}>
                        <p>{translate('Main page log description')}</p>
                        <Editor  data={data.long_description} onChange={e=>setData('long_description', e)} />
                    </div>
                    <WebsiteContactComponent
                        handleInputChange={handleInputChange}
                        translate={translate}
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <WebsiteSocialMediaComponents
                        handleInputChange={handleInputChange}
                        translate={translate}
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <LoadingButton type={'submit'} loading={processing} endIcon={<SaveIcon className={'h-3'} />} variant={'outlined'}>
                        {translate('Save')}
                    </LoadingButton>
                </div>
            </form>
        </div>
    )
}

export default MainPageIndex
