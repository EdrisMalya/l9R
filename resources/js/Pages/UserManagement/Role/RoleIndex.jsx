import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { userManagementLinks } from '@/Pages/UserManagement/UserManagementIndex'
import { Button, IconButton, Tooltip } from '@mui/material'
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid'
import RoleForm from '@/Pages/UserManagement/Role/RoleForm'
import Collapsable from '@/Components/Collapsable'
import swal from 'sweetalert'
import { useRecoilState } from 'recoil'
import { fullPageLoading } from '@/atoms/fullPageLoading'
import { useForm } from '@inertiajs/inertia-react'
import Roles from '@/Pages/UserManagement/Role/Roles'

const RoleIndex = ({ auth, active, roles }) => {
    const [roleForm, setRoleForm] = React.useState(false)
    const [formType, setFormType] = React.useState('role_group')
    const [groupId, setGroupId] = React.useState(0)
    const [name, setName] = React.useState(null)
    const pageLoading = useRecoilState(fullPageLoading)

    const { delete: deleteAction } = useForm()

    const handleFormClose = () => {
        setRoleForm(false)
        setFormType('role_group')
        setName(null)
        setGroupId(0)
    }

    const handleRoleGroupEditAction = (groupId, name) => {
        setGroupId(groupId)
        setName(name)
        setFormType('role_group')
        setRoleForm(true)
    }

    const deleteGroup = id => {
        swal({
            icon: 'warning',
            title: 'Are you sure you want to delete this group',
            buttons: true,
        }).then(res => {
            if (res) {
                pageLoading[1](true)
                deleteAction(route('role.group.save', { role_group_id: id }), {
                    onSuccess: () => {
                        pageLoading[1](false)
                    },
                })
            }
        })
    }

    return (
        <Authenticated
            auth={auth}
            active={'roles'}
            title={'Roles'}
            navBarOptions={() => userManagementLinks(active)}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'text-xl'}>List of Roles</h2>
                <Button
                    variant={'outlined'}
                    onClick={() => {
                        setRoleForm(true)
                    }}
                    endIcon={<PlusIcon className={'h-4'} />}>
                    Create role group
                </Button>
            </div>
            <div className={'mt-4'}>
                {roles?.data?.length < 1 ? (
                    <p className={'text-center text-red-500'}>
                        No record found
                    </p>
                ) : (
                    <div>
                        {roles?.data?.map(item => (
                            <Collapsable
                                key={item.id}
                                title={
                                    <div className={'flex w-full'}>
                                        <div className={'flex-1'}>
                                            <h2 className={'text-lg'}>
                                                {item?.name}
                                            </h2>
                                        </div>
                                        <div
                                            className={
                                                'border dark:border-gray-700 rounded-lg'
                                            }>
                                            <IconButton
                                                color={'error'}
                                                className={'mr-5'}
                                                onClick={() =>
                                                    deleteGroup(item?.id)
                                                }>
                                                <TrashIcon className={'h-4'} />
                                            </IconButton>
                                            <IconButton
                                                color={'warning'}
                                                className={'mr-5'}
                                                onClick={() =>
                                                    handleRoleGroupEditAction(
                                                        item?.id,
                                                        item?.name,
                                                    )
                                                }>
                                                <PencilIcon className={'h-4'} />
                                            </IconButton>
                                        </div>
                                    </div>
                                }
                                content={
                                    <div>
                                        <Roles roles={item?.roles} />
                                        <Tooltip title={'Create role'}>
                                            <IconButton
                                                onClick={() => {
                                                    setFormType('role')
                                                    setGroupId(item?.id)
                                                    setRoleForm(true)
                                                }}
                                                className={
                                                    '!bg-blue-500 hover:!bg-blue-700'
                                                }>
                                                <PlusIcon className={'h-4'} />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
            {roleForm && (
                <RoleForm
                    formType={formType}
                    name={name}
                    groupId={groupId}
                    onClose={handleFormClose}
                />
            )}
        </Authenticated>
    )
}

export default RoleIndex
