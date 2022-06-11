import Image from 'next/image'
import styles from './socialMedia.module.scss'

export default function SocialMedia() {

    return (
        <div className={styles.socialMedia}>
            <h3>FOLLOW US</h3>
            <div className={styles.icons}>
                <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/facebook.svg" alt="Facebook" width={12} height={20} />
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                </a>
                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
                </a>
            </div>
        </div>
    )
}