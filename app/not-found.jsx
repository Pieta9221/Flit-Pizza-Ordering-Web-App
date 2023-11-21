import Link from "next/link";
import Image from "next/image";
// import Pic from '../public/sadpizza.png'

export default function NotFound() {
  return (
    <div className="text-center mt-8">
      <div className="relative w-64 h-48 mx-auto mb-8">
        <Image
          src='/sadpizza.png'
          alt="Sad Pizza 404"
          width={200}
        height={200}
        priority
      />
      </div>
      <h1 className="text-3xl font-bold text-orange-500 mb-4">
        Oops! It seems the pizza you ordered has gone missing!
      </h1>
      <p className="text-teal-600 text-2xl">
        Fear not! Return to the <Link href="/"><span className="text-orange-500 font-bold cursor-pointer">Homepage</span></Link> and order a fresh one.
      </p>
    </div>
  )
}
