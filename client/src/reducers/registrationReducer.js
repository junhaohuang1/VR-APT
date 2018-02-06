export function registration(state = {}, action) {
  switch (action.type) {
    case "USERS_REGISTER_PENDING":
      return { registering: true };
    case "USERS_REGISTER_FULFILLED":
      return {};
    case "USERS_REGISTER_REJECTED":
      return {};
    default:
      return state
  }
}
