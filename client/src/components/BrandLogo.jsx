import { logoImg } from "@/config/config";
import { Logo, LogoImg } from "@/styles/BrandLogoStyle";

const BrandLogo = () => {
  return (
    <Logo href="https://stackoverflow.com">
      <LogoImg src={logoImg} />
    </Logo>
  );
};

export default BrandLogo;
