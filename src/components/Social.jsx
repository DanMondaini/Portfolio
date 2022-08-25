import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/social.sass';

const social = [
  { name: "linkedin", link: "https://www.linkedin.com/in/danielmondaini/", icon: <FaLinkedinIn /> },
  { name: "github", link: "https://github.com/DanMondaini", icon: <FaGithub /> },
  { name: "instagram", link: "https://www.instagram.com/danielmondaini/", icon: <FaInstagram /> },
];
function Social() {
  return (
    <section id='social'>
        {social.map((network) => (
            <a href={network.link} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}


export default Social