import Link from "next/link";
import AuthButton from "./AuthButton";


export default function Navbar ()  {
    return(
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-7xl xl:max-w-[1400px]  flex justify-between items-center p-3 mx-12">
            <Link href='/' className="text-2xl font-extrabold">Home</Link>
            <div className="w-full flex justify-center items-center p-3 text-lg [&>*]:mx-3">
                <Link href='/factchecks' >Fact Checks</Link>
                <Link href='/submitclaim'>Submit a claim</Link>
                <Link href='/aboutus'>Who We Are</Link>
                <Link href='/donate'>Donate</Link >
            </div>
            <div>
            <AuthButton/>
            </div>
          
        </div>
      </nav>
    )
}