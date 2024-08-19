import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/PaymentPage.css'; // Import your CSS
import ApplicantNavbar from '../components/ApplicantNavbar';

const PaymentPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const selectedPayMethod = watch('payMethod'); // Watch the selected payment method

  const generateTransactionId = () => {
    return 'TXN' + Math.floor(Math.random() * 1000000);
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      // Include status in the request data
      data.status = 'successful'; // Set status to successful

      const response = await axios.post('http://localhost:8027/payment', data);

      // Generate a transaction ID
      const transactionId = generateTransactionId();

      Swal.fire({
        title: 'Payment Successful!',
        text: `Transaction ID: ${transactionId}`,
        icon: 'success',
      });
    } catch (err) {
      Swal.fire({
        title: 'Payment Error',
        text: 'An error occurred during payment. Please try again.',
        icon: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="payment-page">
        {/* <ApplicantNavbar /> */}
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="payment-form">
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            {...register('amount', { required: 'Amount is required' })}
          />
          {errors.amount && <div className="error-message">{errors.amount.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="payMethod">Payment Method</label>
          <select id="payMethod" {...register('payMethod', { required: 'Payment method is required' })}>
            <option value="">Select a payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="upi">UPI</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
          {errors.payMethod && <div className="error-message">{errors.payMethod.message}</div>}
        </div>

        {selectedPayMethod === 'creditCard' && (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Credit Card Number</label>
              <input
                type="text"
                id="cardNumber"
                {...register('cardNumber', {
                  required: 'Credit Card Number is required',
                  pattern: {
                    value: /^\d{16}$/,
                    message: 'Credit Card Number must be 16 digits'
                  }
                })}
              />
              {errors.cardNumber && <div className="error-message">{errors.cardNumber.message}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                {...register('cvv', {
                  required: 'CVV is required',
                  pattern: {
                    value: /^\d{3}$/,
                    message: 'CVV must be 3 digits'
                  }
                })}
              />
              {errors.cvv && <div className="error-message">{errors.cvv.message}</div>}
            </div>
          </>
        )}

        {selectedPayMethod === 'upi' && (
          <>
            <div className="form-group">
              <label htmlFor="upiId">UPI ID</label>
              <input
                type="text"
                id="upiId"
                {...register('upiId', {
                  required: 'UPI ID is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/,
                    message: 'UPI ID must be in the format "username@bankname"'
                  }
                })}
              />
              {errors.upiId && <div className="error-message">{errors.upiId.message}</div>}
            </div>
          </>
        )}

        {selectedPayMethod === 'bankTransfer' && (
          <>
            <div className="form-group">
              <label htmlFor="accountNumber">Bank Account Number</label>
              <input
                type="text"
                id="accountNumber"
                {...register('accountNumber', {
                  required: 'Bank Account Number is required',
                  pattern: {
                    value: /^\d{12}$/,
                    message: 'Bank Account Number must be 12 digits'
                  }
                })}
              />
              {errors.accountNumber && <div className="error-message">{errors.accountNumber.message}</div>}
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="payDate">Payment Date</label>
          <input
            type="date"
            id="payDate"
            {...register('payDate', { required: 'Payment date is required' })}
          />
          {errors.payDate && <div className="error-message">{errors.payDate.message}</div>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;



