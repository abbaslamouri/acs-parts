import mongoClient from '../server/utils/mongoClient'
import colors from 'colors'
import userSchema from '../server/schemas/user'
import productSchema from '../server/schemas/product'
import defaultSchema from '../server/schemas/default'
import provenceSchema from '../server/schemas/provence'
import countrySchema from '../server/schemas/country'

export default async (inlineOptions: any, nuxt: any) => {
  nuxt.hook('listen', async (nuxt: any) => {
    try {
      // Connect to database
      await mongoClient.connect()
      console.log(colors.magenta.bold(`Database connection succesfull`))

      // Fetch all collections
      const collections = await mongoClient.db().listCollections().toArray()

      // create products collection
      if (!collections.find((c) => c.name === 'products')) {
        await mongoClient.db().createCollection('products', productSchema)
        await mongoClient.db().collection('products').createIndex({ name: 1 }, { unique: true })
        // await mongoClient
        //   .db()
        //   .collection('products')
        //   .createIndex(
        //     { name: 'text', oemPartNumber: 'text', description: 'text' },
        //     { weights: { name: 3, oemPartNumber: 2, decsription: 1 } }
        //   )
        console.log(colors.magenta.bold(`Product database creation succesfull`))
      }

      // create eligibilities collection
      // if (!collections.find((c) => c.name === 'eligibilities')) {
      //   await mongoClient.db().createCollection('eligibilities', defaultSchema)
      //   await mongoClient.db().collection('eligibilities').createIndex({ name: 1 }, { unique: true })
      //   console.log(colors.cyan.bold(`Eligibilities database creation succesfull`))
      // }

      // create nexthigherassemblies collection
      // if (!collections.find((c) => c.name === 'nexthigherassemblies')) {
      //   await mongoClient.db().createCollection('nexthigherassemblies', defaultSchema)
      //   await mongoClient.db().collection('nexthigherassemblies').createIndex({ name: 1 }, { unique: true })
      //   console.log(colors.blue.bold(`Next Higher Assemblies database creation succesfull`))
      // }

      // create oems collection
      // if (!collections.find((c) => c.name === 'oems')) {
      //   await mongoClient.db().createCollection('oems', defaultSchema)
      //   await mongoClient.db().collection('oems').createIndex({ name: 1 }, { unique: true })
      //   console.log(colors.magenta.bold(`OEM's database creation succesfull`))
      // }

      // create oempartnumbers collection
      // if (!collections.find((c) => c.name === 'oempartnumbers')) {
      //   await mongoClient.db().createCollection('oempartnumbers', defaultSchema)
      //   await mongoClient.db().collection('oempartnumbers').createIndex({ name: 1 }, { unique: true })
      //   console.log(colors.magenta.bold(`OEM Part Numbers database creation succesfull`))
      // }

      // Create users collection if it does not exist
      if (!collections.find((c) => c.name === 'users')) {
        await mongoClient.db().createCollection('users', userSchema)
        await mongoClient.db().collection('users').createIndex({ email: 1 }, { unique: true })
        // await mongoClient
        //   .db()
        //   .collection('users')
        //   .createIndex({ name: 'text', email: 'text' }, { weights: { name: 1, email: 1 } })
        console.log(colors.magenta.bold(`Users database creation succesfull`))
      }

      // create states collection
      if (!collections.find((c) => c.name === 'provences')) {
        await mongoClient.db().createCollection('provences', provenceSchema)
        await mongoClient.db().collection('provences').createIndex({ name: 1 }, { unique: true })
        // await mongoClient
        //   .db()
        //   .collection('provences')
        //   .createIndex({ name: 'text', abbreviation: 'text' }, { weights: { name: 2, abbreviation: 1 } })
        console.log(colors.green.bold(`Provences database creation succesfull`))
      }

      // create countries collection
      if (!collections.find((c) => c.name === 'countries')) {
        await mongoClient.db().createCollection('countries', countrySchema)
        await mongoClient.db().collection('countries').createIndex({ countryName: 1 }, { unique: true })
        // await mongoClient
        //   .db()
        //   .collection('countries')
        //   .createIndex(
        //     { countryName: 'text', threeLetterCountryCode: 'text' },
        //     { weights: { countryName: 2, threeLetterCountryCode: 1 } }
        //   )
        console.log(colors.magenta.bold(`Countries database creation succesfull`))
      }
    } catch (err) {
      console.log(colors.red.bold(`Mongo DB connection or databases creation Error ${err}`))
    }
  })
}
