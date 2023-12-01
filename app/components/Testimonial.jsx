import Image from "next/image";

export default function Testimonial({image, name, description, id }) {
  return (
    <div key={id} className="col-span-1 border-2 rounded-xl mx-auto flex-col text-center items-center p-12">
    <Image src={image} alt={name} width={100} height={100} className="mx-auto rounded-full" />
    <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">{name}</h1>
    <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mt-4">{description}</p>
  </div>
  
  )
}
