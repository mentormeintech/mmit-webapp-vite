import { createBrowserRouter } from 'react-router-dom';
import MentorLogin from '../pages/auth/signin';
import MenteeSignUp from '../pages/auth/menteesignup';
import MentorSignUp from '../pages/auth/mentorsignup';
import MentorProfile from '../pages/auth/mentorProfile';
import Home from '../pages/index';
import FindAMentor from '../pages/findamentor';
import BookASession from '../pages/bookasession';
import PartnershipPage from '../pages/partnership';
import MentorDashboard from '../pages/mentor';
import MentorBooking from '../pages/mentorsBooking';
import MenteeBooking from '../pages/menteebooking/pages';
import MentorSettings from '../pages/mentorsSettings';
import MentorsSupport from '../pages/mentorsSupport';
import Career from '../pages/auth/career';
import Mentorregister from '../pages/auth/mentorregist';
import Privacypolicy from '../pages/privacy-policy';
import MenteeProfilePage from '../pages/menteeProfilePage';
import TermsUse from '../pages/terms-use';
// import Schedule from '../pages/schedule';
import Scheduler from '../pages/scheduler1';
import Schedule from '../pages/schedule2';
import MentorCalender from '../pages/calender/pages';
// import ErrorPage from '../errorboudary';
import { accessToken } from '../utilities/tokenClient';
import Groupsession from '../pages/group-sessions';



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
		path: '/menteeprofile',
		element: <MenteeProfilePage />,
	},
	{
		path: '/bookasession',
		element: <BookASession />,
	},
	{
		path: '/group-session',
		element: <Groupsession />,
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
		path: '/mentor/booking',
		element: <MentorBooking />,
	},
	{
		path: '/mentee/booking',
		element: <MenteeBooking />,
	},
	{
		path: '/mentor/calender',
		element: <MentorCalender />,
	},
	{
		path: '/mentorsSettings',
		element: <MentorSettings />,
	},
	{
		path: '/mentorsSupport',
		element: <MentorsSupport />,
	},
	{
		path: '/auth/career',
		element: <Career />,
	},
	{
		path: '/mentorregist',
		element: <Mentorregister />,
	},
	{
		path: '/profile/:mentor_name',
		element: <MentorProfile />,
	},
	{
		path: '/privacy-policy',
		element: <Privacypolicy />,
	},
	{
		path: '/terms-use',
		element: <TermsUse />,
	},
	{
		path: '/schedule',
		element: <Schedule />,
	},
	{
		path: '/scheduler',
		element: <Scheduler />,
	},
	// {
	// 	path: '*',
	// 	element: <NotFound/>,
	// },
]);

export default router;
