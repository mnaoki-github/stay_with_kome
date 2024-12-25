
import { useParams } from 'react-router-dom';
import {jsxBlogData} from '../../public/blogData/blogData'
import BlogNav from './blog_nav'

export default function BlogArticle(){
    const  { blogId }   = useParams();

    const blogData:any =jsxBlogData[Number(blogId)-1]

    return (
        <> 
            <BlogNav/>
            <h2>{blogData.title}</h2>
            <p>ID:{blogData.id}</p>
            <p>{blogData.date}</p>
            <p>{blogData.summary}</p>
            <div dangerouslySetInnerHTML={{ __html:blogData.content}}/>             
        </>
);
}
