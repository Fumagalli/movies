import "./styles.scss";
export function ErrorMessage({ message }: { message: string }) {
  return <div className="error-message">{message}</div>;
}
