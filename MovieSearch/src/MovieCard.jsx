import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./moviecard.css";
export default function MovieCard({movieData}){
    return (
        <div className='MovieCard'>
            <Card  className='Card'  >
                <CardMedia
                    className='cardImage'
                    image={movieData.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {movieData.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movieData.year}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movieData.imdb}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movieData.actors}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movieData.director}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movieData.released}
                    </Typography>
                
                </CardContent>
            </Card>
        </div>
    );
}