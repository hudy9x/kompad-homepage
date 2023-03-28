import { useFormik } from "formik";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  HiOutlineCalendar,
  HiOutlineGlobe,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineX,
} from "react-icons/hi";
import { isValidPassword, toTimestamp } from "../libs/utils";
import { sendNotifyDiscord } from "../services/notification";
import { createFreePlan, signIn, signUp, verifyEmail } from "../services/sign";
import { addUser } from "../services/user";

export default function Signup() {
  const [errorMess, setErrorMess] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      address: "",
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/kompad-a9b60.appspot.com/o/avatars%2Fpublic%2Fmen-6.png?alt=media&token=37e2e899-6cbb-4ed3-b2d8-b3fcb86dedad",
      dateOfBirth: new Date().toDateString(),
    },
    onSubmit: (user) => {
      const { email, password, address, dateOfBirth, fullname, photoURL } =
        user;

      if (loading) return;

      setLoading(true);

      if (!isValidPassword(password)) {
        setErrorMess(`Should be 8-16 characters
Have uppercase letter
Have lowercase letter
Have at least 1 digit
And not have spaces`);

        setLoading(false);
        return;
      }

      signUp(email, password)
        .then(async (userCredential) => {
          const { user } = userCredential;

          await addUser({
            uid: user.uid,
            fullname,
            email,
            address,
            photoURL,
            dateOfBirth: toTimestamp(dateOfBirth),
          });

          // const res = await signIn(email, password);

          await createFreePlan();
          await verifyEmail();

          sendNotifyDiscord(`🧔 ${email} just registered as an user`);
          // if (res) {
          push(`/email-verification?email=${email}`);
          // }
        })
        .catch((error) => {
          console.dir(error.code);

          switch (error.code) {
            case "auth/invalid-email":
              setErrorMess("Email already in use");
              break;

            case "auth/internal-error":
              setErrorMess("Internal error");
              break;

            case "auth/email-already-in-use":
              setErrorMess("Email already in use");
              break;

            default:
              setErrorMess("Something went wrong");
              break;
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <div id="signin" className="bg-pattern-1 h-screen">
      <NextSeo
        title="Sign up"
        description="Kompad is a text note application that helps users stay organized and productive. It supports MacOS, Windows, and Linux and syncs data in real-time, so you can access your notes from anywhere. You can organize notes by folders and tags, making it easy to find what you need. Kompad also supports Markdown syntax, allowing you to format notes and add emphasis. Whether you're a writer, student, or someone who needs to keep track of information, Kompad is a simple and powerful tool for all your note-taking needs."
        canonical="https://www.canonical.ie/"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.png",
          },
        ]}
      />
      <div className="flex mx-3 min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-[350px] sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
            User Registration
          </h2>

          {errorMess ? (
            <p className="bg-red-200 rounded-md mt-3 shadow-lg text-red-700 p-4 relative">
              <HiOutlineX
                onClick={() => {
                  setErrorMess("");
                }}
                className="absolute top-2 right-2 w-5 h-5 p-1 shadow-sm rounded-md bg-red-100 cursor-pointer hover:bg-red-50"
              />
              {errorMess}
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-[350px] sm:max-w-md">
          <div className="bg-white py-8 px-3 shadow sm:rounded-lg sm:px-6">
            <form
              className="sign-form space-y-3"
              onSubmit={formik.handleSubmit}
            >
              <div className="input-group">
                {/* <label htmlFor="email" className="block text-sm text-gray-700">
                Fullname
              </label> */}
                <div className="form-control">
                  <div className="form-icon">
                    <HiOutlineUser className="h-5 w-5 " aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                    className=""
                    placeholder="Fullname"
                  />
                </div>
              </div>

              <div className="input-group">
                {/* <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label> */}
                <div className="form-control">
                  <div className="form-icon">
                    <HiOutlineMail className="h-5 w-5 " aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="input-group">
                {/* <label htmlFor="email" className="block text-sm text-gray-700">
                Password
              </label> */}
                <div className="form-control">
                  <div className="form-icon">
                    <HiOutlineLockClosed
                      className="h-5 w-5 "
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
              </div>

              <div className="input-group inp-date">
                {/* <label htmlFor="email" className="block text-sm text-gray-700">
                Date of birth
              </label> */}
                <div className="form-control">
                  <div className="form-icon">
                    <HiOutlineCalendar
                      className="h-5 w-5 "
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date of birth"
                    onChange={(ev) => {
                      formik.setFieldValue("dateOfBirth", ev.target.value);
                    }}
                    value={formik.values.dateOfBirth}
                  />
                </div>
              </div>

              <div className="input-group">
                {/* <label htmlFor="email" className="block text-sm text-gray-700">
                Date of birth
              </label> */}
                <div className="form-control">
                  <div className="form-icon">
                    <HiOutlineGlobe className="h-5 w-5 " aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>
              </div>

              <div className="input-group">
                <button
                  type="submit"
                  className="btn btn-xl btn-block btn-primary"
                >
                  Sign up
                </button>
              </div>

              <div className="input-group">
                <p className="text-xs">
                  <span className="opacity-80">Already have an account? </span>
                  <Link
                    href={"/signin"}
                    className="text-color-primary hover:underline"
                  >
                    Back to sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
