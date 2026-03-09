import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const MESSAGE_NAMESPACES = [
  "common",
  "navbar",
  "footer",
  "reviewGuide",
  "pageAbout",
  "pageCommunity",
  "pageContact",
  "pageDistributor",
  "pageGallery",
  "pageManufacturing",
  "pageProducts",
  "pageHome",
];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = Object.fromEntries(
    await Promise.all(
      MESSAGE_NAMESPACES.map(async (namespace) => {
        const messageFile = await import(
          `../../messages/${locale}/${namespace}.json`
        );

        return [namespace, messageFile.default];
      }),
    ),
  );

  return {
    locale,
    messages,
  };
});
