import React, { useContext, useEffect, useState } from 'react'


function Toast({toast,closeToast}) {
    // const {toast,setToast}=useContext(ToastContext);

    // useEffect(()=>{
    //     toast?.status&&setTimeout(()=>{
    //         setToast(null)
    //     },3000)
    // },[toast]);

    
  return toast?.status&&(

        <div role="alert" 
        className="rounded-xl border border-gray-100
         text-white p-4 z-50  right-0 absolute top-0 m-3
         bg-green-600">
  <div className="flex items-start gap-4 ">
    <span className="text-white-600" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </span>

    <div className="flex-1">
      <strong className="block font-medium
       text-white"> {toast?.status} </strong>

      <p className="mt-1 text-sm text-white">{toast?.msg}</p>
    </div>

    <button className="text-white transition hover:text-gray-600"
    onClick={()=>closeToast()}>
      <span className="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>
  
  )
}

export default Toast