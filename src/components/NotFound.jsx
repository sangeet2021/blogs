import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="nf">
            <p>Sorry, this page does not exist.</p>
            <Link to='/'>Back to HomePage</Link>
        </div>
     );
}
 
export default NotFound;