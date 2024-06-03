import { Disclosure } from "@headlessui/react";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import AutoActiveMenu from "./AutoActiveMenu";

const faqs = [
  {
    question: "What platforms does Kompad support ?",
    answer:
      "For now, we only support desktop versions. But you can host your own web version or install it as PWA",
  },
  {
    question: "Is there a free version for newbie ?",
    answer: "It's completely free for you.",
  },
  {
    question: "Is Kompad support markdown syntax ?",
    answer:
      "Not all markdown syntaxes supported. You could use some syntax such as: heading, code, blockqoutes, code highlighting, unordered list, ordered list.",
  },
  {
    question: "Can i share my document to others ?",
    answer: "We're working on it ...",
  },
  // More questions...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQs() {
  return (
    <AutoActiveMenu name="faqs">
      <div className="bg-gray-50 py-[70px] sm:py-[150px]" id="faqs">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="title2 pb-12 capitalize">
              Frequently asked <span className="text-pink-400">questions</span>
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200 px-6">
              {faqs.map((faq, index) => (
                <Disclosure as="div" key={index} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            <ChevronDoubleDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </AutoActiveMenu>
  );
}
