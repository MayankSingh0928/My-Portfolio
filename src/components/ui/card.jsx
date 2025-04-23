export function Card({ children }) {
    return <div className="rounded-2xl shadow bg-white dark:bg-gray-800">{children}</div>;
  }
  
  export function CardContent({ children, className = "" }) {
    return <div className={`p-6 ${className}`}>{children}</div>;
  }
  