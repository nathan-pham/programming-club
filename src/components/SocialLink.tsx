interface SocialLinkProps {
    href: string;
    logo: string;
}

const SocialLink = ({ href, logo }: SocialLinkProps) => (
    <a href={href} target="_blank" rel="noreferrer" className="bg-white">
        <img
            alt="Social Media Logo"
            src={logo}
            className="w-12 h-12 border p-2 object-contain"
        />
    </a>
);

export default SocialLink;
