import React, { Fragment, useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuote = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  //   const DUMMY_QUOTES = [
  //     {
  //       id: "q1",
  //       author: "Max",
  //       text: "Learning React is fun!",
  //     },
  //     {
  //       id: "q2",
  //       author: "Bon",
  //       text: "Learning React is great!",
  //     },
  //   ];
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0))
    return <NoQuotesFound />;

  return (
    <Fragment>
      <QuoteList quotes={loadedQuotes} />
    </Fragment>
  );
};

export default AllQuote;
