import { NavLink } from "react-router";


export default function HeaderNav (){

    return (
       <nav>
        <NavLink to='../'>HOME</NavLink>
        <NavLink to='../about'>ABOUT</NavLink>
        <NavLink to='../news'>NEWS</NavLink>
        <NavLink to='../blog'>BLOG</NavLink>
       </nav>
        )
};