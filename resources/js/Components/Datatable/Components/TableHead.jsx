import React from 'react'
import { DATA_TABLE_ACTIONS } from '@/Components/Datatable/Reducer/DatatableReducer'
import { Inertia } from '@inertiajs/inertia'
import useLanguage from '@/hooks/useLanguage'

const TableHead = ({
    columns,
    showNumber,
    actions,
    data,
    setTableLoading,
    lang,
    datatableRoute,
    translate,
   shouldIShowTheColumn
}) => {
    const sortIndicator = column => {
        if (column?.key === data.sort_by) {
            return (
                <a href="#">
                    {data?.sort_direction === 'asc' ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 ml-1">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 15.75l7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 ml-1">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    )}
                </a>
            )
        }
    }

    const handSortClick = column => {
        if (column.sort) {
            setTableLoading(true)
            let param = {
                ...route().params,
                order_by: column.key,
                direction: data.sort_direction === 'asc' ? 'desc' : 'asc',
            }
            Inertia.get(
                datatableRoute === null
                    ? route(route().current(), { lang })
                    : datatableRoute,
                param,
            )
        }
    }

    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {showNumber && shouldIShowTheColumn('increment') && (
                    <th scope="col" className="py-3 px-6 font-bold">
                        <div className="flex items-center">
                            {translate('No#')}
                        </div>
                    </th>
                )}
                {(columns ?? [])?.map((column, index) => (
                    shouldIShowTheColumn(column.key)&&(
                        <th
                            scope="col"
                            key={index}
                            onClick={() => handSortClick(column)}
                            className={`py-3 px-6 font-bold ${
                                column?.sort && 'cursor-pointer'
                            }`}>
                            <div className="flex items-center">
                                {translate(column?.name)}
                                {column?.sort && sortIndicator(column)}
                            </div>
                        </th>
                    )
                ))}
                {actions && shouldIShowTheColumn('actions') && (
                    <th scope="col" className="py-3 px-6 font-bold">
                        <div className="flex items-center">
                            {translate('Actions')}
                        </div>
                    </th>
                )}
            </tr>
        </thead>
    )
}

export default TableHead
