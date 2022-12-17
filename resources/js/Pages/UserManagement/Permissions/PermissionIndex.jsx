import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Button } from '@mui/material'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/solid'
import PermissionGroupForm from '@/Pages/UserManagement/Permissions/PermissionGroupForm'
import swal from 'sweetalert'
import { useRecoilState } from 'recoil'
import { fullPageLoading } from '@/atoms/fullPageLoading'
import { useForm } from '@inertiajs/inertia-react'
import PermissionGroups from '@/Pages/UserManagement/Permissions/PermissionGroups'
import PermissionForm from '@/Pages/UserManagement/Permissions/PermissionForm'
import UserManagementLinks from '@/Pages/UserManagement/UserManagementLinks'
import useLanguage from '@/hooks/useLanguage'

const PermissionIndex = ({ auth, active, permissions, lang }) => {
    const [groupForm, setGroupForm] = React.useState(false)
    const [permissionForm, setPermissionForm] = React.useState(false)
    const [groupId, setGroupId] = React.useState(0)
    const [groupName, setGroupName] = React.useState(null)
    const [parentGroupId, setParentGroupId] = React.useState(0)
    const setPageLoading = useRecoilState(fullPageLoading)
    const { delete: deleteAction } = useForm()

    const { translate } = useLanguage()

    const onDelete = id => {
        swal({
            icon: 'warning',
            title: translate(
                'Are you sure you want to delete this user group?',
            ),
            buttons: true,
        }).then(res => {
            if (res) {
                setPageLoading[1](true)
                deleteAction(
                    route('permissions.destroy', { permission: id, lang }),
                    {
                        onSuccess: () => {
                            setPageLoading[1](false)
                        },
                        onError: () => {
                            setPageLoading[1](false)
                        },
                    },
                )
            }
        })
    }

    const editAction = (id, name) => {
        setGroupId(id)
        setGroupName(name)
        setGroupForm(true)
    }

    const handlePermissionCreation = groupId => {
        setGroupId(groupId)
        setPermissionForm(true)
    }

    const deletePermission = permissionId => {
        swal({
            icon: 'warning',
            title: 'Are you sure?',
            buttons: true,
        }).then(res => {
            if (res) {
                setPageLoading[1](true)
                deleteAction(
                    route('delete-permission', {
                        permission: permissionId,
                        lang,
                    }),
                    {
                        onSuccess: () => {
                            setPageLoading[1](false)
                        },
                    },
                )
            }
        })
    }

    return (
        <Authenticated
            auth={auth}
            active={'user_management'}
            navBarOptions={<UserManagementLinks active={active} />}
            title={'Permission'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'text-2xl'}>List of permissions</h2>
                <Button
                    onClick={() => {
                        setGroupForm(true)
                        setParentGroupId(0)
                    }}
                    variant={'outlined'}
                    endIcon={<PlusIcon className={'h-4'} />}>
                    Create a group
                </Button>
            </div>
            <div className={'mt-8'}>
                {permissions?.length > 0 ? (
                    <div>
                        {permissions?.map((item, index) => (
                            <PermissionGroups
                                permissions={item?.permissions}
                                key={index}
                                setGroupForm={setGroupForm}
                                groups={item?.permission_group}
                                setParentGroupId={setParentGroupId}
                                item={item}
                                onDelete={onDelete}
                                editAction={editAction}
                                handlePermissionCreation={
                                    handlePermissionCreation
                                }
                                deletePermission={deletePermission}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={'text-center text-red-500 mt-12'}>
                        No record found
                    </p>
                )}
            </div>
            {groupForm && (
                <PermissionGroupForm
                    groupId={groupId}
                    groupName={groupName}
                    lang={lang}
                    permissionParentGroupId={parentGroupId}
                    onClose={e => {
                        setGroupForm(e)
                        setParentGroupId(0)
                        setGroupId(0)
                        setGroupName(null)
                    }}
                />
            )}
            {permissionForm && (
                <PermissionForm
                    onClose={() => {
                        setPermissionForm(false)
                        setGroupId(0)
                        setParentGroupId(0)
                        setGroupName(null)
                    }}
                    permissionParentGroupId={groupId}
                    lang={lang}
                    deletePermission={deletePermission}
                />
            )}
        </Authenticated>
    )
}

export default PermissionIndex
