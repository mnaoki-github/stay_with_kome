
import {lazy,Suspense} from 'react';
import { useParams } from 'react-router-dom';

// import { useLoaderData } from 'react-router-dom';

// export default function BlogArticle (){

//     // const {blogId} = useParams();
//     const getBlogData:any = useLoaderData();
//     const blogData=getBlogData;

//         return (
//             <>
//                 <h2>{blogData.title}</h2>
//                 <h2>{blogData.date}</h2>
//                 <h2>{blogData.content}</h2>
//             </>
//         );
    
// };

export default function BlogArticle(){
    const  { blogId }   = useParams();
    const blogFile ='./blog/blog' + blogId + '.tsx';
    const BlogContent = lazy(() => import(blogFile));
    return (
        <>
        <Suspense fallback={<Loading />}></Suspense>
        <BlogContent />
        </>
);
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
