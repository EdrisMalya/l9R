import React from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import { Head, Link, useForm } from '@inertiajs/inertia-react'
import { Button } from '@mui/material'
import { HomeModernIcon } from '@heroicons/react/24/outline'

export default function ForgotPassword({ status, lang }) {
    const submit = e => {
        e.preventDefault()

        post(route('password.email', { lang }))
    }

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="py-4 text-xl text-center text-gray-600 dark:text-gray-400">
                Please contact with your administrator
                <div className={'mt-4'}>
                    <Link href={route('login', { lang })}>
                        <Button
                            size="small"
                            variant={'contained'}
                            endIcon={<HomeModernIcon className={'h-4'} />}>
                            Home page
                        </Button>
                    </Link>
                </div>
            </div>
        </GuestLayout>
    )
}
