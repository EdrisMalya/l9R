import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import PagesIcon from '@mui/icons-material/Pages';
import {Link} from "@inertiajs/inertia-react"
import ProtectedComponent from "@/Components/ProtectedComponent"
import WidgetsIcon from '@mui/icons-material/Widgets';

export default function PublicWebsiteSidebarLinks({active, translate}) {
    const activeLink = () => {
        switch (active){
            case 'main-page':
                return 'main-page'
            case 'pages':
                return 'pages'
            case 'widgets':
                return 'widgets'
        }
    }
    return (
        <MenuList>
            <ProtectedComponent role={'home-page-access'}>
                <MenuItem selected={activeLink(active)==='main-page'}>
                    <Link href={route(route().current(), { ...route().params, active: 'main-page' })}>
                        <div className={'flex items-center !space-x-2'}>
                            <div><WebAssetIcon  /></div>
                            <div>{translate('Main page')}</div>
                        </div>
                    </Link>
                </MenuItem>
            </ProtectedComponent>
            <ProtectedComponent role={'widgets-access'}>
                <MenuItem selected={activeLink(active)==='widgets'}>
                    <Link href={route(route().current(), { ...route().params, active: 'widgets' })}>
                        <div className={'flex items-center !space-x-2'}>
                            <div><WidgetsIcon  /></div>
                            <div>{translate('Widgets')}</div>
                        </div>
                    </Link>
                </MenuItem>
            </ProtectedComponent>
            <ProtectedComponent role={'pages-access'}>
                <MenuItem selected={activeLink(active)==='pages'}>
                    <Link href={route(route().current(), { ...route().params, active: 'pages' })}>
                        <div className={'flex items-center !space-x-2'}>
                            <div><PagesIcon  /></div>
                            <div>{translate('Pages')}</div>
                        </div>
                    </Link>
                </MenuItem>
            </ProtectedComponent>
        </MenuList>
    );
}
