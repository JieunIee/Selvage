import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 3,
  },
};

export default function ScrollableBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel containerClass='w-full flex gap-1' responsive={responsive} draggable={true} arrows={false}>
      {children}
    </Carousel>
  );
}
