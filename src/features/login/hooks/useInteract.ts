import { useForm } from "vee-validate"
import * as schema from "../types/schema"
import { toTypedSchema } from "@vee-validate/zod"
import * as response from "@/shared/api/response"
import { client } from "@/shared/api/client"

export const handleSubmitError = (e: response.ApiSchema<"GeneralError">[]) => {
  alert(JSON.stringify(e, undefined, 2))
}

export const useInteract = () => {
  const { handleSubmit, defineField, errors } = useForm<schema.LoginInputSchema>({
    validationSchema: toTypedSchema(schema.schema),
  })


  const onClickSignIn = handleSubmit(async (body) => {
    console.log('hello')
    const { error } = await client.POST("/normal/login", { body })
    if (error) {
      handleSubmitError(error)
    }
  })

  return {
    handleSubmit, defineField, errors, onClickSignIn
  }
}
