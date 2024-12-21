
// import { useParams ,useLoaderData} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {jsxBlogData} from '../../public/blogData/blogData'

export default function BlogArticle(){
    const  { blogId }   = useParams();

    // const jsonData:any=useLoaderData();
    // const blogData:any =jsonData[Number(blogId)-1];
    const blogData:any =jsxBlogData[Number(blogId)-1]

    return (
        <>
            <h2>{blogData.title}</h2>
            <p>{blogData.date}</p>
            <p>{blogData.summary}</p>
            <div dangerouslySetInnerHTML={{ __html:blogData.content}}/>             
        </>
);
}
