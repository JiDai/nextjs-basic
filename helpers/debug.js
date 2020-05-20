export default function debug(appContext) {
  const time = new Date().getMilliseconds();
  const isServer = typeof window === "undefined" ? "on server" : "on browser";
  console.log(appContext.pathname, isServer, time);
}
