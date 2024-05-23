'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';
import usePosts from '@/hooks/posts';

export default function Trending() {
    const { posts, isLoading: loading } = usePosts();
    const sort = posts && 
              (posts.sort(function (comp1, comp2) {
              var comp1UC = comp1.likes.length;
              var comp2UC = comp2.likes.length;
              if (comp1UC < comp2UC) {
                return -1;
              } else if (comp1UC > comp2UC) {
                return 1;
              }
              return 0;
            }))
      const trending = sort?.splice(sort.length-5)
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
      {posts && (
        <>
          {
            trending?.map((post, index) => (
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
