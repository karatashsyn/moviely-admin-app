import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'genres'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigInteger('id').primary().unique()
      table.string('name').unique()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
