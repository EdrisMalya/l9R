import React from 'react'
import { Avatar, TextField } from '@mui/material'

const UserProfile = ({ user, translate }) => {
    return (
        <div>
            <div>
                <Avatar className={'!w-24 !h-24 mx-auto'} />
                <div
                    className={'max-w-2xl mx-auto mt-6 grid grid-cols-2 gap-4'}>
                    <TextField
                        disabled={true}
                        size={'small'}
                        label={translate('First name')}
                        value={user.name}
                    />
                    <TextField
                        disabled={true}
                        size={'small'}
                        label={translate('First name')}
                        value={user.last_name}
                    />
                    <TextField
                        disabled={true}
                        size={'small'}
                        label={translate('Phone number')}
                        value={user.phone_number}
                    />
                    <TextField
                        disabled={true}
                        size={'small'}
                        label={translate('Email')}
                        value={user.email}
                    />
                    <div className={'col-span-2 text-center pt-4'}>
                        {user.status ? (
                            <span
                                className={
                                    'p-3 rounded-lg shadow-lg bg-green-500'
                                }>
                                {translate('Active')}
                            </span>
                        ) : (
                            <span
                                className={
                                    'p-3 rounded-lg shadow-lg bg-red-500'
                                }>
                                {translate('Inactive')}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
