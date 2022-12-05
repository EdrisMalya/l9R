import React, {useEffect} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {useForm, usePage} from "@inertiajs/inertia-react";
import {LoadingButton} from "@mui/lab";

const PermissionGroupForm = ({ onClose, permissionParentGroupId = 0, groupId, groupName }) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(true);
        onClose(false)
        reset()
    };

    const { data, setData, post, processing, errors, reset, put } = useForm({
        name: groupName,
        permission_group_id: permissionParentGroupId
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(groupId===0){
            post(route('permissions.store'), {
                preserveScroll: true,
                onSuccess: data => {
                    handleClose()
                },
            })
        }else{
            put(route('permissions.update', {permission: groupId}), {
                preserveScroll: true,
                onSuccess: data => {
                    handleClose()
                },
            })
        }
    }

    return (
        <Dialog open={open} maxWidth={'sm'}>
            <DialogTitle>
                <h2>
                    Create a group
                </h2>
            </DialogTitle>
            <form onSubmit={onSubmit}>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            value={data.name}
                            error={errors?.name}
                            helperText={errors?.name}
                            onChange={onHandleChange}
                            name={'name'}
                            variant={'outlined'}
                            label={'Group name'}
                            size={'small'}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <LoadingButton type={'submit'} loading={processing} variant={'outlined'} color={'success'}>
                        Save
                    </LoadingButton>
                    <Button variant={'outlined'} color={'error'} onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default PermissionGroupForm;
