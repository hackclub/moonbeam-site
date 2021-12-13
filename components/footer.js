import { Container, Box, Text, Link } from 'theme-ui'

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{ bg: 'sunken', textAlign: 'center', px: 2, py: [3, 4], mt: [4, 5] }}
    >
      <Container variant="narrow">
        <Text>A project by the Hack Club community.</Text>
        <br />
        <Text>
          Open source on GitHub —{' '}
          <Link as="a" href="https://github.com/hackclub/moonbeam-site">
            website
          </Link>
          &nbsp;&amp;{' '}
          <Link href="https://github.com/hackclub/moonbeam">project.</Link>{' '}
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
