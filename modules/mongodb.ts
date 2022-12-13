import { MongoClient } from 'mongodb'
import colors from 'colors'

export default async (inlineOptions: any, nuxt: any) => {
  const mongoClient = new MongoClient(inlineOptions.dbUrl)

  nuxt.hook('listen', async (nuxt: any) => {
    try {
      await mongoClient.connect()

      console.log(colors.magenta.bold(`Database connection succesfull`))
    } catch (err) {
      console.log(colors.red.bold(`Mongo DB Error ${err}`))
    }
  })
}
