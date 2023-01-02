import React from 'react'
import { TextField } from '@mui/material'

const WebsiteSocialMediaComponents = ({
    translate,
    data,
    errors,
    handleInputChange,
}) => {
    return (
        <>
            <TextField
                onChange={handleInputChange}
                label={translate('Facebook')}
                name={'facebook'}
                value={data.facebook}
                error={errors.facebook}
                helpText={errors.facebook}
                size={'small'}
            />
            <TextField
                onChange={handleInputChange}
                label={translate('Tweeter')}
                name={'tweeter'}
                value={data.tweeter}
                error={errors.tweeter}
                helpText={errors.tweeter}
                size={'small'}
            />
            <TextField
                onChange={handleInputChange}
                label={translate('Youtube')}
                name={'youtube'}
                value={data.youtube}
                error={errors.youtube}
                helpText={errors.youtube}
                size={'small'}
            />
            <TextField
                onChange={handleInputChange}
                label={translate('Instagram')}
                name={'instagram'}
                value={data.instagram}
                error={errors.instagram}
                helpText={errors.instagram}
                size={'small'}
            />
            <TextField
                onChange={handleInputChange}
                label={translate('Copy right')}
                name={'copy_right'}
                value={data.copy_right}
                error={errors.copy_right}
                helpText={errors.copy_right}
                size={'small'}
            />
        </>
    )
}

export default WebsiteSocialMediaComponents
