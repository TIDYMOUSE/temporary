import Image from "next/image"

export default function Home() {
  return (
    <main className="m-2">

      <div className="flex justify-between">
        <div className="text-white">

          <Image src="/sales.png" alt="Cat image" height={530} width={500} />
        </div>

        <div className="flex flex-col justify-center  gap-3">
          <div>
            <p className=" text-secondary text-3xl text-right">FOCUS</p>
            <p className="text-secondary text-3xl text-right">ACHEIVE</p>
            <p className="text-secondary text-3xl text-right">SUCCEED</p>
          </div>
          <div>
            <h1 className="text-white font-semibold font-oswald text-right text-5xl">WAKEFUL</h1>
            <h1 className="text-white font-semibold font-oswald text-right text-5xl">WORKFORCE</h1>
          </div>
          <div className="cursor-pointer bg-secondary text-primary rounded-3xl text-center font-extrabold text-2xl p-3 hover:bg-[#22abab] transition-colors duration-300">START A SESSION</div>
        </div>
      </div>




      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </main>
  )
}