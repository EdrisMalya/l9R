import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const SidebarLinkButton = ({ icon, url, label, active = false, dir }) => {
    return (
        <Link
            href={url}
            className={`block dark:text-gray-400 p-1 pl-3 w-full text-left ${
                active &&
                'bg-blue-800 !text-white rounded-tr-full rounded-br-full'
            }`}>
            <div className={'flex items-center space-x-3'}>
                <div className={`${dir === 'rtl' && 'pl-3'}`}>{icon}</div>
                <div>{label}</div>
            </div>
        </Link>
    )
}

export default SidebarLinkButton
