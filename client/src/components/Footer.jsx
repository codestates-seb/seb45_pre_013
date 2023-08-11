import {
  FooterBg,
  FooterContent,
  FootoerText,
  FootoerTitle,
} from "@/styles/FooterStyle";
import { logoImg } from "@/config/config";

const Footer = () => {
  return (
    <FooterBg>
      <FooterContent>
        <img src={logoImg} />
      </FooterContent>
      <FooterContent>
        <FootoerTitle>Front End</FootoerTitle>
        <FootoerText>윤은소</FootoerText>
        <FootoerText>성열홍</FootoerText>
        <FootoerText>조상옥</FootoerText>
      </FooterContent>
      <FooterContent>
        <FootoerTitle>Back End</FootoerTitle>
        <FootoerText>양재용</FootoerText>
        <FootoerText>전수은</FootoerText>
        <FootoerText>임석현</FootoerText>
      </FooterContent>
      <FooterContent>내용3</FooterContent>
    </FooterBg>
  );
};

export default Footer;
