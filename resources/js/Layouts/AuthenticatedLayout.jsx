import Sidebar from "@/Components/Sidebar";
import Nav from "@/Components/Nav";
import {useRecoilState} from "recoil";
import {sidebarToggleAtom} from "@/atoms/sidebarToggleAtom";
import {Alert, Backdrop, CircularProgress, Snackbar} from "@mui/material";
import {useEffect, useState} from "react";
import {Head, usePage} from "@inertiajs/inertia-react";
import {fullPageLoading} from "@/atoms/fullPageLoading";

export default function Authenticated({ auth, active, children, navBarOptions, title }) {
    const { flash } = usePage().props
    const [openMessageBox, setOpenMessageBox] = useState(false)
    const [messageType, setMessageType] = useState('success')
    const showSidebar = useRecoilState(sidebarToggleAtom)
    const pageLoading = useRecoilState(fullPageLoading)

    useEffect(()=>{
        if (flash?.message !== null) {
            setOpenMessageBox(true)
            if(flash?.type){
                setMessageType(flash?.type)
            }
        }
    }, [flash])

    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            {title&&<Head title={title} /> }
            <div>
                {showSidebar[0]&& <Sidebar auth={auth} active={active} />}
                <div className={`pl-0 ${showSidebar[0]&&'!pl-[250px]'} overflow-hidden`}>
                    <Nav navBarOptions={navBarOptions} />
                    <main className={`p-4 mt-14`}>
                        {children}
                    </main>
                </div>
            </div>
            <Snackbar
                open={openMessageBox}
                autoHideDuration={3000}
                onClose={() => setOpenMessageBox(false)}
            >
                <Alert
                    onClose={() => setOpenMessageBox(false)}
                    severity={messageType}
                    sx={{ width: '100%' }}>
                    {flash?.message}
                </Alert>
            </Snackbar>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={pageLoading[0]}
            >
                <CircularProgress color="primary" />
            </Backdrop>
        </div>
    );
}
