
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-6">{"We couldn't find the page you were looking for."}</p>
            <Link
                href="/"
                className='hover:underline'
            >
                Go to Home
            </Link>
        </main>
    );
}
