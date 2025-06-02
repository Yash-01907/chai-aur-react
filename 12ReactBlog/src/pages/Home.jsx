import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
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

  // if(posts.length === 0) {
  //     return (
  //         <div className="py-8">
  //             <Container>
  //                 <h1 className="text-2xl font-bold">No posts available</h1>
  //             </Container>
  //         </div>
  //     )
  // }
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

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              {/* <PostCard post={post} /> */}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
