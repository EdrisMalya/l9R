import React from 'react'
import { usePage } from '@inertiajs/inertia-react'

const ProtectedComponent = ({ role, onlyForAdmin = false, children }) => {
    const { auth } = usePage().props
    const [permissions] = React.useState(auth?.user?.permissions)

    const shouldIShowTheComponent = role => {
        if (auth.user.id === 1) {
            return children
        } else {
            if (onlyForAdmin && auth.user.id === 1) {
                return children
            } else {
                if (permissions.includes(role)) {
                    return children
                } else {
                    return <></>
                }
            }
        }
    }

    return shouldIShowTheComponent(role)
}

export default ProtectedComponent
