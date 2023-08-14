import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    return ( 
        <div className="bloglist">
            {blogs.map((blog)=>(
                <Link to={`/blogs/${blog.id}`} className="bl">
                    <div className="blog-preview">
                        <h2>{blog.title}</h2>
                        <div>This blog is written by <strong>{blog.author}</strong></div>
                    </div>
                        
                </Link>
            ))}
        </div>
     );
}
 
export default BlogList;
