import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import PinDropIcon from '@mui/icons-material/PinDrop'
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const Navbar = ({ website, translate }) => {
    return (
        <>
            <div
                className={'py-4 !bg-[rgb(35,154,161)] px-12 grid grid-cols-3'}>
                <div className={'flex items-center space-x-2'}>
                    <LocalPhoneIcon />
                    <p>{website.phone_number}</p>
                </div>
                <div className={'flex items-center divide-x space-x-4'}>
                    <div className={'flex items-center space-x-2'}>
                        <PinDropIcon />
                        <p>{website.address}</p>
                    </div>
                    <div className={'flex items-center space-x-2 pl-4'}>
                        <LocalPostOfficeIcon />
                        <p>{website.email}</p>
                    </div>
                </div>
            </div>
            <div
                className={
                    'py-10 !bg-white inline-block absolute right-8 top-0 text-center px-20 z-50'
                }>
                <h1
                    className={
                        'dark:text-[rgb(32,70,105)] text-3xl font-semibold'
                    }>
                    {translate('Follow us')}
                </h1>
                <div className={'mt-6 flex items-center space-x-8'}>
                    {website.facebook && (
                        <a href={website.facebook}>
                            <FacebookIcon
                                className={'dark:text-[rgb(32,70,105)]'}
                            />
                        </a>
                    )}
                    {website.tweeter && (
                        <a href={website.tweeter}>
                            <TwitterIcon
                                className={'dark:text-[rgb(32,70,105)]'}
                            />
                        </a>
                    )}
                    {website.youtube && (
                        <a href={website.youtube}>
                            <YouTubeIcon
                                className={'dark:text-[rgb(32,70,105)]'}
                            />
                        </a>
                    )}
                    {website.instagram && (
                        <a href={website.instagram}>
                            <InstagramIcon
                                className={'dark:text-[rgb(32,70,105)]'}
                            />
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar
