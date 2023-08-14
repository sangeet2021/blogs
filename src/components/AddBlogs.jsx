import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddBlogs = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setIsPending(false);
            navigate('/');
        })
    }

    return ( 
        <div className="add-blogs">
            <h2>Add a new blog!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title:</label>
                <input  type="text" 
                        required value={title} 
                        onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor="">Blog Body:</label>
                <textarea 
                        required 
                        value={body} 
                        onChange={(e)=>setBody(e.target.value)}></textarea>
                <label htmlFor="">Blog Author:</label>
                <input  type="text" 
                        required value={author} 
                        onChange={(e)=>setAuthor(e.target.value)} />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div>
     );
}
 
export default AddBlogs;