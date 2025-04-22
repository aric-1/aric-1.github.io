import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-6 mt-8 text-center text-sm text-gray-500 border-t border-gray-200">
      <p>© {new Date().getFullYear()} Aric Shen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;