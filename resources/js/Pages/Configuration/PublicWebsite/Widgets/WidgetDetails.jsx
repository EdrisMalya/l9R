import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import { Button } from '@mui/material'

const WidgetDetails = ({ translate }) => {
    const { widget } = usePage().props

    const page = {
        parent: 'row',
    }

    return (
        <div>
            <div>
                <h2 className={'text-xl'}>
                    {translate(widget.name + ' widget details')}
                </h2>
            </div>
        </div>
    )
}

export default WidgetDetails
