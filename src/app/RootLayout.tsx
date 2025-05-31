import { Outlet } from "react-router";
import { ButtonMenu } from "../components/menu/Button-menu";
import { useState } from "react";
import { MenuItems } from "../components/menu/menu-items";
import { ButtonLanguage } from "../components/menu/Button-language";

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonBlue, setIsButtonBlue] = useState(true);
  return (
    <div className="relative w-full">
      <header className="sticky top-0 left-full flex items-center gap-6 justify-end pr-12 z-40 w-max h-36">
       <ButtonLanguage/>
        <ButtonMenu
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
          isButtonBlue={isButtonBlue}
          setIsButtonBlue={setIsButtonBlue}
        />
        <MenuItems isMenuOpen={isMenuOpen} />
      </header>
      <Outlet />
    </div>
  );
}
