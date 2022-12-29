import React, { useEffect, useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Link,
    TextField,
} from '@mui/material'
import { useForm, usePage } from '@inertiajs/inertia-react'
import { LoadingButton } from '@mui/lab'

const WidgetForm = ({ translate, onClose, widget }) => {
    const [show, setShow] = useState(true)

    const { lang } = usePage().props
    const { data, setData, errors, processing, post, put, reset } = useForm({
        name: widget?.name,
        icon: null,
    })

    const handleClose = () => {
        onClose()
        reset()
        setShow(false)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!widget) {
            post(route('widgets.store', { lang }), {
                onSuccess: () => {
                    handleClose()
                },
            })
        } else {
            put(route('widgets.update', { lang, widget: widget.id }), {
                onSuccess: () => {
                    handleClose()
                },
            })
        }
    }

    useEffect(() => {
        if (widget) {
            setData('name', widget.name)
            setData('icon', widget.icon)
        }
    }, [widget])

    return (
        <Dialog open={show}>
            <DialogTitle>{translate('Widget form')}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            onChange={event => {
                                setData('name', event.target.value)
                            }}
                            value={data.name}
                            name={'name'}
                            error={errors.name}
                            size={'small'}
                            label={translate('Widget name')}
                        />
                        <p className={'text-red-500 text-xs'}>{errors.name}</p>
                        <p className={'mt-4'}>{translate('Icon')}</p>
                        <textarea
                            name={'short_description'}
                            onChange={event =>
                                setData('icon', event.target.value)
                            }
                            value={data.icon}
                            rows={2}
                            placeholder={translate('Paste icon here')}
                            className={`rounded-lg ${
                                errors.title && 'border-red-500'
                            } resize w-full shadow-lg p-4 resize-none bg-transparent focus:outline-none focus:shadow-outline`}
                        />
                        <p className={'text-xs text-red-500'}>{errors.icon}</p>
                        <Link href={'https://heroicons.com/'} target={'_blank'}>
                            {translate('Icons')}
                        </Link>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <LoadingButton
                        type={'submit'}
                        loading={processing}
                        variant={'outlined'}
                        color={'success'}>
                        {translate('Save')}
                    </LoadingButton>
                    <Button
                        onClick={handleClose}
                        variant={'outlined'}
                        color={'error'}>
                        {translate('Close')}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default WidgetForm
