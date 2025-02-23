import { FaGithub, FaDiscord } from "react-icons/fa";

const links = [
    { href: "https://github.com/Nynerdly", icon: <FaGithub /> },
    { href: "https://discord.com/invite/5jZ3HrVTRY", icon: <FaDiscord /> }
];

function Footer() {
  return (
    <div className='w-screen bg-green-10 py-4 text-black mt-60'>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>

            <p className='text-center text-sm md:text-left'>
                Nynerdly Visuals &#174; 2025. Rainbow Six Siege - Ela Bosak Project
            </p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {links.map((link, index) => (
                    <a key={index} href={link.href} target='_blank' rel='noreferrer noopener' 
                    className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                        {link.icon}
                    </a>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Footer;