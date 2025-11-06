// "use client";

// import { useState } from "react";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";
// import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

// export default function SupabaseProvider({ children }) {
//   // Create the client only once, on the browser
//   const [supabaseClient] = useState(() => createBrowserSupabaseClient());

//   return (
//     <SessionContextProvider supabaseClient={supabaseClient}>
//       {children}
//     </SessionContextProvider>
//   );
// }

"use client";

import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

export default function SupabaseProvider({ children }) {
  const [supabaseClient] = useState(() =>
    createPagesBrowserClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
