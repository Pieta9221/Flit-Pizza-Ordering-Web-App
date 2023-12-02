import Image from 'next/image';


export default function page() {
  const productsDetail = [
    {id: '6522a1...',image: '/burga-pizza.png',title: 'Burga Pizza',price: '20'},
    {id: '6522a3...',image: '/burga-pizza.png',title: 'Burga Pizza',price: '20'},
    {id: '652479..',image: '/new-pizza.png',title: 'New Pizza',price: '10'},
    {id: '652479..',image: '/greek-pizza.png',title: 'Greek Pizza',price: '40'},
  ]
  
  const orderDetail = [
    {id: '65247a...',phoneNumber: '07061646491',price: '175',payment: 'Cash', status: 'Delivered'},
    {id: '65250...',phoneNumber: '07061646491',price: '140',payment: 'Cash', status: 'On the way'},
    {id: '652550...',phoneNumber: '07061646491',price: '50',payment: 'Cash', status: 'On the way'},
    {id: '652fcf...',phoneNumber: '07091273465',price: '150',payment: 'Cash', status: 'Preparing'},
    {id: '655353e9...',phoneNumber: '08162648391',price: '160',payment: 'Cash', status: 'Preparing'},
  ]

  return (
    <div className="flex flex-col md:flex-row items-start mx-auto p-4 my-20 gap-4">
      <div className="md:w-1/2 w-full mb-4 md:mb-0">
        <div className="overflow-auto px-5">
          <table className="w-[100%] table-auto border-collapse border-b border-gray-300">
          
          <thead>
              <tr>
                <th className="border-b text-left p-3">Image</th>
                <th className="border-b text-left p-3">Id</th>
                <th className="border-b text-left p-3">Title</th>
                <th className="border-b text-left p-3">Price</th>
                <th className="border-b text-left p-3">Action</th>
              </tr>
            </thead>
            <tbody>
            {productsDetail.map((product) => (
              <tr key={product.id} className='flex-col justify-start items-start'>
                <td className="border-b p-3 whitespace-nowrap align-top">
                <Image src={product.image} alt="pizza-icon" width={100} height={100} />
                </td>
                <td className="border-b p-3 whitespace-nowrap align-top">{product.id}</td>
                <td className="border-b p-3 whitespace-nowrap align-top">{product.title}</td>
                <td className="border-b p-3 whitespace-nowrap align-top">${product.price}</td>
                <td className="border-b p-3 whitespace-nowrap align-top">
                  <button className='mr-3 bg-green-500 text-white px-1 cursorr-pointer rounded-sm'>Edit</button>
                  <button className='bg-red-500 text-white px-1 cursor-pointer rounded-sm'>Delete</button>
                </td>
              </tr>
                ))}
            </tbody>
          </table>
        </div>

        
      </div>
      
      <div className="md:w-1/2 w-full mb-4 md:mb-0">
        <div className="overflow-auto px-5">
          <table className="w-[100%] table-auto border-collapse border-b border-gray-300">
          
          <thead>
              <tr>
                <th className="border-b text-left p-3">Id</th>
                <th className="border-b text-left p-3">Customer</th>
                <th className="border-b text-left p-3">Total</th>
                <th className="border-b text-left p-3">Payment</th>
                <th className="border-b text-left p-3">Status</th>
                <th className="border-b text-left p-3">Action</th>
              </tr>
            </thead>
            <tbody>
            {orderDetail.map((order) => (
              <tr key={order.id} className='flex-col justify-start items-start'>
                <td className="border-b p-3 whitespace-nowrap align-top">{order.id}</td>
                <td className="border-b p-3 whitespace-nowrap align-top">{order.phoneNumber}</td>
                <td className="border-b p-3 whitespace-nowrap align-top">${order.price}</td>
                <td className="border-b p-3 whitespace-nowrap align-top">{order.payment}</td>
                <td className="border-b p-3 whitespace-nowrap align-top">{order.status}</td>
                <td className="border-b p-3 whitespace-nowrap align-top">
                <button className='mr-3 bg-green-500 text-white px-1 cursor-pointer rounded-sm justify-center item-center'>Next Stage</button>
                  
                </td>
              </tr>
               ))}
            </tbody>
          </table>
        </div>

        
      </div>
      
     
    </div>
  );
}
