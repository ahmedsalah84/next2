import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useRouter } from "next/router";
import ar from "../locales/ar";
import en from "../locales/en";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en : ar;

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link href="/">
            <span className="link">{t.spark}</span>
          </Link>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={locale === "ar" ? "mr-auto" : "ml-auto"} navbar>
            <NavItem>
              <Link href="/">
                <NavLink>
                  <span className="link">{t.home}</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/services">
                <NavLink>
                  <span className="link">{t.services}</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/news">
                <NavLink>
                  <span className="link">{t.news}</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact">
                <NavLink>
                  <span className="link">{t.contact}</span>
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              {locale === "en" && (
                <NavLink href={`/ar${router.asPath}`}>عربي</NavLink>
              )}
              {locale === "ar" && (
                <NavLink href={`/en${router.asPath}`}>English</NavLink>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
