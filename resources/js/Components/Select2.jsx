import * as React from 'react'
import { useEffect } from 'react'
import Chip from '@mui/material/Chip'
import Autocomplete from '@mui/material/Autocomplete'
import {
    Avatar,
    CircularProgress,
    FormControlLabel,
    Switch,
    TextField,
} from '@mui/material'
import FormGroup from '@mui/material/FormGroup'
import useLanguage from '@/hooks/useLanguage'

const Select2 = ({
    placeholder,
    className,
    onChange,
    value,
    url,
    selectValue,
    selectLabel,
    error = null,
    isMulti = false,
    loadingFinished,
    returnIsArray = false,
    label = null,
    urlParams = null,
    otherOptions = null,
    size = 'small',
    selectedImage = '',
    selectAllOption = false,
    data,
}) => {
    const resolve = (path, obj) => {
        return path.split('.').reduce(function (prev, curr) {
            return prev ? prev[curr] : null
        }, obj || self)
    }
    let select_url = urlParams !== null ? url + '?' + urlParams : url

    const [options, setOptions] = React.useState([])
    const [selectedValue, setSelectedValue] = React.useState(
        typeof value === 'undefined' ? (isMulti ? [] : null) : value,
    )
    const [selectAll, setSelectAll] = React.useState(false)
    const [allOptions, setAllOptions] = React.useState(false)

    const { translate } = useLanguage()

    const populateOptions = () => {
        if (data) {
            let ignoreOptions = []
            if (isMulti && selectedValue) {
                ignoreOptions = selectedValue?.map(item => parseInt(item.value))
            } else {
                ignoreOptions = [selectedValue?.value]
            }
            console.log(options)
            let optionArray = data?.map(item => {
                return {
                    label: returnIsArray
                        ? translate(item)
                        : translate(resolve(selectLabel, item)),
                    value: returnIsArray ? item : resolve(selectValue, item),
                    image: resolve(selectedImage, item),
                    otherOptions:
                        otherOptions !== null
                            ? resolve(otherOptions, item)
                            : [],
                }
            })
            setAllOptions(optionArray)
            optionArray = optionArray.filter(function (element) {
                return ignoreOptions.indexOf(element?.value) === -1
            })
            optionArray = optionArray.filter(function (element) {
                return element !== undefined
            })
            setOptions(optionArray)
            if (loadingFinished) {
                loadingFinished()
            }
        }
    }

    const addAllSelectOptions = checked => {
        setSelectAll(checked)
        if (checked) {
            setSelectedValue(allOptions)
            onChange(allOptions)
        } else {
            if (typeof value !== 'undefined') {
                if (isMulti) {
                    if (value?.length === allOptions?.length) {
                        setSelectedValue([])
                        onChange([])
                    } else {
                        setSelectedValue(value)
                        onChange(value)
                    }
                }
            } else {
                if (isMulti) {
                    setSelectedValue([])
                    onChange([])
                } else {
                    setSelectedValue(null)
                    onChange(null)
                }
            }
        }
    }

    const checkAddedOptionsForSelectAll = () => {
        if (
            isMulti &&
            selectedValue?.length > 0 &&
            allOptions?.length === selectedValue?.length
        ) {
            setSelectAll(true)
        } else {
            setSelectAll(false)
        }
    }

    useEffect(() => {
        populateOptions()
    }, [data, selectedValue])

    useEffect(() => {
        checkAddedOptionsForSelectAll()
    }, [selectedValue])

    useEffect(() => {
        if (value !== 'undefined') {
            setSelectedValue(
                typeof value === 'undefined' ? (isMulti ? [] : null) : value,
            )
        }
    }, [value])

    const checkBox = () => {
        return (
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={selectAll}
                            onChange={e => {
                                addAllSelectOptions(e.target.checked)
                            }}
                        />
                    }
                    label={'Select all'}
                />
            </FormGroup>
        )
    }

    return (
        <div className={`${className}`}>
            {data && (
                <div>
                    {isMulti &&
                        selectAllOption &&
                        selectedValue?.length > 50 &&
                        checkBox()}
                    <Autocomplete
                        multiple={isMulti}
                        id="tags-outlined"
                        options={options}
                        getOptionLabel={option => option.label}
                        value={selectedValue}
                        placeholder={placeholder}
                        size={size}
                        filterSelectedOptions
                        renderTags={(tagValue, getTagProps) =>
                            tagValue.map((option, index) => (
                                <Chip
                                    size={size}
                                    key={index}
                                    avatar={
                                        selectedImage !== '' ? (
                                            <Avatar
                                                src={
                                                    process.env
                                                        .NEXT_PUBLIC_BACKEND_URL2 +
                                                    '/storage/' +
                                                    option?.image
                                                }
                                            />
                                        ) : (
                                            <></>
                                        )
                                    }
                                    label={option?.label}
                                    {...getTagProps({ index })}
                                />
                            ))
                        }
                        onChange={(event, newValue) => {
                            onChange(newValue)
                            setSelectedValue(newValue)
                        }}
                        renderInput={params => (
                            <TextField
                                error={error !== null}
                                helperText={error}
                                variant={'outlined'}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            <CircularProgress
                                                color="inherit"
                                                size={20}
                                            />
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                                {...params}
                                label={label}
                                placeholder={placeholder}
                            />
                        )}
                    />
                    {isMulti && selectAllOption && checkBox()}
                </div>
            )}
        </div>
    )
}

export default Select2
