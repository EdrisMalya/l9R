import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import dayjs from 'dayjs'
import swal from 'sweetalert'
import { useForm } from '@inertiajs/inertia-react'
import ProtectedComponent from '@/Components/ProtectedComponent'

const TableBody = ({
    showNumber,
    columns,
    actions,
    editAction,
    deleteAction,
    data,
    setTableLoading,
    handleEditAction,
    deleteRole,
    editRole,
    otherActions,
    datatableRoute,
    objectName,
    lang,
    deleteRoute,
    translate,
}) => {
    let counter = 1
    const resolve = (path, obj) => {
        return path.split('.').reduce(function (prev, curr) {
            return prev ? prev[curr] : null
        }, obj || self)
    }
    const tdDataBuilder = (column, item) => {
        let data_type =
            typeof column?.data_type === 'undefined'
                ? 'string'
                : column?.data_type
        if (typeof data_type !== 'undefined') {
            switch (data_type) {
                case 'string':
                    return resolve(column.key, item)
                case 'date':
                    return dayjs(resolve(column.key, item)).format(
                        column.format,
                    )
                case 'boolean':
                    return resolve(column.key, item) ? 'Active' : 'Inactive'
            }
        }
    }

    const { delete: destroy } = useForm()

    const handleDeleteAction = id => {
        swal({
            icon: 'warning',
            title: translate('Are you sure you want to delete'),
            buttons: true,
        }).then(res => {
            if (res) {
                let routes = route().t.routes
                setTableLoading(true)
                let route_uri =
                    routes[
                        route().current().replace('index', 'destroy')
                    ].uri?.split('/')
                let objName = route_uri[route_uri.length - 1]
                    .replaceAll('{', '')
                    .replaceAll('}', '')
                let route_param = {
                    [objectName !== null ? objectName : objName]: id,
                    lang,
                }
                destroy(
                    route(
                        deleteRoute
                            ? deleteRoute
                            : route().current().replace('index', 'destroy'),
                        route_param,
                    ),
                    {
                        onSuccess: () => {
                            setTableLoading(false)
                        },
                    },
                )
            }
        })
    }

    return (
        <tbody>
            {data?.data?.length < 1 ? (
                <tr>
                    <td
                        className={'text-center text-red-500 py-12'}
                        colSpan={columns?.length + 2}>
                        {translate('No record found')}
                    </td>
                </tr>
            ) : (
                data?.data?.map((item, index) => (
                    <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        {showNumber && (
                            <th scope="col" className="py-2 px-6 font-bold">
                                <div className="flex items-center">
                                    {counter++}
                                </div>
                            </th>
                        )}
                        {columns?.map(column => (
                            <td key={column?.key} className="py-2 px-6 text-xs">
                                {tdDataBuilder(column, item)}
                            </td>
                        ))}
                        {actions && (
                            <td className="py-2 px-6 text-xs">
                                {editAction && (
                                    <ProtectedComponent role={editRole}>
                                        <IconButton
                                            onClick={() =>
                                                handleEditAction(item)
                                            }
                                            color={'warning'}
                                            size={'small'}>
                                            <PencilIcon className={'h-3'} />
                                        </IconButton>
                                    </ProtectedComponent>
                                )}
                                {deleteAction && (
                                    <ProtectedComponent role={deleteRole}>
                                        <IconButton
                                            onClick={() =>
                                                handleDeleteAction(item?.id)
                                            }
                                            color={'error'}
                                            size={'small'}>
                                            <TrashIcon className={'h-3'} />
                                        </IconButton>
                                    </ProtectedComponent>
                                )}
                                {(otherActions ?? [])?.map((action, index) => (
                                    <ProtectedComponent
                                        key={index}
                                        role={action?.role}>
                                        <Tooltip title={action?.tooltip}>
                                            <IconButton
                                                onClick={() =>
                                                    action?.handleClick(item)
                                                }>
                                                {action?.icon}
                                            </IconButton>
                                        </Tooltip>
                                    </ProtectedComponent>
                                ))}
                            </td>
                        )}
                    </tr>
                ))
            )}
        </tbody>
    )
}

export default TableBody
