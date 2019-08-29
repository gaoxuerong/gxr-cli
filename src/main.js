import program from 'commander'
import { VERSION } from './utils/constant'
program.command('install')
    .description('install template')
    .alias('i')
    .action(()=>{
        console.log(`installing ...`)
    })
program.version(VERSION,'-V --version').parse(process.argv)