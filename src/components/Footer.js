import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";

export default function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <h1 className="heading">ABOUT US</h1>
            <div className="footerularea">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <p>
                    {" "}
                    <BiLocationPlus size={28} className="areafooter" />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas atque blanditiis sit asperiores doloremque quos impedit
                    laborum veniam nemo earum!
                  </p>
                </li>
                <li>
                  <p>
                    <BiPhoneCall size={28} className="areafooter" />
                    257-005-3359
                  </p>
                </li>
                <li>
                  <p>
                    <BsWhatsapp size={28} className="areafooter" />
                    357-0053-231
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <h1 className="heading">LOREM</h1>
            <div className="footerularea">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <p>
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas atque blanditiis sit asperiores doloremque quos impedit
                    laborum veniam nemo earum!
                  </p>
                </li>
                <li>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas atque blanditiis sit asperiores doloremque quos impedit
                    laborum veniam nemo earum!
                  </p>
                </li>
                <li>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas atque blanditiis sit asperiores doloremque quos impedit
                    laborum veniam nemo earum!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <h1 className="heading">QUICK UPDATE</h1>
            <div className="footerularea">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <p>
                    {" "}
                    <BiLocationPlus size={28} className="areafooter" />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quas atque blanditiis sit asperiores doloremque quos impedit
                    laborum veniam nemo earum!
                  </p>
                </li>
                <li>
                  <p>
                    <BiPhoneCall size={28} className="areafooter" />
                    257-005-3359
                  </p>
                </li>
                <li>
                  <p>
                    <BsWhatsapp size={28} className="areafooter" />
                    357-0053-231
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
