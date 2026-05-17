'use client'
import { authClient } from '@/lib/auth-client'
import { Avatar, Button } from '@heroui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navlink from './Navlink'

const Navbar = () => {
    const route=useRouter()
    const { data: session, isPending, error, refetch } = authClient.useSession()
    // console.log(session,error)
    const user = session?.user;

    const hanleLogOut=async()=>{
        await authClient.signOut()
        route.push('/')
    }

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <Link href={'/'}><p className="text-3xl font-bold bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">World Heritage</p></Link>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Navlink href="/">Home</Navlink></li>
                        <li><Navlink href="/heritages">Heritages</Navlink></li>
                        <li><Navlink href="/my-booking">My-Booking</Navlink></li>
                        <li><Navlink href="/add-heritages">Add-Heritages</Navlink></li>
                    </ul>
                    <ul className='flex items-center gap-5'>
                        <li><Navlink href={'/profile'}>Profile</Navlink></li>
                        {
                            user ? <>
                                <li>
                                    <Avatar>
                                        <Avatar.Image referrerPolicy='no-referrer' alt={user?.name} src={user?.image}/>
                                        <Avatar.Fallback>{user?.name}[0]</Avatar.Fallback>
                                    </Avatar>
                                </li>
                                <li>
                                    <Button onClick={hanleLogOut} variant='outline' className={'rounded'}>LogOut</Button>
                                </li>
                            </> :
                                <>
                                    <Link href={'/login'}><Button variant='secondary' className={'rounded '}>Login</Button></Link>
                                    <Link href={'/signup'}><Button variant='secondary' className={'rounded '}>Sign Up</Button></Link>
                                </>
                        }
                    </ul>
                </header>
            </nav>
        </div>
    )
}

export default Navbar
