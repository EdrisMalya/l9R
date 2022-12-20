import React from 'react'
import { usePage } from '@inertiajs/inertia-react'

const UseAuth = () => {
    const { auth } = usePage().props
    const [permissions] = React.useState(auth?.user?.permissions)

    const isAllowed = (role, onlyForAdmin) => {
        if (auth.user.id === 1) {
            return true
        } else {
            if (onlyForAdmin && auth.user.id === 1) {
                return true
            } else {
                if (permissions.includes(role)) {
                    return true
                } else {
                    return false
                }
            }
        }
    }

    return {
        isAllowed,
    }
}

export default UseAuth
