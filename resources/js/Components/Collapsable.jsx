import React from 'react'
import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material'

const Collapsable = ({ title, content, actions, className, children }) => {
    return (
        <Accordion className={className}>
            <AccordionSummary className={'dark:!bg-gray-800 p-0'}>
                {title}
            </AccordionSummary>
            <AccordionDetails className={'dark:!bg-gray-800'}>
                {content}
                {children}
            </AccordionDetails>
            <AccordionActions className={'dark:!bg-gray-800 !justify-start'}>
                {actions}
            </AccordionActions>
        </Accordion>
    )
}

export default Collapsable
