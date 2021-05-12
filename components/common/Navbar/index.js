import Link from "next/link";
import Logo, { LogoStyles } from "../Logo";
import { Nav, Burger } from "./styles";

const Navbar = () => {
  const toggleNavMenu = () => {};
  const closeNavMenu = () => {};

  return (
    <Nav className="navbar is-primary">
      <div className="navbar-brand">
        <Link href="/">
          <a className="logo navbar-item" onClick={closeNavMenu}>
            <Logo accent logoStyle={LogoStyles.horizontal} height="35px" />
          </a>
        </Link>

        <Burger className="navbar-burger" onClick={toggleNavMenu}>
          <Logo accent logoStyle={LogoStyles.eMenu} height="25px" />
        </Burger>
      </div>
    </Nav>
  );
};

export default Navbar;
