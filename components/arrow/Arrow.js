import styles from './arrow.module.scss'

export default function Arrow({direction, onClick}) {

    return (
        <span className={`
            ${direction === "top" ? styles.top : ""}
            ${direction === "bottom" ? styles.bottom : ""}
            ${direction === "left" ? styles.left : ""}
        `}>
            <span onClick={onClick} className={styles.container}>
                <span className={styles.arrow}></span>
            </span>
        </span>
    )
}