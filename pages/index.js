import { Container } from 'theme-ui'
import Script from '../components/script.mdx'

export default function Home() {
  return (
    <Container
      className="crt"
      variant="copy"
      sx={{ color: 'green', textAlign: 'center' }}
    >
      <Script />
    </Container>
  )
}
