import { useEffect, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quote, setQuote] = useState<Quote | undefined>();

  useEffect(() => {
    fetchRandomQuote().then(setQuote);
  }, []);

  // below is the code where to quote is not defined and it will return the loading component
  if (!quote) return <Loading />;
  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      {/* so here the quote is already defined and it will return the
      InspirationalQuote component */}
      <InspirationalQuote content={quote.content} source={quote.source} />
      {/* <Quotes>
        <div className="grid grid-cols-2 gap-4"></div>
      </Quotes> */}
    </main>
  );
};

export default Application;
