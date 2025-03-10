import { bs as Debug, a_ as useSubscription$1 } from "./index-BdCmY7-e.js";
const debugSubscription = Debug("cypress:app:graphql-subscription");
const useSubscription = (...args) => {
  var _a, _b, _c, _d;
  const name = (_d = (_c = (_b = (_a = args[0].query) == null ? void 0 : _a.definitions) == null ? void 0 : _b[0]) == null ? void 0 : _c.name) == null ? void 0 : _d.value;
  debugSubscription("Subscribing to %s: Variables: %o", name, args[0].variables);
  return useSubscription$1(...args);
};
export {
  useSubscription as u
};
