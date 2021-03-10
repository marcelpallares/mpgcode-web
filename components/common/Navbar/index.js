import Link from "next/link";
import Logo, { LogoStyles } from "../Logo";
import { Burger } from "./styles";

const Navbar = () => {
  const toggleNavMenu = () => {};
  const closeNavMenu = () => {};

  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand">
        <Link href="/">
          <a className="logo navbar-item" onClick={closeNavMenu}>
            <Logo accent logoStyle={LogoStyles.horizontal} height="35px" />
          </a>
        </Link>

        <Burger
          className="navbar-item navbar-burger is-justify-content-center"
          onClick={toggleNavMenu}
        >
          <Logo accent logoStyle={LogoStyles.eMenu} height="25px" />
        </Burger>
      </div>
    </nav>
  );
};

export default Navbar;
