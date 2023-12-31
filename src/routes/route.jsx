import { createBrowserRouter } from 'react-router-dom';
import MentorLogin from '../pages/auth/signin';
import MenteeSignUp from '../pages/auth/menteesignup';
import MentorSignUp from '../pages/auth/mentorsignup';
import Home from '../pages/index';
import FindAMentor from '../pages/findamentor';
import BookASession from '../pages/bookasession';
import PartnershipPage from '../pages/partnership';
import MentorDashboard from '../pages/mentor';
import MentorBooking from '../pages/mentorsBooking';
import MentorSettings from '../pages/mentorsSettings';
import MentorsSupport from '../pages/mentorsSupport';



// import Onboard from '../pages/onboard/onboard';
// import Home from '../pages/home/page';
// import NotFound from '../shared/404/404';
// import CallScreen from '../pages/call/page';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/auth/signin',
		element: <MentorLogin />,
	},
	{
		path: '/auth/menteesignup',
		element: <MenteeSignUp />,
	},
	{
		path: '/auth/mentorsignup',
		element: <MentorSignUp />,
	},
	{
		path: '/findamentor',
		element: <FindAMentor />,
	},
	{
		path: '/bookasession',
		element: <BookASession />,
	},
	{
		path: '/partnership',
		element: <PartnershipPage />,
	},
	{
		path: '/mentor',
		element: <MentorDashboard />,
	},
	{
		path: '/mentorsBooking',
		element: <MentorBooking />,
	},
	{
		path: '/mentorsSettings',
		element: <MentorSettings />,
	},
	{
		path: '/mentorsSupport',
		element: <MentorsSupport />,
	},
	// {
	// 	path: '/dashboard',
	// 	element: <Home/>,
	// },
	// {
	// 	path: '/call',
	// 	element: <CallScreen/>,
	// },
	// {
	// 	path: '*',
	// 	element: <NotFound/>,
	// },
]);

export default router;
