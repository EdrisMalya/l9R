import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useForm } from '@inertiajs/inertia-react'

const LanguageDictionaryForm = ({ onClose, language, lang, word }) => {
    const [open, setOpen] = React.useState(true)
    const { setData, data, post, processing, errors, put } = useForm({
        word: word?.word,
        translate: word?.translate,
        language_id: language?.id,
    })

    const handleClose = e => {
        setOpen(false)
        onClose()
    }

    const handleChange = event => {
        setData(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const routeName = !word ? 'dictionary.store' : 'dictionary.update'
        const routeParams = !word ? { lang } : { lang, dictionary: word.id }
        const request = !word ? post : put
        request(route(routeName, routeParams), {
            onSuccess: () => {
                handleClose()
            },
        })
    }

    return (
        <Dialog open={open} fullWidth={true} maxWidth={'lg'}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Language dictionary</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className={'flex items-center space-x-4'}>
                            <div className={'w-full'}>
                                <p>Word</p>
                                <textarea
                                    name={'word'}
                                    onChange={handleChange}
                                    value={data.word}
                                    rows={1}
                                    placeholder={'Write your word'}
                                    className={`rounded-lg ${
                                        errors.word && 'border-red-500'
                                    } resize w-full shadow-lg p-4 resize-none bg-transparent focus:outline-none focus:shadow-outline`}
                                />
                                <p className={'text-xs text-red-500'}>
                                    {errors.word}
                                </p>
                            </div>
                            <div className={'w-full'} dir={language.direction}>
                                <p>Translate</p>
                                <textarea
                                    name={'translate'}
                                    onChange={handleChange}
                                    value={data.translate}
                                    rows={1}
                                    placeholder={'Write your translation'}
                                    className={`rounded-lg ${
                                        errors.translate && 'border-red-500'
                                    } resize w-full shadow-lg ${
                                        language.direction === 'rtl' &&
                                        'text-right'
                                    } p-4 resize-none bg-transparent focus:outline-none focus:shadow-outline`}
                                />
                                <p className={'text-xs text-red-500'}>
                                    {errors.translate}
                                </p>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color={'error'} onClick={handleClose}>
                        Close
                    </Button>
                    <LoadingButton
                        loading={processing}
                        color={'success'}
                        type={'submit'}>
                        Save
                    </LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default LanguageDictionaryForm
