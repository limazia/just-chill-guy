"use client";

import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
}

export function ToolTip({ children, tooltip }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {tooltip ? (
        <div className="relative inline-block">
          <div
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            className="inline-block"
          >
            {children}
          </div>

          {isVisible && (
            <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg -translate-x-1/2 left-1/2 bottom-full mb-2 min-w-max hidden md:block">
              {tooltip}

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-1">
                <div className="border-4 border-transparent border-t-gray-800" />
              </div>
            </div>
          )}
        </div>
      ) : (
        children
      )}
    </>
  );
}
