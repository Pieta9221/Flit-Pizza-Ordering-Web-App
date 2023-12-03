import Link from "next/link";
import Image from "next/image";


export default function NotFound() {
  return (
    <div className="text-center justify-center items-center flex flex-col my-20">
      <div className="w-64 h-48 mx-auto mb-8 preparing">
        <Image
          src='/sadpizza.png'
          alt="Sad Pizza 404"
          width={200}
        height={200}
        priority
      />
      </div>
      <h1 className="text-3xl font-bold text-[#777777] mb-4">
        Oops! It seems the pizza you ordered has gone missing!
      </h1>
      <p className="text-teal-600 text-2xl">
        Fear not! Return to the <Link href="/"><span className="text-orange-500 font-bold cursor-pointer">Homepage</span></Link> and order a fresh one.
      </p>
    </div>
  )
}
