import "./styles.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return <div className={`container ${className}`}>{children}</div>;
}
