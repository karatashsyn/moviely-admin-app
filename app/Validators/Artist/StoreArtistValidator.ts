/* eslint-disable prettier/prettier */
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreArtistValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    apiId: schema.number.nullableAndOptional([
      rules.unique({ table: 'artists', column: 'api_id' }),
    ]),
    fullName: schema.string({ trim: true }, [rules.required(), rules.minLength(2)]),
    biography: schema.string.nullableAndOptional({ trim: true }),
    picture: schema.string.nullableAndOptional({ trim: true }, [rules.url()]),
    country: schema.string.nullableAndOptional({ trim: true }),
  })

  public messages: CustomMessages = {
    required: '{{field}} is required.',
    minLength: 'The name must contain at least {{ options.minLength }} characters.',
  }
}
