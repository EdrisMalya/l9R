import React from 'react'
import Datatable from '@/Components/Datatable/Datatable'

const UserLoginLog = ({ translate, login_logs, user, lang, active_tab }) => {
    return (
        <div>
            <h2 className={'text-lg'}>{translate('User login log')}</h2>
            <div className={'mt-4'}>
                <Datatable
                    data={login_logs}
                    actions={false}
                    datatableRoute={route('users.show', {
                        user: user.id,
                        lang,
                        active_tab,
                    })}
                    showNumber={true}
                    columns={[
                        {
                            name: translate('IP address'),
                            key: 'ip_address',
                            sort: true,
                        },
                        {
                            name: translate('Email'),
                            key: 'email',
                            sort: true,
                        },
                        {
                            name: translate('Was login succeed'),
                            key: 'status',
                            sort: true,
                            data_type: 'boolean',
                            true_value: 'Yes',
                            false_value: 'No',
                        },
                        {
                            name: translate('Logged in date'),
                            key: 'created_at',
                            sort: true,
                            data_type: 'date',
                            format: 'YYYY-MM-DD hh:mm A',
                        },
                    ]}
                />
            </div>
        </div>
    )
}

export default UserLoginLog
