import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Code Challenge</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a><Link to='/'>Home</Link></a></li>
                    <li><a><Link to='/users'>Users</Link></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
