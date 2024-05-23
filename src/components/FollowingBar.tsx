'use client';
import useMe from '@/hooks/me';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';
import Avatar from './Avatar';
import ScrollableBar from './ui/ScrollableBar';

export default function FollowingBar() {
  const { user, isLoading: loading, error } = useMe();
  const users = user?.following;
  return (
    <section className='w-[230px] flex justify-center items-center overflow-x-auto relative z-0'>
      {loading ? (
        <PropagateLoader size={8} color='red' />
      ) : (
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className='flex flex-col items-center w-[36px]'
              href={`/user/${username}`}
            >
              <Avatar image={image} highlight size='small'/>
              
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
}
