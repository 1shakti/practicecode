/* 
    Use fetch() to load 1, then 5, then 25 colors from the HexBot

    Use FlexBox to create a Responsive 5x5 Grid displaying the colors    
*/

function displayColors(colors) {
    let myColorsHtml = colors.map(color => {
        return `<div class="my-color" style="background-color: ${color.value}">${color.value}</div>`
    }).join('')
    
    console.log(myColorsHtml)

    document.body.innerHTML = `<div class="my-colors">
        ${myColorsHtml}
    </div>`
}

async function getColors() {
    let response = await fetch("https://api.noopschallenge.com/hexbot?count=5")
    let data = await response.json()
    let colors = data.colors
    
    displayColors(colors)
}

getColors()
