import cn from "classnames";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

export const MobileSidebar = ({ links }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-primary-500 rounded-md border-2 border-sky-500 p-2 lg:hidden"
      >
        <FiMenu className="text-xl" />
      </button>

      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <Sidebar setOpen={setOpen}>
            <ul className="flex flex-col px-4 py-8">
              {links.map(({ text, href }) => {
                return (
                  <li key={text}>
                    <Link
                      to={href}
                      className={cn(
                        "my-2 flex rounded-full px-6 py-3 font-medium transition-all",
                        location.pathname === href && "bg-sky-500",
                        href === "#"
                          ? "cursor-not-allowed opacity-50"
                          : "hover:bg-sky-600",
                      )}
                    >
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex w-full flex-col justify-center gap-4 px-8">
              <Link to="/auth/menteesignup">
                <button className="border-primary-500 bg-primary-500 w-full rounded border px-4 py-2  text-white transition-all hover:bg-opacity-70">
                  {/* Sign up */}
                  Become A Mentee
                </button>
              </Link>

              <Link to="/auth/signin">
                <button className="border-primary-500 w-full rounded border px-4 py-2 transition-all hover:bg-white/10">
                  Log in
                </button>
              </Link>
            </div>
          </Sidebar>
        )}
      </AnimatePresence>
    </>
  );
};
