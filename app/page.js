"use client"
import React, { Component } from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import { FaStar } from 'react-icons/fa'
import OrderButton from './components/OrderButton'
import Link from 'next/link'
import Testimonial from './components/Testimonial'
import PizzaCard from './components/PizzaCard'

export default function Home() {
  const testimonials = {
    name: 'Takar Bowa',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    images: ['/client-1.jpg', '/client-2.jpg', '/client-3.jpg', '/client-4.jpg'],
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const pizzaMenu = [
    {
      name: 'Burga Pizza',
      image: '/burga-pizza.png',
      price: 20,
      stars: 5,
      description: 'This is a burga pizza',
    },
    {
      name: 'Burga Pizza',
      image: '/burga-pizza.png',
      price: 20,
      stars: 5,
      description: 'This is a burga pizza',
    },
    {
      name: 'New Pizza',
      image: '/new-pizza.png',
      price: 10,
      stars: 5,
      description: 'This is a new pizza',
    },
    {
      name: 'Greek Pizza',
      image: '/greek-pizza.png',
      price: 20,
      stars: 5,
      description: 'This is a greek pizza',
    },
    
  ];
  return (
    <main >
      <Hero />
      <About />
      <div className="bg-[#FFFAED] mx-auto py-20 px-4 relative">
        <p className="text-2xl md:text-3xl tracking-wider font-semibold text-[#e20202] leading-[1.7] mb-3">Our Strength</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider leading-[1.3] mb-10">Why We Are The Best?</h1>
        <Image src="/slice.png" alt="Search" width={170} height={170} className="absolute top-[20%] md:top-[15%] right-0"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
          <div className="col-span-1">
            <Image src="/food.png" alt="food" width={40} height={4e0} />
           <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">All Kinds of Foods</h1>
            <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>

          <div className="col-span-1">
            <Image src="/fan.png" alt="fan" width={40} height={40} />
            <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">All Kinds of Foods</h1>
            <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>

          <div className="col-span-1">
            <Image src="/smile.png" alt="smile" width={40} height={40} />
            <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">All Kinds of Foods</h1>
            <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>

          <div className="col-span-1">
            <Image src="/location.png" alt="location" width={40} height={40} />
            <h1 className="text-xl font-bold tracking-wider leading-[1.3] mt-5">All Kinds of Foods</h1>
            <p className="text-lg tracking-wider text-[#555555] leading-[1.7] mt-4">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
          </div>
        </div>        
          
    </div>
      <div className="p-4">
        <p className="text-2xl md:text-3xl tracking-wider font-semibold text-[#e20202] leading-[1.7] mb-2">Popular Dishes</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider leading-[1.3] mb-16">Browse Our Menu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pizzaMenu.length > 0 ? (
        pizzaMenu.map((pizza, index) => (
          <PizzaCard key={index} {...pizza} />
        ))
      ) : (
        <p>Nothing available on the menu.</p>
      )}         
        </div>      
       
          
    </div>
    <div className="mx-auto py-20 px-4 relative">
  <Image src="/leaf.png" alt="Search" width={100} height={100} className="absolute top-0 left-0" />
  <p className="text-2xl md:text-3xl tracking-wider font-semibold text-[#e20202] leading-[1.7] mb-3 mt-2">Customer Feedback</p>
  <h1 className="text-4xl md:text-5xl font-bold tracking-wider leading-[1.3] mb-6 pb-16">Client Testimonials</h1>
  <Slider {...settings}>
    {testimonials.images && testimonials.images.length > 0 ? (
      testimonials.images.map((image, index) => (
        <div key={index}>
          <Testimonial image={image} name={testimonials.name} description={testimonials.description} id={index} />
        </div>
      ))
    ) : (
      <p className="text-xl tracking-wider text-[#555555] leading-[1.7] mt-4">No testimonials available.</p>
    )}
  </Slider>
</div>

    
    </main>
  )
}
