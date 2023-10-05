import { motion } from "framer-motion";
import { Divider, childrenVar, parentVariant } from "../ui/utils";

function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-screen w-full select-none flex-col items-center justify-start "
    >
      <Divider />
      <motion.div
        variants={parentVariant(0.5, 0.25)}
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        className="flex w-full flex-1 items-center justify-center p-5 md:p-10 lg:p-20"
      >
        <div className="flex flex-col items-center w-full justify-center gap-10">
          <motion.div variants={childrenVar("vertical", "spring")}></motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
