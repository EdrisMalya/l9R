import React from 'react';
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, IconButton} from "@mui/material";
import {PlusIcon} from "@heroicons/react/24/solid";

const Collapsable = ({ title, content, actions, className }) => {
    return (
        <Accordion className={className}>
            <AccordionSummary className={'dark:!bg-gray-800 p-0'}>
                {title}
            </AccordionSummary>
            <AccordionDetails className={'dark:!bg-gray-800'}>
                {content}
            </AccordionDetails>
            <AccordionActions className={'dark:!bg-gray-800 !justify-start'}>
                {actions}
            </AccordionActions>
        </Accordion>
    );
};

export default Collapsable;
