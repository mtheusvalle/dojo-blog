import React, { useState } from 'react';
import BlogList from '../BlogList';
import './index.css';

const HomePage = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/>
        </div>
     );
}
 
export default HomePage;