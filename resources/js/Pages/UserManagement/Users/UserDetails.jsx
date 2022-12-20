import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import useLanguage from '@/hooks/useLanguage'
import UserManagementLinks from '@/Pages/UserManagement/UserManagementLinks'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Tab } from '@mui/material'
import useAuth from '@/hooks/useAuth'
import UserProfile from '@/Pages/UserManagement/Users/Components/UserProfile'
import { Inertia } from '@inertiajs/inertia'
import UserActivityLog from '@/Pages/UserManagement/Users/Components/UserActivityLog'
import UserLoginLog from '@/Pages/UserManagement/Users/Components/UserLoginLog'

const UserDetails = ({ user, active, active_tab, lang, logs, login_logs }) => {
    const { translate } = useLanguage()
    const title = translate('Mr/Mrs [last_name] profile details', {
        last_name: user.last_name,
    })

    const { isAllowed } = useAuth()

    const handleChange = (event, value) => {
        Inertia.get(
            route(route().current(), {
                user: user.id,
                lang,
                active_tab: value,
            }),
        )
    }

    return (
        <Authenticated
            active={'user_management'}
            title={title}
            navBarOptions={<UserManagementLinks active={active} />}>
            <h1 className={'text-xl'}>{title}</h1>
            <div className={'mt-5'}>
                <TabContext value={active_tab}>
                    <TabList onChange={handleChange}>
                        <Tab
                            value={'user_profile'}
                            label={translate('User profile')}
                        />
                        <Tab
                            className={`${
                                !isAllowed('log-activity-access') && '!hidden'
                            }`}
                            value={'user_log_activities'}
                            label={translate('User log activity')}
                        />
                        <Tab
                            className={`${
                                !isAllowed('users-view-user-login-log') &&
                                '!hidden'
                            }`}
                            value={'user_login_log'}
                            label={translate('User login activity')}
                        />
                    </TabList>
                    <TabPanel value={'user_profile'}>
                        <UserProfile user={user} translate={translate} />
                    </TabPanel>
                    <TabPanel value={'user_log_activities'}>
                        <UserActivityLog logs={logs} translate={translate} />
                    </TabPanel>
                    <TabPanel value={'user_login_log'}>
                        <UserLoginLog
                            translate={translate}
                            login_logs={login_logs}
                        />
                    </TabPanel>
                </TabContext>
            </div>
        </Authenticated>
    )
}

export default UserDetails
