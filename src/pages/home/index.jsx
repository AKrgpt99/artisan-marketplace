import React from "react";

import Banner from "../../assets/images/jpg/examples/fakurian-design-3-unsplash.jpg";
import Button from "../../components/button";
import Card from "../../components/card";

import FeaturedImg from "../../assets/images/png/examples/the-man-in-the-distance-nft.png";
import Section from "../../components/section";

import DefaultUserImg from "../../assets/images/png/defaults/user.png";

const data = {
  assets: [
    {
      tokenId: 0,
      tokenURI: "",
    },
  ],
};

function Home() {
  return (
    <div className="flex flex-col w-full pb-24">
      <div className="w-full h-screen relative flex flex-row justify-center items-center">
        <img
          src={Banner}
          className="w-full h-full top-0 object-cover absolute z-0"
        />
        <div className="w-full h-screen lg:w-4/5 flex flex-row flex-wrap justify-center items-center z-10 px-6">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-6 mt-36 p-4 lg:p-16 lg:mt-0">
            <h1 className="text-4xl text-white font-extrabold text-center lg:text-left">
              Canada's First NFT Marketplace
            </h1>
            <p className="text-xl text-white font-extralight text-center lg:text-left">
              Uncover new oppurtunities to earn, discover, and invest.
            </p>
            <div className="flex flex-row justify-center items-center gap-6 mt-4">
              <Button
                to="/"
                variation="light"
                className="p-2 font-bold text-white"
                outlined
              >
                Connect
              </Button>
              <Button to="/" variation="light" className="p-2 font-bold">
                Explore
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end p-4 lg:p-16 gap-6">
            <Card>
              <Card.Content src={FeaturedImg} />
              <Card.Description
                name="The Man in the Distance"
                artistAddress="0x94c...8e66"
                profileImgSrc={DefaultUserImg}
                price={2}
              />
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Section>
          <Section.Title>Top NFTs</Section.Title>
          <Section.Subtitle>By category</Section.Subtitle>
          <Section.Tabs>
            <button>Art</button>
            <button>Music</button>
            <button>Video</button>
            <button>Utility</button>
            <button>Collectibles</button>
            <button>Photography</button>
            <button>Cinematography</button>
            <button>Sports</button>
          </Section.Tabs>
          <Section.HList></Section.HList>
        </Section>
      </div>
    </div>
  );
}

export default Home;
