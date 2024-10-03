import NavBar from "./NavBar";
import deskChair from "../assets/deskwithchair.jpg";
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
  Modal,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import errorimage from "/src/assets/circle-exclamation-solid.svg";
import CardCarousel from "./Carousel";

export const ErrorImage = () => {
  return <img src={errorimage} alt="error" className="w-3 h-3 mr-1.5" />;
};

// import { MinusIcon } from "@radix-ui/react-icons";
export interface ContactForm {
  name?: string;
  email?: string;
  message?: string;
}

const HomePage = () => {
  // const companies = [
  //   { name: "TaskRabbit", logo: "path/to/taskrabbit.svg" },
  //   { name: "Ridepanda", logo: "path/to/ridepanda.svg" },
  //   { name: "7ventures", logo: "path/to/7ventures.svg" },
  //   { name: "On Deck", logo: "path/to/ondeck.svg" },
  //   { name: "Airbyte", logo: "path/to/airbyte.svg" },
  // ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen1, setIsOpen1] = useState(false);
  const onClose1 = () => setIsOpen1(false);
  const [loading, setLoading] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactForm>({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const validateEmail = (email: any) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return "Email address is required";
    }

    if (!re.test(email)) {
      return "Invalid Email Address";
    }

    return undefined;
  };

  const validateName = (name: any) => {
    const re = /^[A-Za-z\s'-.]+$/;

    if (!name) {
      return "Name is required";
    }

    if (!re.test(name)) {
      return "Invalid Name";
    }

    return undefined;
  };

  const validateMessage = (message: any) => {
    if (!message) {
      return "Name is required";
    }

    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("name:", form.name);
    const nameError = validateName(form.name);
    const emailError = validateEmail(form.email);
    const messageError = validateMessage(form.message);

    if (emailError || messageError || nameError) {
      setErrors({
        email: emailError,
        name: nameError,
        message: messageError,
      });
    } else {
      setErrors({
        email: undefined,
        name: undefined,
        message: undefined,
      });
      // handle submition here if no errors!

      // Set loading state to true
      setLoading(true);

      // Simulate a submission delay with a timeout
      setTimeout(() => {
        console.log("Form submitted successfully!");
        setLoading(false); // Reset loading state
        // Reset form fields if needed
        setForm({ name: "", email: "", message: "" });
        // open modal for prompt sent message.
        setIsOpen1(true);

        //close the form modal.
        onClose();
      }, 5000); // Mock submission delay (2 seconds)
    }
  };

  useEffect(() => {
    if (!form.name) {
      setErrors((prevErrors) => ({ ...prevErrors, name: undefined }));
    } else {
      const nameError = validateName(form.name);
      if (nameError) {
        setErrors((prevErrors) => ({ ...prevErrors, name: nameError }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, name: undefined }));
      }
    }

    if (!form.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
    } else {
      const emailError = validateEmail(form.email);
      if (emailError) {
        setErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
      }
    }

    if (!form.message) {
      setErrors((prevErrors) => ({ ...prevErrors, message: undefined }));
    } else {
      const messageError = validateMessage(form.message);
      if (messageError) {
        setErrors((prevErrors) => ({ ...prevErrors, message: messageError }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, message: undefined }));
      }
    }
  }, [form.email, form.name, form.message]);

  return (
    <>
      <NavBar />
      <div className="py-7 px-8 text-slate-100 relative flex flex-row bg-gradient-to-r from-[#000042eb] to-[#0062c1] mt-5 justify-around items-center">
        {/*( Overlay) the blur effect */}
        {/* <div className="absolute inset-0 bg-black/1 backdrop-blur-sm"></div> */}

        <div className=" relative z-10 flex-grow flex flex-col justify-center w-auto max-w-[55%]">
          <div className="relative inline-block text-left py-2 px-2 ">
            <h1 className="text-2xl font-bold text-left leading-tight py-2 px-2">
              Welcome to Gethub, your trusted partner for comprehensive IT and
              business services tailored specifically to micro, small, and
              medium enterprises (MSMEs).
            </h1>
            {/* <a href="#" className="underline text-xl flex">
                Discover the workspace
                <img src={arrow} alt="arrow" className="" />
              </a> */}
            <p className="py-2 px-2 font-medium">
              We provide a wide range of solutions—from shared workspaces and
              virtual assistance to mobile app development and office
              leasing—designed to fuel your business growth. Our services are
              flexible, cost-effective, and customized to meet your unique
              needs.
            </p>

            <p className="py-2 px-2 font-bold">
              Let Gethub handle the tech, so you can focus on strategy and
              scaling your business. Partner with us today and take your
              business to the next level!
            </p>
          </div>
        </div>

        <div
          className="w-96 h-96 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${deskChair})` }}
        ></div>
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

        <Accordion allowMultiple className="bg-[#000080] text-slate-100">
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
        <div className="flex justify-center items-center">
          <CardCarousel />
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
              onClick={onOpen}
              className="px-4 py-2 text-slate-100 bg-[#000080] text-gray-700 rounded-full hover:bg-opacity-70 transition-colors duration-300 w-fit cursor-pointer"
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

      <div className="flex flex-col h-auto justify-center py-10 px-10 bg-[#000080] text-slate-100 justify-around">
        <div className="flex flex-col items-start">
          <p className="text-base p-1">GetHub</p>
          <p className="text-xs p-1 text-left">
            Let GetHub handle the tech while you focus on strategy and
            expansion. Let GetHub help you take it to the next level!
          </p>
        </div>
        <div className="flex flex-row text-xs pt-5 items-start">
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

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact us</ModalHeader>
          <ModalCloseButton className="border !border-transparent" />
          <ModalBody pb={6} pt={0}>
            <span>
              Have a question or need more information? Reach out to us!
            </span>
            <h2 className="font-bold pt-5">Contact Details:</h2>
            <ul className="list-disc pl-8 pb-5">
              <li>
                <b>Email: </b>gethub.co@gmail.com
              </li>
              <li>
                <b>Business Address: </b>
                Bldg. 2 Unit 14 Celadon Town, Pajac-Maribago, Lapulapu City,
                Cebu, Philippines, 6015
              </li>
            </ul>
            <form onSubmit={submitContact}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`border ${
                    errors.name ? "!border-red-500" : "border-gray-300"
                  } focus:outline-none`}
                />
                {errors.name && (
                  <label className="text-[rgb(218,44,44)] text-[13px] mt-[5px] flex items-center">
                    <ErrorImage />
                    {errors.name}
                  </label>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`border ${
                    errors.email ? "!border-red-500" : "border-gray-300"
                  } focus:outline-none`}
                />
                {errors.email && (
                  <label className="text-[rgb(218,44,44)] text-[13px] mt-[5px] flex items-center">
                    <ErrorImage />
                    {errors.email}
                  </label>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Your Messages here...."
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`max-h-[300px] border ${
                    errors.message ? "!border-red-500" : "border-gray-300"
                  } focus:outline-none`}
                />
                {errors.message && (
                  <label className="text-[rgb(218,44,44)] text-[13px] mt-[5px] flex items-center">
                    <ErrorImage />
                    {errors.message}
                  </label>
                )}
              </FormControl>
              <ModalFooter className="gap-3 !px-0 !pt-8 !pb-0">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-slate-100 bg-[#000080] text-gray-700 rounded-full hover:bg-opacity-70 transition-colors duration-300 w-fit cursor-pointer font-semibold"
                >
                  {/* Send */}
                  {loading ? "Sending" : "Send"}
                </button>
                {/* <Button onClick={onClose}>Cancel</Button> */}
                <a
                  onClick={onClose}
                  className="px-4 py-2 text-black bg-white text-black rounded-full border border-gray hover:bg-gray-300 transition-colors duration-300 w-fit cursor-pointer"
                >
                  Cancel
                </a>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen1}
        onClose={onClose1}
        isCentered
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact us</ModalHeader>
          <ModalCloseButton className="border !border-transparent" />
          <ModalBody pb={6} pt={0}>
            <h2 className="font-bold pt-5">Message sent succesfully</h2>
          </ModalBody>
          <ModalFooter className="gap-3">
            <a
              onClick={onClose1}
              className="px-4 py-2 text-slate-100 bg-white text-black rounded-full border border-gray hover:bg-gray-300 transition-colors duration-300 w-fit cursor-pointer"
            >
              Close
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default HomePage;
