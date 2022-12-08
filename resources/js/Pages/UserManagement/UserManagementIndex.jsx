import React, { useEffect } from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/inertia-react'
import { Button } from '@mui/material'
import { UsersIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export const userManagementLinks = active => {
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
    return (
        <>
            <Link href={route('users.index')}>
                <Button
                    startIcon={<UsersIcon className={'h-4'} />}
                    variant={
                        activeLink() === 'users' ? 'contained' : 'outlined'
                    }>
                    Users
                </Button>
            </Link>
            <Link href={route('role.index')}>
                <Button
                    startIcon={<UserCircleIcon className={'h-4'} />}
                    variant={
                        activeLink() === 'roles' ? 'contained' : 'outlined'
                    }>
                    Roles
                </Button>
            </Link>
            <Link href={route('permissions.index')}>
                <Button
                    startIcon={<LockClosedIcon className={'h-4'} />}
                    variant={
                        activeLink() === 'permission' ? 'contained' : 'outlined'
                    }>
                    Permission
                </Button>
            </Link>
        </>
    )
}

const UserManagementIndex = props => {
    return (
        <Authenticated
            auth={props.auth}
            active={'user_management'}
            navBarOptions={() => userManagementLinks(props?.active)}>
            <Head title={'User Management'} />
        </Authenticated>
    )
}

export default UserManagementIndex
