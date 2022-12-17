import React from 'react'
import { IconButton } from '@mui/material'
import { TrashIcon } from '@heroicons/react/24/solid'

const PermissionList = ({ permissions, deletePermission }) => {
    const copy = text => {
        navigator.clipboard.writeText(text)
    }
    return (
        <div>
            <p className={'text-gray-300 text-sm'}>Permissions</p>
            <div className={'border dark:border-gray-700 p-3 mt-2 rounded-lg'}>
                {permissions?.map((permission, index) => (
                    <span
                        key={index}
                        className={
                            'm-1 inline-block rounded-2xl border border-gray-600 p-3 text-xs'
                        }>
                        <div className={'flex items-center space-x-2'}>
                            <div className={'flex-grow'}>
                                <span className={'font-bold'}>
                                    Name: <span>{permission.name}</span>
                                </span>
                                <br />
                                <span className={'font-bold'}>
                                    Code name:{' '}
                                    <span
                                        onClick={() => copy(permission.key)}
                                        className={
                                            'inline-block rounded-lg cursor-pointer bg-gray-300 px-1 transition duration-150 ease-in-out hover:scale-110 dark:bg-gray-600'
                                        }>
                                        {permission.key}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() =>
                                        deletePermission(permission?.id)
                                    }
                                    size={'small'}>
                                    <TrashIcon className={'h-3 text-red-500'} />
                                </IconButton>
                            </div>
                        </div>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default PermissionList
