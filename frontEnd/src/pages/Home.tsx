import Navbar from "@/components/custom/navbar"
import FlyingToFrom from "@/components/custom/flyingToFrom"
import Postcard from "@/components/custom/postcard"
const Home = () => {

  const posts = [
    {
      userName: "Ayman",
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
      <FlyingToFrom/>
      {posts.map((post, index) => (
        <Postcard key={index} {...post} />
      ))}
    </div>
    </>
  )
}

export default Home