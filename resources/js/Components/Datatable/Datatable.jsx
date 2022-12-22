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
import { usePage } from '@inertiajs/inertia-react'
import { useRecoilState } from 'recoil'
import { directionAtom } from '@/atoms/directionAtom'
import useLanguage from '@/hooks/useLanguage'
import DatatableActions from '@/Components/Datatable/Components/DatatableActions'

const Datatable = ({
    columns,
    showNumber = false,
    actions = true,
    editAction = true,
    deleteAction = true,
    data: tableData,
    handleEditAction = null,
    deleteRole,
    editRole,
    otherOptions,
    datatableRoute = null,
    objectName = null,
    deleteRoute,
    datatableFilters = [],
}) => {
    const [data, dispatch] = useReducer(DatatableReducer, DATA_TABLE_INIT_VALUE)
    const [totalPage, setTotalPage] = useState(0)
    const [tableLoading, setTableLoading] = useState(false)
    const [direction] = useRecoilState(directionAtom)

    const { lang } = usePage().props

    const { translate } = useLanguage()

    const handlePageChange = (event, value) => {
        setTableLoading(true)
        let param = {
            ...route().params,
            page: value,
            lang,
        }
        Inertia.get(
            datatableRoute === null
                ? route(route().current(), { lang })
                : datatableRoute,
            param,
        )
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
                datatableFilters={datatableFilters}
                data={data}
                dispatch={dispatch}
                setTableLoading={setTableLoading}
                lang={lang}
                datatableRoute={datatableRoute}
                translate={translate}
            />
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg dark:scrollbar-thumb-gray-900">
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
                <div className={'mt-5'}>
                    <DatatableActions columns={columns} />
                    <table
                        className={`w-full text-sm ${
                            direction === 'ltr' ? 'text-left' : 'text-right'
                        } text-gray-500 dark:text-gray-400`}>
                        <TableHead
                            lang={lang}
                            data={data}
                            showNumber={showNumber}
                            columns={columns}
                            actions={actions}
                            dispatch={dispatch}
                            setTableLoading={setTableLoading}
                            datatableRoute={datatableRoute}
                            translate={translate}
                        />
                        <TableBody
                            handleEditAction={handleEditAction}
                            actions={actions}
                            showNumber={showNumber}
                            columns={columns}
                            editAction={editAction}
                            deleteAction={deleteAction}
                            data={tableData}
                            setTableLoading={setTableLoading}
                            deleteRole={deleteRole}
                            editRole={editRole}
                            otherActions={otherOptions}
                            datatableRoute={datatableRoute}
                            objectName={objectName}
                            lang={lang}
                            deleteRoute={deleteRoute}
                            translate={translate}
                        />
                    </table>
                </div>
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
