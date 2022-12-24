export const DATA_TABLE_INIT_VALUE = {
    search: null,
    limit: 10,
    page: 1,
    sort_by: null,
    sort_direction: 'asc',
    ignore_columns: []
}

export const DATA_TABLE_ACTIONS = {
    SEARCH_CHANGED: 'search_changed',
    LIMIT_CHANGED: 'limit-changed',
    PAGE_CHANGED: 'page-changed',
    RESET_ALL: 'reset-all',
    CHANGED_SORT_BY: 'change-sort-by',
    CHANGE_SORT_DIRECTION: 'change-sort-direction',
    CHANGE_IGNORE_COLUMNS: 'change-ignore-columns',
}

export const DatatableReducer = (state, action) => {
    switch (action.type) {
        case DATA_TABLE_ACTIONS.SEARCH_CHANGED:
            return {
                ...state,
                search: action.payload.value,
            }
        case DATA_TABLE_ACTIONS.LIMIT_CHANGED:
            return {
                ...state,
                limit: action.payload.value,
            }
        case DATA_TABLE_ACTIONS.PAGE_CHANGED:
            return {
                ...state,
                page: action.payload.page,
            }
        case DATA_TABLE_ACTIONS.RESET_ALL:
            const { limit, search, page_number, order_by, direction } =
                action.payload
            return {
                ...state,
                limit:
                    typeof limit === 'undefined'
                        ? DATA_TABLE_INIT_VALUE.limit
                        : limit,
                search:
                    typeof search === 'undefined'
                        ? DATA_TABLE_INIT_VALUE.search
                        : search,
                page:
                    typeof page_number === 'undefined'
                        ? parseInt(DATA_TABLE_INIT_VALUE.page)
                        : parseInt(page_number),
                sort_by:
                    typeof order_by === 'undefined'
                        ? DATA_TABLE_INIT_VALUE.sort_by
                        : order_by,
                sort_direction:
                    typeof direction === 'undefined'
                        ? DATA_TABLE_INIT_VALUE.sort_direction
                        : direction,
            }
        case DATA_TABLE_ACTIONS.CHANGED_SORT_BY:
            return {
                ...state,
                sort_by: action.payload.sort_by,
            }
        case DATA_TABLE_ACTIONS.CHANGE_SORT_DIRECTION:
            return {
                ...state,
                sort_direction: action.sort_direction,
            }
        case DATA_TABLE_ACTIONS.CHANGE_IGNORE_COLUMNS:
            let key = action.payload.key
            if(state.ignore_columns.includes(key)){
                state.ignore_columns = state.ignore_columns.filter(obj => {
                    return obj !== key
                })
            }else{
                state.ignore_columns.push(key)
            }
            return {
                ...state
            }
    }
}
