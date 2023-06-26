import { items } from './items.js'

function generate() {
    
    const listPointer = '⏺'
    const pairSeparator = "➖"

    const baseCommand = `/give @p minecraft:written_book{title:"", display: {Name:'{"text": "Brewing recipes", "color": "#99ddff", "bold": "true", "italic": "false"}'}, author:"fajfaj", pages:%pages%}`
    const coverPage = [
        {text: 'Brewing recipes', color: 'black', bold: "true", italic: "false"}, '\n',
        {text: 'Here you can find recipes for brewing alcohol in Minecraft.\n\n', color: 'black', bold: "false", italic: "false"},

        'Wanna learn more?\n',
        {text: 'Click here',
        color: 'blue', underlined: true, bold: false,
        clickEvent: {action: "open_url", value: "https://github.com/DieReicheErethons/Brewery/wiki/Usage"},
        hoverEvent: {action: "show_text", value: {text: "Click to open the guide", color: "gray"}}},
        {text: ' for a detailed guide!\n\n', color: 'black', bold: false, italic: false},

        'Just looking for recipes?\n',
        {text: "Head to the following pages, where you will find all the recipes you need.", color: "black", bold: false, italic: false},
    ]
    let pages = []
    pages.push(JSON.stringify(coverPage))

    let indexPage = [
        {text: "Table of contents\n", bold: true},
        {text: `Click the drink's name, to jump to the recipe.\n\n`, bold: false},
    ]
    let indexPage2 = []
    const itemList = Object.values(items)
    itemList.forEach((item, index) => {
        const pageNum = index + 3 + 1
        console.log(`${index} + 3 = ${pageNum}`)
        const value = [
            {color: item.color, text: `${listPointer} `, bold: false},
            {
                text: `${item.name}\n`, 
                bold: false,
                color: 'black',
                hoverEvent: {
                    action: "show_text", 
                    value: [
                        {text: `Go to page ${pageNum} (`, color: "gray"}, 
                        {text: `${item.name}`, color: `${item.color}`},
                        {text: `)`, color: "gray"}
                    ]
                },
                clickEvent: {
                    action: "change_page", 
                    value: pageNum
                }}]
        if(index <= 9) { 
            indexPage.push(...value)
        } else {
            indexPage2.push(...value)
        }
    })

    
    pages.push(JSON.stringify(indexPage))
    pages.push(JSON.stringify(indexPage2))

    const recipeTemplate = [
        'Recipe: ', {text: '%name%', color: '%color%', bold: "true"}, '\n\n', 
        {color: 'black', bold: "false", text: "Ingredients:\n"}, "%ingredients%", '',
        {color: 'black', bold: "false", text: "Boiling time:\n"}, '%boilingTime%', '\n',
        {color: 'black', bold: "false", text: "Distilling"}, {color: "%color%", bold: "true", text: ` ${pairSeparator} `}, '%distilling%', '\n\n',
        'Ageing: \n', '%ageing%', '\n',
    ]
    

    items.forEach((recipe, index) => {
        let recipeText = JSON.stringify(recipeTemplate)
        Object.keys(recipe).forEach(key => {
            let value = recipe[key]
            if(key === 'ingredients' || key === 'boilingTime') {
                const ingredients = value.split('\\n')
                const list = []
                ingredients.forEach(ingredient => {
                    list.push(`{"text": "${listPointer} ", "color": "${recipe.color}"}`)
                    list.push(`{"text": "${ingredient}\\n", "color": "black"}`)
                })
                value = list.join(',')
                // alert(value)
            } else if (key === 'ageing') {
                const ageing = value.split('\\n') 
                try {
                value = `'${ageing[0]}', {"color": "${recipe.color}", bold: "true", "text": " in "}, '${ageing[1].toLowerCase()}', ' wood'`
                } catch {}
            } else {
                value = `"${value}"`
            }

            recipeText = recipeText.replaceAll(`"%${key}%"`, value)
        })
        
        
        console.log(recipeText)
        pages.push(recipeText)
    })
    // pages = pages.slice(1,2)
    const commandWithPages = baseCommand.replace('%pages%', JSON.stringify(pages))
    document.getElementById('commandField').innerText = (`${commandWithPages}`)
}
generate()

document.getElementById('copyButton').addEventListener('click', copy)
async function copy()  {
    const commandField = document.getElementById('commandField')
    const command = commandField.innerText
    await navigator.clipboard.writeText(command)
    
    commandField.classList.add('txt-green')
    setTimeout(() => {
        commandField.classList.remove('txt-green')
    }, 2000)
}

document.getElementById('convertButton').addEventListener('click', convert)
function convert() {
    const input = `| Recipe       | Ingredients                | Boiling Time | Distilling | Ageing/Wood | Alc | Effects | Color |
    |-------------|-------------|-----|-----|-----|-----|---|---|
    | Beer         | 6 Wheat                    | 8 Minutes       | No  | 3 Years<br>Any         | I    |    | black |
    | Wheatbeer    | 3 Wheat                    | 8 Minutes       | No  | 2 Years<br>Birch       | I    |    | blue |
    | Darkbeer     | 6 Wheat                    | 8 Minutes       | No  | 3 times Beer<br>Dark Oak | I'   |    | red |
    | Red Wine     | 5 Sweet Berries            | 5 Minutes       | No  | Very Long<br>Any       | I'   |    | gold |
    | Mead         | 6 Sugar Cane               | 3 Minutes       | No  | 4 Years<br>Oak         | I'   |    | green |
    | Apple Mead   | 6 Sugar Cane<br>Apple      | Similar to Mead | No  | 4 Years<br>Oak         | II   | +  | dark_green |
    | Apple Cider  | Lots of Apple              | 7/8 Minutes     | No  | 3 Years<br>Any         | I'   |    | dark_blue |
    | Apple Liquor | Lots of Apple              | Long            | Yes | 6 Years<br>Acacia      | II'  |    | gray |
    | Whiskey      | Wheat                      | 1 min. per Wheat | Yes | Very Long<br>darker   | III' |    | gold |
    | Rum          | Lots of Sugar Cane         | Short           | Yes | Long<br>Oak            | IIII | +  | pink |
    | Vodka        | A Sixth of a Stack Potatoes | Long           | Yes | No                     | III  | -  | purple |
    | Mushroom Vodka | Potatoes, Mushrooms      | Very Long       | Yes | No                     | II' | +- | dark_red |
    | Gin          | 9 Wheat<br>Some blue -flowers<br>Apple | Short | Yes | No                   | III  |    | yellow |
    | Tequila      | Some Cactus                | Long            | Yes | Long<br>Birch          | III  |    | blue |
    | Absinthe     | Lots of Grass              | Short           | Yes | No                   | IIIII' | -  | red |
    | Green Absinthe | Lots of Grass<br>Another Greenish thing | Normal | Yes | No             | IIIIII | +- | yellow |
    | Potato Soup  | 5 Potatoes<br>Some Grass   | Short           | No  | No                     |      | +  | green |
    | Coffee       | Lots of Cocoa Beans<br>2 Milk Buckets | Short | No | No                     |      | ++ | blue |
    | Eggnog      | 5 Eggs<br>A little sugar<br>1 Milk Bucket | Short | No | Short<br>Any          | I'   |    | dark_gray |`

    let lines = input.split('\n')
    void lines.shift(); void lines.shift()

    const jsonItems = []

    const recipePages = []
    lines.forEach((line, index) => {
        const recipeLine = line.split('|').map(x => x.trim()).map(x => x.replaceAll('<br>', '\\n'))
        void recipeLine.shift(); void recipeLine.pop()

        const recipe = {
            name: recipeLine[0],
            ingredients: recipeLine[1],
            boilingTime: recipeLine[2],
            distilling: recipeLine[3],
            ageing: recipeLine[4],
            alc: recipeLine[5],
            effects: recipeLine[6],
            color: recipeLine[7]
        }

        jsonItems.push(recipe)
    })

    console.log(jsonItems)
    alert(`Check the console for the output!`)
}