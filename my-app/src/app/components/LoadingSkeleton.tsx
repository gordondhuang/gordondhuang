import { Suspense } from 'react';
import '@/styles/loading-skeleton.css'

export function LoadingSkeleton() {
    return(
        <section>
            <Suspense fallback={<p>loading..</p>}/>
        </section>
    )
}