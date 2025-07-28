"use client";

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {Search} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '../../../components/ContactForm';
import Banner from '@/components/ui/banner';
import SectionHeading from "@/components/SectionHeading";
import {useSearchParams} from "next/navigation";
import Projects from "@/components/Projects";

export default function ProjectsPage(effect, deps) {
    return (
        <Projects pageTitle="Dự án"/>
    );
}