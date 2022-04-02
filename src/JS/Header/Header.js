import { Link } from 'react-router-dom';


export default function Header(props) {
    const { homeLogo } = props;
    return (
        <div >
            <img src={homeLogo} />
            <div>
                <Link to='/'>home</Link>
                <Link to='/travel'>travel</Link>
                <Link to='/news'>news</Link>
                <Link to='/knowledge'>knowledge</Link>
            </div>
        </div>
    );
}