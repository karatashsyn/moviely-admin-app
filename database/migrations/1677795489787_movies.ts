import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'movies'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id').primary().unique()
      table.bigInteger('api_id').unique().nullable()
      table.string('title').notNullable()
      table.string('poster').nullable()
      table.integer('rating').nullable()
      table.text('description')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.createTable('movie_artist', (table) => {
      table.bigIncrements('id').primary().unique()
      table.bigInteger('movie_id').references('movies.id').notNullable().onDelete('CASCADE')
      table.bigInteger('artist_id').references('artists.id').notNullable().onDelete('CASCADE')
      table.unique(['movie_id', 'artist_id'])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })

    this.schema.createTable('movie_genre', (table) => {
      table.bigIncrements('id').primary().unique()
      table.bigInteger('movie_id').references('movies.id').notNullable().onDelete('CASCADE')
      table.bigInteger('genre_id').references('genres.id').notNullable().onDelete('CASCADE')
      table.unique(['movie_id', 'genre_id'])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
