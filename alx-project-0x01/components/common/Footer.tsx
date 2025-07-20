// components/layout/Footer.tsx

import React from "react";

const Footer: React.FC = () => (
    <footer className="w-full bg-gray-200 py-4 mt-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <span className="text-gray-700 text-sm">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </span>
            <a
                href="https://your-company-website.example.com"
                className="text-blue-600 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit us
            </a>
        </div>
    </footer>
);

export default Footer;
