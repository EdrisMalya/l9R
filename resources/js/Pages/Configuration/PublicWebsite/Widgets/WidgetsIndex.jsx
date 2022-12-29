import React, {useState} from 'react'
import ProtectedComponent from "@/Components/ProtectedComponent"
import {Button} from "@mui/material"
import {PlusIcon} from "@heroicons/react/24/outline"
import WidgetForm from "@/Pages/Configuration/PublicWebsite/Widgets/WidgetForm"

const WidgetsIndex = ({translate}) => {
    const [showForm, setShowForm] = useState(false)
    return (
        <div>
            <h2 className={'text-center text-xl'}>{translate('All available widgets')}</h2>
            <ProtectedComponent role={'widgets-create-widgets'}>
                <Button onClick={()=>setShowForm(true)} endIcon={<PlusIcon className={'h-4'} /> } variant={'outlined'} className={'float-right'}>
                    {translate('Add widget')}
                </Button>
                <WidgetForm show={showForm} translate={translate} onClose={()=>{
                    setShowForm(false)
                }} />
            </ProtectedComponent>
        </div>
    )
}

export default WidgetsIndex
