import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import BlogDetails from './BlogDetails';
import AddBlogs from './AddBlogs';
import NotFound from './NotFound';


const Rout = () => {
    return ( 
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blogs/:id' element={<BlogDetails/>}/>
                <Route path='/addblogs' element={<AddBlogs/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
     );
}
 
export default Rout;