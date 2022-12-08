import React, { useEffect, useReducer, useState } from 'react'
import DatatableHead from '@/Components/Datatable/Components/DatatableHead'
import {
    DATA_TABLE_ACTIONS,
    DATA_TABLE_INIT_VALUE,
    DatatableReducer,
} from '@/Components/Datatable/Reducer/DatatableReducer'
import TableHead from '@/Components/Datatable/Components/TableHead'
import TableBody from '@/Components/Datatable/Components/TableBody'
import { Pagination } from '@mui/lab'
import { CircularProgress } from '@mui/material'
import { Inertia } from '@inertiajs/inertia'

const Datatable = ({
    columns,
    showNumber = false,
    actions = true,
    editAction = true,
    deleteAction = true,
    data: tableData,
}) => {
    const [data, dispatch] = useReducer(DatatableReducer, DATA_TABLE_INIT_VALUE)
    const [totalPage, setTotalPage] = useState(0)
    const [tableLoading, setTableLoading] = useState(false)

    const handlePageChange = (event, value) => {
        setTableLoading(true)
        let param = {
            ...route().params,
            page: value,
        }
        Inertia.get(route(route().current()), param)
    }

    useEffect(() => {
        const { search, limit, page, order_by, direction } = route().params
        dispatch({
            type: DATA_TABLE_ACTIONS.RESET_ALL,
            payload: {
                search,
                limit,
                page_number: page,
                order_by,
                direction,
            },
        })
    }, [])

    useEffect(() => {
        if (tableData) {
            let p_number = tableData.total / tableData.per_page
            setTotalPage(
                tableData.total / tableData.per_page >
                    parseInt(tableData.total / tableData.per_page)
                    ? parseInt(p_number) + 1
                    : parseInt(p_number),
            )
        }
    }, [tableData])

    return (
        <div>
            <DatatableHead
                data={data}
                dispatch={dispatch}
                setTableLoading={setTableLoading}
            />
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-5 dark:scrollbar-thumb-gray-900">
                {tableLoading && (
                    <div
                        className={
                            'absolute w-full h-full bg-[rgba(0,0,0,.5)] text-center flex items-center justify-center'
                        }>
                        <CircularProgress
                            size={30}
                            color={'primary'}
                            className={'z-50'}
                        />
                    </div>
                )}
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHead
                        data={data}
                        showNumber={showNumber}
                        columns={columns}
                        actions={actions}
                        dispatch={dispatch}
                        setTableLoading={setTableLoading}
                    />
                    <TableBody
                        actions={actions}
                        showNumber={showNumber}
                        columns={columns}
                        editAction={editAction}
                        deleteAction={deleteAction}
                        data={tableData}
                    />
                </table>
            </div>
            <div className={'mt-4'}>
                <div className={'flex items-center justify-between'}>
                    <div>
                        <Pagination
                            page={data?.page}
                            onChange={handlePageChange}
                            count={totalPage}
                            color="primary"
                        />
                    </div>
                    <div>
                        {tableData?.from} - {tableData.to} of {tableData?.total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datatable
