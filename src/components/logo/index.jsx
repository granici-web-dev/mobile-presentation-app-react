import logo from "../../assets/logos/logo.svg";

const logoImg = {
  alt: logo.name,
  src: logo,
}

function Logo() {
  return <div>
    <a href='/'> 
      <img src={logoImg.src} alt={logoImg.alt} />
    </a>
  </div>;
}

export default Logo;
