import { Container, Box, Text, Heading } from 'theme-ui'
import Footer from '../components/footer'
// @ts-ignore
import Copy from '../components/copy.mdx'

const Home = () => {
  // @ts-ignore
  return (
    <>
      <Box sx={{ bg: 'sheet', py: 4 }}>
        <Heading variant="title" sx={{ textAlign: 'center' }}>
          <Text as="span" variant="eyebrow" sx={{ transform: 'uppercase' }}>
            Hack Club
          </Text>{' '}
          <br />
          <Text
            as="span"
            sx={{
              color: 'cyan',
              display: 'inline-block',
              transition: 'all .25s ease-in-out',
              ':hover': {
                WebkitTextStroke: 'currentColor',
                WebkitTextStrokeWidth: '2px',
                WebkitTextFillColor: theme => theme.colors.white,
                textShadow: theme => `0 0 12px ${theme.colors.cyan}`,
                transform: 'rotate(-4deg) scale(1.025)'
              }
            }}
          >
            Moonbeam
          </Text>
        </Heading>
      </Box>
      <Container sx={{ py: 4 }}>
        <Copy />
      </Container>
      <Footer />
    </>
  )
}

export default Home
