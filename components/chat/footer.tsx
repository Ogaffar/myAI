import { FOOTER_MESSAGE } from "@/configuration/ui";
import Link from "next/link";

export default function ChatFooter() {
  return (
    <footer className="w-full py-3 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <div className="order-2 sm:order-1">
            <Link 
              href="/terms" 
              className="hover:text-gray-700 hover:underline transition-colors"
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
            <span className="mx-2 hidden sm:inline">•</span>
            <Link 
              href="/privacy" 
              className="hover:text-gray-700 hover:underline transition-colors hidden sm:inline"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
          </div>
          
          <div className="order-1 sm:order-2 text-center">
            {FOOTER_MESSAGE}
          </div>
          
          <div className="order-3 text-right">
            {/* Do not remove or modify the following message. Removal or modification violates the license agreement. */}
            <a
              href="http://www.ringel.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition-colors flex items-center justify-end gap-1"
              aria-label="Powered by ringel.AI"
            >
              <span>powered by</span>
              <span className="font-medium">ringel.AI</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
