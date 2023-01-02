import React, { useState } from 'react'
import ProtectedComponent from '@/Components/ProtectedComponent'
import {
    Avatar,
    Button,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import { PlusIcon } from '@heroicons/react/24/outline'
import WidgetForm from '@/Pages/Configuration/PublicWebsite/Widgets/WidgetForm'
import { useForm, usePage } from '@inertiajs/inertia-react'
import parse from 'html-react-parser'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import swal from 'sweetalert'
import { useRecoilState } from 'recoil'
import { fullPageLoading } from '@/atoms/fullPageLoading'
import { Inertia } from '@inertiajs/inertia'

const WidgetsIndex = ({ translate }) => {
    const [showForm, setShowForm] = useState(false)
    const { widgets, lang } = usePage().props
    const [widget, setWidget] = useState(null)
    const loading = useRecoilState(fullPageLoading)

    const { delete: destroy } = useForm()

    const deleteWidget = id => {
        swal({
            icon: 'warning',
            title: translate('Are you sure'),
            buttons: true,
        }).then(res => {
            if (res) {
                loading[1](true)
                destroy(route('widgets.destroy', { widget: id, lang: lang }), {
                    onSuccess: () => {
                        loading[1](false)
                    },
                })
            }
        })
    }

    const navigateToWidgetDetails = id => {
        Inertia.get(
            route(route().current(), {
                ...route().params,
                widget: id,
                active: 'widget-details',
            }),
        )
    }

    return (
        <div>
            <h2 className={'text-center text-xl'}>
                {translate('All available widgets')}
            </h2>
            <ProtectedComponent role={'widgets-create-widgets'}>
                <Button
                    onClick={() => {
                        setWidget(null)
                        setShowForm(true)
                    }}
                    endIcon={<PlusIcon className={'h-4'} />}
                    variant={'outlined'}
                    className={'float-right'}>
                    {translate('Add widget')}
                </Button>
                <div className={'mt-4'}>
                    {widgets?.length < 1 ? (
                        <p className={'mt-5 text-red-500 text-center'}>
                            {translate('No record found')}
                        </p>
                    ) : (
                        <div className={'mt-12'}>
                            <List>
                                {widgets?.map((widget, index) => (
                                    <ListItem
                                        secondaryAction={
                                            <>
                                                <ProtectedComponent
                                                    role={
                                                        'widgets-delete-widgets'
                                                    }>
                                                    <IconButton size={'small'}>
                                                        <DeleteIcon
                                                            onClick={() =>
                                                                deleteWidget(
                                                                    widget.id,
                                                                )
                                                            }
                                                        />
                                                    </IconButton>
                                                </ProtectedComponent>
                                                <ProtectedComponent
                                                    role={
                                                        'widgets-update-widgets'
                                                    }>
                                                    <IconButton
                                                        size={'small'}
                                                        onClick={() => {
                                                            setWidget(widget)
                                                            setShowForm(true)
                                                        }}>
                                                        <EditIcon />
                                                    </IconButton>
                                                </ProtectedComponent>
                                            </>
                                        }>
                                        <ListItemButton
                                            onClick={() =>
                                                navigateToWidgetDetails(
                                                    widget.id,
                                                )
                                            }>
                                            <ListItemAvatar>
                                                <Avatar className={'h-4-svg'}>
                                                    {parse(widget.icon)}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                secondary={widget.name}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    )}
                </div>
                {showForm && (
                    <WidgetForm
                        show={showForm}
                        widget={widget}
                        translate={translate}
                        onClose={() => {
                            setShowForm(false)
                            setWidget(null)
                        }}
                    />
                )}
            </ProtectedComponent>
        </div>
    )
}

export default WidgetsIndex
