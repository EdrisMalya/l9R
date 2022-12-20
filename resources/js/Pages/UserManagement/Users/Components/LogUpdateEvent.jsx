import React from 'react'
import useLanguage from '@/hooks/useLanguage'
import dayjs from 'dayjs'

const LogUpdateEvent = ({ properties }) => {
    const { translate } = useLanguage()
    const formatter = data => {
        return data.replaceAll('_', ' ')
    }

    return (
        <div>
            <div className={'grid grid-cols-3'}>
                <div className={'border border-gray-600  py-2'}>
                    <p className={'border-b pb-2 text-center font-bold'}>
                        {translate('Field name')}
                    </p>
                    <div className={'flex flex-col'}>
                        {Object.keys(properties.old).map((item, index) => (
                            <p
                                key={`p1${index}`}
                                className={
                                    'overflow-auto border-b py-3 px-2 text-center text-sm scrollbar-thin scrollbar-thumb-black'
                                }>
                                {translate(formatter(item))}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={'border border-gray-600  py-2 text-center'}>
                    <p className={'border-b pb-2 font-bold'}>
                        {translate('Old values')}
                    </p>
                    <div className={'flex flex-col'}>
                        {Object.keys(properties.old).map((item, index) => (
                            <p
                                key={`p2${index}`}
                                className={
                                    'overflow-auto border-b bg-red-500 py-3 px-2 text-sm scrollbar-thin scrollbar-thumb-black'
                                }>
                                {item === 'created_at' || item === 'updated_at'
                                    ? dayjs(properties.old[item]).format(
                                          'YYYY-MM-DD H:mm A',
                                      )
                                    : typeof properties.old[item] === 'boolean'
                                    ? properties.old[item] === true
                                        ? translate('Active')
                                        : translate('Inactive')
                                    : properties.old[item]}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={'border border-gray-600 py-2 text-center'}>
                    <p className={'border-b pb-2 font-bold'}>
                        {translate('Changed values')}
                    </p>
                    <div className={'flex flex-col'}>
                        {Object.keys(properties.attributes).map(
                            (item, index) => (
                                <p
                                    key={`p3${index}`}
                                    className={
                                        'overflow-auto border-b bg-green-500 py-3 px-2 text-sm scrollbar-thin scrollbar-thumb-black'
                                    }>
                                    {item === 'created_at' ||
                                    item === 'updated_at'
                                        ? dayjs(
                                              properties.attributes[item],
                                          ).format('YYYY-MM-DD H:mm A')
                                        : typeof properties.attributes[item] ===
                                          'boolean'
                                        ? properties.attributes[item] === true
                                            ? translate('Active')
                                            : translate('Inactive')
                                        : properties.attributes[item]}
                                </p>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogUpdateEvent
