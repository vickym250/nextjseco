import Image from 'next/image';
import logside from "../image/loginside.png"

export default function Signup() {
  return (
    <div className="flex w-full flex-col gap-50 md:flex-row h-screen">
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
         
        {/* Right Section with Signup Form */}
        <div className="p-8 w-96">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create an account</h2>
          <p className="text-gray-500 mb-4">Enter your details below</p>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full p-3 mb-4 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600"
            >
              Create Account
            </button>
          </form>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="w-full flex items-center justify-center gap-2 border p-3 rounded-md hover:bg-gray-100">
            <Image src="/google-icon.svg" width={20} height={20} alt="Google" />
            Sign up with Google
          </button>
          <p className="mt-4 text-center text-gray-600">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in</a>
          </p>
        </div>
      </div>
  
  );
}
