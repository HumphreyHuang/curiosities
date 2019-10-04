import NavBtn from './nav-btn';

const NavBar = props => (
    <div>
        {props.links.map(({ path, label }) => (
            <NavBtn path={path} label={label} />
        ))}

        <style jsx>{`
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            align-items: center;
            height: 64px;
            padding: 0 10px;
        `}</style>
    </div>
);

export default NavBar;
