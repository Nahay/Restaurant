import Image from 'next/image'
import styles from './logo.module.scss'

export default function Logo() {


    return(
        <div className={styles.logo}>
            <Image src="/logo/logo192.png" alt="logo" width={50} height={50} />
        </div>
    )


}