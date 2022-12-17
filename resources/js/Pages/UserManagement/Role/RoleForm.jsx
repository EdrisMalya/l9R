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
import { useRecoilState } from 'recoil'
import { directionAtom } from '@/atoms/directionAtom'

const RoleForm = ({ onClose, formType, name, groupId, lang, translate }) => {
    const [open, setOpen] = React.useState(true)
    const [dir] = useRecoilState(directionAtom)
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
                    post(route('role.group.save', { lang }), {
                        onSuccess: () => {
                            handleClose()
                        },
                    })
                } else {
                    put(
                        route('role.group.save', {
                            role_group_id: groupId,
                            lang,
                        }),
                        {
                            onSuccess: () => {
                                handleClose()
                            },
                        },
                    )
                }
                break
            case 'role':
                post(route('role.store', { role_group_id: groupId, lang }), {
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
        <Dialog open={open} maxWidth={'lg'} dir={dir}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>
                    {formType === 'role_group'
                        ? translate('Role group')
                        : translate('Role')}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className={'mt-4'}>
                            <TextField
                                size={'small'}
                                error={errors?.name}
                                value={data?.name}
                                onChange={e => setData('name', e.target.value)}
                                helperText={translate(errors?.name)}
                                name={'name'}
                                label={
                                    formType === 'role_group'
                                        ? translate('Role group name')
                                        : translate('Role')
                                }
                            />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={dir === 'rtl' && 'float-right'}>
                    <LoadingButton
                        size={'small'}
                        type={'submit'}
                        color={'success'}
                        loading={processing}
                        variant={'outlined'}>
                        {translate('Save')}
                    </LoadingButton>
                    <Button
                        size={'small'}
                        color={'error'}
                        onClick={handleClose}
                        variant={'outlined'}>
                        {translate('Close')}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default RoleForm
