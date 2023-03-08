import { useNavigate } from 'react-router-dom';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';

export default function Nav() {
  const navigate = useNavigate();
  // toggleColorMode는 colorMode를 dark나 light로 변경해줌
  const { colorMode, toggleColorMode } = useColorMode();
  // useColorModeValue(lightModeValue, darkModeValue)
  const bg = useColorModeValue('gray.100', 'gray.900');
  return (
    <div>
      <Box bg={bg} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box onClick={() => navigate('/main')} cursor="pointer">
            Like A Local
          </Box>

          <Flex alignItems="center">
            <Stack direction="row" spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
                  <Avatar size="sm" src="https://avatars.dicebear.com/api/male/username.svg" />
                </MenuButton>
                <MenuList alignItems="center">
                  <br />
                  <Center>
                    <Avatar size="2xl" src="https://avatars.dicebear.com/api/male/username.svg" />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
