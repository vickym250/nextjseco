import Image from 'next/image';
import logside from "../image/loginside.png"
import Link from 'next/link';
export default function LoginPage() {
  return (
    <div className="flex w-full flex-col md:flex-row h-screen">
      {/* Left Side - Image Section */}
      <div className=" w-full  md:w-1/2  bg-gray-100 flex items-center justify-center">
        <Image
          src={logside} // Replace with the actual image path
          alt="Shopping Representation"
          width={400}
          height={400}
          className="w-full"
        />
      </div>
      
      {/* Right Side - Login Form */}
      <div className="  w-full  md:w-1/2 flex items-center justify-center">
        <div className="w-96 p-6">
          <h2 className="text-2xl font-semibold mb-4">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>
          
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          
          <div className="flex justify-between items-center">
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">Log In</button>
            <a href="#" className="text-red-500 hover:underline">Forgot Password?</a>
          </div>
          <p className="text-gray-600 mt-6">Don't have an account? <Link href={'/signup'} className="text-red-500 hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}
