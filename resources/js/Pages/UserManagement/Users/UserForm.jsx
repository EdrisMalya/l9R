import React, { useEffect, useRef, useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    Switch,
    TextField,
    Tooltip,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import Select2 from '@/Components/Select2'
import { useForm, usePage } from '@inertiajs/inertia-react'

const UserForm = ({ onClose, roles, user, dir, translate }) => {
    const [open, setOpen] = useState(true)
    const [selectedImage, setSelectedImage] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    const { lang } = usePage().props

    const inputRef = useRef()

    const handleClose = () => {
        setOpen(false)
        onClose()
    }

    const { post, processing, setData, data, errors, put } = useForm({
        name: user?.name,
        last_name: user?.last_name,
        email: user?.email,
        phone_number: user?.phone_number,
        password: '',
        confirm_password: '',
        roles: user?.roles,
        image: null,
        status: !user ? true : user.status,
    })

    const handleInputChange = event => {
        setData(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!user) {
            post(route('users.store', { lang }), {
                onSuccess: () => {
                    handleClose()
                },
            })
        } else {
            post(
                route('users.update', {
                    user: user.id,
                    _method: 'PUT',
                    lang,
                }),
                {
                    onSuccess: () => {
                        handleClose()
                    },
                },
            )
        }
    }

    const imageAdded = e => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = readerEvent => {
            setSelectedImage(readerEvent.target.result)
        }
        setData('image', e.target.files[0])
    }

    useEffect(() => {
        if (user) {
            let assignedRoles = user.roles.map(role => {
                return {
                    label: role.role.name,
                    value: role.role.id,
                }
            })
            setData('roles', assignedRoles)
            setSelectedImage(`${route().t.url}/storage/${user.image}`)
        }
    }, [user])

    return (
        <Dialog open={open} dir={dir}>
            <DialogTitle>{translate('User Form')}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <DialogContentText>
                        <Tooltip title={translate('Profile picture')}>
                            <div
                                onClick={() => inputRef.current.click()}
                                className={`w-[100px] h-[100px] mx-auto rounded-full border dark:border-gray-800 cursor-pointer overflow-hidden ${
                                    errors.image && 'border-3 !border-red-500'
                                }`}>
                                {selectedImage && (
                                    <>
                                        <div className={'relative'}>
                                            <img
                                                src={selectedImage}
                                                className={'w-full'}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </Tooltip>
                        {errors.image && (
                            <div className={'text-center text-red-500'}>
                                {errors.image}
                            </div>
                        )}
                        <div className={'grid grid-cols-4 gap-2 mt-5'}>
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.name}
                                value={data.name}
                                name={'name'}
                                helperText={errors.name}
                                size={'small'}
                                label={translate('First name')}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.last_name}
                                value={data.last_name}
                                name={'last_name'}
                                helperText={errors.last_name}
                                size={'small'}
                                label={translate('Last name')}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.email}
                                value={data.email}
                                type={'email'}
                                name={'email'}
                                helperText={errors.email}
                                size={'small'}
                                label={translate('Email')}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.phone_number}
                                value={data.phone_number}
                                name={'phone_number'}
                                helperText={errors.phone_number}
                                size={'small'}
                                label={translate('Phone number')}
                            />
                            <TextField
                                className={'col-span-2'}
                                onChange={handleInputChange}
                                error={errors.password}
                                value={data.password}
                                name={'password'}
                                type={`${showPassword ? 'text' : 'password'}`}
                                helperText={errors.password}
                                size={'small'}
                                label={translate('Password')}
                            />
                            <TextField
                                className={'col-span-2'}
                                type={`${showPassword ? 'text' : 'password'}`}
                                onChange={handleInputChange}
                                error={errors.confirm_password}
                                value={data.confirm_password}
                                name={'confirm_password'}
                                helperText={errors.confirm_password}
                                size={'small'}
                                label={translate('Confirm password')}
                            />
                            <div className={'col-span-4'}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={showPassword}
                                            onChange={event => {
                                                setShowPassword(
                                                    event.target.checked,
                                                )
                                            }}
                                        />
                                    }
                                    label={translate('Show password')}
                                />
                            </div>
                            <div className={'col-span-4'}>
                                <Select2
                                    data={roles}
                                    value={data.roles}
                                    selectLabel={'name'}
                                    error={errors.roles}
                                    selectValue={'id'}
                                    label={translate('Roles')}
                                    isMulti={true}
                                    onChange={e => {
                                        setData('roles', e)
                                    }}
                                />
                            </div>
                            {user && (
                                <div className={'col-span-4 text-center'}>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={data.status}
                                                onChange={e =>
                                                    setData(
                                                        'status',
                                                        e.target.checked,
                                                    )
                                                }
                                            />
                                        }
                                        label={
                                            data.status
                                                ? translate('Active')
                                                : translate('Inactive')
                                        }
                                    />
                                </div>
                            )}
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
                <DialogActions className={'float-right'}>
                    <Button
                        color={'error'}
                        variant={'outlined'}
                        onClick={handleClose}>
                        {translate('Close')}
                    </Button>
                    <LoadingButton
                        className={'rtl:mr-3'}
                        type={'submit'}
                        loading={processing}
                        variant={'outlined'}
                        color={'success'}>
                        {translate('Save')}
                    </LoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default UserForm
