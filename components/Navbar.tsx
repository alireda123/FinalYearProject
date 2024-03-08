export default function Navbar ()  {

    return(
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <button>Home</button>
            <div>
                <button>Fact Checks</button>
                <button>Submit a claim</button>
                <button>Who We Are</button>
                <button>Donate</button>
            </div>
            <div>
            <button>Login</button>
            </div>
          
        </div>
      </nav>
    )
}