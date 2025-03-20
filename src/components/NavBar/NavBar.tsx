import { useTranslation } from "react-i18next";
import NavBarLarge from "./NavBarLarge/NavBarLarge";
import NavBarSmall from "./NavBarSmall/NavBarSmall";

interface Props {
  onClickLanguageChange: (language: string) => void;
}

const NavBar = ({ onClickLanguageChange }: Props) => {
  const { t } = useTranslation();
  return (
    <nav className="fixed-top">
      <NavBarLarge />
      <NavBarSmall />
    </nav>
  )
};

export default NavBar;
