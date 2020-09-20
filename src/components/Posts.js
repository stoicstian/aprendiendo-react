import React, { useState, useEffect } from "react";
import { Button, Spinner, Alert } from "react-bootstrap";
import Post from "../components/Post";
import axios from "axios";

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
  const [visible, setVisible] = useState(4);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();

    // setTimeout(() => {
    //   setLoaded(true);
    // }, 2000);
  }, []);
  // const handleLoad = () => {
  //   let cLoaded = !loaded;
  //   setLoaded(cLoaded);
  //   console.log(loaded);
  // };

  const getData = () => {
    setPosts(myPosts);
    const url = "https://randomuser.me/api/?results=9";
    axios
      .get(url)
      .then((res) => {
        let data = res.data.results;
        data.forEach((item, index) => {
          item["id"] = index;
        });
        // setUsers(res.data.results);
        setUsers(data);
        console.log(data);
      })
      .then(() => setLoaded(true))
      .catch((err) => console.log("ups.. we have and error: ", err));
  };

  const handleShowMorePosts = () => {
    setVisible(visible + 3);
  };

  const handleLike = (id) => {
    const cposts = [...posts];
    cposts.forEach((post) => {
      if (post.id === id) {
        if (post.liked) {
          post.liked = false;
          post.likes -= 1;
        } else {
          post.liked = true;
          post.likes += 1;
        }
      }
    });
    setPosts(cposts);
  };

  const handleDeletePost = (id) => {
    const cposts = posts.filter((post) => post.id !== id);
    const cusers = users.filter((user) => user.id !== id);
    setPosts(cposts);
    setUsers(cusers);
  };

  // var valor;
  // if (loaded !== true) {
  //   valor = <div>Post will be here</div>;
  // } else {
  //   valor = (
  //     <Spinner animation="border" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </Spinner>
  //   );
  // }

  return (
    <div className="mt-3 mb-3">
      {loaded && posts.length > 0 && (
        <Alert variant="success">All posts are loaded</Alert>
      )}
      {!loaded ? (
        <Spinner animation="border" />
      ) : (
        posts.slice(0, visible).map((post, index) => {
          return (
            <Post
              key={post.id}
              index={index}
              users={users}
              title={post.title}
              description={post.description}
              likes={post.likes}
              liked={post.liked}
              likePost={() => handleLike(post.id)}
              delete={() => handleDeletePost(post.id)}
            ></Post>
          );
        })
      )}
      <br />
      {loaded && posts.length <= visible ? (
        posts.length > 0 ? (
          <h3>No more posts to load</h3>
        ) : (
          <h3>No posts here</h3>
        )
      ) : (
        loaded && (
          <Button onClick={handleShowMorePosts} variant="warning">
            {" "}
            Load more posts
          </Button>
        )
      )}
    </div>
  );
};

export default Posts;
