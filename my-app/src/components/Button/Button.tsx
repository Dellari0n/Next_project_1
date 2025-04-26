import styles from "./Button.module.css"

interface ButtonProps{
    type?: "submit" | "button";
    children: string;
    variant?: 'link' | 'default' | 'outline';
}


export function Button({type = "button", children, variant = 'default'}:ButtonProps) {
    return(
        <button
        type={type} 
        className={`${styles.button} ${styles[variant]} fs1`}
        >
            {children}
        </button>
    )
}