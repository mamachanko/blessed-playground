import * as blessed from 'blessed';
import { spawn } from 'child_process';

const screen = blessed.screen({ smartCSR: true });

screen.title = 'git log with colors';

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

const body = blessed.box({
    tags: true
});

screen.append(body);

spawn('git', ['log']).stdout.on('data', data => {
    body.pushLine(data.toString());
    screen.render();
});

screen.render();