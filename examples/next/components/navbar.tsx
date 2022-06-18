import Link from 'next/link'

function Navbar() {
  return (
    <nav className="px-10 bg-teal-700">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex space-x-4">
          <Link href="/" >
            <a className="bg-teal-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          </Link>
          <Link href="/blog" >
            <a className="text-teal-100 hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
          </Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
