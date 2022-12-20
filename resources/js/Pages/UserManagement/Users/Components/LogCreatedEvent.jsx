import React from 'react'
import dayjs from 'dayjs'
import useLanguage from '@/hooks/useLanguage'

const LogCreatedEvent = ({ properties }) => {
    const { translate } = useLanguage()

    return (
        <table className={'table'}>
            <thead>
                <tr>
                    <th>{translate('Field name')}</th>
                    <th>{translate('Value')}</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(properties.attributes).map((item, index) => (
                    <tr className={'py-2 text-xs'} key={`th-${index}`}>
                        <td>{item.replaceAll('_', ' ')}</td>
                        <td key={`td-${index}`}>
                            {item === 'created_at' || item === 'updated_at'
                                ? dayjs(properties.attributes[item]).format(
                                      'YYYY-MM-DD H:mm A',
                                  )
                                : typeof properties.attributes[item] ===
                                  'boolean'
                                ? properties.attributes[item] === true
                                    ? translate('Active')
                                    : translate('Inactive')
                                : properties.attributes[item]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default LogCreatedEvent
