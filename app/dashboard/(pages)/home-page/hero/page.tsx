'use client'
import { useQuery } from '@tanstack/react-query'
import Heading from '@/app/dashboard/components/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import Image from 'next/image'
import { HeroSectionImage } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import getHero from '@/actions/getHero'

const Hero = () => {
	return <div className="flex-col">Hero</div>
}

export default Hero
