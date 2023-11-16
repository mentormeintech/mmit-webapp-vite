import { createBrowserRouter } from 'react-router-dom';
import MentorLogin from '../pages/auth/signin';
import MenteeSignUp from '../pages/auth/menteesignup';
import MentorSignUp from '../pages/auth/mentorsignup';
import Home from '../pages/index';


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
