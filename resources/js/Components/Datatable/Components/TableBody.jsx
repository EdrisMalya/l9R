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
    objectName,
    lang,
    deleteRoute,
    translate,
    shouldIShowTheColumn
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
                    if (typeof column?.translate !== 'undefined') {
                        if (column?.translate) {
                            return translate(resolve(column.key, item))
                        } else {
                            return resolve(column.key, item)
                        }
                    }
                    return resolve(column.key, item)
                case 'date':
                    return dayjs(resolve(column.key, item)).format(
                        column.format,
                    )
                case 'boolean':
                    let trueValue =
                        typeof column?.true_value === 'undefined'
                            ? 'Active'
                            : column?.true_value
                    let falseValue =
                        typeof column?.false_value === 'undefined'
                            ? 'Inactive'
                            : column?.false_value
                    return resolve(column.key, item) ? trueValue : falseValue
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
                        colSpan={columns?.length + 3}>
                        {translate('No record found')}
                    </td>
                </tr>
            ) : (
                data?.data?.map((item, index) => (
                    <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        {showNumber && shouldIShowTheColumn('increment') && (
                            <th scope="col" className="py-2 px-6 font-bold">
                                <div className="flex items-center">
                                    {counter++}
                                </div>
                            </th>
                        )}
                        {columns?.map(column => (
                            shouldIShowTheColumn(column.key) && (
                                <td key={column?.key} className="py-2 px-6 text-xs">
                                    {tdDataBuilder(column, item)}
                                </td>
                            )
                        ))}
                        {actions && shouldIShowTheColumn('actions') && (
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
                                                className={action?.className}
                                                size={'small'}
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
