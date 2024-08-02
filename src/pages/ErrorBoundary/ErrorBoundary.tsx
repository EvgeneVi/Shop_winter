import { isRouteErrorResponse, useRouteError } from "react-router";
import { ErrorPage } from "./ErrorPage";

export const ErrorBoundary = () => {
  const err = useRouteError();

  if (isRouteErrorResponse(err)) {
    // console.log(err.status);
    return <ErrorPage message={err.data.message} status={err.status} />;
  } else {
    return (
      <ErrorPage
        message="Ошибка на странице, попробуйте обновить страницу позже"
        status={400}
      />
    );
  }
};
