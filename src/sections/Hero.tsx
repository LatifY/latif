import { socialLinks } from '../data/socialLinks';
import { TypewriterText } from '../components/TypewriterText';

export const Hero = () => {
  return (
    <section className="section-spacing pt-32">
      <div className="content-wrapper">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">Latif Yılmaz</span>
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-xl">
          <TypewriterText />
        </p>

        <div className="flex items-center gap-4 text-sm">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-400"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
