import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { TextField } from '@mui/material'
import { useForm, usePage } from '@inertiajs/inertia-react'
import { LoadingButton } from '@mui/lab'

const ChangePassword = () => {
    const { lang } = usePage().props
    const { post, setData, data, processing, errors } = useForm({
        old_password: null,
        new_password: null,
        confirm_password: null,
    })

    const handleInputChange = event => {
        setData(event.target.name, event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        post(route('change.password', { lang }))
    }

    return (
        <Authenticated>
            <div
                className={
                    'border max-w-2xl p-5 mx-auto dark:border-gray-600 mt-12'
                }>
                <h2 className={'text-center text-xl font-semibold py-5'}>
                    Please change your password
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className={'flex flex-col mt-12 space-y-2'}>
                        <TextField
                            type={'password'}
                            name={'old_password'}
                            size={'small'}
                            label={'Old password'}
                            value={data.old_password}
                            error={errors?.old_password}
                            helperText={errors?.old_password}
                            onChange={handleInputChange}
                        />
                        <TextField
                            type={'password'}
                            name={'new_password'}
                            size={'small'}
                            label={'New password'}
                            value={data.new_password}
                            error={errors?.new_password}
                            helperText={errors?.new_password}
                            onChange={handleInputChange}
                        />
                        <TextField
                            type={'password'}
                            name={'confirm_password'}
                            size={'small'}
                            label={'Confirm password'}
                            value={data.confirm_password}
                            error={errors?.confirm_password}
                            helperText={errors?.confirm_password}
                            onChange={handleInputChange}
                        />
                        <LoadingButton
                            loading={processing}
                            type={'submit'}
                            variant={'outlined'}>
                            Save
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    )
}

export default ChangePassword
