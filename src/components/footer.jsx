import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="footer-column">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="" className="hover:text-gray-400">Our Story</a></li>
              <li><a href="" className="hover:text-gray-400">Meet the Team</a></li>
              <li><a href="" className="hover:text-gray-400">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="" className="hover:text-gray-400">Shipping & Delivery</a></li>
              <li><a href="" className="hover:text-gray-400">Returns & Refunds</a></li>
              <li><a href="" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="https://www.twitter.com" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="https://www.instagram.com" className="hover:text-gray-400">Instagram</a></li>
              <li><a href="https://www.linkedin.com" className="hover:text-gray-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2024 Zarr. All rights reserved.</p>
          <p>
            <a href="" className="hover:text-gray-400">Privacy Policy</a> |
            <a href="" className="hover:text-gray-400"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
