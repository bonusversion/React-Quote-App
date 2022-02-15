import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import NewQuote from "./pages/NewQuote";
// import AllQuote from "./pages/AllQuotes";
// import QuoteDetail from "./pages/QuoteDetail";
// import NotFound from "./pages/NotFound";

const NewQuote = React.lazy(() => import("./pages/NewQuote.js"));
const AllQuote = React.lazy(() => import("./pages/AllQuotes.js"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail.js"));
const NotFound = React.lazy(() => import("./pages/NotFound.js"));

function App() {
  const DUMMY_QUOTES = [{ id: "q1", author: "test", text: "test" }];

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"></Redirect>
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="/quotes" exact>
            <AllQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>{" "}
      </Suspense>
    </Layout>
  );
}

export default App;
