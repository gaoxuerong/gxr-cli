const version = require('../../package.json')
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
export const RC = `${HOME}/.gxrrc`
export const DEFAULTS = {
    registry: 'gxr-cli-template',
    type: 'orgs'
}
module.exports = version