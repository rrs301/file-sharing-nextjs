import React from 'react'

function TotalFileCard({totalFile}) {
  return (
    <div className='p-3 border rounded-md grid grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 mt-3'>
        <h2 className='text-gray-500'>Total File : {totalFile}</h2>
       
    </div>
  )
}

export default TotalFileCard