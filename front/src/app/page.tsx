import Image from 'next/image'
import MenuButton from './components/menu_button'

export default function Home() {
  return (
    <div className="bg-slate-100 w-full h-full">
      <div className="w-screen h-screen grid grid-cols-12 gap-2">
        <div className="col-span-12">ていたんのあそびば</div>
        <div className="col-span-12 text-7xl font-mono flex flex-col items-center justify-center">
          <Image src={"/image/95-カーボンニュートラル_地球と手を繋ぐ.png"} alt="カーボンニュートラル" width={1000} height={1000} />
        </div>
      </div>
      <div className="w-screen h-screen">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-1"></div>
          <div className="col-span-4 rounded-lg bg-amber-400">
            <MenuButton />
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-4 rounded-lg bg-amber-500">
            <MenuButton />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
  </div>
  )
}
