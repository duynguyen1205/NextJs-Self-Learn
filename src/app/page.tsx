
import Link from 'next/link'
import '@/styles/app.css';
import AppTable from './components/app.table';
export default function Home() {
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
