import menuClose from "@/images/icons/menu-Close.svg";
import menuOpen from "@/images/icons/menu-Open.svg";
import React from "react";

export const NavbarMobile = ({ children }: React.PropsWithChildren) => {
  const [menuState, setMenuState] = React.useState(false);

  const toggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <nav className="bg-white flex justify-between py-5 px-7 md:hidden z-50">
      <a href="/">
        <h1 className="text-2xl">Logo</h1>
      </a>
      <button id="mobile-menu-open" onClick={toggleMenu}>
        <img src={menuOpen.src} className="w-6" alt="icono para abrir el menu" />
      </button>

      <section
        id="mobile-menu"
        className={`fixed top-0 left-0 z-10 transition-transform duration-300 ${menuState ? "translate-x-0" : "-translate-x-full"} w-full h-full bg-black/40`}
      >
        <div
          id="menu-links"
          className="flex flex-col bg-white w-[75%] h-full drop-shadow-2xl"
        >
          <div className="flex justify-end px-7 py-5">
            <button id="mobile-menu-close" onClick={toggleMenu}>
              <img src={menuClose.src} className="w-6" alt="icono para cerrar el menu" />
            </button>
          </div>

          <ul className="unset flex flex-col text-text-bold gap-4 [&>li]:p-0 px-6">
            {children}
          </ul>
        </div>
      </section>
    </nav>
  );
};
