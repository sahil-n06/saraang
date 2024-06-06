import React from 'react';
import Card from './Card';
import Pagination from './Pagination';
import Testinomial from './Testinomial';
import Quotes from './Quotes';
import Contact from './Contact';

const Collection = () => {
  const totalPages = 5; // Example value // Example value
  const urlParamName = 'page'; // Example value

  return (
    <>
      <Card />
      <Testinomial/>
      <Quotes/>
      <Contact/>
    </>
  );
};

export default Collection;
