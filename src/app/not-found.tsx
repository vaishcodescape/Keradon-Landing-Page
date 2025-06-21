import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-muted-foreground mb-8">Page not found</p>
        <Link 
          href="/" 
          className="text-primary hover:underline"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
} 