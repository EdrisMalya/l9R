import React from 'react';
import SidebarLinks from "@/Components/SidebarLinks";

const Sidebar = ({ auth, active }) => {
    return (
        <div className={'fixed min-h-screen w-[250px] border-r dark:border-gray-800 shadow-2xl overflow-auto dark:scrollbar dark:scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800'}>
            <div className={'w-[110px] h-[110px] border-gray-700 shadow-xl border mx-auto mt-10 rounded-full'} />
            <div className={'text-center mt-4'}>
                <h3>Hello - {auth.user.name}</h3>
            </div>
            <SidebarLinks active={active} />
        </div>
    );
};

export default Sidebar;
