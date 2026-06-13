"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

const CAL_USERNAME = "olayele-gbenga-awujoola-e1xfxc";

export function CalEmbed() {
  const [calTheme, setCalTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Match Cal.com theme to site theme
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    setCalTheme(isDark ? "dark" : "light");

    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      calLink={CAL_USERNAME}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: calTheme }}
    />
  );
}
