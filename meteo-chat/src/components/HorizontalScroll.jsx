import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { scrollContainerStyles, cardStyles } from  "../styles"
const items = ['React', 'Groq', 'Mapbox', 'FastAPI'];

export default function HorizontalScroll() {
  return (
    <Box sx={scrollContainerStyles}>
      {items.map((item, i) => (
        <Card key={i} sx={cardStyles}>
          <CardContent>
            <Typography>{item}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}