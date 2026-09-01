import React, { useEffect } from 'react';

interface ElfsightWidgetProps {
  appId: string; // e.g. "elfsight-app-7aca8dc9-773c-4349-b6ac-62598de072a4" or "elfsight-app-54299f9d-1232-4d63-99ae-784e7f0e55f2"
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const ElfsightWidget: React.FC<ElfsightWidgetProps> = ({
  appId,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
}) => {
  useEffect(() => {
    // Ensure Elfsight script is present in the DOM
    const scriptSrc = 'https://elfsightcdn.com/platform.js';
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [appId]);

  return (
    <div className={`w-full ${className}`}>
      <div className={appId} data-elfsight-app-lazy />
    </div>
  );
};
