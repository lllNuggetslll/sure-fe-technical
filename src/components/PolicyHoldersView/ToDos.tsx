import React from 'react';
import { Typography } from '@mui/material';

const todos = [
  'Make mobile friendly',
  'Add unit tests',
  'Add integration tests',
  'Apply better theme/styling',
  'Add loading/empty states',
  'Include preloading/prefetching/caching',
  'Add transitions',
  'Make sure accessibility is implemented',
  'Add CSV export option',
  'Link to policy holder profile',
  'Add input form',
];

const ToDos = () => {
  return (
    <>
      <Typography variant="h5" textAlign="left" marginBottom="16px">
        Todos
      </Typography>

      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDos;
