import { createBrowserRouter, Route, Navigate } from 'react-router-dom';
import MentorLogin from '../pages/auth/signin';
import MenteeSignUp from '../pages/auth/menteesignup';
import MentorSignUp from '../pages/auth/mentorsignup';
import MentorProfile from '../pages/auth/mentorProfile';
import Home from '../pages/index';
import FindAMentor from '../pages/findmentor/page';
import PartnershipPage from '../pages/partnership';
import MentorDashboard from '../pages/mentor';
import MentorBooking from '../pages/mentor-booking/page';
import MenteeBooking from '../pages/mentee-booking/page';
import MentorSettings from '../pages/mentor-settings/page';
import MenteeSettings from '../pages/mentee-settings/page';
import MentorsSupport from '../pages/mentorsSupport';
import Career from '../pages/auth/career';
import Mentorregister from '../pages/auth/mentorregist';
import Privacypolicy from '../pages/privacy-policy/page';
import MenteeProfilePage from '../pages/menteeProfilePage';
import TermsUse from '../pages/terms-use';
import SiteMap from '../pages/sitemap/page';
import MentorCalender from '../pages/mentor-calendar/page';
import Notifications from '../pages/mentor-notification/page';
import ErrorPage from '../errorboudary';
import { accessToken } from '../utilities/tokenClient';
import Groupsession from '../pages/group-session/page';
import ForgotPassword from '../pages/forgot-password/pages';
import PasswordRequest from '../pages/forgot-password/password-request/page';
import MenteeNotification from '../pages/mentee-notification/page';
import ContactUs from '../pages/contactus/page';
import BookSession from '../pages/book-session/page';
import WhyMMIT from '../pages/why-mmit/page';
import AboutUs from '../pages/about-us/page';
import Insightss from '../pages/insight/page';
import MenteeCareer from '../pages/mentee-career/page';

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
		path: '/forgot-password/:user_token',
		element: <ForgotPassword />,
	},
	{
		path: '/password-request',
		element: <PasswordRequest />,
	},
	{
		path: '/auth/menteesignup',
		element: <MenteeSignUp />,
	},
	{
		path: '/mentee-career',
		element: <MenteeCareer />,
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
		path: '/insight',
		element: <Insightss />,
	},
	{
		path: '/about-us',
		element: <AboutUs />,
	},
	{
		path: '/mentee',
		element: <MenteeProfilePage />,
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
		path: '/contactus',
		element: <ContactUs />,
	},
	{
		path: '/mentor/booking',
		element: <MentorBooking />,
	},
	{
		path: '/mentee-booking',
		element: <MenteeBooking />,
	},
	{
		path: '/mentee-settings',
		element: <MenteeSettings />,
	},
	{
		path: '/mentor-calendar',
		element: <MentorCalender />,
	},
	{
		path: '/why-mmit',
		element: <WhyMMIT />,
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
		path: '/book-session/:session_id',
		element: <BookSession />,
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
		path: '/sitemap',
		element: <SiteMap />,
	},
	{
		path: '/mentee-notifications',
		element: <MenteeNotification />,
	},
	{
		path: '/mentor-notifications',
		element: <Notifications />,
	},
	{
		path: '*',
		// errorElement: <ErrorBoundary />,
		element: <ErrorPage />,
	},
]);


export default router;
