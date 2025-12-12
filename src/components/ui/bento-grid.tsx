import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
  columns = 2,
}: {
  className?: string;
  children?: React.ReactNode;
  columns?: 1 | 2 | 3;
}) => {
  const gridClasses = cn(
    "mx-auto grid w-full max-w-7xl gap-6 px-4", // Increased gap from gap-4 to gap-6
    {
      'grid-cols-1': columns === 1,
      'grid-cols-1 sm:grid-cols-2': columns === 2,
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': columns === 3,
    },
    className
  );

  return (
    <div className="w-full">
      <div className={gridClasses}>
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  span = 1,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  span?: 1 | 2 | 3;
}) => {
  return (
    <div
      className={cn(
        "group/bento flex h-full flex-col justify-between overflow-hidden rounded-none border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md",
        {
          "sm:col-span-1 lg:col-span-1": span === 1,
          "sm:col-span-2 lg:col-span-2": span === 2,
          "sm:col-span-2 lg:col-span-3": span === 3,
        },
        className
      )}
    >
      {header && (
        <div className="mb-4 w-full overflow-hidden rounded-lg">
          {header}
        </div>
      )}
      <div className="flex h-full flex-col justify-between">
        <div>
          {icon && <div className="mb-3">{icon}</div>}
          {title && (
            <h3 className="mb-2 text-base font-semibold text-neutral-800 md:text-lg">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm text-neutral-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
