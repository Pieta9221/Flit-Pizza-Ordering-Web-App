import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import OrderButton from './OrderButton';

export default function PizzaCard({ name, image, price, stars, description }) {
  return (
    <div className="col-span-1 border-2 rounded-2xl w-full p-8">
      <Link href={`products/single`}>
        <Image src={image} alt={name} width={200} height={200} className="m-auto cursor-pointer" />
      </Link>

      <div className="flex justify-between mt-3 w-full">
        <h1 className="text-3xl font-bold tracking-wider leading-[1.3]">{name}</h1>
        <h1 className="text-3xl font-bold tracking-wider text-[#e20202] leading-[1.3]">${price}</h1>
      </div>

      <div className="my-3 flex text-[#FBB200]">
        {[...Array(stars)].map((_, starIndex) => (
          <FaStar key={starIndex} size={20} className="mr-1" />
        ))}
      </div>
      <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mb-6">{description}</p>
      <OrderButton />
    </div>
  );
}