import logo2 from '../../assets/logo2.svg';

const Footer = () => {
  return (
    <footer>
      <p className="logo-footer">
        <img src={logo2} alt="logo de Kasa" />
      </p>
      <p className="copyright">© 2021 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
