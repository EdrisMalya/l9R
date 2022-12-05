import React from 'react';
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {userManagementLinks} from "@/Pages/UserManagement/UserManagementIndex";

const UserIndex = ({auth, active}) => {
    return (
        <Authenticated auth={auth} active={'user_management'} navBarOptions={()=>userManagementLinks(active)}>

        </Authenticated>
    );
};

export default UserIndex;
