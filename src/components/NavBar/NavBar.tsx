import { Link, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
type TNavBar = {
  links: {
    text: string;
    href: string;
    'data-testid'?: string;
  }[];
};

function NavBar({ links }: TNavBar) {
  const location = useLocation();

  return (
    <Box
      component="aside"
      sx={{
        background: '#0c2975',
        padding: '16px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        sx={{ cursor: 'pointer', marginBottom: '80px', marginTop: '40px' }}
      >
        <img src="/surelogo.svg" alt="logo"></img>
      </Link>

      {links.map(({ text, href, 'data-testid': dataTestId }) => {
        const isCurrentLocation = location.pathname.includes(href);

        return (
          <Link
            component={RouterLink}
            aria-current={isCurrentLocation ? 'page' : false}
            key={href}
            to={href}
            color="#fff"
            underline="hover"
            sx={{
              cursor: 'pointer',
              '&:not(:last-of-type)': {
                marginBottom: '16px',
              },

              ...(isCurrentLocation
                ? {
                    background: 'white',
                    color: 'black',
                  }
                : {}),
            }}
            data-testid={dataTestId}
          >
            {text}
          </Link>
        );
      })}
    </Box>
  );
}

export default NavBar;
