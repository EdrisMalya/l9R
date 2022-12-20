import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import useLanguage from '@/hooks/useLanguage'
import UserManagementLinks from '@/Pages/UserManagement/UserManagementLinks'
import Datatable from '@/Components/Datatable/Datatable'
import { Button } from '@mui/material'
import { TrashIcon } from '@heroicons/react/24/outline'
import ProtectedComponent from '@/Components/ProtectedComponent'
import swal from 'sweetalert'
import { useRecoilState } from 'recoil'
import { fullPageLoading } from '@/atoms/fullPageLoading'
import { useForm } from '@inertiajs/inertia-react'

const LoginLogIndex = ({ active, logs, lang }) => {
    const { translate } = useLanguage()
    const setLoading = useRecoilState(fullPageLoading)

    const { delete: deleteAction } = useForm()

    const handleTruncate = () => {
        swal({
            icon: 'warning',
            title: translate('Are you sure'),
            buttons: true,
        }).then(res => {
            if (res) {
                setLoading[1](true)
                deleteAction(
                    route('login_log.destroy', { lang, login_log: 0 }),
                    {
                        onSuccess: () => {
                            setLoading[1](false)
                        },
                    },
                )
            }
        })
    }

    return (
        <Authenticated
            active={'user_management'}
            navBarOptions={<UserManagementLinks active={active} />}
            title={translate('User login log')}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'text-xl'}>{translate('User login log')}</h2>
                <ProtectedComponent role={'login-log-truncate'}>
                    <Button
                        onClick={handleTruncate}
                        color={'error'}
                        endIcon={<TrashIcon className={'h-4'} />}
                        variant={'outlined'}>
                        {translate('Truncate')}
                    </Button>
                </ProtectedComponent>
            </div>
            <div className={'mt-8'}>
                <Datatable
                    data={logs}
                    showNumber={true}
                    actions={false}
                    columns={[
                        {
                            name: translate('IP address'),
                            key: 'ip_address',
                            sort: true,
                        },
                        {
                            name: translate('Email'),
                            key: 'email',
                            sort: true,
                        },
                        {
                            name: translate('Was login succeed'),
                            key: 'status',
                            sort: true,
                            data_type: 'boolean',
                            true_value: 'Yes',
                            false_value: 'No',
                        },
                        {
                            name: translate('Logged in date'),
                            key: 'created_at',
                            sort: true,
                            data_type: 'date',
                            format: 'YYYY-MM-DD hh:mm A',
                        },
                    ]}
                />
            </div>
        </Authenticated>
    )
}

export default LoginLogIndex
