import React from 'react'
import ProtectedComponent from '@/Components/ProtectedComponent'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Button } from '@mui/material'
import { UsersIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import useLanguage from '@/hooks/useLanguage'

const UserManagementLinks = ({ active }) => {
    const { lang } = usePage().props
    const activeLink = () => {
        switch (active) {
            case 'users':
                return 'users'
            case 'roles':
                return 'roles'
            case 'permission':
                return 'permission'
        }
    }

    const { translate } = useLanguage()

    return (
        <>
            <ProtectedComponent role={'users-access'}>
                <Link href={route('users.index', { lang })}>
                    <Button
                        startIcon={<UsersIcon className={'h-4 rtl:ml-3'} />}
                        variant={
                            activeLink() === 'users' ? 'contained' : 'outlined'
                        }>
                        {translate('Users')}
                    </Button>
                </Link>
            </ProtectedComponent>
            <ProtectedComponent role={'roles-access'}>
                <Link href={route('role.index', { lang })}>
                    <Button
                        startIcon={
                            <UserCircleIcon className={'h-4 rtl:ml-3'} />
                        }
                        variant={
                            activeLink() === 'roles' ? 'contained' : 'outlined'
                        }>
                        {translate('Roles')}
                    </Button>
                </Link>
            </ProtectedComponent>
            <ProtectedComponent onlyForAdmin={true}>
                <Link href={route('permissions.index', { lang })}>
                    <Button
                        startIcon={<LockClosedIcon className={'h-4'} />}
                        variant={
                            activeLink() === 'permission'
                                ? 'contained'
                                : 'outlined'
                        }>
                        {translate('Permissions')}
                    </Button>
                </Link>
            </ProtectedComponent>
        </>
    )
}

export default UserManagementLinks
