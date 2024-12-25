import { NavLink } from 'react-router-dom';
import {jsxBlogData} from '../../public/blogData/blogData'


export default function BlogNav () {
    const blogArray=jsxBlogData.map((blogData)=>{
        const blogId:number=Number(blogData.id);
        
        return (
            <li>
                <NavLink to={`/blog/${blogId}`}>{blogId}</NavLink>
            </li>
        );
    })

    return(
        <nav>
            <ul>
            {blogArray}
            </ul>
       </nav>
    )
};