import styles from "./styles.module.scss"
import logoImg from "../../assets/logo.svg";

export function MessageList() {
    return (
        <div className={styles.MessageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/filipirafael.png" alt="Filipi Rafael" />
                        </div>
                        <span>Filipi Rafael</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/filipirafael.png" alt="Filipi Rafael" />
                        </div>
                        <span>Filipi Rafael</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/filipirafael.png" alt="Filipi Rafael" />
                        </div>
                        <span>Filipi Rafael</span>
                    </div>
                </li>

                
            </ul>
        </div>
    )
}