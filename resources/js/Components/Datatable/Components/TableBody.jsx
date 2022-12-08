import React from 'react'
import { IconButton } from '@mui/material'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import dayjs from 'dayjs'

const TableBody = ({
    showNumber,
    columns,
    actions,
    editAction,
    deleteAction,
    data,
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
            }
        }
    }

    return (
        <tbody>
            {data?.data?.length < 1 ? (
                <tr>
                    <td
                        className={'text-center text-red-500 py-12'}
                        colSpan={columns?.length + 2}>
                        No record found
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
                            <td className="py-2 px-6 text-xs">
                                {tdDataBuilder(column, item)}
                            </td>
                        ))}
                        {actions && (
                            <td className="py-2 px-6 text-xs">
                                {editAction && (
                                    <IconButton
                                        color={'warning'}
                                        size={'small'}>
                                        <PencilIcon className={'h-3'} />
                                    </IconButton>
                                )}
                                {deleteAction && (
                                    <IconButton color={'error'} size={'small'}>
                                        <TrashIcon className={'h-3'} />
                                    </IconButton>
                                )}
                            </td>
                        )}
                    </tr>
                ))
            )}
        </tbody>
    )
}

export default TableBody
