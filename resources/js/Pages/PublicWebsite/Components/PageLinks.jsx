import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PageLinks = () => {
    return (
        <ul className={'home-page-links'}>
            <li className={'active'}>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                <div>
                    Portfolio
                    <KeyboardArrowDownIcon />
                </div>
            </li>
            <li>
                Pages
                <KeyboardArrowDownIcon />
            </li>
            <li>
                Blog
            </li>
            <li>
                Contact
            </li>
        </ul>
    )
}

export default PageLinks
