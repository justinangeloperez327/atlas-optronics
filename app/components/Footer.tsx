import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="flex w-full justify-center">
          {" "}
          {/* Center the links */}
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
        <p className="mt-4 text-center">
          &copy; {new Date().getFullYear()} Atlas Optronics. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
