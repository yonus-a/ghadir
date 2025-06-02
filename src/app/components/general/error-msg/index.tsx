import Icon from "../icon";
import "./styles.scss";

interface Props {
  children: React.ReactNode;
}

export default function ErrorMsg({ children }: Props) {
  return (
    <span className="error-msg icon-wrapper icon-24">
      <Icon name="error" />
      {children}
    </span>
  );
}
