# Brewery recipe book
A book with the default recipes to the brewery plugin

## Preview
Here's how it looks in game:
![](./showcase.gif)

## Obtaining
You can obtain the book using this long and beautiful command.
Due to it's length, you have to use it in a command block (`/give @s minecraft:command_block`)

```json
/give @p minecraft:written_book{title:"", display: {Name:'{"text": "Brewing recipes", "color": "#99ddff", "bold": "true", "italic": "false"}'}, author:"fajfaj", pages:["[{\"text\":\"Brewing recipes\",\"color\":\"black\",\"bold\":\"true\",\"italic\":\"false\"},\"\\n\",{\"text\":\"Here you can find recipes for brewing alcohol in Minecraft.\\n\\n\",\"color\":\"black\",\"bold\":\"false\",\"italic\":\"false\"},\"Wanna learn more?\\n\",{\"text\":\"Click here\",\"color\":\"blue\",\"underlined\":true,\"bold\":false,\"clickEvent\":{\"action\":\"open_url\",\"value\":\"https://github.com/DieReicheErethons/Brewery/wiki/Usage\"},\"hoverEvent\":{\"action\":\"show_text\",\"value\":{\"text\":\"Click to open the guide\",\"color\":\"gray\"}}},{\"text\":\" for a detailed guide!\\n\\n\",\"color\":\"black\",\"bold\":false,\"italic\":false},\"Just looking for recipes?\\n\",{\"text\":\"Head to the following pages, where you will find all the recipes you need.\",\"color\":\"black\",\"bold\":false,\"italic\":false}]","[{\"text\":\"Table of contents\\n\",\"bold\":true},{\"text\":\"Click the drink's name, to jump to the recipe.\\n\\n\",\"bold\":false},{\"color\":\"#ffd333\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Beer\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 4 (\",\"color\":\"gray\"},{\"text\":\"Beer\",\"color\":\"#ffd333\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":4}},{\"color\":\"#ffb84d\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Wheatbeer\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 5 (\",\"color\":\"gray\"},{\"text\":\"Wheatbeer\",\"color\":\"#ffb84d\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":5}},{\"color\":\"#650013\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Darkbeer\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 6 (\",\"color\":\"gray\"},{\"text\":\"Darkbeer\",\"color\":\"#650013\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":6}},{\"color\":\"dark_red\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Red Wine\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 7 (\",\"color\":\"gray\"},{\"text\":\"Red Wine\",\"color\":\"dark_red\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":7}},{\"color\":\"gold\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Mead\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 8 (\",\"color\":\"gray\"},{\"text\":\"Mead\",\"color\":\"gold\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":8}},{\"color\":\"gold\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Apple Mead\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 9 (\",\"color\":\"gray\"},{\"text\":\"Apple Mead\",\"color\":\"gold\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":9}},{\"color\":\"#f86820\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Apple Cider\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 10 (\",\"color\":\"gray\"},{\"text\":\"Apple Cider\",\"color\":\"#f86820\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":10}},{\"color\":\"red\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Apple Liquor\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 11 (\",\"color\":\"gray\"},{\"text\":\"Apple Liquor\",\"color\":\"red\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":11}},{\"color\":\"gold\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Whiskey\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 12 (\",\"color\":\"gray\"},{\"text\":\"Whiskey\",\"color\":\"gold\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":12}},{\"color\":\"dark_red\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Rum\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 13 (\",\"color\":\"gray\"},{\"text\":\"Rum\",\"color\":\"dark_red\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":13}}]","[{\"color\":\"#bdb9b9\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Vodka\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 14 (\",\"color\":\"gray\"},{\"text\":\"Vodka\",\"color\":\"#bdb9b9\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":14}},{\"color\":\"#ff9999\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Mushroom Vodka\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 15 (\",\"color\":\"gray\"},{\"text\":\"Mushroom Vodka\",\"color\":\"#ff9999\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":15}},{\"color\":\"#99ddff\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Gin\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 16 (\",\"color\":\"gray\"},{\"text\":\"Gin\",\"color\":\"#99ddff\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":16}},{\"color\":\"#f5f07e\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Tequila\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 17 (\",\"color\":\"gray\"},{\"text\":\"Tequila\",\"color\":\"#f5f07e\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":17}},{\"color\":\"dark_green\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Absinthe\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 18 (\",\"color\":\"gray\"},{\"text\":\"Absinthe\",\"color\":\"dark_green\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":18}},{\"color\":\"green\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Green Absinthe\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 19 (\",\"color\":\"gray\"},{\"text\":\"Green Absinthe\",\"color\":\"green\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":19}},{\"color\":\"gold\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Potato Soup\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 20 (\",\"color\":\"gray\"},{\"text\":\"Potato Soup\",\"color\":\"gold\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":20}},{\"color\":\"black\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Coffee\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 21 (\",\"color\":\"gray\"},{\"text\":\"Coffee\",\"color\":\"black\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":21}},{\"color\":\"#e6cb5f\",\"text\":\"⏺ \",\"bold\":false},{\"text\":\"Eggnog\\n\",\"bold\":false,\"color\":\"black\",\"hoverEvent\":{\"action\":\"show_text\",\"value\":[{\"text\":\"Go to page 22 (\",\"color\":\"gray\"},{\"text\":\"Eggnog\",\"color\":\"#e6cb5f\"},{\"text\":\")\",\"color\":\"gray\"}]},\"clickEvent\":{\"action\":\"change_page\",\"value\":22}}]","[\"Recipe: \",{\"text\":\"Beer\",\"color\":\"#ffd333\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#ffd333\"},{\"text\": \"6 Wheat\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#ffd333\"},{\"text\": \"8 Minutes\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#ffd333\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",'3 Years', {\"color\": \"#ffd333\", bold: \"true\", \"text\": \" in \"}, 'any', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Wheatbeer\",\"color\":\"#ffb84d\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#ffb84d\"},{\"text\": \"3 Wheat\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#ffb84d\"},{\"text\": \"8 Minutes\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#ffb84d\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",'2 Years', {\"color\": \"#ffb84d\", bold: \"true\", \"text\": \" in \"}, 'birch', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Darkbeer\",\"color\":\"#650013\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#650013\"},{\"text\": \"6 Wheat\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#650013\"},{\"text\": \"8 Minutes\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#650013\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",'3 times Beer', {\"color\": \"#650013\", bold: \"true\", \"text\": \" in \"}, 'dark oak', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Red Wine\",\"color\":\"dark_red\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"dark_red\"},{\"text\": \"5 Sweet Berries\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"dark_red\"},{\"text\": \"5 Minutes\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"dark_red\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",'Very Long', {\"color\": \"dark_red\", bold: \"true\", \"text\": \" in \"}, 'any', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Mead\",\"color\":\"gold\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"6 Sugar Cane\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"3 Minutes\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"gold\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",'4 Years', {\"color\": \"gold\", bold: \"true\", \"text\": \" in \"}, 'oak', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Apple Mead\",\"color\":\"gold\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"6 Sugar Cane\\n\", \"color\": \"black\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"Apple\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"Similar to Mead\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"gold\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",'4 Years', {\"color\": \"gold\", bold: \"true\", \"text\": \" in \"}, 'oak', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Apple Cider\",\"color\":\"#f86820\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#f86820\"},{\"text\": \"Lots of Apple\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#f86820\"},{\"text\": \"7/8 Minutes\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#f86820\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",'3 Years', {\"color\": \"#f86820\", bold: \"true\", \"text\": \" in \"}, 'any', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Apple Liquor\",\"color\":\"red\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"red\"},{\"text\": \"Lots of Apple\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"red\"},{\"text\": \"Long\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"red\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",'6 Years', {\"color\": \"red\", bold: \"true\", \"text\": \" in \"}, 'acacia', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Whiskey\",\"color\":\"gold\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"Wheat\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"1 min. per Wheat\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"gold\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",'Very Long', {\"color\": \"gold\", bold: \"true\", \"text\": \" in \"}, 'darker', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Rum\",\"color\":\"dark_red\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"dark_red\"},{\"text\": \"Lots of Sugar Cane\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"dark_red\"},{\"text\": \"Short\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"dark_red\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",'Long', {\"color\": \"dark_red\", bold: \"true\", \"text\": \" in \"}, 'oak', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Vodka\",\"color\":\"#bdb9b9\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#bdb9b9\"},{\"text\": \"A Sixth of a Stack Potatoes\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#bdb9b9\"},{\"text\": \"Long\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#bdb9b9\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",No,\"\\n\"]","[\"Recipe: \",{\"text\":\"Mushroom Vodka\",\"color\":\"#ff9999\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#ff9999\"},{\"text\": \"Potatoes, Mushrooms\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#ff9999\"},{\"text\": \"Very Long\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#ff9999\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",No,\"\\n\"]","[\"Recipe: \",{\"text\":\"Gin\",\"color\":\"#99ddff\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#99ddff\"},{\"text\": \"9 Wheat\\n\", \"color\": \"black\"},{\"text\": \"⏺ \", \"color\": \"#99ddff\"},{\"text\": \"Some blue -flowers\\n\", \"color\": \"black\"},{\"text\": \"⏺ \", \"color\": \"#99ddff\"},{\"text\": \"Apple\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#99ddff\"},{\"text\": \"Short\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#99ddff\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",No,\"\\n\"]","[\"Recipe: \",{\"text\":\"Tequila\",\"color\":\"#f5f07e\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#f5f07e\"},{\"text\": \"Some Cactus\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#f5f07e\"},{\"text\": \"Long\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#f5f07e\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",'Long', {\"color\": \"#f5f07e\", bold: \"true\", \"text\": \" in \"}, 'birch', ' wood',\"\\n\"]","[\"Recipe: \",{\"text\":\"Absinthe\",\"color\":\"dark_green\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"dark_green\"},{\"text\": \"Lots of Grass\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"dark_green\"},{\"text\": \"Short\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"dark_green\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",No,\"\\n\"]","[\"Recipe: \",{\"text\":\"Green Absinthe\",\"color\":\"green\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"green\"},{\"text\": \"Lots of Grass\\n\", \"color\": \"black\"},{\"text\": \"⏺ \", \"color\": \"green\"},{\"text\": \"Another Greenish thing\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"green\"},{\"text\": \"Normal\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"green\",\"bold\":\"true\",\"text\":\" ➖ \"},\"Yes\",\"\\n\\n\",\"Ageing: \\n\",No,\"\\n\"]","[\"Recipe: \",{\"text\":\"Potato Soup\",\"color\":\"gold\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"5 Potatoes\\n\", \"color\": \"black\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"Some Grass\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"gold\"},{\"text\": \"Short\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"gold\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",No,\"\\n\"]","[\"Recipe: \",{\"text\":\"Coffee\",\"color\":\"black\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"black\"},{\"text\": \"Lots of Cocoa Beans\\n\", \"color\": \"black\"},{\"text\": \"⏺ \", \"color\": \"black\"},{\"text\": \"2 Milk Buckets\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"black\"},{\"text\": \"Short\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"black\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",No,\"\\n\"]","[\"Recipe: \",{\"text\":\"Eggnog\",\"color\":\"#e6cb5f\",\"bold\":\"true\"},\"\\n\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Ingredients:\\n\"},{\"text\": \"⏺ \", \"color\": \"#e6cb5f\"},{\"text\": \"5 Eggs\\n\", \"color\": \"black\"},{\"text\": \"⏺ \", \"color\": \"#e6cb5f\"},{\"text\": \"A little sugar\\n\", \"color\": \"black\"},{\"text\": \"⏺ \", \"color\": \"#e6cb5f\"},{\"text\": \"1 Milk Bucket\\n\", \"color\": \"black\"},\"\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Boiling time:\\n\"},{\"text\": \"⏺ \", \"color\": \"#e6cb5f\"},{\"text\": \"Short\\n\", \"color\": \"black\"},\"\\n\",{\"color\":\"black\",\"bold\":\"false\",\"text\":\"Distilling\"},{\"color\":\"#e6cb5f\",\"bold\":\"true\",\"text\":\" ➖ \"},\"No\",\"\\n\\n\",\"Ageing: \\n\",'Short', {\"color\": \"#e6cb5f\", bold: \"true\", \"text\": \" in \"}, 'any', ' wood',\"\\n\"]"]}
```