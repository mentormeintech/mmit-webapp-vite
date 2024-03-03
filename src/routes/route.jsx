import { createBrowserRouter, Route, Navigate } from 'react-router-dom';
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
import MenteeSupport from '../pages/menteesupport/page';
import MentorSettings from '../pages/mentorsSettings';
import MenteeSettings from '../pages/menteeSettings/page';
import MentorsSupport from '../pages/mentorsSupport';
import Career from '../pages/auth/career';
import Mentorregister from '../pages/auth/mentorregist';
import Privacypolicy from '../pages/privacy-policy';
import MenteeProfilePage from '../pages/menteeProfilePage';
import TermsUse from '../pages/terms-use';
import Scheduler from '../pages/scheduler1';
import Schedule from '../pages/schedule2';
import MentorCalender from '../pages/calender/pages';
import ErrorPage from '../errorboudary';
import { accessToken } from '../utilities/tokenClient';
import Groupsession from '../pages/group-sessions';

function PrivateRoute({ path, element, ...props }) {
	// const { isAuthenticated } = useAuth(); // Assuming you have an authentication context
	const isAuthenticated = localStorage.getItem(accessToken)

	return (
		<Route
			{...props}
			path={path}
			element={isAuthenticated ? element : <Navigate to="/auth/signin" replace />}
		/>
	);
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		// errorElement: <ErrorPage />,
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
		path: '/mentee',
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
		path: '/mentee-support',
		element: <MenteeSupport />,
	},
	{
		path: '/mentee-settings',
		element: <MenteeSettings />,
	},
	{
		path: '/mentor/calender',
		element: <MentorCalender />,
	},
	{
		path: '/mentor-settings',
		element: <MentorSettings />,
	},
	{
		path: '/mentor-support',
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
	{
		path: '*',
		// errorElement: <ErrorBoundary />,
		element: <ErrorPage />,
	},
]);
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Home />,
// 		// errorElement: <ErrorPage />,
// 	},
// 	{
// 		path: '/auth/signin',
// 		element: <MentorLogin />,
// 	},
// 	{
// 		path: '/auth/menteesignup',
// 		element: <MenteeSignUp />,
// 	},
// 	{
// 		path: '/auth/mentorsignup',
// 		element: <MentorSignUp />,
// 	},
// 	{
// 		path: '/findamentor',
// 		element: <FindAMentor />,
// 	},
// 	{
// 		path: '/mentee',
// 		element: <MenteeProfilePage />,
// 	},
// 	{
// 		path: '/bookasession',
// 		element: <BookASession />,
// 	},
// 	{
// 		path: '/partnership',
// 		element: <PartnershipPage />,
// 	},
// 	{
// 		path: '/mentor',
// 		element: <MentorDashboard />,
// 	},
// 	{
// 		path: '/mentor/booking',
// 		element: <MentorBooking />,
// 	},
// 	{
// 		path: '/mentee/booking',
// 		element: <MentorBooking />,
// 	},
// 	{
// 		path: '/mentor/calender',
// 		element: <MentorCalender />,
// 	},
// 	{
// 		path: '/mentorsSettings',
// 		element: <MentorSettings />,
// 	},
// 	{
// 		path: '/mentorsSupport',
// 		element: <MentorsSupport />,
// 	},
// 	{
// 		path: '/auth/career',
// 		element: <Career />,
// 	},
// 	{
// 		path: '/mentorregist',
// 		element: <Mentorregister />,
// 	},
// 	{
// 		path: '/profile/:mentor_name',
// 		element: <MentorProfile />,
// 	},
// 	{
// 		path: '/privacy-policy',
// 		element: <Privacypolicy />,
// 	},
// 	{
// 		path: '/terms-use',
// 		element: <TermsUse />,
// 	},
// 	{
// 		path: '/schedule',
// 		element: <Schedule />,
// 	},
// 	{
// 		path: '/scheduler',
// 		element: <Scheduler />,
// 	},
// 	{
// 		path: '*',
// 		// errorElement: <ErrorBoundary />,
// 		element: <ErrorPage />,
// 	},
// ]);

// export const privateRoutes = router.map(route => {
// 	return {
// 		...route,
// 		element: <PrivateRoute {...route} />,
// 	};
// });


export default router;
