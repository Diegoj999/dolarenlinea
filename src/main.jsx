import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Suspense } from 'react'
import { Loading } from './components/Loading'



ReactDOM.createRoot(document.getElementById('root')).render(

    <Suspense fallback={<Loading/>}>
        <App />
    </Suspense>
 

)
