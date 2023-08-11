import { FooterBg } from "@/styles/FooterStyle";
import { logoImg } from "@/config/config";

const Footer = () => {
  return (
    <FooterBg>
      <div className="FooterContent">
        <img src={logoImg} />
      </div>
      <div className="FooterContent">
        <p className="FootoerTitle">Front End</p>
        <p className="FootoerText">윤은소</p>
        <p className="FootoerText">성열홍</p>
        <p className="FootoerText">조상옥</p>
      </div>
      <div className="FooterContent">
        <p className="FootoerTitle">Back End</p>
        <p className="FootoerText">양재용</p>
        <p className="FootoerText">전수은</p>
        <p className="FootoerText">임석현</p>
      </div>
      <div className="FooterContent">내용3</div>
    </FooterBg>
  );
};

export default Footer;
