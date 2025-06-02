import { useFormContext } from "react-hook-form";
import { SelectProps } from "./type";
import ErrorMsg from "../error-msg";
import "./styles.scss";

export default function Select({ errorMsg = true, ...props }: SelectProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  let error: any = errors[props.name];
  const className = `${error ? "invalid-input" : ""} ${props.className || ""}`;

  return (
    <label className="labeld-select">
      {props.label && <span>{props.label}</span>}
      <select
        {...register(props.name)}
        defaultValue={props.defaultValues}
        className={!props.noStyle ? `custom-select ${className}` : className}
        style={props.style}
      >
        {props.placeholder && <option value="">{props.placeholder}</option>}
        {props.items?.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {error && errorMsg && <ErrorMsg>{error.message}</ErrorMsg>}
    </label>
  );
}
