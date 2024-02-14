import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Card({name}) {
  return (
    <Stack direction="row" spacing={10}>
      <DemoPaper variant="elevation">
        <img src="https://as2.ftcdn.net/v2/jpg/04/47/90/13/1000_F_447901399_5oTnw1t2gsMr4zMj64w6lyFtF78bcQh4.jpg" alt="Demo" style={{ maxWidth: '100%', maxHeight: '100%' }} />

         <div>{name}</div>
      </DemoPaper>
    </Stack>
  );
}
