import { FooterBg, LogoImage, FooterContent } from "@/styles/FooterStyle";
import { logoImg } from "@/config/config";

const Footer = () => {
  return (
    <FooterBg>
      <FooterContent>
        <LogoImage src={logoImg} />
      </FooterContent>
      <FooterContent>내용1</FooterContent>
      <FooterContent>내용2</FooterContent>
      <FooterContent>내용3</FooterContent>
    </FooterBg>
  );
};

export default Footer;
