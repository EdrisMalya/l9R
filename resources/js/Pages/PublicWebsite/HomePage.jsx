import React from 'react'
import PublicLayout from '@/Pages/PublicWebsite/PublicLayout'
import PageSliderOrImage from "@/Pages/PublicWebsite/Components/PageSliderOrImage"
import {usePage} from "@inertiajs/inertia-react"
import useLanguage from "@/hooks/useLanguage"

const HomePage = () => {
    const { website } = usePage().props
    const { translate } = useLanguage()
    return (
        <PublicLayout translate={translate} website={website}>
            <PageSliderOrImage translate={translate} website={website} />
            <div className={' mx-auto p-5 -mt-8 !z-50 absolute left-[40%]'} style={{
                transform: 'translate(-40%, -40%)'
            }}>
                <div className={'grid grid-cols-3 gap-10'}>
                    <div className={'border p-10 bg-white text-black'}>
                        <h2>
                            Expert Accountants at Your Service
                        </h2>
                    </div>
                    <div className={'border p-10 bg-white text-black'}>
                        <h2>Accurate and Reliable Financial Solutions</h2>
                    </div>
                    <div className={'border p-10 bg-white text-black'}>
                        <h2>
                            Your Trusted Financial Partner
                        </h2>
                    </div>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores at commodi doloremque eveniet explicabo iusto laboriosam necessitatibus non odit officiis omnis quasi, qui repellat repellendus sapiente vel voluptate voluptatem.
            </div>
            <div className={'h-screen'}></div>
        </PublicLayout>
    )
}

export default HomePage
