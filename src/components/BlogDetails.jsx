import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Navigate } from "react-router-dom";

const BlogDetails = () => {
    const{id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method : 'DELETE'
        }).then(()=>{
            navigate('/')
            console.log('first')
        })
    }
    return ( 
        <div className="bd">
            {isPending && <div> Loading.. </div>}
            {error && <div>{error} </div>}
            {blog && <article className="art">
                <h2>{blog.title}</h2>
                <p>Written by <strong>{blog.author}</strong></p>
                <p>{blog.body}</p>
                
            </article> }
            <button onClick={handleClick}>Delete Blog</button>
            
        </div>
     );
}
 
export default BlogDetails;