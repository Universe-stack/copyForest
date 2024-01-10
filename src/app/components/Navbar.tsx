//'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.png";
import { Poppins } from 'next/font/google'


const lato = Poppins({ weight:'400',subsets: ['latin']})

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center align-middle w-full text-[#1b5240] bg-[#FFFFFF] border-b-[0.1rem] border-[#e0e0e0] m-0 h-[5.5rem]">
        <div className="flex align-middle justify-between w-[80%] self-center">
            <span className="flex text-center align-middle font-[600] text-[1.5rem]">
                {/* <Image
                    src={logo}
                    width={100}
                    alt="logo"
                /> */}

                CopyForest<span className="text-[#3c9d0f]">.io</span>
            </span>
            <span className="flex xsm:hidden sm:flex">
                <ul className="flex gap-10 align-middle justify-center mt-1 text-[#171717] text-[500] text-[1rem] ">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/"}>Features </Link></li>
                    <li><Link href={"/"}>Dashboard</Link></li>
                    <li><Link href={"/"}>Pricing</Link></li>                      
                </ul>
            </span>      
        </div>
    </nav>
  )
}

export default Navbar