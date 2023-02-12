import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <li><Link to="/working">hi</Link></li>
            <button onClick={help()}>shit</button>
        </>
    );

    function help() {
        return <Link to="/working"></Link>
    }
}