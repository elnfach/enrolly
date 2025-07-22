import content from '../config/common'
import '../styles/components/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';

export default function Footer()
{
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a
                        href={content.footer.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href={content.footer.vk}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <FontAwesomeIcon icon={faVk} />
                    </a>
                    <a
                        href={content.footer.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faTelegram} />
                    </a>
                </div>

                <div className="footer-info">
                    <p>© {content.info.copyright.year} {content.header.title}. {content.info.copyright.content}</p>
                </div>
            </div>
        </footer>
    )
}