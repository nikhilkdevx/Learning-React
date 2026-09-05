
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ExpCard({expense}) {
    const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
    );

    const card = (
    
        <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            {expense.expense}
        </Typography>
        <Typography variant="h5" component="div">
            {expense.amount}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{expense.category}</Typography>
        <Typography variant="body2">
            {expense.date}
            <br />
        </Typography>
        <button>Delete</button>
        </CardContent>
        
    
    );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}