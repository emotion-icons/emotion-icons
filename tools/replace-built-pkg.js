
const fg=require('fast-glob')
const fs=require('fs-extra')

async function run() {
    const files=await fg(['**/package.built.json','!**/node_modules/**'])

    for(const file of files) {
        await fs.move(file,file.replace('.built',''),{overwrite: true})
    }
}

run().catch((err) => {
    console.log(err.stack)
    process.exit(1)
})
