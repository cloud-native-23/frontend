import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useState, useRef, useEffect } from "react";
import {
  Navbar, Nav, Container
} from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { getCookie, setCookie } from "cookies-next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import styles from "@/styles/navbar.module.css";
import i18n from "@/utils/i18n";
import UserMenu from "@/components/buttonUserMenu";
import { setUserCookies, clearAllCookies, getAllCookies } from "@/utils/cookies";

function NavBar() {
  const { t } = useTranslation();
  const { user } = useUser();
  const [lang, setLang] = useState(getCookie("lang") ?? "en");
  const timeoutRef = useRef(null);
  const router = useRouter();

  const initLang = () => {
    i18n.changeLanguage(lang);
  };

  const handleLang = () => {
    const newLang = lang === "en" ? "zh" : "en";
    setLang(newLang);
    setCookie("lang", newLang);
    i18n.changeLanguage(newLang);
  };

  const handleLogout = () => {
    clearAllCookies();
  };

  useEffect(() => () => {
    initLang();
    clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    // After login, set user cookies and reload the page
    // to show the admin if the user is provider
    if (user !== undefined && Object.keys(getAllCookies()).length === 0) {
      setUserCookies(user);
    }

    // If token is expired, sign out and clear all cookies
    if (user !== undefined && Object.keys(getAllCookies()).length === 2) {
      router.push("/api/auth/logout");
      clearAllCookies();
      alert(t("連線逾時，請重新登入！"));
    }
  }, [user]);


  const [expanded, setExpanded] = useState(false);

  const setToggle = () => {
    setExpanded(true);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light-cream" onToggle={setToggle}>
      <Container className="m-2" style={{ maxWidth: "initial" }}>
        <Navbar.Brand href="/admin" bsPrefix="text-2xl no-underline" className="text-dark-blue">
          {t("Stadium Matching System")}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex justify-end mt-1 border-b-white">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="/main">
              <span className={styles.navAdmin}>{t("Rent")}</span>
            </Nav.Link>
            <Nav.Link href="/admin" className={styles.navLink}>
              {t("Home")}
            </Nav.Link>
            {user ? (
              <>
                {/* Check if the Navbar is collapsed */}
                <UserMenu
                  data={user}
                  signOut={handleLogout}
                  expanded={expanded}
                />
              </>
            ) : (
              <Nav.Link className={styles.navLink} href="/api/auth/login">{t("Login")}</Nav.Link>
            )}
            <Nav.Link className={styles.navLink} onClick={handleLang}>
              <FontAwesomeIcon icon={faEarthAmericas} className="mr-2 flex flex-row" />
              中 | EN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;
