import React from 'react';
import SidebarLinkButton from "@/Components/SidebarLinkButton";
import {UsersIcon} from "@heroicons/react/24/outline";
import {HomeIcon} from "@heroicons/react/24/solid";

const SidebarLinks = ({active}) => {
    return (
        <div className={'mt-5'}>
            <SidebarLinkButton icon={<HomeIcon className={'h-5'} />} url={route('dashboard')} label={'Dashboard'} active={active==='dashboard'} />
            <SidebarLinkButton icon={<UsersIcon className={'h-5'} />} url={route('user-management.index')} label={'User management'} active={active==='user_management'} />
        </div>
    );
};

export default SidebarLinks;
