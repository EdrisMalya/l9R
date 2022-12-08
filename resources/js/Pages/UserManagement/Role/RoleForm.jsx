import React, { useEffect } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useForm } from '@inertiajs/inertia-react'

const RoleForm = ({ onClose, formType, name, groupId }) => {
    const [open, setOpen] = React.useState(true)

    const { post, processing, errors, reset, setData, data, put } = useForm({
        name: name,
    })

    const handleClose = () => {
        setOpen(false)
        onClose(false)
    }

    const handleSubmit = event => {
        event.preventDefault()

        switch (formType) {
            case 'role_group':
                if (groupId === 0) {
                    post(route('role.group.save'), {
                        onSuccess: () => {
                            handleClose()
                        },
                    })
                } else {
                    put(route('role.group.save', { role_group_id: groupId }), {
                        onSuccess: () => {
                            handleClose()
                        },
                    })
                }
                break
            case 'role':
                post(route('role.store', { role_group_id: groupId }), {
                    onSuccess: () => {
                        handleClose()
                    },
                })
                break
        }
    }

    useEffect(() => {
        return () => {
            reset()
        }
    }, [])

    return (
        <Dialog open={open} maxWidth={'lg'}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>
                    {formType === 'role_group' ? 'Role group' : 'Role'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className={'mt-4'}>
                            <TextField
                                size={'small'}
                                error={errors?.name}
                                value={data?.name}
                                onChange={e => setData('name', e.target.value)}
                                helperText={errors?.name}
                                name={'name'}
                                label={
                                    formType === 'role_group'
                                        ? 'Role group name'
                                        : 'Role name'
                                }
                            />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <LoadingButton
                        size={'small'}
                        type={'submit'}
                        color={'success'}
                        loading={processing}
                        variant={'outlined'}>
                        Save
                    </LoadingButton>
                    <Button
                        size={'small'}
                        color={'error'}
                        onClick={handleClose}
                        variant={'outlined'}>
                        Close
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default RoleForm
