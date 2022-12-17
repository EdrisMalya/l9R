import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Button, Chip, IconButton } from '@mui/material'
import {
    ArrowLeftIcon,
    PencilIcon,
    PlusIcon,
} from '@heroicons/react/24/outline'
import ProtectedComponent from '@/Components/ProtectedComponent'
import LanguageForm from '@/Pages/Configuration/Language/LanguageForm'
import swal from 'sweetalert'
import { useRecoilState } from 'recoil'
import { fullPageLoading } from '@/atoms/fullPageLoading'
import { Link, useForm } from '@inertiajs/inertia-react'
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/solid'
import ConfigurationPageLinks from '@/Pages/Configuration/ConfigurationPageLinks'
import useLanguage from '@/hooks/useLanguage'
import { directionAtom } from '@/atoms/directionAtom'

const LanguageIndex = ({ active, languages, lang }) => {
    const [form, setForm] = React.useState(false)
    const setLoading = useRecoilState(fullPageLoading)
    const [language, setLanguage] = React.useState(null)

    const { translate } = useLanguage()

    const { delete: deleteAction } = useForm()

    const handleDeleteAction = id => {
        swal({
            icon: 'warning',
            title: `Are you sure you want to delete?`,
            buttons: true,
        }).then(res => {
            if (res) {
                setLoading[1](true)
                deleteAction(
                    route('language.destroy', { language: id, lang }),
                    {
                        onSuccess: () => {
                            setLoading[1](false)
                        },
                    },
                )
            }
        })
    }

    const handleEditAction = language => {
        setLanguage(language)
        setForm(true)
    }

    const [dir] = useRecoilState(directionAtom)

    return (
        <Authenticated
            active={'configuration'}
            title={'Language page'}
            navBarOptions={
                <ConfigurationPageLinks active={active} lang={lang} />
            }>
            <div className={'flex items-center justify-between'}>
                <h2 className={'text-xl'}>{translate('Language list')}</h2>
                <ProtectedComponent role={'language-create-language'}>
                    <Button
                        onClick={() => setForm(true)}
                        variant={'outlined'}
                        endIcon={<PlusIcon className={'h-4'} />}>
                        {translate('Add language')}
                    </Button>
                </ProtectedComponent>
            </div>
            {languages?.length < 1 ? (
                <p className={'text-center text-red-500 py-12'}>
                    No record found
                </p>
            ) : (
                <div className={'mt-3 flex flex-row flex-wrap space-x-2'}>
                    {languages?.map(item => (
                        <div
                            className={
                                'inline-block p-2 border dark:border-gray-600 text-sm rounded-full m-1'
                            }
                            key={item?.id}>
                            <div className={'flex items-center space-x-2 px-1'}>
                                <div>
                                    {translate(item?.name)}{' '}
                                    <span className={''}>({item?.abbr})</span>
                                </div>
                                <div>
                                    <ProtectedComponent
                                        role={'language-delete-language'}>
                                        <IconButton
                                            size={'small'}
                                            color={'error'}
                                            onClick={() =>
                                                handleDeleteAction(item?.id)
                                            }>
                                            <TrashIcon className={'h-3'} />
                                        </IconButton>
                                    </ProtectedComponent>
                                    <ProtectedComponent
                                        role={'language-edit-language-name'}>
                                        <IconButton
                                            size={'small'}
                                            color={'warning'}
                                            onClick={() =>
                                                handleEditAction(item)
                                            }>
                                            <PencilIcon className={'h-3'} />
                                        </IconButton>
                                    </ProtectedComponent>
                                    <ProtectedComponent
                                        role={'language-dictionary-access'}>
                                        <Link
                                            href={route('language.show', {
                                                language: item?.id,
                                                lang,
                                            })}>
                                            <IconButton
                                                size={'small'}
                                                color={'primary'}>
                                                {dir === 'ltr' ? (
                                                    <ArrowRightIcon
                                                        className={'h-3'}
                                                    />
                                                ) : (
                                                    <ArrowLeftIcon
                                                        className={'h-3'}
                                                    />
                                                )}
                                            </IconButton>
                                        </Link>
                                    </ProtectedComponent>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {form && (
                <LanguageForm
                    lang={lang}
                    onClose={() => {
                        setForm(false)
                        setLanguage(null)
                    }}
                    language={language}
                />
            )}
            <br />
        </Authenticated>
    )
}

export default LanguageIndex
