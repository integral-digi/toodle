rewrite to styled component:

import React from "react";
import styled from "styled-components";
import { Disclosure } from "@headlessui/react";
import { Link } from "gatsby";
import { columns } from "./LinkType";
import { FaArrowDown } from "react-icons/fa";

const FooterLinks = () => {
  return (
    <section className="w-full">
      <section className="flex items-start space-x-12 lg:hidden">
        {columns.map((column) => (
          <section className="w-max space-y-8" key={column.id}>
            <h2 className="text-white text-lg font-bold leading-7">
              {column.title}
            </h2>
            <section className="space-y-6">
              {column.links.map((columnLink, index) => (
                <Link to={columnLink.href} key={index}>
                  <p className="text-white text-base font-medium leading-tight">
                    {columnLink.name}
                  </p>
                </Link>
              ))}
            </section>
          </section>
        ))}
        <section className="w-full space-y-8 lg:block">
          <Disclosure>
            {columns.map((column) => (
              <>
                <Disclosure.Button  key={column.id}>
                  <section className="w-full flex items-center justify-between space-y-8">
                    <h2 className="text-white text-lg font-bold leading-7">
                      {column.title}
                    </h2>
                    <FaArrowDown color="#ffffff" size={8} />
                  </section>
                </Disclosure.Button>
                <Disclosure.Panel>
                  {column.links.map((columnLink, index) => (
                    <Link to={columnLink.href} key={index}>
                      <p className="text-white text-base font-medium leading-tight">
                        {columnLink.name}
                      </p>
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
              ))}
          </Disclosure>
        </section>
      </section>
    </section>
  )
}

export default FooterLinks;