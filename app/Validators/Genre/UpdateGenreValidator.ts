/* eslint-disable prettier/prettier */
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateGenreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.required(), rules.minLength(2)]),
  })

  public messages: CustomMessages = {
    required: '{{field}} is required.',
    minLength: 'The name must contain at least {{ options.minLength }} characters.',
  }
}
