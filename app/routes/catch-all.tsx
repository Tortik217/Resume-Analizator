// export function loader({ request }: { request: Request }) {
//   const url = new URL(request.url);
//
//   // Игнорируем файлы (.map, .js, .json и т.п.)
//   if (url.pathname.includes(".")) {
//     return new Response(null, { status: 204 });
//   }
//
//   throw new Response("Not Found", { status: 404 });
// }
//
// export default function CatchAll() {
//   return null;
// }
