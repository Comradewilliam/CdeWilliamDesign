import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  const navigate = useNavigate();

  const handleReset = () => {
    resetErrorBoundary();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <pre className="text-sm bg-gray-100 p-4 rounded mb-4 overflow-auto">
          {error.message}
        </pre>
        <div className="flex gap-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Reload page
          </button>
        </div>
      </div>
    </div>
  );
}

export function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset app state here if needed
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
} 