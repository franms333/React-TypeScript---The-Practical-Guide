import { ReactNode, useEffect, useState } from "react";
import { get } from "./http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from './assets/data-fetching.png';
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id:number;
  userId:number;
  title:string;
  body:string;
}

function App() {
  const [fetchPosts, setFetchPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(()=>{    
    async function fetchPosts(){
      setIsFetching(true);
      try {
        const data = (await get('https://jsonplaceholder.typicode.com/posts/')) as RawDataBlogPost[];

        const blogPosts:BlogPost[] = data.map((rawPost)=>{
          return {
            id:rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        })
        setFetchPosts(blogPosts);
      } catch (error) {
        if(error instanceof Error){
          setError(error.message)
        }
      }     
      setIsFetching(false);      
    }    
    fetchPosts();
  },[]);

  let content:ReactNode;

  if(error){
    content = <ErrorMessage text={error}/>
  }

  if(fetchPosts){
    content = <BlogPosts posts={fetchPosts}/>
  }

  if(isFetching) {
    content = <p className="loading-fallback">Fetching Posts...</p>
  }

  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data" />
      {content}
    </main>
  );
}

export default App;
