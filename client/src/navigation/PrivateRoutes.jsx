import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({
  exact,
  key,
  path,
  component: Component,
  isLayOut,
  Layout,
  accessLevel,
}) => {
  return (
    <Route
      exact={exact}
      key={key}
      path={path}
      render={(props) => {
        return isLayOut ? (
          <>
            <Layout>

            </Layout>
            <Component {...props} />
          </>
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PrivateRoutes;
