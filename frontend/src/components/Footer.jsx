import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        {/* About Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a company dedicated to providing the best services and
            products to our customers. Our mission is to make your life easier
            and more enjoyable.
          </p>
        </div>
        {/* Navigation Links */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul>
            <li className="mb-2 text-gray-400">
              <i className="fas fa-map-marker-alt mr-2" />
              1234 Street Name, City, State, 12345
            </li>
            <li className="mb-2 text-gray-400">
              <i className="fas fa-phone mr-2" />
              (123) 456-7890
            </li>
            <li className="mb-2 text-gray-400">
              <i className="fas fa-envelope mr-2" />
              info@example.com
            </li>
          </ul>
        </div>
        {/* Privacy Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">Privacy</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        © 2025 VOX MARKET. All rights reserved.
      </div>
    </div>
  </footer>
      
    </div>
  )
}

export default Footer
