import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar';
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';
import { faMusic } from '@fortawesome/free-solid-svg-icons/faMusic';
import { faPersonDress } from '@fortawesome/free-solid-svg-icons/faPersonDress';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Divider, Typography } from '@mui/material';
import { primaryFontColor, secondayFontColor, bgLightColor, dividerColor } from '../assets/custom/colors'
import { faCake } from '@fortawesome/free-solid-svg-icons/faCake';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { faGuitar } from '@fortawesome/free-solid-svg-icons/faGuitar';
import { faCouch } from '@fortawesome/free-solid-svg-icons/faCouch';
import { faGift } from '@fortawesome/free-solid-svg-icons/faGift';
import { faEnvelope, faFan, faIcons, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const services = [
    {
      title: 'Photography',
      icon: <FontAwesomeIcon icon={faImage} size="2x" />,
    },
    {
      title: 'Videography',
      icon: <FontAwesomeIcon icon={faVideo} size="2x" />,
    },
    {
      title: 'Cake',
      icon: <FontAwesomeIcon icon={faCake} size="2x" />,
    },
    {
      title: 'Halls',
      icon: <FontAwesomeIcon icon={faBuilding} size="2x" />,
    },
    {
      title: 'Car Rental',
      icon: <FontAwesomeIcon icon={faCar} size="2x" />,
    },
    {
      title: 'DJ',
      icon: <FontAwesomeIcon icon={faMusic} size="2x" />,
    },
    {
      title: 'Suits',
      icon: <FontAwesomeIcon icon={faUserTie} size="2x" />,
    },
    {
      title: 'Dresses',
      icon: <FontAwesomeIcon icon={faPersonDress} size="2x" />,
    },
    {
      title: 'Studios',
      icon: <FontAwesomeIcon icon={faIcons} size='2x'/>
    },
    {
      title: 'Flowers',
      icon: <FontAwesomeIcon icon={faFan} size="2x" />,
    },
    {
      title: 'Catering',
      icon: <FontAwesomeIcon icon={faUtensils} size="2x" />,
    },
    {
      title: 'Music Band',
      icon: <FontAwesomeIcon icon={faGuitar} size="2x" />,
    },
    {
      title: 'Decorating',
      icon: <FontAwesomeIcon icon={faCouch} size="2x" />,
    },
    {
      title: 'Hair & Makeup',
      icon: <FontAwesomeIcon icon={faVenusMars} size='2x'/>
    },
    {
      title: 'Invitations',
      icon: <FontAwesomeIcon icon={faEnvelope} size="2x"/>,
    },
    {
      title: 'Gifts & Favors',
      icon: <FontAwesomeIcon icon={faGift} size="2x" />,
    },  
];

function Services() {

  return (
    <>
    <div className="services-container">
      <div className="headings">
        <span>Services</span>
        <span>View all</span>
      </div>
      <Divider variant="middle" sx={{backgroundColor: dividerColor}}/>
      <div className="items">
        {
        services.slice(0, 4).map((service, index) => (
          <div
          className="service-item"
          component={Link}
          to={`/services-page/${service.title}`}
          key={index}>
            <Button
              color="primary"
              sx={{
                color: secondayFontColor,
                height: '50px',
                '&:hover': {
                  bgcolor: bgLightColor,
                  outline:'none'
                },
              }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'normal' }}
            >
              {service.icon}
            </Button>
            <Typography color={primaryFontColor} variant='caption'>{service.title}</Typography>
          </div>
        ))}
      </div>
    </div>
    <div className="services-container">
      <div className="headings">
        <span>Top Rated</span>
      </div>
      <Divider variant="middle" sx={{backgroundColor: dividerColor}}/>

      <div className="items">
        {
        services.slice(4, 8).map((service, index) => (
          <div
          className="service-item"
          component={Link}
          to={`/services-page/${service.title}`}
           key={index}>
            <Button
              color="primary"
              sx={{
                color: secondayFontColor,
                height: '50px',
                '&:hover': {
                  bgcolor: bgLightColor,
                  outline:'none'
                },
              }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'normal' }}
            >
              {service.icon}
            </Button>
            <Typography color={primaryFontColor} variant='caption'>{service.title}</Typography>
          </div>
        ))}
      </div>
    </div>
    <div className="services-container">
      <div className="headings">
        <span>Mostly Hired</span>
      </div>
      <Divider variant="middle" sx={{backgroundColor: dividerColor}}/>
      <div className="items">
        {
        services.slice(8, 12).map((service, index) => (
          <div
          className="service-item"
          component={Link}
          to={`/services-page/${service.title}`}
           key={index}>
            <Button
              color="primary"
              sx={{
                color: secondayFontColor,
                height: '50px',
                '&:hover': {
                  bgcolor: bgLightColor,
                  outline:'none'
                },
              }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'normal' }}
            >
              {service.icon}
            </Button>
            <Typography color={primaryFontColor} variant='caption'>{service.title}</Typography>
          </div>
        ))}
      </div>
    </div>
    <div className="services-container">
      <div className="headings">
        <span>Photographer Of The Month</span>
      </div>
      <Divider variant="middle" sx={{backgroundColor: dividerColor}}/>
      <div className="items">
        {
        services.slice(12, 16).map((service, index) => (
          <div
          className="service-item"
          component={Link}
          to={`/services-page/${service.title}`}
           key={index}>
            <Button
              color="primary"
              sx={{
                color: secondayFontColor,
                height: '50px',
                '&:hover': {
                  bgcolor: 'none',
                  outline: 'none'
                },
                '&:focus': {
                  bgcolor: 'none',
                  outline: 'none'
                },
              }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'normal' }}
            >
              {service.icon}
            </Button>
            <Typography color={primaryFontColor} variant='caption'>{service.title}</Typography>
          </div>
        ))}
      </div>
    </div>
    </>
  );  
}

export default Services;
