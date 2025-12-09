import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { BsBehance } from "react-icons/bs";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 flex justify-center text-center"
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-10  ">
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>

          {/* CONTACT ITEMS */}
        <div className="space-y-4 mt-5">

  {/* EMAIL */}
  <div className="flex items-center justify-center gap-6">
    <Mail className="h-5 w-5 text-primary" />
    <h4 className="font-medium">Email:</h4>
    <a
      href="mailto:usamajameeloffical786@gmail.com"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      raritu44@gmail.com
    </a>
  </div>

  {/* PHONE */}
  <div className="flex items-center justify-center gap-6">
    <Phone className="h-5 w-5 text-primary" />
    <h4 className="font-medium">Phone:</h4>
    <a
      href="tel:+923232420722"
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      +880 1871-131044
    </a>
  </div>

  {/* LOCATION */}
  <div className="flex items-center justify-center gap-6">
    <MapPin className="h-5 w-5 text-primary" />
    <h4 className="font-medium">Location:</h4>
    <p className="text-muted-foreground">Comilla, Bangladesh</p>
  </div>

</div>


          {/* SOCIALS */}
          <div className="">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/raritu17?igsh=eHhnMjBqeGl3enZ3"
                target="_blank"
              >
                <Instagram className="hover:text-primary transition-colors" />
              </a>
              <a
      href="https://www.behance.net/monjurulislam36"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsBehance size={20} className="hover:text-primary transition-colors" />
    </a>

              <a
                href="https://www.facebook.com/share/1CAtcpR35k/"
                target="_blank"
              >
                <Facebook className="hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
