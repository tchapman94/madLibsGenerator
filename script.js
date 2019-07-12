var genStory = document.getElementById('story-btn'); 

var christmasBtn = document.getElementById('christmas-tree');
var shoppingBtn = document.getElementById('shopping');
var brainstormBtn = document.getElementById('brainstorm');
//#stories 
var stories = document.getElementById('stories');
var story1 = document.getElementById('story1');
var story2 = document.getElementById('story2');
var story3 = document.getElementById('story3');
//#input-text
var inputNoun = document.getElementById('nouns');
var inputAdjective = document.getElementById('adjectives');
var inputVerb = document.getElementById('verbs');
var inputAdverb = document.getElementById('adverbs');


genStory.addEventListener('click', function(event){
    // var newStory = storySelector();
    // displayStory(newStory);
    displayStory();
});
//#chrismas-tree = story1
//#shopping = story2
//#brainstorm = story3
function displayStory(story){
    if(christmasBtn.checked){
    // story1.innerText = story;
        changeSpeechParts(story1);
        story1.style.display = 'block';
        story2.style.display = 'none';
        story3.style.display = 'none';
    }
    else if(shoppingBtn.checked){
        changeSpeechParts(story2);
        story2.style.display = 'block';
        story1.style.display = 'none';
        story3.style.display = 'none';
    }
    else if (brainstormBtn.checked) {
        changeSpeechParts(story3);
        story3.style.display = 'block';
        story1.style.display = 'none';
        story2.style.display = 'none';   
    }
}

function getInputWords(story,wordType,word){
    var storyText = story.innerText;
    var modifiedText = storyText.replace(wordType, word);
    story.innerText = modifiedText;
}

function changeSpeechParts(story){
    var nounArr = inputNoun.value.split(',');
    if(nounArr.length > 0){
        for(var i = 0; i < nounArr.length; i++){
            getInputWords(story,'{{noun}}', nounArr[i]);
        }
    }
    if(nounArr.length < 4){
        //use backupWords
       var nouns = backupwords.nouns
        for(var i = 0; i < nouns.length; i++){
            var storyText = story.innerText;
            console.log('backup nouns', nouns[i])
            var modifiedText = storyText.replace('{{noun}}', nouns[i]);
            story.innerText = modifiedText;
        }
    }


    var adjectiveArr = inputAdjective.value.split(',');
    if(adjectiveArr.length > 0){
        for(var i = 0; i < adjectiveArr.length; i++){
            var storyText = story.innerText;
            console.log('custom adjectives', adjectiveArr[i])
            var modifiedText = storyText.replace('{{adjective}}', adjectiveArr[i]);
            story.innerText = modifiedText;
        }
    }
    if(adjectiveArr.length < 4){
        //use backupWords
       var adjectives = backupwords.adjectives
        for(var i = 0; i < adjectives.length; i++){
            var storyText = story.innerText;
            console.log('backup adjectives', adjectives[i])
            var modifiedText = storyText.replace('{{adjective}}', adjectives[i]);
            story.innerText = modifiedText;
        }
    }
    var verbArr = inputVerb.value.split(',');
    if(verbArr.length > 0){
        for(var i = 0; i < verbArr.length; i++){
            var storyText = story.innerText;
            var modifiedText = storyText.replace('{{verb}}', verbArr[i]);
            story.innerText = modifiedText;
        }
    }
    if(verbArr.length < 4){
        //use backupWords
       var verbs = backupwords.verbs;
        for(var i = 0; i < verbs.length; i++){
            var storyText = story.innerText;
            var modifiedText = storyText.replace('{{verb}}', verbs[i]);
            story.innerText = modifiedText;
        }
    }
    var adverbArr = inputAdverb.value.split(',');
    if(adverbArr.length > 0){
        for(var i = 0; i < adverbArr.length; i++){
            var storyText = story.innerText;
            var modifiedText = storyText.replace('{{adverb}}', adverbArr[i]);
            story.innerText = modifiedText;
        }
    }
    if(adverbArr.length < 4){
        //use backupWords
       var adverbs = backupwords.adverbs;
        for(var i = 0; i < adverbs.length; i++){
            var storyText = story.innerText;
            var modifiedText = storyText.replace('{{adverb}}', adverbs[i]);
            story.innerText = modifiedText;
        }
    }
}
//     var adverbArr = inputAdverb.value.split(',');
//     for(var i = 0; i < adverbArr.length; i++){
//         var storyText = story.innerText;
//         var modifiedText = storyText.replace('{{adverb}}', adverbArr[i]);
//         story.innerText = modifiedText;
//     }
//     var adjectiveArr = inputAdjective.value.split(',');
//     for(var i = 0; i < adjectiveArr.length; i++){
//         var storyText = story.innerText;
//         var modifiedText = storyText.replace('{{adjective}}', adjectiveArr[i]);
//         story.innerText = modifiedText;
//         }
//     var verbArr = inputVerb.value.split(',');
//     for(var i = 0; i < verbArr.length; i++){
//         var storyText = story.innerText;
//         var modifiedText = storyText.replace('{{verb}}', verbArr[i]);
//         story.innerText = modifiedText;
//     }
