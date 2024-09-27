import NavBar from "./NavBar";
// import arrow from "../assets/arrow-pointing-upper-right.svg";
import deskChair from "../assets/deskwithchair.jpg";
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
      <NavBar />
      <div
        className="relative max-h-[55vh] flex flex-col h-55vh bg-cover bg-center mt-5"
        style={{ backgroundImage: `url(${deskChair})` }}
      >
        {/*( Overlay) the blur effect */}
        <div className="absolute inset-0 bg-black/1 backdrop-blur-sm"></div>

        <div className=" relative z-10 flex-grow flex flex-col justify-center w-[60.1vh] bg-[#d3d3d3c9]">
          <div className="relative inline-block text-left py-2 px-2 ">
            <h1 className="text-4xl font-bold text-left leading-tight py-2 px-2 text-justify">
              Struggling to maximize your business potential with digital
              solutions?
            </h1>
            {/* <a href="#" className="underline text-xl flex">
                Discover the workspace
                <img src={arrow} alt="arrow" className="" />
              </a> */}
            <p className="py-2 px-2 font-medium text-justify">
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
        <div className="pb-5">
          <h1 className="text-2xl font-bold text-left leading-tight  ">
            Why Choose Us
          </h1>
          <p className="text-left pt-2 pl-5">
            At <b>Gethub</b>, we are committed to delivering exceptional service
            and value. Here’s why businesses choose us:
          </p>
        </div>

        <Accordion allowMultiple className="bg-black text-white">
          <AccordionItem>
            <h2>
              <AccordionButton className="!rounded-[0px] hover:border-[transparent] focus:outline-none focus-visible:outline-none">
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="p-5 text-lg font-medium"
                >
                  Cost-Effective Services
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We offer competitive pricing without compromising on quality. Our
              solutions are designed to deliver maximum value for money.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="!rounded-[0px] hover:border-[transparent] focus:outline-none focus-visible:outline-none">
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="p-5 text-lg font-medium"
                >
                  Consulting Expertise
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Our team brings professional advice and custom solutions tailored
              to your business. No one-size-fits-all approach—just what works
              for you.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton className="!rounded-[0px] hover:border-[transparent] focus:outline-none focus-visible:outline-none">
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="p-5 text-lg font-medium"
                >
                  Deep Industry Experience
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              With years of experience supporting MSMEs, we understand the
              challenges you face. Let our knowledge guide your business to
              success.
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
              Ready to level up?
            </h1>
            <a
              href="#"
              className="px-4 py-2 text-white bg-black text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 w-fit"
            >
              Contact us!
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
          <p className="text-base p-1">GetHub</p>
          <p className="text-xs p-1 text-left">
            Let GetHub handle the tech while you focus on strategy and
            expansion. Let GetHubhelp you take it to the next level!
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
