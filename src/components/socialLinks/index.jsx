import styles from './styles.module.css';
import facebookIcon from '../../assets/socials/facebook.svg';
import telegramIcon from '../../assets/socials/telegram.svg';
import twitterIcon from '../../assets/socials/twitter.svg';
import mediumIcon from '../../assets/socials/medium.svg';

const socialIconsList = [
  {
    src: facebookIcon,
    alt: 'facebook icon',
    url: 'www.facebook.com',
  },
  {
    src: telegramIcon,
    alt: 'telegram icon',
    url: 'www.telegram.com',
  },
  {
    src: twitterIcon,
    alt: 'twitter icon',
    url: 'www.twitter.com',
  },
  {
    src: mediumIcon,
    alt: 'medium icon',
    url: 'www.medium.com',
  },
];

console.log(socialIconsList);

function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      {socialIconsList.map((item) => {
        return (
          <li>
            <a href={item.url}>
              <img src={item.src} alt={item.alt} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
