import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import Post from "../components/Post";

let myPosts = [
  {
    id: 0,
    title: "Post 1",
    description: "Description post 1",
    liked: false,
    likes: 0,
  },
  {
    id: 1,
    title: "Post 2",
    description: "Description post 2",
    liked: false,
    likes: 0,
  },
  {
    id: 2,
    title: "Post 3",
    description: "Description post 3",
    liked: false,
    likes: 0,
  },
  {
    id: 3,
    title: "Post 4",
    description: "Description post 4",
    liked: false,
    likes: 0,
  },
  {
    id: 4,
    title: "Post 5",
    description: "Description post 5",
    liked: false,
    likes: 0,
  },
  {
    id: 5,
    title: "Post 6",
    description: "Description post 6",
    liked: false,
    likes: 0,
  },
  {
    id: 6,
    title: "Post 7",
    description: "Description post 7",
    liked: false,
    likes: 0,
  },
  {
    id: 7,
    title: "Post 8",
    description: "Description post 8",
    liked: false,
    likes: 0,
  },
  {
    id: 8,
    title: "Post 9",
    description: "Description post 9",
    liked: false,
    likes: 0,
  },
];

const Posts = () => {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  // const handleLoad = () => {
  //   let cLoaded = !loaded;
  //   setLoaded(cLoaded);
  //   console.log(loaded);
  // };

  const getData = () => {
    setPosts(myPosts);
  };

  var valor;
  if (loaded !== true) {
    valor = <div>Post will be here</div>;
  } else {
    valor = (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div>
      {!loaded ? (
        <Spinner animation="border" />
      ) : (
        posts.map((post) => {
          return (
            <Post title={post.title} description={post.description}></Post>
          );
        })
      )}
    </div>
  );
};

export default Posts;
