import Navbar from "@/components/custom/navbar"
import FlyingToRequestingFrom from "@/components/custom/flyingToRequestingFrom"
import Postcard from "@/components/custom/postcard"
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';
import { useState, useEffect } from 'react';
import { getAllPostcardsExceptMine } from "@/services/postcardService";

interface Post {
  id: number
  userName: string
  userInitial: string
  location: string
  requestingFromCountry: string
  text: string
  imageURL: string
  commentCount: number
}

const Home = () => {
  const {user} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user?.id) return;
      
      try {
        setIsLoading(true);
        setError(null);
        const data = await getAllPostcardsExceptMine(parseInt(user.id));
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load posts');
        console.error('Error fetching posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []); // Re-fetch if user id changes

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center mt-20 space-y-4 gap-6">
      <h1>{user?.email}</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <FlyingToRequestingFrom/>

      {isLoading && (
        <div className="text-neutral-600 dark:text-neutral-400">Loading posts...</div>
      )}

      {error && (
        <div className="text-red-500 dark:text-red-400">Error: {error}</div>
      )}

      {!isLoading && !error && posts.length === 0 && (
        <div className="text-neutral-600 dark:text-neutral-400">No posts available</div>
      )}

      {posts.map((post) => (
        <Postcard key={post.id} {...post} />
      ))}
    </div>
    </>
  )
}

export default Home