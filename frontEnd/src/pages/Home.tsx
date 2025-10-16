import Navbar from "@/components/custom/navbar"
import FlyingToFrom from "@/components/custom/flyingToFrom"
import Postcard from "@/components/custom/postcard"
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';
const Home = () => {

  const {user, isAuthenticated} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  
  const posts = [
    {
      userName: "sdfsfd",
      userInitial: "A",
      location: "Dallas",
      requestingFromCountry: "USA",
      text: "Looking for some cool tech gadgets!",
      imageUrl: "image-url.jpg",
      commentCount: 5
    },
    {
      userName: "Sarah",
      userInitial: "S",
      location: "New York",
      requestingFromCountry: "Canada",
      text: "Anyone bringing maple syrup to NYC?",
      imageUrl: "maple-syrup.jpg",
      commentCount: 2
    },
    {
      userName: "Leo",
      userInitial: "L",
      location: "San Francisco",
      requestingFromCountry: "Japan",
      text: "Looking for exclusive anime merchandise!",
      imageUrl: "anime-merch.jpg",
      commentCount: 7
    }
  ]

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center mt-20 space-y-4 gap-6">
      <h1>{user?.email}</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <FlyingToFrom/>

      {posts.map((post, index) => (
        <Postcard key={index} {...post} />
      ))}
    </div>
    </>
  )
}

export default Home