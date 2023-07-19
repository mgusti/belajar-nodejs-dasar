import {Console} from "console"
import fs from "fs"

const file = fs.createWriteStream("application.log")

const log = new Console({
    stdout:file,
    stderr:file
})

log.info("Hello Word")
log.error("Hello Word")

const person = {
    firstName: "Eko",
    lastname: "Khannedy"
}

log.table(person)