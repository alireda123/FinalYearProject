import Link from "next/link";
import AuthButton from "./AuthButton";


export default function Navbar ()  {
//the max-w-5xl is the reason for the limited width
    return(
        <nav className="w-full flex justify-center border-b border-b-foreground/10   h-16">
        <div className="w-full max-w-7xl  flex justify-between items-center p-3 text-sm">
            <Link href='/' className="text-2xl font-extrabold">Home</Link>
            <div className="w-full flex justify-center items-center p-3 text-lg [&>*]:mx-3">
                <Link href='factchecks' >Fact Checks</Link>
                <Link href='submitclaim'>Submit a claim</Link>
                <Link href='aboutus'>Who We Are</Link>
                <Link href='donate'>Donate</Link >
            </div>
            <div>
            <AuthButton/>
            </div>
          
        </div>
      </nav>
    )
}