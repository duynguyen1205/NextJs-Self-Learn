'use client';
import Link from 'next/link'
import '@/styles/app.css';
import AppTable from './components/app.table';
import { useEffect } from 'react';
export default function Home() {



  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/blogs');
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        <li className='red'><Link href={"/facebook"}> Facebook</Link></li>
        <li style={{ margin: "20px 0" }}><Link href={"/instagram"}> Instagram</Link></li>
        <li><Link href={"/youtube"}> YouTube</Link></li>
      </ul>
      <AppTable />
    </div>
  )
}
