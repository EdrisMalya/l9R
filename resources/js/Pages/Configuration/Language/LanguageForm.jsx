import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import MUISelect from '@/Components/MUISelect'
import { useForm } from '@inertiajs/inertia-react'
import { directionAtom } from '@/atoms/directionAtom'
import { useRecoilState } from 'recoil'
import useLanguage from '@/hooks/useLanguage'

const LanguageForm = ({ onClose, language, lang }) => {
    const [open, setOpen] = React.useState(true)

    const handleClose = () => {
        setOpen(false)
        onClose()
    }

    const { post, errors, data, setData, processing, put } = useForm({
        name: language ? language.name : null,
        direction: language ? language.direction : 'ltr',
        abbr: language ? language.abbr : null,
    })

    const handleChange = event => {
        setData(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!language) {
            post(route('language.store', { lang }), {
                onSuccess: () => {
                    handleClose()
                },
            })
        } else {
            put(route('language.update', { language: language?.id, lang }), {
                onSuccess: () => {
                    handleClose()
                },
            })
        }
    }

    const [dir] = useRecoilState(directionAtom)

    const { translate } = useLanguage()

    return (
        <Dialog open={open} onClose={handleClose} dir={dir}>
            <DialogTitle>{translate('Language form')}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogContentText>
                        <div className={'flex flex-col space-y-2'}>
                            <TextField
                                fullWidth={true}
                                label={translate('Language name')}
                                size={'small'}
                                onChange={handleChange}
                                error={errors.name}
                                helperText={errors.name}
                                name={'name'}
                                value={data.name}
                            />
                            <TextField
                                fullWidth={true}
                                label={translate('Language abbreviation')}
                                size={'small'}
                                onChange={handleChange}
                                error={errors.abbr}
                                helperText={errors.abbr}
                                name={'abbr'}
                                value={data.abbr}
                            />
                            <MUISelect
                                label={translate('Direction')}
                                error={errors.direction}
                                name={'direction'}
                                onChange={handleChange}
                                value={data.direction}
                                options={[
                                    {
                                        value: 'rtl',
                                        label: translate('Right to left'),
                                    },
                                    {
                                        value: 'ltr',
                                        label: translate('Left to right'),
                                    },
                                ]}
                            />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={'rtl:float-right'}>
                    <LoadingButton
                        loading={processing}
                        color={'success'}
                        type={'submit'}>
                        {translate('Save')}
                    </LoadingButton>
                    <Button color={'error'} onClick={handleClose}>
                        {translate('Close')}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default LanguageForm
