import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MobileSidebar } from "../features/MobileSidebar";
import { useDispatch, useSelector, } from "react-redux";
import { logOutUser } from "../redux/slices/userslice";
import { logUserOut } from "../utilities/apiClient";
import { Link } from "react-router-dom";



const Header = () => {
  const { token, type } = useSelector(state => state.mentor_me_user)
  const dispatch = useDispatch()
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const logOut = () => {
    logUserOut();
    dispatch(logOutUser({ token: '', user: {} }))
  }

  const links = [
    { href: "/findamentor", text: "Find a mentor" },
    { href: "/bookasession", text: "Book a session" },
    { href: "/partnership", text: "Partnership" },
    { href: "#", text: "About Us" },
    { href: "#", text: "Insights" },
    (type === 'mentor' && token === '') ? { href: "auth/mentorsignup", text: "Become A Mentor" } : ( (type === 'mentor' && token !== '') ? {href: "", text: ""  } : {href: "auth/mentorsignup", text: "Become A Mentor"  }),
    //  ( type === 'mentee' && token !== '')? { href: "auth/mentorsignup", text: "Become A Mentor" } : {href: '', text:''},
    // { href: "auth/mentorsignup", text: "Become A Mentor" }
    ,
  ];

  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-white">
      <div className="mx-auto font-medium lg:container" data-aos="fade-down">
        <div className="flex flex-row items-center justify-between px-8 py-4 lg:px-12">
          <Link to="/">
            <img
              width={100}
              height={100}
              alt="MMIT Logo"
              className="h-auto w-24"
              src="/images/mmit-logo.png"
              priority={true}
            />
          </Link>

          <div className="lg:hidden">
            <MobileSidebar links={links} />
          </div>

          <div className="hidden flex-row items-center justify-center font-semibold lg:flex">
            <div className="flex-row items-start justify-between gap-7">
              <ul className="flex flex-row justify-between gap-8 text-sm font-semibold">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link?.href}
                      className={`transition-all ${link.href === "#"
                        ? "cursor-not-allowed opacity-50"
                        : "hover:text-sky-600"
                        }`}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {token !== '' ? <div className="hidden flex-row gap-4 text-sm font-medium lg:flex">
            <button className="rounded border border-primary-500 px-4 py-2 transition-all hover:bg-black/10" onClick={() => logOut()}>
              Log Out
            </button>
          </div> : <div className="hidden flex-row gap-4 text-sm font-medium lg:flex">
            <Link to="/auth/menteesignup">
              <button className="rounded border border-primary-500 bg-primary-500 px-4 py-2  text-white transition-all hover:bg-opacity-70">
                Sign up
              </button>
            </Link>

            <Link to="/auth/signin">
              <button className="rounded border border-primary-500 px-4 py-2 transition-all hover:bg-black/10">
                Log in
              </button>
            </Link>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
