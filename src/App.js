
import { Flex, Image, Box, Heading, Button, Text } from 'rebass';

import logo from './JunoLogo.png'
import page from './page.png'
import sectionLogo from './SectionLogo.png'

function App() {
  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
        background: 'rgba(255, 206, 0, 0.02)',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <Flex 
        px={[3, 5]}
        py={[3, 4]}
        width={['100%', '900px']}
      >
        <Image src={logo} sx={{ height: 60 }} />
        <Box mx='auto' />
      </Flex>
      <Flex 
        px={[3, 5]}
        py={[3, 4]}
        width={['100%', '900px']}
      >
        <H1Header width={'100%'} >Project Management for the Future of Work</H1Header>
      </Flex>
      <Flex 
        px={[3, 5]}
        py={[3, 4]}
        width={['100%', '900px']}
        justifyContent={'center'}
      >
        <a href='https://airtable.com/shrknTAICnUOjbTTU' target={'_blank'}>
          <Button
            sx={{
              backgroundColor: '#FF7E1D',
              fontSize: ['16px', '24px'],
              borderRadius: '50px',
              fontFamily: 'Lato',
              fontWeight: 'bold',
              ":hover": {
                cursor: 'pointer'
              }
            }}
          >
            Request Early Access
          </Button>
        </a>
        
      </Flex>
      <Flex 
        px={[3, 5]}
        py={[3, 4]}
        width={['100%', '900px']}
      >
        <Image src={page} />
      </Flex>
      <Flex 
        px={[3, 5]}
        py={[3, 4]}
        width={['100%', '900px']}
        alignContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Flex 
          sx={{
            width: ['100%', '250px'],
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            my: ['20px', '0px']
          }}
        >
          <Flex width={'100%'}>
            <Image src={sectionLogo} mb={'10px'}/>
          </Flex>
          <H2Header>Manage Any Project</H2Header>
          <BodyText>Fully featured project management tool to help you break down tasks and get things done </BodyText>
        </Flex>
        <Flex 
          sx={{
            width: ['100%', '250px'],
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            my: ['20px', '0px']
          }}
        >
          <Flex width={'100%'}>
            <Image src={sectionLogo} mb={'10px'}/>
          </Flex>
          <H2Header>Bounty-Based Tasks</H2Header>
          <BodyText>Reward contributions directly in your project management tool </BodyText>
        </Flex>
        <Flex 
          sx={{
            width: ['100%', '250px'],
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            my: ['20px', '0px']
          }}
        >
          <Flex width={'100%'}>
            <Image src={sectionLogo} mb={'10px'}/>
          </Flex>
          <H2Header>Fund Management</H2Header>
          <BodyText>Separate wallet from your DAO treasury per project. Automated escrow for task payouts </BodyText>
        </Flex>
      </Flex>
      <Flex
        px={[3, 5]}
        py={[3, 4]}
        width={['100%', '900px']}
        justifyContent={'center'}
      >
        <BodyText>Made with 🔨 by (🌎, 🌎)</BodyText>
      </Flex>
    </Flex>
  );
}

const H1Header = props =>
  <Heading
    {...props}
    sx={{
      fontFamily: 'Cabin', 
      fontWeight: 'medium',
      fontSize: [5, 7],
      textAlign: 'center'
    }}
  />

const H2Header = props =>
  <Heading
    {...props}
    sx={{
      fontFamily: 'Lato', 
      fontWeight: 'medium',
      fontSize: '24px',
      textAlign: 'left'
    }}
  />

const BodyText = props =>
  <Text
    {...props}
    sx={{
      fontFamily: 'Lato', 
      fontSize: 2,
      textAlign: 'left',
      color: '#242424',
      fontSize: '18px',
    }}
  /> 

export default App;
