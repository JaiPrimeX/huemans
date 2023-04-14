import * as React from 'react'
import {
  Grid,
  Avatar,
  AvatarBadge,
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { API, Storage } from 'aws-amplify';
import * as queries from "../../../graphql/queries"
import * as mutations from "../../../graphql/mutations";

function Profile() {
  const [userProfile, setUserProfile] = React.useState(null)
  const who = '97a64680-5c6f-4844-b7be-8a36f5450e9c';

  const { isOpen, onOpen, onClose } = useDisclosure()
  const profileImage = React.useRef(null)
  const [ship, isOwner] = React.useState('')
  

  const openChooseImage = () => {
    profileImage.current.click()
  }

  const changeProfileImage = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg']
    const selected = event.target.files[0]

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => setUserProfile(reader.result)
      return reader.readAsDataURL(selected)
    }

    onOpen()
  }
  const [user, setUser] = React.useState([]);
  const [list,setList] =  React.useState([]);

  if (user.length==0){
    fetchUsers()
  }
  /*else if (user.length==1){
    console.log("user")
    console.log(user.FirstName)
    return
  }*/
  React.useEffect(() => {
    if (user.length > 0){
      
      defineData()
      if (user[0].Owner == true){
        isOwner("(Owner)")
      }
      else{
        isOwner("(User)")
      }
    }
  },[user]);

  

  async function fetchUsers() {

    const variables = {
      filter: {
        id: {eq: who}
      }
    }
    
    const apiData = await API.graphql({ query: queries.listUsers, variables: variables});
    const usersFromAPI = apiData.data.listUsers.items;
    await Promise.all (
      usersFromAPI.map(async (users) => {
        return users;
      })
    );
    
    setUser(usersFromAPI);
  }

  function defineData(){
    setList([
     {
       id: 1,
       pic: user[0].ProfileImage,
       uname: user[0].UserName,
       fname: user[0].FirstName,
       lname: user[0].LastName

     },
     
   ])
 }

  return (
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      {list.map(item => (
      <VStack>
      <Avatar
        size="2xl"
        name="Marcus Peterson"
        cursor="pointer"
        onClick={openChooseImage}
        src={userProfile ? userProfile : item.pic}
      >
        <AvatarBadge bg="brand.blue" boxSize="1em">
          <svg width="0.4em" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            />
          </svg>
        </AvatarBadge>
      </Avatar>
      <input
        hidden
        type="file"
        ref={profileImage}
        onChange={changeProfileImage}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File not supported!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="green">PNG</Badge>
              <Badge colorScheme="green">JPG</Badge>
              <Badge colorScheme="green">JPEG</Badge>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={1}>
        <Heading as="h3" fontSize="xl" color="brand.dark">
          {item.fname} {item.lname}
        </Heading>
        <Text color="brand.gray" fontSize="sm">
          @{item.uname} {ship}
        </Text>
      </VStack>
      </VStack>
      ))}
    </VStack>
  )
}

export default Profile