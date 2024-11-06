"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const NavBar = ({ setText }) => {
  const handleDanishClick = () => {
    const placeholderText =
      "Sønderborg er en lille by i Sønderjylland. Den er ikke særlig stor, men hyggelig. I en gade i Sønderborg står der et stort, gammelt, rødt hus. Der bor Morten sammen med sin gode ven Thomas. De to er flyttet ind i lejligheden i august, lige før det nye semester begyndte. I deres hus bor der også nogle andre personer. På den første etage bor der en matematiklærer med sin kone og deres to småbørn. Påanden etage bor en gammel dame, der engang har arbejdet som frisør. Hun er meget sød og har tit besøg af hendes børnebørn. De kommer gerne forbi hos hende for at høre spændende historier fra den tid mormor var ung og for at fånoget af hendes lækre kage. Morten og Thomas har en hyggelig lejlighed. I køkkenet stå r der et bord og fire stole. Der sidder de tit sammen med deres venner og spiser. Morten er nemlig meget godt til at lave mad. Thomas kan det ikke så godt, så vasker han alltid op.";
    setText(placeholderText);
  };

  const handleChineseClick = () => {
    const placeholderText = `Drunkenness (2.4) - Hou Baolin (1913-1993) 
醉酒(片段)
侯寶林 郭啟如
侯：真喝醉的人，怕別人說他喝醉了。
郭：是嗎？
侯：哎。你看那邊那倆？
郭：嗯，
侯：都喝得臉紅脖子粗了，還喝吶。
郭：還喝吶？ !
侯：是啊！誰也不服誰。
郭：哦？
侯：這個說：“我說你這酒啊，不行，才喝兩杯——就，醉了。”
郭：是嗎？
侯：那個說：“你沒醉？你說話——說話，舌頭都短了。”
郭：他的舌頭也不利索了。
侯：這個一聽，從口袋掏出一個手電筒，往桌上一放，一按電門，出來一道光柱。

郭：這幹嘛？
侯：“你沒醉？來，順著我這柱子爬上去。”
郭：這是根柱子呀？ !
侯：那位也不含糊。 “別，別來這套，我懂。”
郭：喲？是嗎？
侯：“我爬上去？爬一半，你把電門一關，我掉下來？”

Hou Baolin (1913-1993) was one of the most renowned practitioners of xiangsheng comic dialog, or crosstalk, in the 20th century. The modern form of crosstalk dates from the mid-19th century, and along with other forms of quyi, or folk vocal art, experienced a period of great popularity after the founding of the People's Republic. This dialog is extracted from one of the best-known of those performed by Hou Baolin and his partner Guo Qiru in the republic's early years. 

Source: https://public.websites.umich.edu/~dporter/sampler/sampler.html
`;
    setText(placeholderText);
  };

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Sample texts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li>
                  <div
                    onClick={handleDanishClick}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      🇩🇰 Danish text
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Add a sample Danish text to the text area.
                    </p>
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
                    onClick={handleChineseClick}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">
                      Chinese text
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Add a sample Traditional Chinese text to the text area.
                    </p>
                  </div>
                </li>
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
