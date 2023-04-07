import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Shola's Kitchen</h1>
        <p>Welcome to our restaurant web app! We are excited to bring you a new way to experience dining. With our app, you can easily browse our menu, place your order, and have it delivered directly to your doorstep or ready for pickup at our restaurant</p>
      </div>
    </main>
  )
}
