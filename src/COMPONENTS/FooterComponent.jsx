import React from "react";
import { accordionData } from "../assets/Data";
import { useMediaQuery } from "react-responsive";
import FooterAccordion from "./FooterAccordion";
import Partner1 from "../assets/partner1.svg";
import Partner2 from "../assets/partner2.svg";
import Partner3 from "../assets/partner3.svg";
import Partner4 from "../assets/partner4.svg";
import Partner5 from "../assets/partner5.svg";
import { Link } from "react-router-dom";
import NewsletterComponent from "./NewsletterComponent";

const creditcard = [Partner1, Partner2, Partner3, Partner4];

const FooterComponent = () => {
  const mobile = useMediaQuery({ query: "(min-width:275px)" });
  const tablet = useMediaQuery({ query: "(min-width:766px)" });
  const contactData = accordionData.find(
    (item) => item.title === "Contact Info"
  );
  const socialData = accordionData.find(
    (item) => item.title === "Social Media"
  );
  const otherSections = accordionData.filter(
    (item) => item.title !== "Contact Info" && item.title !== "Social Media"
  );
  const iconmap = {
    Facebook: <i class="fa-brands fa-facebook"></i>,
    Twitter: <i class="fa-brands fa-x-twitter"></i>,
    Instagram: <i class="fa-brands fa-instagram"></i>,
    LinkedIn: <i class="fa-brands fa-linkedin-in"></i>,
  };

  return (
    <>
    <NewsletterComponent/>
    {tablet? <footer className="bg-gray-100 py-10 text-sm text-gray-700 ">
        {/* Contact Info */}
        <div className="min-w-[200px] grid grid-cols-4 gap-3 py-4 sm:px-5 md:px-5 lg:px-22 sm:mt-15 md:mt-5">
         <div>
           <ul className="[&>li]:mb-2">
            <h4 className="font-bold text-[18px] mb-4">{contactData.title}</h4>
            <li>{contactData.content.storeName}</li>
            <li>{contactData.content.address}</li>
            <li>{contactData.content.city}</li>
            <li>{contactData.content.postalCode}</li>
            <li>{contactData.content.country}</li>
            <li>{contactData.content.email}</li>
            <li>{contactData.content.phone}</li>
            <li className="italic text-sm mt-2">
              {contactData.content.supportText}
            </li>
          </ul>

          <div className="mt-6">
            <div className="flex gap-4 text-xl">
              {socialData.content.map(({ platform, link }) => (
                <a
                  key={platform}
                  href={link}
                  className="hover:text-primary"
                  aria-label={platform}
                >
                  {iconmap[platform]}
                </a>
              ))}
            </div>
          </div>
         </div>

          {/* Other Footer Sections */}
          <div className="grid grid-cols-3 gap-4 col-span-3">
            {otherSections.map((section) => (
              <div key={section.id}>
                <h4 className="font-bold text-[18px] mb-4">{section.title}</h4>
                <ul className="[&>li]:mb-2">
                  {section.content.map((item, i) => (
                    <li key={i}>
                      <Link to="#" className="hover:text-primary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>:
      <FooterAccordion/>
    }
    </>
  );
};

export default FooterComponent;
