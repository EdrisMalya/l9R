import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import UserManagementLinks from '@/Pages/UserManagement/UserManagementLinks'
import useLanguage from '@/hooks/useLanguage'
import Datatable from '@/Components/Datatable/Datatable'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Datepicker from '@/Components/Datepicker'
import ActivityDetails from '@/Pages/UserManagement/Users/Components/ActivityDetails'
import Select2 from '@/Components/Select2'
import { Inertia } from '@inertiajs/inertia'

const LogActivitiesIndex = ({
    active,
    activities,
    users,
    filtered_users,
    filter_date,
}) => {
    const { translate } = useLanguage()
    const [activity, setActivity] = React.useState(null)
    const [activityDetails, setActivityDetails] = React.useState(null)

    return (
        <Authenticated
            active={'user_management'}
            title={translate('Log activities')}
            navBarOptions={<UserManagementLinks active={active} />}>
            <Datatable
                showNumber={true}
                data={activities}
                otherOptions={[
                    {
                        icon: <InformationCircleIcon className={'h-3'} />,
                        tooltip: translate('Log details'),
                        role: 'log-activity-view-log-details',
                        className: '!text-blue-500',
                        handleClick: data => {
                            setActivity(data)
                            setActivityDetails(true)
                        },
                    },
                ]}
                datatableFilters={[
                    {
                        element: (
                            <Datepicker
                                value={filter_date}
                                onChange={date => {
                                    Inertia.get(
                                        route(route().current(), {
                                            ...route().params,
                                            date: date,
                                        }),
                                    )
                                }}
                                label={translate('Performed date')}
                            />
                        ),
                    },
                    {
                        element: (
                            <Select2
                                className={'w-[300px]'}
                                value={filtered_users}
                                isMulti={true}
                                onChange={selectedUser => {
                                    let params = route().params
                                    Inertia.get(
                                        route(route().current(), {
                                            ...params,
                                            users: selectedUser,
                                        }),
                                    )
                                }}
                                data={users}
                                label={translate('Select users')}
                                placeholder={translate('List of all users')}
                                selectValue={'id'}
                                selectLabel={'name'}
                            />
                        ),
                    },
                ]}
                deleteRoute={'destroy.activity'}
                objectName={'activity'}
                deleteRole={'log-activity-delete-log'}
                editAction={false}
                columns={[
                    {
                        name: 'Performed By',
                        key: 'causer.name',
                        translate: true,
                        sort: true,
                    },
                    {
                        name: 'Effected module',
                        key: 'log_name',
                        translate: true,
                        sort: true,
                    },
                    {
                        name: 'Effected model',
                        key: 'subject_type',
                        sort: true,
                    },
                    {
                        name: 'Event',
                        key: 'description',
                        sort: true,
                        translate: true,
                    },
                    {
                        name: 'Performed on',
                        key: 'created_at',
                        sort: true,
                        data_type: 'date',
                        format: 'YYYY-MM-DD hh:mm A',
                    },
                ]}
            />
            {activityDetails && (
                <ActivityDetails
                    translate={translate}
                    data={activity}
                    onClose={() => {
                        setActivityDetails(false)
                        setActivity(null)
                    }}
                />
            )}
        </Authenticated>
    )
}

export default LogActivitiesIndex
