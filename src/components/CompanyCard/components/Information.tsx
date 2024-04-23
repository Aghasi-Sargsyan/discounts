import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';

type Props = {
  expanded: boolean;
  description: string;
};

const Information = ({ expanded, description }: Props) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>{description}</Typography>
      </CardContent>
    </Collapse>
  );
};

export default Information;
