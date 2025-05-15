import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

export default function SocialMediaLinks (){
    return (
        <div className="Flex space-x-4 text-white text-2x1">
            <a href="https://github.com/italovercoza" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com/in/italovercoza" target="_blank" rel="noopener noreferrer">
                 <FaLinkedin />
            </a>
            <a href="https://instagram.com/italovercoza" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
    );

}