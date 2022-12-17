import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/inertia-react'
import useLanguage from '@/hooks/useLanguage'

export default function Dashboard(props) {
    const { translate } = useLanguage()

    return (
        <AuthenticatedLayout
            active={'dashboard'}
            auth={props.auth}
            errors={props.errors}>
            <Head title="Dashboard" />

            <div className=" h-screen flex justify-center items-center">
                <div className=" shadow-md rounded p-8">
                    <h1 className="text-2xl font-bold text-primary">
                        {translate('Welcome to the Dashboard')}
                    </h1>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
