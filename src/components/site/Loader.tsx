import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.jpeg";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-hero"
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="relative h-28 w-28"
            >
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              />
              <div className="absolute inset-2 rounded-full overflow-hidden ring-2 ring-white bg-white shadow-deep">
                <img src={logo} alt="" className="h-full w-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="text-center"
            >
              <div className="font-display font-bold text-xl text-gradient">D R Surveyor</div>
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-1">Precision · Accuracy · Trust</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
