import React from 'react'
import { useForm, usePage } from '@inertiajs/inertia-react'
import {
    Button,
    CircularProgress,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Switch,
    TextField,
} from '@mui/material'
import LogoSelector from '@/Pages/Configuration/PublicWebsite/MainPage/FormComponent/LogoSelector'
import Editor from '@/Components/Editor'
import WebsiteContactComponent from '@/Pages/Configuration/PublicWebsite/MainPage/FormComponent/WebsiteContactComponent'
import WebsiteSocialMediaComponents from '@/Pages/Configuration/PublicWebsite/MainPage/FormComponent/WebsiteSocialMediaComponents'
import SaveIcon from '@mui/icons-material/Save'
import SliderOrImageSelector from '@/Pages/Configuration/PublicWebsite/MainPage/FormComponent/SliderOrImageSelector'
import CircularProgressWithLabel from '@/Components/CircularProgressWithLabel'

const MainPageIndex = ({ translate }) => {
    const { public_website, lang } = usePage().props

    const { post, data, setData, errors, processing, progress } = useForm({
        status: public_website?.status,
        logo: public_website?.logo,
        image_or_slider: public_website
            ? public_website?.image_or_slider
            : 'image',
        image: public_website?.image,
        slider: public_website?.slider,
        company_name: public_website?.company_name,
        title: public_website?.title,
        short_description: public_website?.short_description,
        long_description: public_website?.long_description,
        email: public_website?.email,
        address: public_website?.address,
        phone_number: public_website?.phone_number,
        facebook: public_website?.facebook,
        tweeter: public_website?.tweeter,
        youtube: public_website?.youtube,
        instagram: public_website?.instagram,
        copy_right: public_website?.copy_right,
    })

    const handleInputChange = event => {
        setData(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        post(route('website.index', { lang }))
    }

    return (
        <div>
            <h2 className={'text-xl text-center'}>
                {translate('Public website main page')}
            </h2>
            <form onSubmit={handleSubmit}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={data.status}
                            onChange={e => {
                                setData('status', e.target.checked)
                            }}
                        />
                    }
                    label={translate('Status')}
                />
                <LogoSelector
                    errors={errors}
                    translate={translate}
                    data={data}
                    setData={setData}
                />
                <FormControl>
                    <FormLabel className={'mt-3'}>
                        {translate('Slider or image?')}
                    </FormLabel>
                    <RadioGroup
                        row={true}
                        value={data.image_or_slider}
                        onChange={event => {
                            setData('image_or_slider', event.target.value)
                        }}>
                        <FormControlLabel
                            value={'slider'}
                            control={<Radio />}
                            label={translate('Slider')}
                        />
                        <FormControlLabel
                            value={'image'}
                            control={<Radio />}
                            label={translate('Image')}
                        />
                    </RadioGroup>
                </FormControl>
                <SliderOrImageSelector
                    errors={errors}
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
                            value={data.short_description}
                            rows={2}
                            placeholder={translate(
                                'Write your short description',
                            )}
                            className={`rounded-lg ${
                                errors.title && 'border-red-500'
                            } resize w-full shadow-lg p-4 resize-none bg-transparent focus:outline-none focus:shadow-outline`}
                        />
                        <p className={'text-xs text-red-500'}>{errors.title}</p>
                    </div>
                    <div className={'col-span-5'}>
                        <p>{translate('Main page log description')}</p>
                        <Editor
                            data={data.long_description}
                            onChange={e => setData('long_description', e)}
                        />
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
                    <Button
                        type={'submit'}
                        loading={processing}
                        disabled={processing}
                        endIcon={!processing && <SaveIcon className={'h-3'} />}
                        variant={'outlined'}>
                        {processing ? (
                            progress ? (
                                <CircularProgressWithLabel
                                    size={40}
                                    value={progress.percentage}
                                />
                            ) : (
                                <CircularProgress size={20} />
                            )
                        ) : (
                            translate('Save')
                        )}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default MainPageIndex
