import React from 'react'
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from '@mui/material'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { DATA_TABLE_ACTIONS } from '@/Components/Datatable/Reducer/DatatableReducer'
import { Inertia } from '@inertiajs/inertia'
import DatatableActions from '@/Components/Datatable/Components/DatatableActions'

const DatatableHead = ({
    data,
    dispatch,
    setTableLoading,
    lang,
    datatableRoute,
    translate,
    datatableFilters,
}) => {
    const handleSearch = () => {
        if (data.search) {
            setTableLoading(true)
            let param = {
                ...route().params,
                page: 1,
                search: data.search,
            }
            Inertia.get(
                datatableRoute === null
                    ? route(route().current(), { lang })
                    : datatableRoute,
                param,
            )
        }
    }

    const handleClearButton = () => {
        setTableLoading(true)
        dispatch({
            type: DATA_TABLE_ACTIONS.SEARCH_CHANGED,
            payload: {
                value: '',
            },
        })
        let param = {
            ...route().params,
            search: null,
        }
        Inertia.get(
            datatableRoute === null
                ? route(route().current(), { lang })
                : datatableRoute,
            param,
        )
    }

    const handleInputChange = e => {
        dispatch({
            type: DATA_TABLE_ACTIONS.SEARCH_CHANGED,
            payload: {
                value: e.target.value,
            },
        })
    }

    const handleEnterButton = event => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    const handlePageNumberChange = event => {
        setTableLoading(true)
        let pageNumber = event.target.value
        dispatch({
            type: DATA_TABLE_ACTIONS.LIMIT_CHANGED,
            payload: {
                value: pageNumber,
            },
        })
        let param = {
            ...route().params,
            page: 1,
            limit: pageNumber,
        }
        Inertia.get(
            datatableRoute === null
                ? route(route().current(), { lang })
                : datatableRoute,
            param,
        )
    }

    return (
        <div>
            <div
                className={
                    'flex items-center justify-between flex-col md:flex-row space-x-2 '
                }>
                <FormControl className={'lg:w-[300px] w-full'} size={'small'}>
                    <InputLabel>{translate('Search')} ...</InputLabel>
                    <OutlinedInput
                        size={'small'}
                        onKeyDown={handleEnterButton}
                        onChange={handleInputChange}
                        value={data.search}
                        endAdornment={
                            <InputAdornment position={'end'}>
                                {data.search && (
                                    <IconButton onClick={handleClearButton}>
                                        <XMarkIcon className={'h-4'} />
                                    </IconButton>
                                )}
                                <IconButton onClick={handleSearch}>
                                    <MagnifyingGlassIcon className={'h-4'} />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {datatableFilters?.map(filter => filter.element)}
                <FormControl className={'lg:w-36 w-full'} size={'small'}>
                    <InputLabel id="demo-simple-select-label">
                        {translate('Number of record')}
                    </InputLabel>
                    <Select
                        onChange={handlePageNumberChange}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.limit}
                        label="Age">
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default DatatableHead
