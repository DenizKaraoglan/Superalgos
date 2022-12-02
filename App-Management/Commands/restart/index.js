const pm2 = require('pm2')
const chalk = require('chalk')

exports.restartCommands = function restartCommands() {
    const thisObject = {
        name: 'restart',
        description: chalk.bold('Use this command to restart apps that are using the pm2 process manager'),
        options: options,
        runner: runner
    }

    return thisObject
    
    function options(cmd) {
        cmd.option('name', {
            string: true,
            demandOption: true
        })
    }

    function runner(args) {
        console.log('[INFO] restarting the ' + args.name + ' process')
        pm2.restart(args.name)
        console.log('[INFO] restarted the ' + args.name + ' process')
    }
}