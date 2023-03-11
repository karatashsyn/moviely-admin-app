import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreMovieValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.required()]),
    rating: schema.number.nullable([rules.range(0, 10)]),
    apiId: schema.number.nullable([rules.unique({ table: 'movies', column: 'api_id' })]),
    poster: schema.string.nullable([rules.url()]),
    description: schema.string.optional({ trim: true }, [rules.minLength(24)]),
    artists: schema.array
      .optional()
      .members(schema.number([rules.exists({ table: 'artists', column: 'id' })])),
    genres: schema.array
      .optional()
      .members(schema.number([rules.exists({ table: 'genres', column: 'id' })])),
  })

  public messages: CustomMessages = {
    'required': '{{field}} is required.',
    'rating.range': 'Rating must be between {{options.start}} and {{options.stop}}',
    'poster.url': 'Poster should be a valid url',
    'genres.exists': 'No such genre.',
    'genres.number': 'Genres should be given as numbers',
    'apiId.unique': 'There is already a movie with this api id.',
  }
}
