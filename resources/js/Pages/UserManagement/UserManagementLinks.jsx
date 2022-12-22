import React from 'react'
import ProtectedComponent from '@/Components/ProtectedComponent'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Button, ListItemIcon } from '@mui/material'
import { ListBulletIcon, UsersIcon } from '@heroicons/react/24/outline'
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
            case 'login_logs':
                return 'login_logs'
            case 'log_activities':
                return 'log_activities'
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
            <ProtectedComponent role={'login-log-access'}>
                <Link href={route('login_log.index', { lang })}>
                    <Button
                        startIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-4 rtl:ml-3">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                />
                            </svg>
                        }
                        variant={
                            activeLink() === 'login_logs'
                                ? 'contained'
                                : 'outlined'
                        }>
                        {translate('Login log')}
                    </Button>
                </Link>
            </ProtectedComponent>
            <ProtectedComponent role={'log-activity-access'}>
                <Link href={route('log.activities.index', { lang })}>
                    <Button
                        startIcon={<ListBulletIcon className={'h-4'} />}
                        variant={
                            activeLink() === 'log_activities'
                                ? 'contained'
                                : 'outlined'
                        }>
                        {translate('Log activities')}
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
