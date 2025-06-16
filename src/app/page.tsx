'use client';
import Link from 'next/link'
import '@/styles/app.css';
import AppTable from './components/app.table';
import { useEffect } from 'react';
import useSWR from 'swr';

export default function Home() {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }
  );

  if (error) return <div> An error has occurred.</div>;
  if (isLoading) return <div>Loading ....</div>;
  return (
    <div>
      <ul>
        <li className='red'><Link href={"/facebook"}> Facebook</Link></li>
        <li style={{ margin: "20px 0" }}><Link href={"/instagram"}> Instagram</Link></li>
        <li><Link href={"/youtube"}> YouTube</Link></li>
      </ul>
      <AppTable blogs={data} />
    </div>
  )
}
