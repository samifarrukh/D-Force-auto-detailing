import React from 'react';

interface SectionHeadingProps {
  titlePrefix?: string;
  highlightText?: string;
  titleSuffix?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  titlePrefix = '',
  highlightText = '',
  titleSuffix = '',
  subtitle,
  align = 'center',
  className = '',
  id,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      id={id}
      className={`mb-8 sm:mb-12 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left'} ${className}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#141414] leading-tight">
        {titlePrefix && <span>{titlePrefix} </span>}
        {highlightText && <span className="text-[#D72229]">{highlightText} </span>}
        {titleSuffix && <span>{titleSuffix}</span>}
      </h2>
      
      {/* Decorative accent divider line */}
      <div className={`mt-3 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-8 h-0.5 bg-[#D72229]" />
        <div className="w-2 h-0.5 bg-[#D72229]/40" />
      </div>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-neutral-600 font-medium italic">
          {subtitle}
        </p>
      )}
    </div>
  );
};
