
function displayPoem(response){
    
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
     delay:1 });
}



function generatePoem(event){
    event.preventDefault();
 let instructionsInput=document.querySelector("#instruction")
let apiKey="7f4c30b04febo374bc0134d44e5tfcfa"
let context="you are a romantic poem expert and love to write poem.Your mission is to generate a four line poem in basic HTML and separate each line with a <br/>,make sure to follow user instructions,Do not include the title on  the poem.Sign wih 'SheCodes Ai'inside<strong>element at the end of the poem.do not include the 'html' txt on the start just provide the poem"
let prompt=`user instructions:generate a french poem about ${instructionsInput.value}`
let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`


axios.get(apiUrl).then(displayPoem)

}


let poemFormElement=document.querySelector("#poem-generator")
poemFormElement.addEventListener("submit",generatePoem)