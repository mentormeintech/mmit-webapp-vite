import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import MenteeSide from '../components/MenteeSide';
import Header_Signin from '../components/Header_Signin';


const Groupsession = () => {
  return (
    <div className="pt-20 mx-3">
      <Header_Signin />
      <div className="flex">
        <MenteeSide />
        <div className='flex flex-col item-center relative ml-72 mt-[4rem]'>
        <p className='text-black text-2xl font-semibold'>Group sessions</p>
        <img
          src='/images/Illustration.png'
          width={200}
          height={100}
          alt='illustration'
          className='w.48 h-48 mt-10'
        ></img>
        <p className='w-52 h-9 mt-7 text-black text-base font-semibold'>
          No group Sessions
        </p>
        <Link to='/findamentor'>
          <button className='w-64 mt-5 h-12 px-4 py-3.5 cursor-pointer bg-sky-600 rounded-lg justify-center items-center gap-2.5 inline-flex'>
            <div className='text-white text-xl font-bold'>
              Browse more mentor
            </div>
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Groupsession;
