import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import { DocumentIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'
import { fullPageLoading } from '@/atoms/fullPageLoading'
import { useForm, usePage } from '@inertiajs/inertia-react'

const DownloadPdfButton = ({
    translate,
    tableData,
    data,
    columns,
    increment,
}) => {
    const { lang } = usePage().props
    const setLoading = useRecoilState(fullPageLoading)
    const { post, setData } = useForm({
        data: tableData.data,
        columns: columns,
        ignore_columns: data.ignore_columns,
        title: null,
        increment: increment,
    })

    useEffect(() => {
        let title = window.document
            .getElementsByTagName('title')[0]
            ?.innerText?.split('-')[0]
        setData('title', title)
    }, [])

    const pdf = () => {
        setLoading[1](true)
        post(route('download.pdf', { lang }), {
            onSuccess: () => {
                setLoading[1](false)
            },
            onError: () => {
                setLoading[1](false)
            },
            onCancel: () => {
                setLoading[1](false)
            },
            onFinish: () => {
                setLoading[1](false)
            },
        })
    }
    return (
        <Button onClick={pdf} endIcon={<DocumentIcon className={'h-4'} />}>
            {translate('Download pdf')}
        </Button>
    )
}

export default DownloadPdfButton
