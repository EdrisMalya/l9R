import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { userManagementLinks } from '@/Pages/UserManagement/UserManagementIndex'
import { Button } from '@mui/material'
import { PlusIcon } from '@heroicons/react/24/outline'
import Datatable from '@/Components/Datatable/Datatable'
import UserForm from '@/Pages/UserManagement/Users/UserForm'

const UserIndex = ({ auth, active, users, roles }) => {
    const [openForm, setOpenForm] = React.useState(false)

    const handleOpenForm = () => {
        setOpenForm(true)
    }

    return (
        <Authenticated
            title={'Users'}
            auth={auth}
            active={'user_management'}
            navBarOptions={() => userManagementLinks(active)}>
            <div className={'flex justify-between items-center'}>
                <h2 className={'text-2xl'}>List users</h2>
                <Button
                    variant={'outlined'}
                    onClick={handleOpenForm}
                    endIcon={<PlusIcon className={'h-4'} />}>
                    Add new user
                </Button>
            </div>
            <div className={'mt-8'}>
                <Datatable
                    showNumber={true}
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
                    roles={roles}
                    onClose={() => {
                        setOpenForm(false)
                    }}
                />
            )}
        </Authenticated>
    )
}

export default UserIndex
