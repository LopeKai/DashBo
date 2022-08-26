import { Stack } from "@chakra-ui/react"

import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri'

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/dashbord">Dashbord</NavLink>
                <NavLink icon={RiContactsLine} href="/Users">Usuários</NavLink>
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
                <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
            </NavSection>s
        </Stack>
    )
}