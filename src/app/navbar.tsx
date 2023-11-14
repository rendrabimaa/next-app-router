import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <div className="flex justify-between w-full">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex">
        <Link href={"/"}>
          <li className={`mr-3 ${pathname === '/' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Home</li>
        </Link>
        <Link href={"/about"}>
          <li className={`mr-3 ${pathname === '/about' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>About</li>
        </Link>
        <Link href={"/about/profile"}>
          <li className={`mr-3 ${pathname === '/about/profile' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Profile</li>
        </Link>
      </ul>
      <button className="bg-white rounded-md px-3 h-7"
      onClick={() => router.push("/login")}>Login</button>
      </div>
    </nav>
  )
}

export default Navbar