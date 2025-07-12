import Head from "next/head";
import Header from "../components/header";
import HeroSection from "../components/HeroSection";
import FeaturedItems from "../components/FeaturedItems";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
      <Head>
        <title>SwapHub - Sustainable Item Swapping Platform</title>
        <meta
          name="description"
          content="Transform your unused items into treasures for others. Join our community of eco-conscious swappers and discover the joy of sustainable living."
        />
        <meta name="author" content="SwapHub" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

        <div className="min-h-screen bg-white">
          <HeroSection />
          <FeaturedItems />
          <CallToAction />
          <Footer />
        </div>

    </>
  );
};

export default Page;
