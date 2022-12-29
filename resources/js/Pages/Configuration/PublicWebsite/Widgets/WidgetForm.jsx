import React from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material"
import {useForm, usePage} from "@inertiajs/inertia-react"
import {LoadingButton} from "@mui/lab"

const WidgetForm = ({translate, show, onClose}) => {

    const {lang} = usePage().props

    const handleClose = () => {
        onClose()
    }

    const { data, setData, errors, processing, post } = useForm({
        name: null
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        post(route('widgets.store', {lang}))
    }

    return (
        <Dialog open={show}>
            <DialogTitle>
                {translate('Widget form')}
            </DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            onChange={event=>setData('name', event.target.value)}
                            value={data.name}
                            error={true}
                            helpText={'lorem ipsum dolor sit amet, consectetur'}
                            size={'small'}
                            label={translate('Widget name')}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <LoadingButton type={'submit'} loading={processing} variant={'outlined'} color={'success'}>{translate('Save')}</LoadingButton>
                    <Button onClick={handleClose} variant={'outlined'} color={'error'}>{translate('Close')}</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default WidgetForm
