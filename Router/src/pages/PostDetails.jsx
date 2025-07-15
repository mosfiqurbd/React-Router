import { useParams } from "react-router";
import { useState, useEffect} from "react";

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPosts] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=> res.json())
        .then((data)=>{ 
          setPosts(data)
             setLoading(false);
    });
     
    },[]);
    if(loading) {
        return <h2>Loading.....</h2>
    }

  return (
    <div>
        <h2>PostDetails Page of post id-{id}</h2>
        <h2>Title-{post?.title}</h2>
        <p>Description-{post?.body}</p>
        </div>
  );
};

export default PostDetails;