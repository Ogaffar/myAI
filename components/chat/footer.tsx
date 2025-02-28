import { FOOTER_MESSAGE } from "@/configuration/ui";
import Link from "next/link";

export default function ChatFooter() {
  return (
    <footer className="w-full py-4 border-t border-gray-200 mt-auto bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          {/* Legal Links */}
          <nav className="order-2 sm:order-1 flex items-center space-x-4">
            <Link 
              href="/terms" 
              className="hover:text-gray-700 hover:underline transition-colors"
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
            
            <Link 
              href="/privacy" 
              className="hover:text-gray-700 hover:underline transition-colors"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
          </nav>
          
          {/* Custom Footer Message */}
          <div className="order-1 sm:order-2 text-center my-2 sm:my-0">
            <p>{FOOTER_MESSAGE}</p>
          </div>
          
          {/* Brand Attribution */}
          <div className="order-3 text-right">
            {/* Do not remove or modify the following message. Removal or modification violates the license agreement. */}
            <a
              href="https://www.ringel.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors flex items-center justify-end gap-1 group"
              aria-label="Powered by ringel.AI"
            >
              <span>powered by</span>
              <span className="font-medium group-hover:text-blue-600 transition-colors">ringel.AI</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
