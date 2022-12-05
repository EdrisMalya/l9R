import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useForm} from "@inertiajs/inertia-react";

const PermissionForm = ({ onClose, permissionParentGroupId }) => {
    const [open, setOpen] = React.useState(true)

    const { post, setData, processing, errors, data, reset } = useForm({
        name: '',
        permission_group_id: permissionParentGroupId
    })

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleClose = () => {
        setOpen(false)
        onClose()
        reset()
    }

    const onSubmit = (event) => {
        event.preventDefault();
        post(route('save-permission'), {
            onSuccess: () => {
                handleClose()
            }
        })
    }

    return (
        <Dialog open={open} maxWidth={'sm'}>
            <DialogTitle>
                Create permission
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
                            label={'Permission name'}
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

export default PermissionForm;
