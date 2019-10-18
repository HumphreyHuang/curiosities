import Link from 'next/link';

function Footer() {
    return (
        <div>
            Made with ❤️ by
            <a href="https://github.com/HumphreyHuang/curiosities">
                &nbsp;Humphrey Huang
            </a>
            <style jsx>{`
                color: #fff;
                background: #333;
                width: 100%;
                height: 85px;
                display: flex;
                justify-content: center;
                align-items: center;

                a {
                    width: auto;
                }
            `}</style>
        </div>
    );
}

export default Footer;
