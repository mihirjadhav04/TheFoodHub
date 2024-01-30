import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
 
const About = () => {
    return ( 
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>The only thing we are serious about is food.</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ad ipsam quod quas quis non porro, velit ut doloremque a, sint molestias et. Accusantium sequi laborum earum, reiciendis exercitationem corporis vero quisquam totam hic placeat perferendis laudantium, laboriosam ullam incidunt quia, neque ex id sint quo. Modi ea laboriosam natus.
                    </p>
                    <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight /></span></Link>
                </div>
                <div className="banner">
                    <img src="./about.png" alt="about" />
                </div>
            </div>
        </section>
     );
}
 
export default About;