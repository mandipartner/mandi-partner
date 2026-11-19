import { useCallback, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Contact, type InquiryPrefill } from "@/components/site/Contact";
import { DomesticTrade } from "@/components/site/DomesticTrade";
import { Export } from "@/components/site/Export";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Products } from "@/components/site/Products";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { scrollToSection } from "@/lib/site";

const TITLE = "MANDI PARTNER | Agricultural Trading & Export Company India";
const DESCRIPTION =
  "MANDI PARTNER is an Indian agricultural trading and export company specializing in quinoa, bajra, chia seeds, rajgira, jowar and other agricultural commodities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "agricultural export India, quinoa supplier, bajra, pearl millet, chia seeds, rajgira, amaranth, jowar, sorghum, bulk grain supply, millets exporter",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  const [prefill, setPrefill] = useState<InquiryPrefill | null>(null);

  const openInquiry = useCallback((p: Omit<InquiryPrefill, "nonce">) => {
    setPrefill({ ...p, nonce: Date.now() });
    scrollToSection("contact");
  }, []);

  return (
    <>
      <Navbar onQuote={() => openInquiry({})} />
      <main>
        <Hero />
        <About />
        <Products onInquire={(product) => openInquiry({ product })} />
        <DomesticTrade onEnquire={() => openInquiry({ inquiryType: "Domestic Trade" })} />
        <Export onDiscuss={() => openInquiry({ inquiryType: "Export" })} />
        <WhyChooseUs />
        <Contact prefill={prefill} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
