import "./styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ fieldName, value, onChange, ...props }: InputProps) {
  return (
    <div className="input-group">
      <label>
        {fieldName}
        <input
          {...props}
          placeholder={`Digite seu ${fieldName.toLowerCase()}`}
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
}