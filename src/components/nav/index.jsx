import styles from './styles.module.css';
const navList = [
  {
    title: 'Home',
    url: '#',
  },
  {
    title: 'Blog',
    url: '#',
  },
  {
    title: 'Features',
    url: '#',
  },
  {
    title: 'Pricing',
    url: '#',
  },
  {
    title: 'Documentation',
    url: '#',
  },
];

function Nav() {
  return (
    <div>
      <ul className={styles.navList}>
        {navList.map((item) => (
          <li>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
