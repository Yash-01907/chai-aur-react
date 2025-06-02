import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home({ authentication }) {
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);
  // useEffect(()=>{
  //     appwriteService.getPosts().then((posts)=>{
  //         if(posts){
  //             setPosts(posts.documents)
  //         }
  //     }).catch((error)=>{
  //         console.error("Error fetching posts:", error);
  //     })
  // },[])
  const isLoggedIn = authentication
    ? authStatus === authentication
    : authStatus;

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((res) => {
        if (res && Array.isArray(res.documents)) {
          setPosts(res.documents);
        } else {
          setPosts([]); // fallback to empty array
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setPosts([]); // also set empty array on failure
      });
  }, []);

  if (posts.length === 0) {
    if (isLoggedIn) {
      return (
        <div className="py-8">
          <Container>
            <h1 className="text-2xl font-bold">No posts available</h1>
          </Container>
        </div>
      );
    } else {
      return (
        <div className="py-8">
          <Container>
            <h1 className="text-2xl font-bold">Please login to view posts</h1>
          </Container>
        </div>
      );
    }
  }

  return  (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.length > 0 &&
            posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                {/* <PostCard post={post} /> */}
                <PostCard {...post} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  ) 
}

export default Home;
