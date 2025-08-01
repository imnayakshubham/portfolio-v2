"use client"
import React from 'react'
import { ArrowDown, BriefcaseIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from '../ui/badge';

const ContactFooter = () => {
    return (
        <footer id="contact" className="w-full py-12">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="opacity-100 filter-none transform translate-y-[-6px] translate-z-0">
                    <div className="space-y-3">
                        <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                            Contact
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {"Let's Connect"}
                        </h2>
                        <div className="mx-auto text-muted-foreground md:text-xl lg:text-base xl:text-xl flex gap-2 items-center justify-center">
                            <p>Feel free to reach out me</p><motion.div
                                initial={{ opacity: 1, y: 0 }}
                                animate={{
                                    opacity: [1, 0.2, 1, 0.2, 1],
                                    y: [0, -5, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                                aria-hidden="true"
                            >
                                <ArrowDown />
                            </motion.div>
                        </div>
                        <Badge
                            variant="secondary"
                            className="flex items-center justify-center p-2 border-green-600  invisible"
                        >
                            <BriefcaseIcon />
                            <span>Open to Work</span>
                        </Badge>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default ContactFooter