import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      {/*<Route path={`/quotes/${params.quoteId}/comments`}>*/}
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
