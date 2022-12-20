import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Button } from '@mui/material'
import { PlusIcon, UserIcon } from '@heroicons/react/24/outline'
import Datatable from '@/Components/Datatable/Datatable'
import UserForm from '@/Pages/UserManagement/Users/UserForm'
import ProtectedComponent from '@/Components/ProtectedComponent'
import UserManagementLinks from '@/Pages/UserManagement/UserManagementLinks'
import useLanguage from '@/hooks/useLanguage'
import { Inertia } from '@inertiajs/inertia'

const UserIndex = ({ auth, active, users, roles, dir, lang }) => {
    const [openForm, setOpenForm] = React.useState(false)
    const [user, setUser] = React.useState(null)

    const handleOpenForm = () => {
        setOpenForm(true)
    }

    const { translate } = useLanguage()

    return (
        <Authenticated
            title={'Users'}
            auth={auth}
            active={'user_management'}
            navBarOptions={<UserManagementLinks active={active} />}>
            <div className={'flex justify-between items-center'}>
                <h2 className={'text-2xl'}>{translate('List users')}</h2>
                <ProtectedComponent role={'users-create-user'}>
                    <Button
                        variant={'outlined'}
                        onClick={handleOpenForm}
                        endIcon={<PlusIcon className={'h-4 rtl:mr-3'} />}>
                        {translate('Add new user')}
                    </Button>
                </ProtectedComponent>
            </div>
            <div className={'mt-8'}>
                <Datatable
                    otherOptions={[
                        {
                            icon: <UserIcon className={'h-3 text-blue-500'} />,
                            role: 'users-view-profile',
                            tooltip: translate('User details'),
                            handleClick: item => {
                                Inertia.get(
                                    route('users.show', {
                                        user: item.id,
                                        lang,
                                        active_tab: 'user_profile',
                                    }),
                                )
                            },
                        },
                    ]}
                    handleEditAction={item => {
                        setUser(item)
                        setOpenForm(true)
                    }}
                    showNumber={true}
                    deleteRole={'users-delete-user'}
                    editRole={'users-edit-user'}
                    data={users}
                    columns={[
                        {
                            name: 'Name',
                            key: 'name',
                            sort: true,
                        },
                        {
                            name: 'Email',
                            key: 'email',
                            sort: true,
                        },
                        {
                            name: 'Phone number',
                            key: 'phone_number',
                            sort: true,
                        },
                        {
                            name: 'Status',
                            key: 'status',
                            sort: true,
                            data_type: 'boolean',
                        },
                        {
                            name: 'Created at',
                            key: 'created_at',
                            sort: true,
                            data_type: 'date',
                            format: 'YYYY-MM-DD',
                        },
                    ]}
                />
            </div>
            {openForm && (
                <UserForm
                    translate={translate}
                    dir={dir}
                    roles={roles}
                    user={user}
                    onClose={() => {
                        setOpenForm(false)
                        setUser(null)
                    }}
                />
            )}
        </Authenticated>
    )
}

export default UserIndex
