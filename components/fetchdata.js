import React,{useState, useEffect} from "react"
import axios from "axios";

const FetchData = props => {
    const [post, setPost] = useState([]);
    useEffect(() => {
      
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          console.log(res);
          setPost(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    return (
      <div>
        <ul>
          {post.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  };
  export default FetchData;
  