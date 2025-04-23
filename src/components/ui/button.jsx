export function Button({ children, onClick, variant = "default" }) {
    const styles = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 dark:text-white dark:border-gray-600",
    };
  
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-medium transition ${styles[variant]}`}
      >
        {children}
      </button>
    );
  }
  