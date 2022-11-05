import { LogoTypes } from '../../const';
import Logo from '../logo/logo';

type FooterProps = {
  isManPage?: boolean;
}

function Footer({ isManPage = false }: FooterProps): JSX.Element {
  return (
    <footer className="footer container">
      <Logo type={LogoTypes.Footer} isManPage={isManPage} />
    </footer>
  );
}

export default Footer;
