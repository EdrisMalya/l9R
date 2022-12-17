import React from 'react'
import Collapsable from '@/Components/Collapsable'
import { Checkbox, FormControlLabel } from '@mui/material'

const PermissionGroup = ({
    item,
    permissions,
    groups,
    assignedPermissions,
    assignPermission,
    translate,
}) => {
    return (
        <Collapsable
            title={translate(item?.name)}
            className={'border dark:border-gray-700'}>
            {permissions?.length > 0 && (
                <div>
                    <p
                        className={
                            'text-gray-300 text-xs bg-gray-700 inline-block rounded-lg p-1 mb-2'
                        }>
                        {translate('Permissions')}
                    </p>
                    <div className={'pl-3'}>
                        {permissions?.map(permission => (
                            <span
                                key={permission.id}
                                className={
                                    'border p-1 m-1 rounded-full pl-3 dark:border-gray-500'
                                }>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            className={'rtl:mr-3'}
                                            onClick={() =>
                                                assignPermission(permission?.id)
                                            }
                                            checked={assignedPermissions.includes(
                                                permission?.id,
                                            )}
                                            size={'small'}
                                        />
                                    }
                                    label={translate(permission?.name)}
                                />
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {groups?.length > 0 && (
                <p
                    className={
                        'text-gray-300 text-xs bg-gray-700 inline-block rounded-lg p-1 my-2'
                    }>
                    {translate('Groups')}
                </p>
            )}
            <div className={'ml-4'}>
                {(groups ?? [])?.map(group => (
                    <PermissionGroup
                        permissions={group?.permissions}
                        groups={group?.permission_group}
                        key={group?.id}
                        item={group}
                        assignedPermissions={assignedPermissions}
                        assignPermission={assignPermission}
                        translate={translate}
                    />
                ))}
            </div>
            {groups?.length < 1 && item?.permissions.length < 1 && (
                <p className={'text-center text-red-500'}>
                    {translate('No record found')}
                </p>
            )}
        </Collapsable>
    )
}

export default PermissionGroup
