import { useForm } from "vee-validate"
import * as schema from "../types/schema"
import { toTypedSchema } from "@vee-validate/zod"
import { client } from "@/shared/api/client"
import { handleSubmitError } from "./functions"

export const useInteract = () => {
  const { handleSubmit, defineField, errors } = useForm<schema.LoginInputSchema>({
    validationSchema: toTypedSchema(schema.schema),
  })

  const onClickSignIn = handleSubmit(async (body) => {
    const { error } = await client.POST("/normal/login", { body })
    if (error) {
      // TODO : 現状、alertにしているが、コールバック関数渡して、errorMessageを設定するか、モーダル出すか良しなにできるように数r
      // この辺りは、細かいデザインが決まってないので後からにする
      handleSubmitError(error)
    }
    // TODO : home画面への遷移を実装する
  })

  return {
    defineField, errors, onClickSignIn
  }
}
