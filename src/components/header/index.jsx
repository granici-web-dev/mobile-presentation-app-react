import styles from './styles.module.css';
import Logo from '../logo';
import Nav from '../nav';
import SocialLinks from '../socialLinks';
import Button from "../button";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Logo />
        <Nav />
      </div>
      <div className={styles.headerRight}>
        <SocialLinks />
        <Button title={'Get started'}/>
      </div>
    </div>
  );
}

export default Header;
