"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const NavBar = ({setText}) => {

    const handleDanishClick = () => {
        const placeholderText = "Sønderborg er en lille by i Sønderjylland. Den er ikke særlig stor, men hyggelig. I en gade i Sønderborg står der et stort, gammelt, rødt hus. Der bor Morten sammen med sin gode ven Thomas. De to er flyttet ind i lejligheden i august, lige før det nye semester begyndte. I deres hus bor der også nogle andre personer. På den første etage bor der en matematiklærer med sin kone og deres to småbørn. Påanden etage bor en gammel dame, der engang har arbejdet som frisør. Hun er meget sød og har tit besøg af hendes børnebørn. De kommer gerne forbi hos hende for at høre spændende historier fra den tid mormor var ung og for at fånoget af hendes lækre kage. Morten og Thomas har en hyggelig lejlighed. I køkkenet stå r der et bord og fire stole. Der sidder de tit sammen med deres venner og spiser. Morten er nemlig meget godt til at lave mad. Thomas kan det ikke så godt, så vasker han alltid op."
        setText(placeholderText)
        }
    
  return (
    <div>
        <NavigationMenu>
        <NavigationMenuList className="flex justify-center flex-wrap">
            <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">
                        Beautiful Design
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                        Stunning components with clean UI and elegant styles.
                    </p>
                    </div>
                </li>
                <li>
                    <div onClick={handleDanishClick} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Danish text</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Add a sample Danish text to the text area.
                        </p>
                    </div>
                </li>
                <SimpleListItem title="Installation Guide">
                    Quick guide on installing and setting up your project.
                </SimpleListItem>
                <SimpleListItem title="Typography Styles">
                    Well-designed typography for headings, paragraphs, and more.
                </SimpleListItem>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <SimpleListItem title="Alert Dialog">
                    A modal dialog that interrupts the user with important content.
                </SimpleListItem>
                <SimpleListItem title="Hover Card">
                    Preview content available behind a link on hover.
                </SimpleListItem>
                <SimpleListItem title="Progress">
                    Displays task completion as a progress bar.
                </SimpleListItem>
                <SimpleListItem title="Scroll Area">
                    Visually separates content using scrollable areas.
                </SimpleListItem>
                <SimpleListItem title="Tabs">
                    Organized sections of content displayed one at a time.
                </SimpleListItem>
                <SimpleListItem title="Tooltip">
                    Displays additional information when an element is focused or hovered.
                </SimpleListItem>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <SimpleListItem title="Scroll Area">
                    Visually separates content using scrollable areas.
                </SimpleListItem>
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
    </div>
  )
}

export default NavBar;


const SimpleListItem = ({ title, children }) => {
  return (
    <li>
      <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </div>
    </li>
  )
}
