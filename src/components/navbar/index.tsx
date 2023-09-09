import { Text, Flex, Spacer, Box } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { Logo } from './Logo'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { TermsofService } from './TermsofService';

export const Navbar = () => {
  
  return (
    <Flex alignItems='center' justifyContent='center' direction="row" height= "70px" width="100%" bgClip="text">
      <Box p="10px"><Logo /></Box>
      <Box 
        as='b'
        p="10px"
      >
        <Text color="text">Section</Text>
      </Box>

      <Spacer />
        <ConnectButton 

        />
        <TermsofService />
        <DarkModeSwitch />
    </Flex>
  )
}