import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Genre from './Genre'
import Artist from './Artist'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  public id: bigint

  @column()
  public apiId: number | null

  @column()
  public title: string

  @column()
  public poster: string | null

  @column()
  public rating: number | null

  @column()
  public description: string

  @manyToMany(() => Genre, {
    localKey: 'id',
    relatedKey: 'id',
    pivotForeignKey: 'movie_id',
    pivotRelatedForeignKey: 'genre_id',
    pivotTable: 'movie_genre',
  })
  public genres: ManyToMany<typeof Genre>

  @manyToMany(() => Artist, {
    localKey: 'id',
    relatedKey: 'id',
    pivotForeignKey: 'movie_id',
    pivotRelatedForeignKey: 'artist_id',
    pivotTable: 'movie_artist',
  })
  public artists: ManyToMany<typeof Artist>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
