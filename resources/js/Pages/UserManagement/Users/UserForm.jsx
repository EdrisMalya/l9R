import React, { useRef, useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Tooltip,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Select2 from '@/Components/Select2'
import { useForm } from '@inertiajs/inertia-react'

const UserForm = ({ onClose, roles }) => {
    const [open, setOpen] = useState(true)
    const [selectedImage, setSelectedImage] = useState(null)
    const inputRef = useRef()

    const handleClose = () => {
        setOpen(false)
        onClose()
    }

    const imageAdded = e => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = readerEvent => {
            setSelectedImage(readerEvent.target.result)
        }
    }

    const { post, processing, setData, data, errors } = useForm({
        name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        confirm_password: '',
        roles: [],
    })

    const handleInputChange = event => {
        setData(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        post(route('users.store'), {
            onSuccess: () => {},
        })
    }

    return (
        <Dialog open={true}>
            <DialogTitle>User Form</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogContentText>
                        <Tooltip title={'Profile picture'}>
                            <div
                                onClick={() => inputRef.current.click()}
                                className={
                                    'w-[100px] h-[100px] mx-auto rounded-full border dark:border-gray-800 cursor-pointer overflow-hidden'
                                }>
                                {selectedImage && (
                                    <div className={'relative'}>
                                        <img
                                            src={selectedImage}
                                            className={'w-full'}
                                        />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                        <div className={'grid grid-cols-4 gap-1 mt-5'}>
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.name}
                                name={'name'}
                                helperText={errors.name}
                                size={'small'}
                                label={'First name'}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.last_name}
                                name={'last_name'}
                                helperText={errors.last_name}
                                size={'small'}
                                label={'Last name'}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.email}
                                type={'email'}
                                name={'email'}
                                helperText={errors.email}
                                size={'small'}
                                label={'Email'}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.phone_number}
                                name={'phone_number'}
                                helperText={errors.phone_number}
                                size={'small'}
                                label={'Phone number'}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.password}
                                name={'password'}
                                type={'password'}
                                helperText={errors.password}
                                size={'small'}
                                label={'Password'}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.confirm_password}
                                name={'confirm_password'}
                                helperText={errors.confirm_password}
                                size={'small'}
                                label={'Confirm password'}
                            />
                            <div className={'col-span-4'}>
                                <Select2
                                    data={roles}
                                    selectLabel={'name'}
                                    error={errors.roles}
                                    selectValue={'id'}
                                    label={'Roles'}
                                    isMulti={true}
                                    onChange={e => {
                                        setData('roles', e)
                                    }}
                                />
                            </div>
                        </div>
                        <input
                            ref={inputRef}
                            accept={'image/*'}
                            onChange={imageAdded}
                            type={'file'}
                            className={'hidden'}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        color={'error'}
                        variant={'outlined'}
                        onClick={handleClose}>
                        Close
                    </Button>
                    <LoadingButton
                        type={'submit'}
                        loading={processing}
                        variant={'outlined'}
                        color={'success'}>
                        Save
                    </LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default UserForm
