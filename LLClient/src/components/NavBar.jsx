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
import { useToast } from "@/hooks/use-toast";

const NavBar = () => {
  const setValue = useTextStore((state) => state.setValue);
  const { toast } = useToast();
  const comingSoonToast = () => {
    toast({
      title: "Not working yet!",
      description: "Coming soon!",
    });
  };

  return (
    <div className="my-2 mx-3 sm:ml-20 md:mx-20 md:ml-32 lg:m-4 lg:ml-48">
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center flex-wrap md:gap-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs md:text-base lg:text-lg px-0 sm:px-2 md:px-4">
              Sample texts
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <SimpleListItem
                  title="🇩🇰 Danish text"
                  onClick={() => setValue(danishText)}
                />
                <li className="row-span-3">
                  <div className="flex items-center place-content-center h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <img
                      className="dark:brightness-75 size-12 mb-5"
                      src="public/logo.svg"
                      alt=""
                    />
                    <div className="text-lg font-medium">
                      Choose a sample text to read!
                    </div>
                  </div>
                </li>
                <SimpleListItem
                  title="Mandarin text"
                  onClick={() => setValue(chineseText)}
                />
                <SimpleListItem
                  title="🇮🇹 Italian text"
                  onClick={() => setValue(italianText)}
                />
                <SimpleListItem
                  title="🇩🇪 German text"
                  onClick={() => setValue(germanText)}
                />
                <SimpleListItem
                  title="🇫🇷 French text"
                  onClick={() => setValue(frenchText)}
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs md:text-base lg:text-lg px-0 md:px-2 lg:px-4">
              Future features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <SimpleListItem onClick={comingSoonToast} title="Dictionary">
                  Dictionary definitions of words stored in a database
                </SimpleListItem>
                <SimpleListItem
                  onClick={comingSoonToast}
                  title="Personal accounts"
                >
                  Personal accounts with your saved words and settings
                </SimpleListItem>
                <SimpleListItem onClick={comingSoonToast} title="Hardest words">
                  A personal list of words you often forget
                </SimpleListItem>
                <SimpleListItem onClick={comingSoonToast} title="Pronunciation">
                  Pronunciation sound clips for each word
                </SimpleListItem>
                <SimpleListItem
                  onClick={comingSoonToast}
                  title="Accessibility features"
                >
                  Accessibility features for better reading experience
                </SimpleListItem>
                <SimpleListItem
                  onClick={comingSoonToast}
                  title="ChatGPT integration"
                >
                  ChatGPT integration for more advanced language learning
                </SimpleListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xs md:text-base lg:text-lg px-0 sm:px-2 md:px-4">
              About the project
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="items-center grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <SimpleListItem
                  title="Github Repo"
                  href="https://github.com/Jackarius090/LanguageLearning"
                >
                  Go check out the Github repo here.
                  github.com/Jackarius090/LanguageLearning
                </SimpleListItem>
                <p className="text-sm">
                  This project is a work in progress. If you have any ideas for
                  features, please let me know!
                </p>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;

const SimpleListItem = ({ title, children, onClick, href }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="block select-none space-y-1 rounded-md border border-input p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug">{children}</p>
      </a>
    </li>
  );
};
