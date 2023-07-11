import axios from "axios"
const tstasdbjabjdevAPI = axios.create({
  baseURL: "https://tst-asdbjabj-dev-100009.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstasdbjabjdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return tstasdbjabjdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_payment_list(payload) {
  return tstasdbjabjdevAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return tstasdbjabjdevAPI.post(`/api/v1/payment/`, payload)
}
function api_v1_payment_retrieve(payload) {
  return tstasdbjabjdevAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return tstasdbjabjdevAPI.put(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_partial_update(payload) {
  return tstasdbjabjdevAPI.patch(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_destroy(payload) {
  return tstasdbjabjdevAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return tstasdbjabjdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tstasdbjabjdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstasdbjabjdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstasdbjabjdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstasdbjabjdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstasdbjabjdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstasdbjabjdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tstasdbjabjdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstasdbjabjdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return tstasdbjabjdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstasdbjabjdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstasdbjabjdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
