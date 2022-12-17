import React, { useEffect } from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import UserManagementLinks from '@/Pages/UserManagement/UserManagementLinks'
import useLanguage from '@/hooks/useLanguage'

const UserManagementIndex = ({ active, lang }) => {
    const { translate } = useLanguage()
    return (
        <Authenticated
            title={'User Management'}
            active={'user_management'}
            navBarOptions={<UserManagementLinks />}>
            <div className={'text-center mt-64 text-xl'}>
                {translate('This is user management section')}
            </div>
        </Authenticated>
    )
}

export default UserManagementIndex
