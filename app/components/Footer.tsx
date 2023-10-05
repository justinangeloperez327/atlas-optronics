import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Contact Us</p>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Follow Us</p>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-center">
          &copy; {new Date().getFullYear()} Atlas Optronics. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
