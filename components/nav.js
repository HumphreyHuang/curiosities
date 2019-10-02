import Link from 'next/link';

export default function Nav() {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/curiosity">
                <a>Curiousity</a>
            </Link>
            <Link href="/opportunity">
                <a>opportunity</a>
            </Link>
            <Link href="/spirit">
                <a>spirit</a>
            </Link>
            <Link href="/apod">
                <a>Astronomy Picture of the Day</a>
            </Link>
            <style jsx>{``}</style>
        </div>
    );
}
