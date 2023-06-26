const items = require('./items.json')
try {
    generate()
} catch (e) {
    console.log(`An error occured:\n ${e}`)
}

function generate() {
    const listPointer = '?'
    const pairSeparator = "?"

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
}