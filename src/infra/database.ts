import { connect } from 'mongoose'


const dbUri= "mongodb+srv://devcodejas:HiroTikets1343@herotiket.nqvyol4.mongodb.net/heroTiket"

export async function connectDataBase () {
    console.log('Wait connecting  to tho  database ....')

    

    connect(dbUri as string)
    .then(()=>console.log("Mongo Db Atlas Connected SUCCESS!"))
    .catch((error)=>console.log(error, "Error connecting mongo db!"))
}