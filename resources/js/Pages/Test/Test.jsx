import React from 'react';
import {Head} from "@inertiajs/inertia-react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {TextField} from "@mui/material";

const Test = ({ auth ,test, array }) => {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Test</h2>}
        >
            <TextField label={'This is for testing'} />
        </AuthenticatedLayout>
    );
};

export default Test;
