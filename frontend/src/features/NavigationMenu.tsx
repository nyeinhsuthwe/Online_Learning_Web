import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navigation = () => {
    return (
        <div className="flex gap-1">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-gray-600 text-sm px-2">2 Chapters</NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <NavigationMenuLink >This course has two chapters.</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

             <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-gray-600 text-sm px-2">90 Lessons</NavigationMenuTrigger>
                        <NavigationMenuContent >
                            <NavigationMenuLink >This course has 90 episodes.</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}

export default Navigation
