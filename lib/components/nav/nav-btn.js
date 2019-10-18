import React from 'react';

import Link from 'next/link';
import { withRouter } from 'next/router';

const NavBtn = ({ router, path, label }) => {
    return (
        <React.Fragment>
            <Link href={path}>
                <a
                    className={
                        router.pathname === path ? 'active' : '' ? 'active' : ''
                    }
                >
                    {label}
                </a>
            </Link>

            <style jsx>{`
                font-size: 15px;
                color: #666;
                a:hover {
                    color: #000;
                }
                .active {
                    color: #000;
                }
            `}</style>
        </React.Fragment>
    );
};

export default withRouter(NavBtn);
