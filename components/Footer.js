import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import config from "@/config";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Left Section - Logo & About */}
          <div className="md:w-1/3 text-center md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <span className="text-2xl font-extrabold text-blue-700">
                ExploreBangladesh
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Explore Bangladesh is your travel companion for discovering
              beautiful destinations like Sylhet, Cox’s Bazar, Sundarbans, and
              many more. We provide guides, cost estimates, and tips for every
              traveler.
            </p>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="p-2 bg-pink-500 rounded-full text-white hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="p-2 bg-sky-500 rounded-full text-white hover:bg-sky-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="font-semibold text-gray-800 text-sm mb-3 tracking-wider">
              QUICK LINKS
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {config.mailgun.supportEmail && (
                <a
                  href={`mailto:${config.mailgun.supportEmail}`}
                  target="_blank"
                  className="hover:text-blue-600 transition"
                >
                  Support
                </a>
              )}
              <Link href="/#pricing" className="hover:text-blue-600 transition">
                Pricing
              </Link>
              <Link href="/blog" className="hover:text-blue-600 transition">
                Blog
              </Link>
              <a href="/#" className="hover:text-blue-600 transition">
                Affiliates
              </a>
            </div>
          </div>

          {/* Right Section - Legal */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="font-semibold text-gray-800 text-sm mb-3 tracking-wider">
              LEGAL
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <Link href="/tos" className="hover:text-blue-600 transition">
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-blue-600 transition"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} ExploreBangladesh —
            All rights reserved
          </p>
          <p className="mt-1 text-xs">
            Designed with ❤️ for travelers exploring the beauty of Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
