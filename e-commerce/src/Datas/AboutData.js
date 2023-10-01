import aboutPhoto from "../IconsAndPhotos/aboutPhoto.png";
import aboutGetQuoteButton from "../IconsAndPhotos/aboutGetQuoteButton.png";
import aboutWorkWithUs from "../IconsAndPhotos/aboutWorkWithUs.png";
import aboutWorkWithUsButton from "../IconsAndPhotos/aboutWorkWithUsButton.png";
import teamMember4 from "../IconsAndPhotos/teamMember4.jpg";
import teamMember5 from "../IconsAndPhotos/teamMember5.jpg";
import teamMember6 from "../IconsAndPhotos/teamMember6.jpg";
import facebookIcon from "../IconsAndPhotos/facebookFooter.svg";
import instagramIcon from "../IconsAndPhotos/instagramFooter.svg";
import twitterIcon from "../IconsAndPhotos/twitterFooter.svg";
import brands1 from "../IconsAndPhotos/fa-brands-1.png";
import brands2 from "../IconsAndPhotos/fa-brands-2.png";
import brands3 from "../IconsAndPhotos/fa-brands-3.png";
import brands4 from "../IconsAndPhotos/fa-brands-4.png";
import brands5 from "../IconsAndPhotos/fa-brands-5.png";
import brands6 from "../IconsAndPhotos/fa-brands-6.svg";
import aboutVideo from "../IconsAndPhotos/aboutVideo.mp4";

export const AboutData = {
  headerArea: {
    aboutPhoto,
    aboutGetQuoteButton,
  },
  bodyArea: {
    aboutVideo,
    teamCardsArray: [
      {
        id: "1",
        img: teamMember4,
        username: "Username",
        title: "Profession",
        facebookIcon,
        instagramIcon,
        twitterIcon,
      },
      {
        id: "2",
        img: teamMember5,
        username: "Username",
        title: "Profession",
        facebookIcon,
        instagramIcon,
        twitterIcon,
      },
      {
        id: "3",
        img: teamMember6,
        username: "Username",
        title: "Profession",
        facebookIcon,
        instagramIcon,
        twitterIcon,
      },
    ],
  },
  footerArea: {
    brands1,
    brands2,
    brands3,
    brands4,
    brands5,
    brands6,
    aboutWorkWithUs,
    aboutWorkWithUsButton,
  },
};
