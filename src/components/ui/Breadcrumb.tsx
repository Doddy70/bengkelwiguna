import Link from "next/link";
import { ChevronRight  } from 'react-feather';

interface BreadcrumbProps {
    items: { label: string; href?: string }[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <nav className="text-sm font-medium text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => (
                    <li key={index} className="inline-flex items-center text-base font-medium">
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="inline-flex items-center text-gray-500 hover:text-gray-700"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-700 items-center flex">{item.label}</span>
                        )}

                        {index < items.length - 1 && (
                            <ChevronRight size={20} className="ml-2"/>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};
