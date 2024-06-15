import { ReactNode } from 'react';
import FooterCSS from "@/components/Footer/Footer.module.css";
import Logo from '../Logo';
interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className={FooterCSS.Footer}>
      <div className={FooterCSS.TextFooterLogo}>
        <div className={FooterCSS.TextFooter}>
          <p>Aprenda de qualquer lugar com cursos feitos ©2024 Me Ajudaai.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className={FooterCSS.Logo}>
          <Logo footer/>
        </div>
      </div>
    </footer>
  );
}
