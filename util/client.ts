// For "client-side" usage
import { createThirdwebClient } from "thirdweb";

const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

export const client = clientId
  ? createThirdwebClient({
      clientId: clientId,
    })
  : null;

// For "server-side" usage
// import { createThirdwebClient } from "thirdweb";

// const secretKey = process.env.NEXT_PUBLIC_TEMPLATE_SECRET_KEY;

// if (!secretKey) {
//   throw new Error("There is no thirdweb secret Key.");
// }

// export const client = createThirdwebClient({
//   secretKey: secretKey,
// });
