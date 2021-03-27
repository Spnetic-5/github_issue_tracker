const axios = require("axios");

module.exports = {
    "name": "issues",
    "description": "Display all issues of a repo",
    "usage": "issues [owner name] [repo name]",
    "args": true,
    async execute(message, args) {
        if (!args.length) {
            return message.reply("Please provide owner and repo name");
        }

        const owner = args[0];
        const repo = args[1];

        try {
            const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`, {
                headers: {
                    Accept: "application/vnd.github.v3+json"
                }
            });

            const data = response.data.filter((issue) => !(issue.hasOwnProperty("pull_request")));

            if (data.length > 0) {
                message.channel.send(`Showing all the issues from ${owner}/${repo}`);
                for (let i = 0; i < data.length; i += 1) {
                    message.channel.send(data[i].html_url);
                }
            } else {
                message.channel.send("No issues found");
            }
        } catch (error) {
            console.log(error)
        }
    }
}