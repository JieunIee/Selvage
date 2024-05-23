import dynamic from 'next/dynamic';

const GridLoader = dynamic(
  () => import('react-spinners').then((lib) => lib.HashLoader),
  {
    ssr: false,
  }
);

type Props = {
  color?: string;
};
export default function GridSpinner({ color = '#00FFFF' }: Props) {
  return <GridLoader color={color} className='top-[50%] left-[50%]'/>;
}
