import { connect } from 'mongoose'

export async function connectDataBase () {
    try {
        await connect("mongodb+srv://devcodejas:HiroTikets1343@herotiket.nqvyol4.mongodb.net/heroTiket")

        console.log("Data base connecting SUCCESS!!")
    } catch (error) {
        console.log(error, "error connecting")
    }
}