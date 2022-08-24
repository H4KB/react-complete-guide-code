import QuoteList from "../components/quotes/QuoteList";

const DUMMY = [
  { id: "q1", author: "Max", text: "hello" },
  { id: "q2", author: "Min", text: "bye" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY} />;
};

export default AllQuotes;
