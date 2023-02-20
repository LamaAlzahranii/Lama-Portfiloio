import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import GitHub from '../assets/github.png'



const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 h-10 w-10"
        href="https://www.linkedin.com/in/lama-ahmad-alzharani/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 h-10 w-10"
        href="https://twitter.com/lama_allz"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 h-10 w-10"
        href="https://github.com/LamaAlzahranii"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="GitHub-link" src={GitHub} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
