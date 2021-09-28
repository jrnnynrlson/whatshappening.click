let pageNumber = 0;

const sentences = [
    "start meditating",
    "you've been invited to an event",
    "somebody wants to know if you're going to an event",
    "your event is coming up",
    "somebody wants to know what you thought of the event",
    "somebody wants to be your friend",
    "you have a new follower",
    "somebody saw your photo",
    "you may have met this person before",
    "you have a new follower",
    "you’ve been invited to an event",
    "you have <span id='x'>x</span> new likes",
    "you have a new follower",
    "somebody liked your photo",
    "you have <span id='x'>x</span> events coming up this week",
    "you have a new follower",
    "somebody took a photo of you and <span id='x'>x</span> others",
    "you have a new follower",
    "somebody wants to be your friend",
    "you have a new follower",
    "you have <span id='x'>x</span> new followers",
    "somebody wants to be your friend",
    "your follow request is still pending",
    "you have a new follower",
    "somebody saw your photo",
    "somebody is selling something",
    "you have a new follower",
    "you have <span id='x'>x</span> new messages",
    "you’ve been invited to like something",
    "you have a new follower",
    "somebody liked your post",
    "somebody loved your post",
    "somebody replied to your post",
    "you have <span id='x'>x</span> new likes",
    "<span id='x'>x</span> people are talking about you",
    "somebody liked what you said",
    "you have a new follower",
    "you have <span id='x'>x</span> new messages",
    "somebody wants to tag you in a photo",
    "somebody liked your comment",
    "you might know somebody",
    "you have a new follower",
    "you have a new follower",
    "somebody is selling something",
    "somebody mentioned you in a comment",
    "somebody wants to share what you said",
    "you have <span id='x'>x</span> new likes",
    "you have a new follower",
    "<span id='x'>x</span> people are talking about you",
    "you may know this person",
    "somebody is selling something",
    "somebody is waiting for your reply",
    "somebody is waiting for your reply",
    "somebody is waiting for your reply",
    "it’s been 5 minutes",
    "time to close this window",
]

const numbers = [
    "2",
    "3",
    "5",
    "6",
    "8",
    "9",
    "10",
    "13",
    "16",
    "20",
    "23",
    "40",
    "60",
    "85",
]

const sentenceTag = document.querySelector(".sentence")
const nextTag = document.querySelector(".ok")
const text = document.querySelector("div.text")

nextTag.addEventListener("click", function () {

    text.style.opacity = 0

    pageNumber = pageNumber + 1

    if (pageNumber > sentences.length - 1) {
        nextTag.style.display = "none"
    } else {
        setTimeout(function () {
            sentenceTag.innerHTML = sentences[pageNumber]
            const variables = document.querySelectorAll("#x")

            variables.forEach(variable => {
                variable.innerHTML = Math.floor(Math.random() * numbers.length) + 2
            })
        
            text.style.opacity = 1;
        }, 500)
    }



})