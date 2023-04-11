import { Container } from '@chakra-ui/layout'
import Content from '../profile components/Profile/ProfileContent'
import Sidebar from '../profile components/SideBar/Sidebar'

export default function Main() {
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
      <Sidebar />
      <Content />
    </Container>
  )
}