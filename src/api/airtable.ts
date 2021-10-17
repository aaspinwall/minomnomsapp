import Airtable from "airtable"

export const getAirtableRecords = async (tableName: string, column: string): Promise<(any | undefined)[]> => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base("appgzukHIAPA62BML")
  const table = base(tableName)
  const records = await table.select({ view: "Grid view" }).firstPage()

  return records.map((record) => record.get(column))
}

export const getAirtableTable = async (tableName: string, column?: string) => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base("appgzukHIAPA62BML")
  const table = base(tableName)
  const records = await table.select({ view: "Grid view" }).firstPage()

  return records.map((record) => ({ ...record.fields }))
}

export const getAirtableSingle = async (
  tableName = "portions",
  fieldName = "reclsCcx0BnedtThl",
): Promise<any | undefined> => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base("appgzukHIAPA62BML")
  const table = base(tableName)
  const records = await (await table.find(fieldName)).fields

  return records
}

export const updateAirtableSingle = async (
  tableName = "portions",
  fieldName = "reclsCcx0BnedtThl",
  data: any,
): Promise<any | undefined> => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base("appgzukHIAPA62BML")
  const table = base(tableName)
  const records = await (await table.update(fieldName, data)).fields

  // console.log(records)

  return records
}

export const updateAirtableRecord = async (
  tableName: string,
  recordID: string,
  data: any,
): Promise<any | undefined> => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base("appgzukHIAPA62BML")
  const table = base(tableName)
  const records = await (await table.update(recordID, data)).fields

  return records
}

export const deleteAirtableSingle = async (
  tableName = "portions",
  fieldName = "reclsCcx0BnedtThl",
): Promise<any | undefined> => {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base("appgzukHIAPA62BML")
  const table = base(tableName)
  const records = await table.destroy(fieldName)

  // console.log(records)

  return records
}

export async function createAirtableRecords(fields: any, baseName: string) {
  const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base("appgzukHIAPA62BML")
  const table = base(baseName)
  const recordID = await table.create([{ fields }])

  const [id] = recordID.map((record) => record.getId())

  // console.log(id)

  return id
}
