import * as response from "@/shared/api/response"

export const handleSubmitError = (e: response.ApiSchema<"GeneralError">[]) => {
  alert(JSON.stringify(e, undefined, 2))
}