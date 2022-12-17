import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const MuiSelect = ({
    size = 'small',
    fullWidth = true,
    options = [],
    label = null,
    className = '',
    value = '',
    onChange,
    error = '',
    name = '',
}) => {
    const [selectValue, setSelectValue] = useState(value)

    const handleChange = event => {
        onChange(event)
        setSelectValue(event.target.value)
    }

    return (
        <FormControl
            error={error !== ''}
            className={className}
            fullWidth={fullWidth}
            size={size}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                size={size}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
                name={name}
                onChange={handleChange}
                value={selectValue}>
                {options?.map((option, index) => (
                    <MenuItem key={index} value={option?.value}>
                        {option?.label}
                    </MenuItem>
                ))}
            </Select>
            <span className={'ml-1 text-sm text-red-500'}>{error}</span>
        </FormControl>
    )
}

export default MuiSelect
