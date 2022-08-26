import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {
                showProfileData && (
                    <Box mr="4" textAlign="right">
                        <Text>Kaique Lopes</Text>
                        <Text color="gray.300" fontSize="small">Kaiqueraujo246@hotmail.com</Text>
                    </Box>
                )
            }
            <Avatar size="md" name="Kaique Lopes" src="https://github.com/lopekai.png" />

        </Flex>
    )
}