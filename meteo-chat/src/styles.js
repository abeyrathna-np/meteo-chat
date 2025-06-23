export const scrollContainerStyles = {
  display: 'flex',
  overflowX: 'auto',
  gap: 2,
  p: 2,
  scrollSnapType: 'x mandatory',
  '&::-webkit-scrollbar': { height: '6px' },
  '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: 2 },
};

export const cardStyles = {
  flex: '0 0 auto',
  width: 200,
  scrollSnapAlign: 'start',
  background: '#f4f4f4',
  textAlign: 'center',
};