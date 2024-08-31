import { z } from 'zod'

export const schema = z.object({
  // TODO : バリデーションルールの充実化
  email: z.string({ required_error: '必須項目です' }),
  // TODO : バリデーションルールの充実化
  password : z.string({required_error: '必須項目です'})
})

export type LoginInputSchema = z.infer<typeof schema>