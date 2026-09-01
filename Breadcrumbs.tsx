import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useNavigation();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-8 bg-neutral-100/70 border-b border-neutral-200/60 text-xs">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap text-neutral-600">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="hover:text-[#D72229] transition-colors flex items-center gap-1 font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </a>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-neutral-400 shrink-0" />
              {isLast || !item.path ? (
                <span className="text-neutral-900 font-bold truncate max-w-xs">{item.label}</span>
              ) : (
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.path!);
                  }}
                  className="hover:text-[#D72229] transition-colors font-medium"
                >
                  {item.label}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
