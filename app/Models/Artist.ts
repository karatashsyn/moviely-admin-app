import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Artist extends BaseModel {
  @column({ isPrimary: true })
  public id: bigint

  public apiId: bigint

  public fullName: string

  public biography: string

  public age: number

  public picture: string | null

  public country: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
