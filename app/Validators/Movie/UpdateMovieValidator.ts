import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateMovieValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string.optional({ trim: true }),
    poster: schema.string.optional([rules.url()]),
    rating: schema.number.optional([rules.range(0, 10)]),
    description: schema.string.optional({ trim: true }, [rules.minLength(12)]),
    artists: schema.array
      .optional()
      .members(schema.number([rules.exists({ table: 'artists', column: 'id' })])),
    genres: schema.array
      .optional()
      .members(schema.number([rules.exists({ table: 'genres', column: 'id' })])),
  })

  public messages: CustomMessages = {
    'rating.range': 'Rating must be between {{options.start}} and {{options.stop}}',
    'poster.url': 'Poster should be a valid url',
    'genres.exists': 'No such genre.',
    'genres.number': 'Genres should be given as numbers',
  }
}
