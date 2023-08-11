import { BrandLogoImg } from "@/config/config";
import { Logo, LogoImg } from "@/styles/BrandLogoStyle";

const BrandLogo = () => {
  return (
    <Logo href="https://stackoverflow.com">
      <LogoImg src={BrandLogoImg} />
    </Logo>
  );
};

export default BrandLogo;
