import PostGrid from "./PostGrid";
import Trending from "./Trending";

export default function MainPage() {
 
return <>
<h2 className='text-3xl font-bold'>#trending</h2>
<Trending/>
<h2 className='text-3xl font-bold'>#new</h2>
<PostGrid/>
</>
}