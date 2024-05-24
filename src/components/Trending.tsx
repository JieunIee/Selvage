'use client'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';
import usePosts from '@/hooks/posts';
import { SimplePost } from '@/model/post';

export default function Trending() {
  const { posts, isLoading: loading } = usePosts();
  const [trendingPosts, setTrendingPosts] = useState<SimplePost[]>([]);

  useEffect(() => {
    if (posts) {
      const sorted = [...posts].sort((a, b) => b.likes.length - a.likes.length);
      const trending = sorted.slice(0, 5);
      setTrendingPosts(trending);
    }
  }, [posts]);

return (
  <div>
    {loading && (
      <div className="text-center">
        <GridSpinner />
      </div>
    )}
    <Swiper
      speed={1000}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      mousewheel={{invert:true}}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper w-{750px} pt-20 pb-20 flex justify-center"
    >
      {trendingPosts && (
        <>
          {
            trendingPosts.map((post, index) => (
              <SwiperSlide key={post.id}>
                <PostListCard post={post} priority={index < 2} />
              </SwiperSlide>
            ))}
        </>
      )}
    </Swiper>
  </div>
);
}
