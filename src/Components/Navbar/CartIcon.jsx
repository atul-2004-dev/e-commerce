import React from 'react'

const CartIcon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800">Cart is Empty</h1>
        <p className="text-gray-600 mt-2">Looks like you haven't added anything to your cart yet.</p>
      </div>
    </div>
  )
}

export default CartIcon
