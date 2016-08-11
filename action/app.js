/**
 * Created by fcc on 16-7-29.
 */
'use strict';

const initPage = require("../action/initPage.js");
const barcodeTurnPostcodePage = require("../action/barcodeTurnPostcodePage.js");
const changePage = require("../action/changePage.js");
const postcodeTurnBarcodePage = require("../action/postcodeTurnBarcodePage.js");
const repl = require('repl');

function switchRouter(context, done) {
    let router = actions.find(item => item.name === currentAction);
    let result = router.doAction(context.cmd);
    let newRouter = actions.find(item => item.name === result);

    currentAction = newRouter.name;
    console.log(newRouter.help);
    done(null);
}

function handleCmd(cmd, context, filename, done) {
    switchRouter({
        cmd: cmd.trim()
    }, done);
    done(null);
}
var replServer = repl.start({prompt: "> ", eval: handleCmd});

let actions = [
    new initPage(),
    new changePage(),
    new barcodeTurnPostcodePage(),
    new postcodeTurnBarcodePage()
];

let currentAction = 'initPage';
console.log(actions.find(item => item.name === currentAction).help);