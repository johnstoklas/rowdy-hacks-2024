import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./index.scss"
import Loader from "react-loaders"

const Health = () => {

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <p>
                    I'm a sophomore at Trinity, starting to look for internship 
                    opportunities in the technology sector. As a computer sciences 
                    major, I see myself closing the gap between different mathematical 
                    fields and their ability to optimise algorithms used by the financial 
                    sector.
                </p>
                <p>
                    As such, I've taken multiple higher level mathematics classes, 
                    was personally selected to be a peer tutor for upper-division 
                    mathematics (calculus/linear algebra), and clinched second place 
                    for our region within the International Collegiate Programming 
                    Competition: Division II (ICPC 2024: Houston). 
                </p>
                <p>
                    Now, I see myself applying that experience at companies that seek
                    math-oriented computer programmers.
                </p>
            </div>
        </div>
        <Loader type="ball-pulse" />
        </>
    )
}

export default Health