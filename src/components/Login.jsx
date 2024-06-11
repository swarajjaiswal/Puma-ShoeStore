import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [loading, setLoading] = useState(false);

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, d * 4000);
    })
  }

  const onSubmit = async (data, e) => {
    setLoading(true);
    await delay(4);
    console.log(data);
    e.target.reset();
    setLoading(false);
  };

  return (
    <div className='flex items-center justify-center min-h-screen' style={{ background: 'linear-gradient(to bottom right, #4a148c, #880e4f)' }}>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
        <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6'>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-800 font-semibold mb-2">Username</label>
            <input
              id="username"
              type="text"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your username"
              {...register("username", { required: { value: true, message: "* This field is required" }, minLength: { value: 3, message: "Username should be at least 3 characters" } })}
            />
            {errors.username && <p className='text-red-500 mt-1'>{errors.username.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">Password</label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
              {...register("password", { required: { value: true, message: "* This field is required" }, minLength: { value: 4, message: "Password should be at least 4 characters" }, maxLength: { value: 20, message: "Password should not exceed 20 characters" } })}
            />
            {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={isSubmitting || loading}
              className={`bg-indigo-500 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-indigo-600 ${isSubmitting || loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit"
            >
              {isSubmitting || loading ? 'Submitting...' : 'Submit'}
            </button>
            {loading && <p className='text-gray-600 ml-4'>Please wait...</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
