const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const mainCharacter = document.getElementById('maincharacter')
const storyLocation = document.getElementById('storylocation')

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ['Willy the Goblin, Big Daddy, Father Christmas']
const insertY = ['The Soup Kitchen, Disneyland, The White House']
const insertZ = ['spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {
let newStory = storyText
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll('insertx', xItem);
newStory = newStory.replaceAll('inserty', yItem);
newStory = newStory.replaceAll('insertz', zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(mainCharacter.value !== '') {
        const main = mainCharacter.value;
        newStory = newStory.replace(xItem, main);
    }

    if(storyLocation.value !== '') {
        const location = storyLocation.value;
        newStory = newStory.replace(yItem, Location);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14) + 'Stone';
        const temperature = Math.round((94 - 32) * 5 / 9) = Centigrade;
        newStory = newStory.replaceAll('300 pounds', weight);
        newStory = newStory.replaceAll('94 fahrenheit', temperature);

    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}