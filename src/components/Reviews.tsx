import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { bgLightColor } from '../assets/custom/colors'
import { Rating } from '@mui/material';

interface ReviewsProps {
  reviews: string[];
  rating: number;
}

export default function Reviews({ reviews, rating }: ReviewsProps) {
  return (
    <List sx={{ p:2 }}>
    {
      reviews.map((data,i)=>(
        <ListItem
         key={i}
         sx={{
          bgcolor:bgLightColor,
          mb:2,
          borderRadius:'8px',
          }}>
          <ListItemText>{data}</ListItemText>
          <Rating name="read-only" value={Math.random()*8} readOnly />
        </ListItem>
      ))
    }
   </List>
  );
}
