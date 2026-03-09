import CustomCursor from "@/components/shared/CustomCursor";
import Footer from "@/components/shared/Footer";
import GSAPWrapper from "@/components/shared/GSAPWrapper";
import Navbar from "@/components/shared/Navbar";
import ReviewGuide from "@/components/shared/ReviewGuide";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <CustomCursor />
      <ReviewGuide />
      <Navbar />
      <GSAPWrapper>
        {children}
        <Footer />
      </GSAPWrapper>
    </NextIntlClientProvider>
  );
}
