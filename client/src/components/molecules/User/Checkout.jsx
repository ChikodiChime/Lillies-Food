import React, { useState } from 'react'
import Button from 'src/components/atoms/Button'
import { FaTimes } from 'react-icons/fa';
const Checkout = ({isOpen, onClose}) => {

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    if (!isOpen) return null
    // Function to format card number
    const formatCardNumber = (input) => {
      // Remove non-numeric characters from input
        const cleanedInput = input.replace(/[^\d]/g, '');

      // Add hyphen after every four digits
        const formattedInput = cleanedInput.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');

      // Limit input to 19 characters (format: XXXX-XXXX-XXXX-XXXX)
        return formattedInput.slice(0, 19);
    };
    
    // Function to format expiry date
    const formatExpiryDate = (input) => {
      // Remove non-numeric characters from input
        const cleanedInput = input.replace(/[^\d]/g, '');
        
      // Add forward slash after first two numbers
        const formattedInput = cleanedInput.replace(/^(.{2})/, '$1/');
        
      // Limit input to 5 characters (MM/YY)
        return formattedInput.slice(0, 5);
    };
    
    // Event handler for card number input change
    const handleCardNumberChange = (e) => {
        const { value } = e.target;
        setCardNumber(formatCardNumber(value));
    };
    
    // Event handler for expiry date input change
    const handleExpiryDateChange = (e) => {
        const { value } = e.target;
        setExpiryDate(formatExpiryDate(value));
    };

    return (
        <>
            <div className='modal-overlay'>
                <div className="h-full w-full absolute z-0 " onClick={onClose}></div>
                <div className="modal-content z-30">

                    <h1 className='text-2xl font-semibold text-red-600'>Checkout</h1>
                    <form action="" className='flex flex-col h-full w-full justify-around items-start '>

                        <div className="w-full space-y-2">
                            <label className=' font-semibold' htmlFor="cardNumber">Card Number:</label>
                            <input
                                className='text-black w-full text-lg h-20 pl-4'
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                maxLength="19" // Limit input to 16 digits + 3 hyphens
                                required
                            />
                        </div>
                        
                        <div className="w-full space-y-2">
                            <label className=' font-semibold' htmlFor="expiryDate">Expiry Date:</label>
                            <input
                                className='text-black w-full text-lg h-20 pl-4'
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                value={expiryDate}
                                onChange={handleExpiryDateChange}
                                placeholder="MM/YY"
                                maxLength="5" // Limit input to 5 characters (MM/YY)
                                required
                        />
                        </div>
                        
                        <div className="w-full space-y-2">
                            <label className=' font-semibold' htmlFor="cvv">CVV</label>
                            <input 
                            className='text-black w-full h-20 text-lg pl-4' type="number" name='cvv' placeholder='299' />
                        </div>
                        
                        <div className="w-full space-y-2">
                            <label className=' font-semibold' htmlFor="pin">Card Pin</label>
                            <input 
                            className='text-black w-full h-20 text-lg pl-4' type="number" name='pin' placeholder='4-digit Card Pin' />
                        </div>
                        
                    </form>
                    <Button text={'Make Payment'} onClick={onClose} />

                    <button onClick={onClose} className='absolute top-5 left-5 text-red-600'><FaTimes size={30} /></button>

                </div>
                
            </div>
        </>
    
  )
}

export default Checkout