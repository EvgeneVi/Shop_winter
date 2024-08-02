import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";
import Button from "components/shared/Button/Button";

type props = {
  message: string;
  status: number;
};
export const ErrorPage = ({ message, status }: props) => {
  const navigate = useNavigate();
  const redirect = () => navigate("");

  return (
    <section className="error-page">
      <h1 className="error-page_status">{status}</h1>
      <p className="error-page_message">{message}</p>
      <Button onClick={redirect} classes={" error-page_link"}>
        Перейти на главную
      </Button>
    </section>
  );
};
