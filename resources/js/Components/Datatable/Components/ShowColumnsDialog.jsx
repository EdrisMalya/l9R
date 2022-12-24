import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import {
    DialogActions,
    DialogContent,
    FormControlLabel,
    Switch,
} from '@mui/material'
import { FunnelIcon } from '@heroicons/react/24/outline'
import dispatch from 'alpinejs'
import { DATA_TABLE_ACTIONS } from '@/Components/Datatable/Reducer/DatatableReducer'
import { useRecoilState } from 'recoil'
import { directionAtom } from '@/atoms/directionAtom'

const emails = ['username@gmail.com', 'user02@gmail.com']

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props

    const handleClose = () => {
        onClose(selectedValue)
    }

    const columns = props.columns

    const isChecked = key => {
        return props.data.ignore_columns.includes(key)
    }

    return (
        <Dialog onClose={handleClose} open={open} dir={props.direction}>
            <DialogTitle>{props.translate('Column visibility')}</DialogTitle>
            <DialogContent>
                {props.showNumber && (
                    <div>
                        <FormControlLabel
                            control={
                                <Switch checked={isChecked('increment')} />
                            }
                            label={props.translate('Increment')}
                            onChange={() => {
                                props.dispatch({
                                    type: DATA_TABLE_ACTIONS.CHANGE_IGNORE_COLUMNS,
                                    payload: {
                                        key: 'increment',
                                    },
                                })
                            }}
                        />
                    </div>
                )}
                {columns?.map((column, index) => (
                    <div>
                        <FormControlLabel
                            key={index}
                            control={<Switch checked={isChecked(column.key)} />}
                            label={props.translate(column.name)}
                            onChange={event => {
                                props.dispatch({
                                    type: DATA_TABLE_ACTIONS.CHANGE_IGNORE_COLUMNS,
                                    payload: {
                                        key: column.key,
                                    },
                                })
                            }}
                        />
                    </div>
                ))}
                {props.actions && (
                    <div>
                        <FormControlLabel
                            control={<Switch checked={isChecked('actions')} />}
                            label={props.translate('Actions')}
                            onChange={() => {
                                props.dispatch({
                                    type: DATA_TABLE_ACTIONS.CHANGE_IGNORE_COLUMNS,
                                    payload: {
                                        key: 'actions',
                                    },
                                })
                            }}
                        />
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button color={'success'} onClick={handleClose}>
                    {props.translate('Ok')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
}

export default function ShowColumnsDialog({
    translate,
    columns,
    data,
    dispatch,
    actions,
    showNumber,
}) {
    const [open, setOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(emails[1])
    const [direction] = useRecoilState(directionAtom)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = value => {
        setOpen(false)
        setSelectedValue(value)
    }

    return (
        <div>
            <Button
                endIcon={<FunnelIcon className={'h-4'} />}
                variant="outlined"
                onClick={handleClickOpen}>
                {translate('Columns visibility')}
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                data={data}
                dispatch={dispatch}
                columns={columns}
                onClose={handleClose}
                translate={translate}
                actions={actions}
                showNumber={showNumber}
                direction={direction}
            />
        </div>
    )
}
