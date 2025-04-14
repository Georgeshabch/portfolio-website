"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hook';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from "react-hot-toast";

function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section id='contact' ref={ref} className='mb-20 sm:mb-28 text-center w-[min(100% , 38rem)]'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}>
            <SectionHeading>Contact me</SectionHeading>
            <p className="text-gray-700 -mt-6">
                Please contact me direclty at {" "}
                <a className='underline' href="mailto:exmaple@gmail.com">
                    example@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form className='mt-10 flex flex-col' action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                    toast.error(error);
                    return;
                }
                toast.success("Email sent successfully");
            }}>
                <input className='h-14 px-4 rounded-xl borderBlack'
                    type='email' required maxLength={100}
                    placeholder='Your E*mail'
                    name='senderEmail' />
                <textarea className="h-52 my-3 borderBlack rounded-xl p-4 "
                    required maxLength={500} placeholder='Your message'
                    name='message' />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}

export default Contact