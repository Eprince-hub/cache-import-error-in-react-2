import { cache } from 'react';
import { sql } from './connect';

type Animal = {
  id: number;
  name: string;
  type: string;
  img: string;
};

export const getAnimalsInsecure = cache(async () => {
  const animals = await sql<Animal[]>`
    SELECT
      *
    FROM
      animals
  `;
  return animals;
});
