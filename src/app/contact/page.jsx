export default function Contact() {
    return (
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/3 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
          {/* Call To Us */}
          <div className="mb-6">
            <div className="flex items-center gap-3 text-red-500 font-semibold">
              <span className="text-lg">📞</span>
              <h3>Call To Us</h3>
            </div>
            <p className="text-gray-600 text-sm mt-2">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-700 font-medium mt-1">Phone: +8801777772222</p>
          </div>
          
          {/* Write To Us */}
          <div>
            <div className="flex items-center gap-3 text-red-500 font-semibold">
              <span className="text-lg">✉️</span>
              <h3>Write To Us</h3>
            </div>
            <p className="text-gray-600 text-sm mt-2">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-gray-700 font-medium mt-1">Email: customer@exclusive.com</p>
            <p className="text-gray-700 font-medium">Email: support@exclusive.com</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="w-full md:w-2/3 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Your Name *" className="p-3 border border-gray-300 rounded w-full" />
            <input type="email" placeholder="Your Email *" className="p-3 border border-gray-300 rounded w-full" />
            <input type="text" placeholder="Your Phone *" className="p-3 border border-gray-300 rounded w-full" />
          </div>
          <textarea placeholder="Your Message" className="p-3 border border-gray-300 rounded w-full h-32 mt-4"></textarea>
          <button className="bg-red-500 text-white px-6 py-3 mt-4 rounded shadow hover:bg-red-600">Send Message</button>
        </div>
      </div>
    );
  }
  