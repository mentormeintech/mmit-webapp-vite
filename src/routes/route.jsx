import { createBrowserRouter } from "react-router-dom";
import MentorLogin from "../pages/auth/signin";
import MenteeSignUp from "../pages/auth/menteesignup";
import MentorSignUp from "../pages/auth/mentorsignup";
import MentorProfile from "../pages/auth/mentorProfile";
import Home from "../pages/index";
import FindAMentor from "../pages/findamentor";
import BookASession from "../pages/bookasession";
import PartnershipPage from "../pages/partnership";
import MentorDashboard from "../pages/mentor";
import MentorBooking from "../pages/mentorsBooking";
import MentorSettings from "../pages/mentorsSettings";
import MentorsSupport from "../pages/mentorsSupport";
import Career from "../pages/auth/career";
import Mentorregister from "../pages/auth/mentorregist";
import Privacypolicy from "../pages/privacy-policy";
import MenteeProfilePage from "../pages/menteeProfilePage";
import MenteeBooking from "../pages/menteesBooking";
import MenteeGroupSessions from "../pages/menteesGroupSessions";
import MenteeSettings from "../pages/menteesSettings";
import MenteeSupport from "../pages/menteesSupport";

import TermsUse from "../pages/terms-use";
// import Schedule from '../pages/schedule';
import Schedule from "../pages/schedule2";

// import Onboard from '../pages/onboard/onboard';
// import Home from '../pages/home/page';
// import NotFound from '../shared/404/404';
// import CallScreen from '../pages/call/page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/signin",
    element: <MentorLogin />,
  },
  {
    path: "/auth/menteesignup",
    element: <MenteeSignUp />,
  },
  {
    path: "/auth/mentorsignup",
    element: <MentorSignUp />,
  },
  {
    path: "/findamentor",
    element: <FindAMentor />,
  },
  {
    path: "/menteeProfilePage",
    element: <MenteeProfilePage />,
  },
  {
    path: "/menteeBooking",
    element: <MenteeBooking />,
  },
  {
    path: "/menteeGroupSessions",
    element: <MenteeGroupSessions />,
  },
  {
    path: "/menteeSettings",
    element: <MenteeSettings />,
  },
  {
    path: "/menteeSupport",
    element: <MenteeSupport />,
  },
  {
    path: "/bookasession",
    element: <BookASession />,
  },
  {
    path: "/partnership",
    element: <PartnershipPage />,
  },
  {
    path: "/mentor",
    element: <MentorDashboard />,
  },
  {
    path: "/mentorsBooking",
    element: <MentorBooking />,
  },
  {
    path: "/mentorsSettings",
    element: <MentorSettings />,
  },
  {
    path: "/mentorsSupport",
    element: <MentorsSupport />,
  },
  {
    path: "/auth/career",
    element: <Career />,
  },
  {
    path: "/mentorregist",
    element: <Mentorregister />,
  },
  {
    path: "/profile/:mentor_name",
    element: <MentorProfile />,
  },
  {
    path: "/privacy-policy",
    element: <Privacypolicy />,
  },
  {
    path: "/terms-use",
    element: <TermsUse />,
  },
  {
    path: "/schedule",
    element: <Schedule />,
  },
  // {
  // 	path: '*',
  // 	element: <NotFound/>,
  // },
]);

export default router;
