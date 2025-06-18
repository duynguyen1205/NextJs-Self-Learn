
import Link from 'next/link'
import '@/styles/app.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is the home page of our application',
}
export default function Home() {

  return (
    <div>
      <ul>
        <li className='red'><Link href={"/facebook"}> Facebook</Link></li>
        <li style={{ margin: "20px 0" }}><Link href={"/instagram"}> Instagram</Link></li>
        <li><Link href={"/youtube"}> YouTube</Link></li>
      </ul>

    </div>
  )
}
