const blessed = require('blessed');
const { spawn } = require('child_process');

const screen = blessed.screen({ 
    title: 'git log with colors',
    smartCSR: true,
    log: 'gitlog.js.log',
    dump: true
});
screen.log('starting');

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

const body = blessed.log({
    tags: true,
    scrollable: true,
    alwaysScroll: true,
    scrollbar: {
        ch: 'o',
        style: {
            bg: 'red',
            fg: 'green'
        }
    }
});

screen.append(body);

spawn('git', ['log']).stdout.on('data', data => {
    body.pushLine(data.toString());
    screen.render();
});

screen.render();

screen.log('done');
