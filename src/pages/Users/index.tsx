import { useBreakpointValue, Flex, SimpleGrid, Box, Text, theme, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody } from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { SideBar } from '../../components/Sidebar'

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" maxWidth={1480} my="6" px="6">
                <SideBar />

                <Box flex="1" borderRadius={8} bg="gray.800" p='8'>
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Link href="/Users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon
                                    as={RiAddLine}
                                    fontSize="20"
                                />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuários</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Kaique Lopes</Text>
                                        <Text fontSize="sm" color="gray.300">kaiquearaujo246@hotmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>04 de abril, 2022</Td>}
                                {isWideVersion ?
                                    <Td>
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="purple"
                                            leftIcon={<Icon
                                                as={RiPencilLine}
                                                fontSize="16"
                                            />}
                                        >
                                            {isWideVersion ? "Editar" : null}
                                        </Button>
                                    </Td>
                                    :
                                    null
                                }

                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}