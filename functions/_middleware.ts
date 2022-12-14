import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
personalizations: [
{
to: [{ name: "Singular Movement Support", email: "support@singularmovement.com" }],
},
],
from: { name: "Enquiry", email: "no-reply@singularmovement.com" },
respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/thank-you" },
    }),
});
