import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-20 bg-zinc-50 drop-shadow-xl flex-wrap">
      <div className="h-full w-full flex flex-row flex-wrap gap-10 justify-center content-center">
        <Link className="font-medium text-zinc-800 text-xl hover:text-orange-600 transition-colors" to="/">Home</Link>
        <Link className="font-medium text-zinc-800 text-xl hover:text-orange-600 transition-colors" to="/about">About</Link>
      </div>
    </div>
  )
}