"use client";

import { useState } from "react";
import { Citation } from "@/types";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { EMPTY_CITATION_MESSAGE } from "@/configuration/ui";
import { ExternalLink } from "lucide-react";

interface CitationCircleProps {
  number: number;
  citation: Citation;
}

export function CitationCircle({ number, citation }: CitationCircleProps) {
  const [open, setOpen] = useState(false);
  
  const isValidUrl = (url: string): boolean => {
    try {
      return Boolean(new URL(url));
    } catch {
      return false;
    }
  };
  
  const hasSourceUrl = citation.source_url ? isValidUrl(citation.source_url) : false;
  const hasSourceDescription = citation.source_description?.trim() !== "";
  const showEmptyMessage = !hasSourceUrl && !hasSourceDescription;
  
  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <button
            className="bg-gray-50 rounded-full px-2 py-0.5 hover:bg-gray-100 transition-all duration-200 hover:scale-105 inline-flex items-center justify-center min-w-6 text-sm"
            onClick={() => setOpen(true)}
            aria-label={`Citation ${number}`}
          >
            {number}
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" align="center" className="z-50">
          <div className="bg-white p-3 rounded-md shadow-md border border-gray-200 max-w-xs">
            {hasSourceUrl && (
              <div className="flex items-start gap-1">
                <ExternalLink className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                <Link
                  href={citation.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  {citation.source_description || citation.source_url}
                </Link>
              </div>
            )}
            
            {!hasSourceUrl && hasSourceDescription && (
              <p className="text-sm text-gray-700">{citation.source_description}</p>
            )}
            
            {showEmptyMessage && (
              <p className="text-sm text-gray-500 italic">{EMPTY_CITATION_MESSAGE}</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
