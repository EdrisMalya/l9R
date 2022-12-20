import React from 'react'
import Datatable from '@/Components/Datatable/Datatable'

const UserLoginLog = ({ translate, login_logs }) => {
    return (
        <div>
            <h2 className={'text-lg'}>{translate('User login log')}</h2>
            <div className={'mt-4'}>
                <Datatable
                    data={login_logs}
                    actions={false}
                    showNumber={true}
                    columns={[
                        {
                            name: translate('IP address'),
                            key: 'ip_address',
                        },
                        {
                            name: translate('Email'),
                            key: 'email',
                        },
                        {
                            name: translate('Was login succeed'),
                            key: 'status',
                            data_type: 'boolean',
                            true_value: 'Yes',
                            false_value: 'No',
                        },
                        {
                            name: translate('Logged in date'),
                            key: 'created_at',
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
