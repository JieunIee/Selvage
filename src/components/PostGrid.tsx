'use client'
import usePosts from '@/hooks/posts';
import PostGridCard from './PostGridCard';
import GridSpinner from './ui/GridSpinner';

export default function PostGrid() {
  const { posts, isLoading } = usePosts();

  return (
    <div className='w-full text-center'>
      {isLoading && <GridSpinner />}
      <ul className='grid grid-cols-3 gap-4 py-4 px-8'>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <PostGridCard post={post} priority/>
            </li>
          ))}
      </ul>
    </div>
  );
}
