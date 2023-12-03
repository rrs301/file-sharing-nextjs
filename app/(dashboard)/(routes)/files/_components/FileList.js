import { Link } from '@react-email/components'
import React from 'react'

function FileList({fileList}) {
  return fileList&&(
<div className="overflow-x-auto mt-7">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="text-left">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">File Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"> Type</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Size</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {fileList.map((file,index)=>(
        <tr className="odd:bg-gray-50" key={index}>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{file.fileName}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{file.fileType}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{(file.fileSize/1024/1024).toFixed(2)}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            <Link 
            href={'/file-preview/'+file.id}
            className='cursor-pointer'>View</Link>
        </td>
        </tr>
      ))}
     

   
    </tbody>
  </table>
</div>
  )
}

export default FileList