
import MainPage from '@/components/MainPage';


export default async function HomePage() {
  
  return (
    <section className='w-full flex flex-col md:flex-row max-w-[850px] p-4'>
      <div className='w-full min-w-0'>
        <MainPage/>
      </div>
    </section>
  );
}
