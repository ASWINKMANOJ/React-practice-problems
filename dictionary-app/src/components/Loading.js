import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Loading() {
    return (
        <div className=' w-full h-full flex items-center justify-center bg-neutral-950'>
            <div className=' w-full h-full flex items-center justify-center bg-neutral-950'>
                <SkeletonTheme baseColor='#333' highlightColor='#666'>
                    <main className=' h-4/5 w-4/5 bg-neutral-900 rounded-xl p-5 flex flex-col justify-evenly'>
                        <div style={{ width: '100%', height: '50%' }}><Skeleton style={{ width: "60%", height: "30%" }} /></div>
                        <div style={{ width: '100%', height: '70%' }}>
                            <Skeleton style={{ width: "100%", height: "7%", marginBottom: "5%" }} />
                            <Skeleton style={{ width: "100%", height: "7%", marginBottom: "5%" }} />
                            <Skeleton style={{ width: "100%", height: "7%", marginBottom: "5%" }} />
                            <Skeleton style={{ width: "100%", height: "7%", marginBottom: "5%" }} />
                            <Skeleton style={{ width: "100%", height: "7%", marginBottom: "5%" }} />
                        </div>
                    </main>
                </SkeletonTheme>
            </div>
        </div>
    );
}

export default Loading