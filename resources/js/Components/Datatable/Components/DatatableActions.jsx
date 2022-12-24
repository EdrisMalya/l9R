import * as React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import ShowColumnsDialog from "@/Components/Datatable/Components/ShowColumnsDialog"
import ReactHTMLTableToExcel from "react-html-table-to-excel/src/ReactHTMLTableToExcel"
import {useEffect, useState} from "react"
import {Button} from "@mui/material"
export default function DatatableActions({ columns, translate, data, dispatch, actions, showNumber }) {
    const [pageName, setPageName] = useState(null)

    useEffect(() => {
        let title = window.document.getElementsByTagName('title')[0].innerText?.split('-')[0]
        setPageName(title)
    }, [])

    return (
        <React.Fragment>
            <ButtonGroup
                size={'small'}
                variant="outlined">
                <ShowColumnsDialog
                    translate={translate}
                    columns={columns}
                    data={data}
                    dispatch={dispatch}
                    actions={actions}
                    showNumber={showNumber}
                />
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"

                    table="table-to-xls"
                    filename={pageName}
                    sheet="data"
                    buttonText={<Button>{translate('Download Excel')}</Button>}
                />
            </ButtonGroup>
        </React.Fragment>
    )
}
