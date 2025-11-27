import styles from "./container.module.scss"
import type { ReactNode } from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      { children }
    </div>
  )
}