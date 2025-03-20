import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import ButtonOutline from "../ButtonOutline/ButtonOutline";
import NavBarLarge from "./NavBarLarge/NavBarLarge";
import NavBarSmall from "./NavBarSmall/NavBarSmall";

interface Props {
  onClickLanguageChange: (language: string) => void;
}

const NavBar = ({ onClickLanguageChange }: Props) => {
  const { t } = useTranslation();
  return (
    <nav className="fixed-top py-2 pe-5">
      <NavBarLarge />
      <NavBarSmall />
    </nav>
  )
};

export default NavBar;
