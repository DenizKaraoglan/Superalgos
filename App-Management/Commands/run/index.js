const chalk = require('chalk')

exports.runCommands = function runCommands(cwd) {
    const thisObject = {
        name: 'run',
        description: chalk.bold('Use this command to run apps using pm2 process managment'),
        options: options,
        runner: runner
    }

    return thisObject
    
    function options(cmd) {
        const commands = [
            require('./platform').platformCommand(cwd),
            require('./dashboards').dashboardsCommand(cwd),
            require('./network').networkCommand(cwd),
            require('./multi').multiCommand(cwd),
        ]
        return commands.reduce((builder, c) => 
            builder.command(c.name, c.description, c.options, c.runner).help(),
            cmd)
    }

    function runner() {
        console.log(`You need to add additional commands, please run ${chalk.italic('superalgos run --help')}`)
    }
}