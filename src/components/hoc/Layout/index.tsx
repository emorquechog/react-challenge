import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import UserList from "components/containers/UserList";
import UserDetail from "components/containers/UserDetail";
import { RouteComponentProps } from "react-router";

class Layout extends React.PureComponent<RouteComponentProps> {
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <Switch>
          <Route exact={true} path="/" component={UserList} />
          <Route exact={true} path="/list" component={UserList} />
          <Route exact={true} path="/detail" component={UserDetail} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
