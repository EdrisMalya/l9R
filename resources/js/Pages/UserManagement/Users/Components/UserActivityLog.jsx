import React from 'react'
import Datatable from '@/Components/Datatable/Datatable'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import ActivityDetails from '@/Pages/UserManagement/Users/Components/ActivityDetails'
import Datepicker from '@/Components/Datepicker'

const UserActivityLog = ({ logs, translate, user, active_tab, lang }) => {
    const [activity, setActivity] = React.useState(null)
    const [activityDetails, setActivityDetails] = React.useState(null)

    return (
        <div>
            <h2 className={'text-lg'}>{translate('User activity log')}</h2>
            <div className={'mt-5'}>
                <Datatable
                    data={logs}
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
                                    label={translate('Performed date')}
                                />
                            ),
                        },
                    ]}
                    deleteRoute={'destroy.activity'}
                    objectName={'activity'}
                    datatableRoute={route('users.show', {
                        user: user.id,
                        lang,
                        active_tab,
                    })}
                    deleteRole={'log-activity-delete-log'}
                    editAction={false}
                    columns={[
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
            </div>
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
        </div>
    )
}

export default UserActivityLog
