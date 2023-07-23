import { Link, Outlet} from "react-router-dom"

export const About = () =>{
    return (
        <main>
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed, quod quos aliquid earum dolores, maxime eius assumenda porro omnis dignissimos, accusantium sunt suscipit 
                voluptas aut possimus. Voluptates, deserunt minima.
            </p>
            <ul>
                <li>
                    <Link to='mission'>Read about our mission</Link>
                </li>
                <li>
                    <Link to='team'>Get to know the Team</Link>
                </li>
                <li>
                    <Link to='reviews'>Go through the reviews</Link>
                </li>
            </ul>
            <Outlet />
        </main>
    )
}