import React from 'react'
import { Button, IconButton } from '@mui/material'
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid'
import Collapsable from '@/Components/Collapsable'
import PermissionList from '@/Pages/UserManagement/Permissions/PermissionList'

const PermissionGroups = ({
    item,
    onDelete,
    setParentGroupId,
    setGroupForm,
    groups,
    editAction,
    handlePermissionCreation,
    permissions,
    deletePermission,
}) => {
    return (
        <Collapsable
            className={'border dark:border-gray-700'}
            title={
                <div className={'flex w-full'}>
                    <div className={'flex-1'}>
                        <h2 className={'text-lg'}>{item?.name}</h2>
                    </div>
                    <div className={'border dark:border-gray-700 rounded-lg'}>
                        <IconButton
                            color={'error'}
                            className={'mr-5'}
                            onClick={() => onDelete(item?.id)}>
                            <TrashIcon className={'h-4'} />
                        </IconButton>
                        <IconButton
                            color={'warning'}
                            className={'mr-5'}
                            onClick={() => editAction(item?.id, item?.name)}>
                            <PencilIcon className={'h-4'} />
                        </IconButton>
                    </div>
                </div>
            }
            content={
                <div>
                    {permissions?.length > 0 && (
                        <div>
                            <PermissionList
                                permissions={permissions}
                                deletePermission={deletePermission}
                            />
                        </div>
                    )}
                    {groups?.length > 0 && (
                        <p className={'text-gray-300 text-sm'}>Groups</p>
                    )}
                    {(groups ?? []).map((group, index) => (
                        <PermissionGroups
                            key={index}
                            setGroupForm={setGroupForm}
                            groups={group?.permission_group}
                            setParentGroupId={setParentGroupId}
                            item={group}
                            onDelete={onDelete}
                            editAction={editAction}
                            handlePermissionCreation={handlePermissionCreation}
                            deletePermission={deletePermission}
                            permissions={group?.permissions}
                        />
                    ))}
                    {groups?.length < 1 && item?.permissions.length < 1 && (
                        <p className={'text-center text-red-500'}>
                            No record found
                        </p>
                    )}
                </div>
            }
            actions={
                <>
                    <Button
                        onClick={() => handlePermissionCreation(item?.id)}
                        endIcon={<PlusIcon className={'h-4'} />}
                        variant={'outlined'}
                        size={'small'}>
                        Add permission
                    </Button>
                    <Button
                        onClick={() => {
                            setParentGroupId(item?.id)
                            setGroupForm(true)
                        }}
                        variant={'outlined'}
                        size={'small'}
                        endIcon={<PlusIcon className={'h-4'} />}>
                        Add group
                    </Button>
                </>
            }
        />
    )
}

export default PermissionGroups
