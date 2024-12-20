
import { useParams ,useLoaderData} from 'react-router-dom';

export default function BlogArticle(){
    const  { blogId }   = useParams();

    const jsonData:any=useLoaderData();
    const blogData:any =jsonData[Number(blogId)-1];

    return (
        <>
            <h2>{blogData.title}</h2>
            <p>{blogData.date}</p>
            <p>{blogData.summary}</p>
            <div dangerouslySetInnerHTML={{ __html:blogData.content}}/>             
        </>
);
}
