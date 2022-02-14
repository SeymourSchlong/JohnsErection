
module.exports = {
    title: "John's Erection", 
    author: "seymour (<a href='https://twitter.com/spaghettitron'>@spaghettitron</a>)",
    modVersion: 1.0,

    description: `<p>John, now's not the time...</p>`,

    edit(archive) {
        // regex
        const searchRegex = /<span style="color: #0715cd">(?:\w{2,4}): (.*?)<\/span>/ig;
        let searchMatch;

        // this might be really inefficient, but it only runs once each reload
        for (let i = 1926; i < 9999; i++) {
            const pageString = `00${i}`;

            // if the page exists (prevents certain errors)
            if (archive.mspa.story[pageString]) {
                // check if john speaks
                if (archive.mspa.story[pageString].content.includes('#0715cd')) {
                    const content = archive.mspa.story[pageString].content;

                    // store all of john's lines
                    const johnLines = [];
                    while(searchMatch = searchRegex.exec(content)) johnLines.push(searchMatch[1]);

                    // choose a random one
                    const selectedText = johnLines[Math.floor(Math.random() * johnLines.length)];
                    
                    // replace chosen line
                    archive.mspa.story[pageString].content = content.replace(selectedText, 'i have an erection.');
                }
            }
        }
    },
}