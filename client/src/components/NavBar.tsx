import { useEffect, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/GetHub-Logo_ALT-Black.png";
import telephone from "../assets/telephone.svg";
import { ErrorImage } from "./HomePage";
import {
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
import React from "react";
import { ContactForm } from "./HomePage";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <>
      <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-4  lg:px-8 sticky"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img src={logo} alt="logo" className="w-167px min-w-[167px]" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-8 align-center h-[70px]">
            <a
              href="#"
              className={`relative text-black px-2 py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left hover:bg-blue-100 hover:bg-opacity-50 font-semibold pt-5 px-4 ${
                isHomePage
                  ? "after:scale-x-100 bg-blue-100 bg-opacity-50"
                  : "after:scale-x-0"
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`relative text-black px-2 py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left hover:bg-blue-100 hover:bg-opacity-50 font-semibold pt-5 px-4`}
            >
              Services
            </a>
            <a
              href="#"
              className={`relative text-black px-2 py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left hover:bg-blue-100 hover:bg-opacity-50 font-semibold pt-5 px-4`}
            >
              Clients
            </a>
            <a
              href="#"
              className={`relative text-black px-2 py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left hover:bg-blue-100 hover:bg-opacity-50 font-semibold pt-5 px-4`}
            >
              Partners
            </a>
            <a
              href="#"
              className={`relative text-black px-2 py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left hover:bg-blue-100 hover:bg-opacity-50 font-semibold pt-5 px-4`}
            >
              Company
            </a>
            <div className="flex flex-row items-center">
              <div className="p-[10px] rounded-full bg-white mr-1">
                <img
                  src={telephone}
                  alt="telephone"
                  className="w-[16px] min-w-[16px]"
                />
              </div>

              <div className="flex flex-col items-start">
                <span className="text-sm">Call for more info</span>
                <span className="font-bold">+63 909 5678 989</span>
              </div>
            </div>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <a
              onClick={onOpen}
              className="px-4 py-2 text-white bg-[#000080] text-gray-700 rounded-full hover:bg-opacity-70 transition-colors duration-150 w-fit cursor-pointer"
            >
              Contact
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Services</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Services
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact us
                  </a>
                  <div className="flex lg:flex-1 lg:gap-x-4 ">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Services</span>
                      <p>LOGO.</p>
                    </a>
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Services</span>
                      <p>LOGO.</p>
                    </a>
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Services</span>
                      <p>LOGO.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
              <ModalFooter className="gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 text-white bg-[#000080] rounded-full hover:bg-gray-300 transition-colors duration-300 w-fit cursor-pointer font-semibold"
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
              className="px-4 py-2 text-white bg-white text-black rounded-full border border-gray hover:bg-gray-300 transition-colors duration-300 w-fit cursor-pointer"
            >
              Close
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default NavBar;
