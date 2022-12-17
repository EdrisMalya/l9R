import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Button, IconButton, Tooltip } from '@mui/material'
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid'
import RoleForm from '@/Pages/UserManagement/Role/RoleForm'
import Collapsable from '@/Components/Collapsable'
import swal from 'sweetalert'
import { useRecoilState } from 'recoil'
import { fullPageLoading } from '@/atoms/fullPageLoading'
import { useForm, usePage } from '@inertiajs/inertia-react'
import Roles from '@/Pages/UserManagement/Role/Roles'
import ProtectedComponent from '@/Components/ProtectedComponent'
import UserManagementLinks from '@/Pages/UserManagement/UserManagementLinks'
import useLanguage from '@/hooks/useLanguage'

const RoleIndex = ({ auth, active, roles }) => {
    const [roleForm, setRoleForm] = React.useState(false)
    const [formType, setFormType] = React.useState('role_group')
    const [groupId, setGroupId] = React.useState(0)
    const [name, setName] = React.useState(null)
    const pageLoading = useRecoilState(fullPageLoading)
    const { lang } = usePage().props

    const { delete: deleteAction } = useForm()

    const handleFormClose = () => {
        setRoleForm(false)
        setFormType('role_group')
        setName(null)
        setGroupId(0)
    }

    const handleRoleGroupEditAction = (groupId, name) => {
        setGroupId(groupId)
        setName(name)
        setFormType('role_group')
        setRoleForm(true)
    }

    const deleteGroup = id => {
        swal({
            icon: 'warning',
            title: translate('Are you sure you want to delete this group'),
            buttons: true,
        }).then(res => {
            if (res) {
                pageLoading[1](true)
                deleteAction(
                    route('role.group.save', { role_group_id: id, lang }),
                    {
                        onSuccess: () => {
                            pageLoading[1](false)
                        },
                    },
                )
            }
        })
    }

    const { translate } = useLanguage()

    return (
        <Authenticated
            auth={auth}
            active={'user_management'}
            title={'Roles'}
            navBarOptions={<UserManagementLinks active={active} />}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'text-xl'}>{translate('List of Roles')}</h2>
                <ProtectedComponent role={'roles-create-role'}>
                    <Button
                        variant={'outlined'}
                        onClick={() => {
                            setRoleForm(true)
                        }}
                        endIcon={<PlusIcon className={'h-4'} />}>
                        {translate('Create role group')}
                    </Button>
                </ProtectedComponent>
            </div>
            <div className={'mt-4'}>
                {roles?.data?.length < 1 ? (
                    <p className={'text-center text-red-500'}>
                        {translate('No record found')}
                    </p>
                ) : (
                    <div>
                        {roles?.data?.map(item => (
                            <Collapsable
                                key={item.id}
                                title={
                                    <div className={'flex w-full'}>
                                        <div className={'flex-1'}>
                                            <h2 className={'text-lg'}>
                                                {translate(item?.name)}
                                            </h2>
                                        </div>
                                        <div
                                            className={
                                                'border dark:border-gray-700 rounded-lg'
                                            }>
                                            <ProtectedComponent
                                                role={'roles-delete-role'}>
                                                <IconButton
                                                    color={'error'}
                                                    className={'mr-5'}
                                                    onClick={() =>
                                                        deleteGroup(item?.id)
                                                    }>
                                                    <TrashIcon
                                                        className={'h-4'}
                                                    />
                                                </IconButton>
                                            </ProtectedComponent>
                                            <ProtectedComponent
                                                role={'roles-edit-role'}>
                                                <IconButton
                                                    color={'warning'}
                                                    className={'mr-5'}
                                                    onClick={() =>
                                                        handleRoleGroupEditAction(
                                                            item?.id,
                                                            item?.name,
                                                        )
                                                    }>
                                                    <PencilIcon
                                                        className={'h-4'}
                                                    />
                                                </IconButton>
                                            </ProtectedComponent>
                                        </div>
                                    </div>
                                }
                                content={
                                    <div>
                                        <Roles
                                            lang={lang}
                                            roles={item?.roles}
                                            translate={translate}
                                        />
                                        <ProtectedComponent
                                            role={'roles-create-role'}>
                                            <Tooltip title={'Create role'}>
                                                <IconButton
                                                    onClick={() => {
                                                        setFormType('role')
                                                        setGroupId(item?.id)
                                                        setRoleForm(true)
                                                    }}
                                                    className={
                                                        '!bg-blue-500 hover:!bg-blue-700'
                                                    }>
                                                    <PlusIcon
                                                        className={'h-4'}
                                                    />
                                                </IconButton>
                                            </Tooltip>
                                        </ProtectedComponent>
                                    </div>
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
            {roleForm && (
                <RoleForm
                    translate={translate}
                    lang={lang}
                    formType={formType}
                    name={name}
                    groupId={groupId}
                    onClose={handleFormClose}
                />
            )}
        </Authenticated>
    )
}

export default RoleIndex
