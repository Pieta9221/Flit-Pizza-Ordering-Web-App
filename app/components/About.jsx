import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:h-screen mx-auto p-4 gap-4">
      <div className="md:w-1/3 justify-center text-center m-auto">
        <Image src="/pan.png" alt="Search" width={400} height={400} />
      </div>
      <div className="flex md:flex-col md:w-2/3 justify-center text-center md:text-left p-4 relative">
        <div className="w-full md:w-[50%]">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider leading-[1.3] mb-6">Daily fresh and always tasty</h1>
          <p className="text-xl md:text-2xl tracking-wider text-[#555555] leading-[1.7] mb-6">There are many variations of passages of Lorem Ipsum available, but the majority have</p>
        </div>
        <div className="hidden md:block absolute bottom-25 left-[55%]">
            <Image src="/garlic.png" alt="Search" width={120} height={120} />
        </div>
      </div>
    </div>
  );
}
