import { Outlet } from "react-router";
import { ButtonMenu } from "../components/menu/Button-menu";
import { useState } from "react";
import { ButtonLanguage } from "../components/menu/Button-language";
import { SelectLanguage } from "../components/menu/select-language";
import { languageOptions } from "../lib/language-options";
import { menuSelectItems } from "../lib/menu-items";
import { MenuItems2 } from "../components/menu/menu-items2";

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleOpenLanguageMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleOpenItemsMenu = () => {
    if (isLanguageOpen) {
      setIsLanguageOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full">
      <header className="sticky top-0 left-full flex items-center gap-6 justify-end pr-12 z-[100] w-max h-24 2xl:h-36">
        <ButtonLanguage
          isLanguageOpen={isLanguageOpen}
          handleClick={handleOpenLanguageMenu}
        />
        <SelectLanguage
          isLanguageOpen={isLanguageOpen}
          options={languageOptions}
        />
        <ButtonMenu handleClick={handleOpenItemsMenu} isMenuOpen={isMenuOpen} />
        {/* <MenuItems isMenuOpen={isMenuOpen} items={menuSelectItems} /> */}
        <MenuItems2 isMenuOpen={isMenuOpen} items={menuSelectItems} />
      </header>
      <Outlet />
    </div>
  );
}
