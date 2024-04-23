import React from 'react';
import Image from "next/image";

const SignInComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <h1 className="mb-6 text-3xl text-center text-gray-900">Welcome to TaskList Pro</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Enter your email address to get started
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" 
            type="email" 
            placeholder="name@yourcompany.com" 
          />
        </div>
        <div className="mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Continue with Email
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <hr className="w-full" />
          <span className="p-2 text-gray-500 text-sm">OR</span>
          <hr className="w-full" />
        </div>
        <div className="mb-4">
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded shadow focus:outline-none focus:shadow-outline w-full">
            Continue with Google
          </button>
        </div>
        <div className="mb-6">
          <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:shadow-outline w-full">
            Continue with Apple
          </button>
        </div>
        <p className="text-center text-gray-600 text-xs">
          Already have an account? 
          <a href="/signin" className="text-blue-500 hover:text-blue-800"> Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <SignInComponent/>
  );
}
