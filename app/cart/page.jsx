"use client"
import Image from 'next/image';
import { useState } from 'react'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import CashOrderDetail from '../components/CashOrderDetail';



export default function Page() {
  const [open, setOpen] = useState(false)
  const [cash, setCash] = useState(false)

  const style = {"layout":"vertical"}
  function createOrder() {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
            cart: [
                {
                    sku: "1blwyeo8",
                    quantity: 2,
                },
            ],
        }),
    })
        .then((response) => response.json())
        .then((order) => {
            // Your code here after create the order
            return order.id;
        });
}
function onApprove(data) {
    // replace this url with your server
    return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orderID: data.orderID,
        }),
    })
        .then((response) => response.json())
        .then((orderData) => {
            // Your code here after capture the order
        });
}

  const ButtonWrapper = ({ showSpinner }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <div style={{ position: 'relative', zIndex: 9 }}>
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style]}
                fundingSource={undefined}
                createOrder={createOrder}
                onApprove={onApprove}
                
               
            /></div>
        </>
    );
}
  
  return (
    <div className="flex flex-col md:flex-row items-start mx-auto p-4 my-20 gap-4">
      <div className="md:w-2/3 w-full mb-4 md:mb-0">
        <div className="overflow-auto px-5">
          <table className="w-[100%] table-auto border-collapse border-b border-gray-300">
          
          <thead>
              <tr>
                <th className="border-b text-left p-3">Product</th>
                <th className="border-b text-left p-3">Name</th>
                <th className="border-b text-left p-3">Extras</th>
                <th className="border-b text-left p-3">Price</th>
                <th className="border-b text-left p-3">Quantity</th>
                <th className="border-b text-left p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className='flex-col justify-start items-start'>
                <td className="border-b align-top">
                  <Image src="/burga-pizza.png" alt="pizza-icon" width={100} height={100} />
                </td>
                <td className="border-b p-3 whitespace-nowrap align-top">Burga Pizza</td>
                <td className="border-b p-3 whitespace-nowrap align-top"></td>
                <td className="border-b p-3 whitespace-nowrap align-top">$40</td>
                <td className="border-b p-3 whitespace-nowrap align-top">4</td>
                <td className="border-b p-3 whitespace-nowrap align-top">$160</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex md:flex-col md:w-1/3 items-start md:text-left w-full">
        <div className='w-full md:w-[90%] bg-[#333333] text-white px-10 py-8'>
          <h1 className='text-xl font-bold tracking-wider mb-5'>CART TOTAL</h1>
          <p className='font-bold'>Subtotal:<span className='font-medium ml-5'>$160</span></p>
          <p className='font-bold'>Discount:<span className='font-medium ml-5'>$79.60</span></p>
          <p className='font-bold mb-20'>Total:<span className='font-medium ml-5'>$160</span></p>

          {open ? (
            <div className='flex-col w-full'>
              <button onClick={()=>setCash(true)} className='cursor-pointer text-teal-500 w-full  p-2 text-center rounded-sm mb-2 text-md flex font-semibold bg-white tracking-wider align-middle justify-center'>
            
            CASH ON DELIVERY</button>
              <div style={{ maxWidth: "750px"}}  >
              <PayPalScriptProvider
              options={{ clientId: "test", components: "buttons", currency: "USD", "disable-funding":"card,p24", }}>
                <ButtonWrapper />
           </PayPalScriptProvider>
           </div>
           </div>
          ) : (
            <button onClick={()=>setOpen(true)} className='cursor-pointer bg-[#FBB200] w-full py-2 text-lg rounded-full flex font-semibold text-white tracking-wider align-middle justify-center'>
            CHECKOUT NOW!
          </button>
          )}

          
        </div>
      </div>
        {cash &&(
        <CashOrderDetail onClose={() => setCash(false)}/>
      )}
    </div>
  );
}
