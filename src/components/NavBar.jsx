"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import {
  chineseText,
  italianText,
  danishText,
  germanText,
  frenchText,
} from "@/lib/sampleTexts";
import { useTextStore } from "@/lib/textStore";

const NavBar = () => {
  const setValue = useTextStore((state) => state.setValue);
  return (
    <div className="my-2 md:mx-20 lg:m-4 lg:ml-40">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm md:text-base lg:text-lg">
              Sample texts
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li>
                  <div
                    onClick={() => setValue(danishText)}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      🇩🇰 Danish text
                    </div>
                  </div>
                </li>
                <li className="row-span-3">
                  <div className="flex items-center place-content-center h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <img
                      className="dark:brightness-75 size-12 mb-5"
                      src="public/favicon-192x192.png"
                      alt=""
                    />
                    <div className="text-lg font-medium">
                      Choose a sample text to read!
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => setValue(chineseText)}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Chinese text
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => setValue(italianText)}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Italian text
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => setValue(germanText)}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      German text
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => setValue(frenchText)}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      French text
                    </div>
                  </div>
                </li>
                <SimpleListItem title="Typography Styles">
                  Well-designed typography for headings, paragraphs, and more.
                </SimpleListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm md:text-md lg:text-lg">
              Components
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <SimpleListItem title="Alert Dialog">
                  A modal dialog that interrupts the user with important
                  content.
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
                  Displays additional information when an element is focused or
                  hovered.
                </SimpleListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm md:text-md lg:text-lg">
              Components
            </NavigationMenuTrigger>
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
  );
};

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
  );
};
