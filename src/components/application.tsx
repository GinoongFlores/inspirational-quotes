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
  const [quotes, setQuotes] = useState<Quote[]>([]);

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes
        count={count}
        onSubmit={async (e) => {
          const quotes = await fetchQuotes(count);
          setQuotes(quotes);
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          {quotes.map((quote) => (
            <InspirationalQuote
              key={quote.id}
              source={quote.source}
              content={quote.content}
            />
          ))}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;
