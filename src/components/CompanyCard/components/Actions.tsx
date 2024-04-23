import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeartIconOutlined from '@mui/icons-material/FavoriteBorder';
import * as React from 'react';
import HeartIconFilled from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import SecondPhoneIcon from '@mui/icons-material/PhoneAndroidOutlined';
import { Company } from '../../../types';
import { Box } from '@mui/material';
import LocationIcon from '@mui/icons-material/Room';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Props = {
  expanded: boolean;
  handleExpandClick: () => void;
  company: Company;
};

const Actions = ({ expanded, handleExpandClick, company }: Props) => {
  const { tel, socialMedia } = company;
  const [firstTel, secondTel] = tel || [];
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <CardActions disableSpacing>
      <IconButton aria-label="location">
        <LocationIcon />
      </IconButton>
      {socialMedia?.facebook && (
        //make href to new page
        <IconButton aria-label="facebook" href={socialMedia.facebook} target="_blank">
          <FacebookIcon />
        </IconButton>
      )}
      {socialMedia?.instagram && (
        <IconButton aria-label="instagram" href={socialMedia.instagram} target="_blank">
          <InstagramIcon />
        </IconButton>
      )}
      {socialMedia?.website && (
        <IconButton aria-label="website" href={'https://' + socialMedia.website} target="_blank">
          <WebIcon />
        </IconButton>
      )}
      {firstTel && (
        <IconButton aria-label="phone" href={`tel : ${firstTel}`}>
          <PhoneIcon />
        </IconButton>
      )}
      {secondTel && (
        <IconButton aria-label="phone" href={`tel : ${secondTel}`}>
          <SecondPhoneIcon />
        </IconButton>
      )}
      <Box sx={{ ml: 'auto' }}>
        <IconButton aria-label="favorite" onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? <HeartIconFilled color="error" /> : <HeartIconOutlined color="disabled" />}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
    </CardActions>
  );
};

export default Actions;
