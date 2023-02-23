// console.log(fetch("https://jsonplaceholder.typicode.com/users/"))

//const emailRef = document.querySelector(".email");


// To unlock data from the promise that we tried to fetch above, we can use

// 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//     return response.json()
//     }).then(data => {
//         console.log(data)
//         emailRef.innerHTML = data.email;
//     })

// 2. Async/Await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.email;
// }

// main();
const subscriptionRef = document.querySelector(".subStatus")
const videoRef = document.querySelector('.video')

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("undefined")
    }, 2000)
    })
}

// 1. Then
// getSubscriptionStatus().then(response => console.log(response))


//2. Async/Await
async function main() {
    const subStatus = await getSubscriptionStatus();
    subscriptionRef.innerHTML = subStatus;
    
    try {
        console.log(await getVideo(subStatus))
}
catch(e) {
    console.log(e)
    videoRef.innerHTML = e;
}}

main();

function getVideo(subStatus) {
    return new Promise((resolve, reject) => {
        if (subStatus === "VIP") {
            resolve("show video")
        } else if(subStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        }
})
}