import React, { useEffect } from 'react';

interface ElfsightWidgetProps {
  appId: string; // e.g. "elfsight-app-5e313753-351d-484c-ad1c-2c07dfd07fd3" or "elfsight-app-add898e2-60fb-44f2-af34-f3ba3bd66494"
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
