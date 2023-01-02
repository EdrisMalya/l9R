import React from 'react'
import {TextField} from "@mui/material"

const WebsiteContactComponent = ({translate, data, setData, errors, handleInputChange}) => {
    return (
        <>
            <TextField
                onChange={handleInputChange}
                label={translate('Email')}
                className={'col-span-2'}
                name={'email'}
                type={'email'}
                value={data.email}
                error={errors.email}
                helpText={errors.email}
                size={'small'}
            />
            <TextField
                onChange={handleInputChange}
                className={'col-span-2'}
                label={translate('Address')}
                name={'address'}
                value={data.address}
                error={errors.address}
                helpText={errors.address}
                size={'small'}
            />
            <TextField
                onChange={handleInputChange}
                label={translate('Phone number')}
                name={'phone_number'}
                value={data.phone_number}
                error={errors.phone_number}
                helpText={errors.phone_number}
                size={'small'}
            />
        </>
    )
}

export default WebsiteContactComponent
