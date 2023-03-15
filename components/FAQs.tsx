import { Disclosure } from "@headlessui/react";
import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import AutoActiveMenu from "./AutoActiveMenu";

const faqs = [
  {
    question: "What platforms does Kompad support ?",
    answer:
      "For now, we only support web and desktop versions. You can visit web version on https://kompad.vercel.app",
  },
  {
    question: "Is there a free version for newbie ?",
    answer: "No. But you can download and try a trail version in 15 days",
  },
  {
    question: "Is Kompad support markdown syntax ?",
    answer:
      "Not all markdown syntaxes supported. You could use some syntax such as: heading, code, blockqoutes, code highlighting, unordered list, ordered list.",
  },
  {
    question: "Can i share my document to others ?",
    answer:
      "Yes, you can. Just right click on the document and select 'Share' button.",
  },
  // More questions...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQs() {
  return (
    <AutoActiveMenu name="faqs">
      <div className="bg-gray-50 py-[150px]" id="faqs">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="title2 pb-12 capitalize">
              Frequently asked <span className="text-pink-400">questions</span>
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
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
