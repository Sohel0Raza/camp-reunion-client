import "./ContactUs.css";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className="hero contact-item mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-1/2">
          <div className="w-full">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="py-6">
              We are here to provide assistance and ensure that your child has a
              fantastic experience filled with sports, fun, and personal growth.
              We look forward to hearing from you and welcoming your child to
              our camp!
            </p>
              <div className="font-semibold">
              <p className="flex items-center">
                <AiFillPhone />
                <span className="pl-2"> +880 1898-978956</span>
              </p>
              <p className="flex items-center">
                <AiOutlineMail />
                <span className="pl-2"> soheldot12@gamil.cpm</span>
              </p>
              <p className="flex items-center">
                <MdOutlineLocationOn />
                <span className="pl-2">1234 Dhaka, Bangladesh</span>
              </p>
              </div>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <input className="btn-outlined" type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
