


//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

(() => {

    const userLastCommit = (username) => {
        fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization': `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`}})
            .then(resp => resp.json()).then(data => {
            console.log(data);
            const commits = data.filter(event => event.type === "PushEvent");
            console.log(`${username} had their last commit on ${commits[0].created_at}.`);
        });
    }


    userLastCommit("tzhawkman");

    // const wait = ms => new Promise(resolve => {
    //     setTimeout(resolve, ms);
    // });
    //
    // wait(1000).then(() => console.log("Your promise resolved after 1 second!"));
    // wait(3000).then(() => console.log("Your promise resolved after 3 seconds!"));

    const wait = ms => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!isNaN(parseInt(ms))) {
                    resolve(`You'll see this after ${ms/1000} second(s).`);
                } else {
                    reject(`Failure to include proper numeric input.`)
                }
            }, ms);
        });
    }

    wait(1000).then(message => console.log(message));
    wait(3000).then(message => console.log(message));
    wait(5000).then(message => console.log(message));

})();