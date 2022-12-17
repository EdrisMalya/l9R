import React from 'react'
import { useRecoilState } from 'recoil'
import { directionAtom } from '@/atoms/directionAtom'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import stylisRTLPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'

const DirectionProvider = ({ children }) => {
    const [direction] = useRecoilState(directionAtom)

    const cacheRtl = createCache({
        key: 'muirt',
        stylisPlugins: [prefixer, stylisRTLPlugin],
    })

    const renderRtL = () => {
        switch (direction) {
            case 'rtl':
                return (
                    <CacheProvider value={cacheRtl}>
                        <div className={'rtl'} dir={'rtl'}>
                            {children}
                        </div>
                    </CacheProvider>
                )
            case 'ltr':
                return <div>{children}</div>
        }
    }

    return renderRtL(direction)
}

export default DirectionProvider
