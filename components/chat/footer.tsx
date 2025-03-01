import { FOOTER_MESSAGE } from "@/configuration/ui";
import Link from "next/link";

export default function ChatFooter() {
  return (
    <div className="w-full text-xs flex pt-2 text-gray-500">
      <div className="flex-grow text-left">
        {/* Left Pane */}
        <Link 
          href="/terms" 
          className="hover:underline hover:text-gray-700 transition-colors"
          aria-label="Terms of Service"
        >
          Terms of Service
        </Link>
      </div>

      <div className="flex-grow text-center">
        {/* Center Pane */}
        {FOOTER_MESSAGE}
      </div>

      <div className="flex-grow text-right">
        {/* Right Pane */}
        {/* Do not remove or modify the following message. Removal or modification violates the license agreement. */}
        <a
          href="https://www.ringel.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 transition-colors inline-flex items-center justify-end gap-1"
          aria-label="Powered by ringel.AI"
        >
          <span>powered by</span>
          <span className="font-medium">ringel.AI</span>
        </a>
      </div>
    </div>
  );
}
