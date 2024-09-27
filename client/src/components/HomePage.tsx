import NavBar from "./NavBar";
// import arrow from "../assets/arrow-pointing-upper-right.svg";
import deskChair from "../assets/deskwithchair.png";
import image from "../assets/image.png";
import cornerOfRoom from "../assets/workplace-arrangement-with-laptop.jpg";
import chill from "../assets/chill.jpg";
import jukebox from "../assets/jukebox.jpg";
import building from "../assets/anime-flat-building-illustration.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
// import { MinusIcon } from "@radix-ui/react-icons";

const HomePage = () => {
  // const companies = [
  //   { name: "TaskRabbit", logo: "path/to/taskrabbit.svg" },
  //   { name: "Ridepanda", logo: "path/to/ridepanda.svg" },
  //   { name: "7ventures", logo: "path/to/7ventures.svg" },
  //   { name: "On Deck", logo: "path/to/ondeck.svg" },
  //   { name: "Airbyte", logo: "path/to/airbyte.svg" },
  // ];
  return (
    <>
      <div
        className="relative max-h-[55vh] flex flex-col h-55vh bg-cover bg-center"
        style={{ backgroundImage: `url(${deskChair})` }}
      >
        {/*( Overlay) the blur effect */}
        <div className="absolute inset-0 bg-white/1 backdrop-blur-md"></div>

        <NavBar />

        <div className=" relative z-10 flex-grow flex flex-col bg-opacity-50 w-53vh">
          <div className="relative inline-block text-left py-2 px-2 ">
            <h1 className="text-4xl font-bold text-left leading-tight py-2 px-2">
              Struggling to maximize your business potential with digital
              solutions?
            </h1>
            {/* <a href="#" className="underline text-xl flex">
                Discover the workspace
                <img src={arrow} alt="arrow" className="" />
              </a> */}
            <p className="py-2 px-2 font-medium">
              Welcome to Gethub, your partner in providing comprehensive IT and
              business services tailored to micro, small, and medium enterprises
              (MSMEs). We offer a wide range of solutions—from shared workspaces
              to mobile app development—to support your business growth. Whether
              you need virtual assistance or a physical office, our
              cost-effective services are designed to meet your unique needs.{" "}
            </p>

            <p className="py-2 px-2 font-bold">
              Let GetHub handle the tech while you focus on strategy and
              expansion. Let us help you take it to the next level!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-auto justify-center py-10 px-20">
        <div className="flex flex-col md:flex-row justify-between p-5">
          <div className="flex flex-col justify-center bg-opacity-50">
            <h1 className="text-2xl font-bold text-left leading-tight py-5 px-5">
              Supporting business owners looking to expand and those in need of
              expert IT and workspace solutions.
            </h1>
            <div className="flex flex-col text-left py-5 px-5 items-center md:flex-row">
              <a
                href="#"
                className="px-4 py-2 text-white bg-black text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 w-fit"
              >
                About us
              </a>
              <span className="px-5 text-center md:text-left">
                Bringing creative people together and providing <br />
                the space and support to make connections
              </span>
            </div>
          </div>
          <div className="flex items-center p-5 self-center">
            <img
              src={image}
              alt="image"
              className="min-w-48 h-24 w-auto rounded-full"
            />
          </div>
        </div>

        <div>
          <img
            src={cornerOfRoom}
            alt="cornerOfRoom"
            className="w-auto rounded-llg"
          />
          <h1 className="text-2xl font-bold text-left leading-tight py-5 ">
            Corner of the room
          </h1>
        </div>
      </div>
      <div className="flex flex-col h-auto justify-center py-10 px-10">
        <Accordion allowMultiple className="bg-black text-white">
          <AccordionItem>
            <h2>
              <AccordionButton className="!rounded-[0px] ">
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="p-5 text-lg font-medium"
                >
                  Meeting Room
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="!rounded-[0px] ">
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="p-5 text-lg font-medium"
                >
                  Working Section
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="p-5 text-lg font-medium"
                >
                  Team Culture
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col h-auto justify-center py-10 px-20">
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div>
            <img
              src={chill}
              alt="cornerOfRoom"
              className="w-auto h-[60vh] rounded-llg"
            />
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-left leading-tight p-10 ">
              Work and Chill
            </h1>
            <img
              src={jukebox}
              alt="cornerOfRoom"
              className="w-auto h-[45vh] rounded-llg"
            />
          </div>
        </div>
        <div className="py-10 px-20 flex flex-col items-start">
          <h2 className="text-2xl font-semibold text-gray-900">Collaborate</h2>
          {/* <div className="flex space-x-8 mt-8">
            {companies.map((company) => (
              <div key={company.name} className="flex flex-col items-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 mb-2"
                />
                <span className="text-sm text-gray-600">{company.name}</span>
              </div>
            ))}
          </div> */}
        </div>

        <div className="flex flex-col md:flex-row justify-around gap-8 items-center">
          <div className="flex flex-col ">
            <h1 className="text-4xl font-bold text-left leading-tight py-5 ">
              Lets Colaborate
            </h1>
            <a
              href="#"
              className="px-4 py-2 text-white bg-black text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 w-fit"
            >
              Get Started
            </a>
          </div>
          <div>
            <img
              src={building}
              alt="cornerOfRoom"
              className="w-auto h-[30vh] rounded-llg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row h-auto justify-center py-10 px-10 bg-black text-white justify-around">
        <div className="flex flex-col items-start">
          <p className="text-base p-1">Spaceicy</p>
          <p className="text-xs p-1 text-left">
            bringin creative people together and providing the space and support
            to make connections
          </p>
        </div>
        <div className="flex flex-row">
          <div className="text-xs flex flex-col px-5 items-start">
            <a href="" className="p-1">
              Home
            </a>
            <a href="" className="p-1">
              About
            </a>
            <a href="" className="p-1">
              Blog
            </a>
            <a href="" className="p-1">
              Offsite
            </a>
          </div>
          <div className="text-xs flex flex-col px-5 items-start ">
            <a href="" className="p-1">
              Instagram
            </a>
            <a href="" className="p-1">
              Twitter
            </a>
            <a href="" className="p-1">
              Youtube
            </a>
            <a href="" className="p-1">
              Tiktok
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
