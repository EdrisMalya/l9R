import React, { useState } from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ProtectedComponent from '@/Components/ProtectedComponent'
import { Button } from '@mui/material'
import { PlusIcon } from '@heroicons/react/24/outline'
import LanguageDictionaryForm from '@/Pages/Configuration/Language/LanguageDictionaryForm'
import Datatable from '@/Components/Datatable/Datatable'
import ConfigurationPageLinks from '@/Pages/Configuration/ConfigurationPageLinks'
import Text from '@/Components/Text'
import useLanguage from '@/hooks/useLanguage'

const LanguageDetails = ({ active, language, words, lang }) => {
    const [form, setForm] = useState(false)
    const [word, setWord] = useState(null)

    const { translate } = useLanguage()

    return (
        <Authenticated
            active={'configuration'}
            title={language?.name + ' ' + 'language dictionary'}
            navBarOptions={
                <ConfigurationPageLinks active={active} lang={lang} />
            }>
            <div className={'flex items-center justify-between'}>
                <h2 className={'text-xl'}>
                    {translate('[language] language dictionary', {
                        language: translate(language.name),
                    })}
                </h2>
                <ProtectedComponent
                    role={'language-dictionary-add-new-word-to-dictionary'}>
                    <Button
                        onClick={() => setForm(true)}
                        variant={'outlined'}
                        endIcon={<PlusIcon className={'h-4'} />}>
                        {translate('Add new word')}
                    </Button>
                </ProtectedComponent>
            </div>
            <div className={'mt-8'}>
                <Datatable
                    showNumber={true}
                    data={words}
                    deleteRole={'language-dictionary-delete-word'}
                    editRole={'language-dictionary-edit-word'}
                    datatableRoute={route('language.show', {
                        language: language?.id,
                        lang,
                    })}
                    handleEditAction={item => {
                        setWord(item)
                        setForm(true)
                    }}
                    deleteRoute={'dictionary.destroy'}
                    objectName={'dictionary'}
                    columns={[
                        {
                            name: 'Id',
                            key: 'id',
                            sort: true,
                        },
                        {
                            name: 'Word',
                            key: 'word',
                            sort: true,
                        },
                        {
                            name: 'Translate',
                            key: 'translate',
                            sort: true,
                        },
                        {
                            name: 'Created at',
                            key: 'created_at',
                            data_type: 'date',
                            sort: true,
                            format: 'YYYY-MM-DD',
                        },
                    ]}
                />
            </div>
            {form && (
                <LanguageDictionaryForm
                    lang={lang}
                    language={language}
                    word={word}
                    onClose={() => {
                        setForm(false)
                        setWord(null)
                    }}
                />
            )}
        </Authenticated>
    )
}

export default LanguageDetails
