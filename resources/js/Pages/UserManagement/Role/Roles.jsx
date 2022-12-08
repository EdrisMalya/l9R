import React from 'react'
import { Chip, IconButton } from '@mui/material'
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/solid'
import swal from 'sweetalert'
import { Link, useForm } from '@inertiajs/inertia-react'
import { useRecoilState } from 'recoil'
import { fullPageLoading } from '@/atoms/fullPageLoading'

const Roles = ({ roles }) => {
    const { delete: deleteAction } = useForm()
    const pageLoading = useRecoilState(fullPageLoading)

    const deleteRole = id => {
        swal({
            icon: 'warning',
            title: 'Are you sure you want to delete this role?',
            buttons: true,
        }).then(res => {
            if (res) {
                pageLoading[1](true)
                deleteAction(route('role.destroy', { role: id }), {
                    onSuccess: () => {
                        pageLoading[1](false)
                    },
                })
            }
        })
    }

    return (
        <div>
            {roles?.length < 1 ? (
                <p className={'text-red-500 text-center'}>No record found</p>
            ) : (
                <div className={'pb-4'}>
                    {roles?.map(role => (
                        <div
                            className={
                                'inline-block p-2 border dark:border-gray-600 text-sm rounded-full m-1'
                            }
                            key={role?.id}>
                            <div className={'flex items-center space-x-2 px-1'}>
                                <div>
                                    {role?.name}{' '}
                                    <span className={'text-sm text-gray-500'}>
                                        ({role?.permission_count})
                                    </span>
                                </div>
                                <div>
                                    <IconButton
                                        size={'small'}
                                        color={'error'}
                                        onClick={() => deleteRole(role?.id)}>
                                        <TrashIcon className={'h-3'} />
                                    </IconButton>
                                    <Link
                                        href={route('role.show', {
                                            role: role?.id,
                                        })}>
                                        <IconButton
                                            size={'small'}
                                            color={'warning'}>
                                            <ArrowRightIcon className={'h-3'} />
                                        </IconButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Roles
