export default function Header() {
    return (
      <header className="fixed top-0 w-full bg-blue-500 p-4 z-10">
        <nav className="flex justify-between mx-auto container items-center">
            <div className="text-white font-bold text-4xl">B-teame</div>
            <div className="space-x-12">
                <a href="" className="text-white font-bold text-3xl no-underline hover:underline">usename</a>
                <a href="" className="text-white font-bold text-3xl no-underline hover:underline">×</a>
            </div>
        </nav>
      </header>
    );
  }