export interface IProduct {
  _id?: string
  name?: string
  slug: string
  sku: string
  eligibilities: string[]
  nextHigherAssemblies: string[]
  description?: string
  oem: any
  oemPartNumber: any
  price?: number
  salePrice?: number
  sortOrder?: number
  tbq?: boolean
  qtySold: number
}
