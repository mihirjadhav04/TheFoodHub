import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const NotFound = () => {
    return ( 
        <>
            <section className="notFound">
                <div className="container">
                    <img src="/notFound.svg" alt="notFound" />
                    <h1>LOOK'S LIKE YOU ARE LOST !!</h1>
                    <p>We couldn't find your page.</p>
                    <Link 
                    to={"/"}
                    >
                        Back To Home <span> <HiOutlineArrowNarrowRight /></span>
                    </Link>
                </div>
            </section>
        </>
     );
}
 
export default NotFound;