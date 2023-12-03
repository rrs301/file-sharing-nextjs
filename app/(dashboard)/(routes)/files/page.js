"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from './../../../../firebaseConfig'
import TotalFileCard from './_components/TotalFileCard'
import FileList from './_components/FileList'
import Link from 'next/link';
function Files() {
  const db = getFirestore(app);
  const {user}=useUser();
  const [fileList,setFileList]=useState([]);
  useEffect(()=>{
    user&&getAllUserFiles();
  },[user])
  const getAllUserFiles=async()=>{
   
    const q = query(collection(db, "uploadedFile"),
     where("userEmail", "==", user.primaryEmailAddress.emailAddress));

      const querySnapshot = await getDocs(q);
      setFileList([])
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setFileList(fileList=>[...fileList,doc.data()])
      });
  }
  return (
    <div className='p-5'>
      <h2 className='text-[20px]'>My Files</h2>
    
      {fileList.length==0?
      <>
       <h2 className='mb-6'> You dont have any File</h2>
        <Link href={process.env.NEXT_PUBLIC_DOMAIN} 
        className='p-2 text-white bg-primary rounded-md mt-7'>
          Upload Now
        </Link>
      </>:<>
      <TotalFileCard totalFile={fileList?.length}/>
      <FileList fileList={fileList} />
      </>
       
      }
    </div>
  )
}

export default Files