import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import {Link} from "@inertiajs/inertia-react";
import {useRecoilState} from "recoil";
import {sidebarToggleAtom} from "@/atoms/sidebarToggleAtom";

const Nav = ({ navBarOptions }) => {
    const [sidebar, setSidebarToggle] = useRecoilState(sidebarToggleAtom)

    const sidebarToggleHandler = () => {
        setSidebarToggle(pre=>pre!==true)
    }

    return (
        <div className={`fixed w-full z-20 dark:bg-gray-900`}>
            <div className={'py-2 border-b dark:border-gray-700 overflow-auto sticky top-0'}>
                <div className={'flex items-center justify-between'}>
                    <div className={'flex items-center space-x-2'}>
                        <Tooltip title={'Collapse sidebar'}>
                            <IconButton onClick={sidebarToggleHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </IconButton>
                        </Tooltip>
                        {typeof navBarOptions !== "undefined" && navBarOptions()}
                    </div>
                    <div className={`${sidebar?'mr-[250px]':'mr-0'} px-3`}>
                        <Tooltip title={'Logout'}>
                            <Link href={route('logout')} as={'button'} method={'POST'}>
                                <IconButton>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
