import styles from "./styles.module.scss"

export function LoginBox() {
    return (
        <div className={styles.LoginBoxWrapper}>
        <strong>Entre e ocmpartilhe sua mensagem</strong>
        <a href="#" className={styles.signInWithGitHub}>
            Entrar com GitHub
        </a>

        </div>
    )
}