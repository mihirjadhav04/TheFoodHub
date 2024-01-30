import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from 'axios';
import { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    
    
    const [ firstname, setFirstName ] = useState("");
    const [ lastname, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState(0);

    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post( 
                "http://localhost:8000/api/v1/reservation/send",
                { 
                    firstname,
                    lastname,
                    email,
                    phone
                },
                {
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    withCredentials: true
                }
                
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            navigate("/success")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }


    return ( 
        <section className="reservation">
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                    <h1>MAKE A RESERVATION</h1>
                    <p>For Further Questions, Please Call!</p>
                    <form >
                        <div>
                            <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                            <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                            
                        </div>
                        <div>
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div>
                        <button type="submit" onClick={handleReservation}>RESERVE NOW { " " } <span> < HiOutlineArrowNarrowRight /> </span></button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Reservation;