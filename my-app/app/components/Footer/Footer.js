import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return(
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">

        {/* Bottom Section */}
        <div className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.
        </div>
      </div>
    </footer>
  )

}

export default Footer