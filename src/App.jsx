import reactLogo from "@/assets/react.svg"
import { Button, Center, HStack, Box } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import viteLogo from "/vite.svg"
import { Icon } from "@chakra-ui/react"
import { HiHeart } from "react-icons/hi"
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import { Switch } from "@/components/ui/switch"
import { HiCheck, HiX } from "react-icons/hi"


function App() {
  return (
    <Center flexDir="column" gap="8" minH="dvh">
      <HStack>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>        
      </HStack>
      <h1>Hello User</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    {/* <Stack direction="row"> */}
      <Badge>Default</Badge>
      <Badge colorPalette="green">Success</Badge>
      <Badge colorPalette="red">Removed</Badge>
      <Badge colorPalette="purple">New</Badge>
    {/* </Stack> */}

    <Icon fontSize="2xl" color="pink.700">
    <HiHeart />
    </Icon>
    <IconButton aria-label="Search database">
      <LuSearch />
    </IconButton>
    <Switch size="lg" thumbLabel={{ on: <HiCheck />, off: <HiX /> }}>
      Switch me
    </Switch>

    </Center>
  )
}

export default App