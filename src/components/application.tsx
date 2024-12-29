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
  const [quotes, setQuotes] = useState<Quote[]>([]); // the ([]) means that the initial value is an empty array and the <Quote[]> means that the array will contain objects of type Quote

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes setQuotes={setQuotes}>
        {quotes.map((quote) => (
          <InspirationalQuote
            key={quote.id}
            source={quote.source}
            content={quote.content}
          />
        ))}
      </Quotes>
    </main>
  );
};

export default Application;
