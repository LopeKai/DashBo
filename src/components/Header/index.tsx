import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine, RiSearchLine } from 'react-icons/ri'

import { Profile } from './Profile'
import { NoticationsNav } from './NotificationsNav'
import { SearchBox } from './SearchBox'
import { Logo } from './Logo'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

export function Header() {
    const { onOpen } = useSidebarDrawer()


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            {
                !isWideVersion && (
                    <IconButton
                        aria-label='Open navigation'
                        icon={<Icon as={RiMenuLine}/>}
                        fontSize="24"
                        variant="unstyled"
                        onClick={onOpen}
                        mr="2"
                    >

                    </IconButton>
                )
            }
            <Logo />

            {
                isWideVersion && (
                    <SearchBox />
                )
            }

            <Flex align="center" ml="auto">
                <NoticationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}