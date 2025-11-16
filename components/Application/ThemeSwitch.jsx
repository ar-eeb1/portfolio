import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

import { Moon } from 'lucide-react';

const ThemeSwitch = () => {
    const { setTheme } = useTheme()
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button type='button' variant="ghost" className='cursor-pointer'>
                    <IoSunnyOutline className='dark:hidden text-3xl'  />
                    <Moon className='hidden dark:block text-3xl' size={30} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ThemeSwitch
