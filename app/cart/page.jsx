import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:h-screen items-start mx-auto p-4 my-20 gap-4">
      <div className="md:w-2/3">
        <div className="overflow-x-auto">
          <table className="min-w-full border-b border-gray-300">
            <thead>
              <tr>
                <th className="border-b text-left">Product</th>
                <th className="border-b text-left">Name</th>
                <th className="border-b text-left">Extras</th>
                <th className="border-b text-left">Price</th>
                <th className="border-b text-left">Quantity</th>
                <th className="border-b text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className='flex-col justify-start items-start'>
                <td className="border-b align-top">
                  <Image src="/burga-pizza.png" alt="pizza-icon" width={100} height={100} />
                </td>
                <td className="border-b pt-2 align-top">Burga Pizza</td>
                <td className="border-b pt-2 align-top"></td>
                <td className="border-b pt-2 align-top">$40</td>
                <td className="border-b pt-2 align-top">4</td>
                <td className="border-b pt-2 align-top">$160</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex  md:flex-col md:w-1/3 items-start md:text-left p-4">
        <div className='w-[90%] bg-[#333333] text-white p-5'>

        <h1>CART TOTAL</h1>
        </div>

       
      </div>
    </div>
  );
}
