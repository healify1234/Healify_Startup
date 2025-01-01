'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5'; // Icon for the cross button
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Cross Button */}
      <Link
        href="/"
        className="absolute top-6 right-6 text-gray-500 hover:text-gray-800"
      >
        <IoClose size={28} />
      </Link>

      {/* Login Card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-teal-600 text-center">Sign Up</h2>
        <p className="text-center text-gray-500 mt-2">
          Already a member?{' '}
          <Link href="/login" className="text-teal-500 hover:underline">
            Log In
          </Link>
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 mt-6">
          {/* Google Button */}
          <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50">
            <FcGoogle size={20} />
            <span className="text-gray-600">Sign up with Google</span>
          </button>

          {/* Facebook Button */}
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">
            <FaFacebookF size={20} />
            <span>Sign up with Facebook</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-6">
          <hr className="w-full border-gray-300" />
          <span className="text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        {/* Email Signup */}
        <div className="mt-4">
          <button className="w-full border border-gray-300 rounded-lg py-2 text-gray-600 hover:bg-gray-50">
            Sign up with email
          </button>
        </div>

        {/* Checkbox */}
        <div className="flex items-center mt-6">
          <input
            id="public-profile"
            type="checkbox"
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label
            htmlFor="public-profile"
            className="ml-2 text-sm text-gray-600"
          >
            Sign up to this site with a public profile.{' '}
            <Link href="#" className="text-teal-500 hover:underline">
              Read more
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}
