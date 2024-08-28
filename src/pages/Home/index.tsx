import { Button, Card } from "antd";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import LandingText from "../../components/LandingText";


const articles = [
    {
        title: 'The Art of Plating: Elevating Your Dining Experience',
        description: 'Discover the secrets of creating visually stunning dishes that tantalize the senses.',
        image: 'art-of-plating.png',
        date: 'September 15, 2023'
    },
    {
        title: 'Mastering the Art of Pasta: A Culinary Journey',
        description: 'Explore the rich history and techniques behind creating the perfect pasta dish.',
        image: 'pasta.png',
        date: 'August 28, 2023'
    },
    {
        title: 'Sustainable Sourcing: The Future of Dining',
        description: 'Learn how TastyTracks is leading the way in eco-friendly and ethical sourcing.',
        image: 'future-of-dining.png',
        date: 'September 15, 2023'
    }
];

const testimonials = [
    {
        name: 'Jane Doe',
        subtitle: 'Food Critic',
        quote: 'TastyTracks is my go-to spot for a delicious meal with friends. The atmosphere is cozy and inviting, and the food is always top-notch.'
    },
    {
        name: 'John Smith',
        subtitle: 'Regular Customer',
        quote: 'I love the variety of dishes available at TastyTracks. The menu is always changing, so there\'s something new to try every time I visit.'
    },
    {
        name: 'Alice Johnson',
        subtitle: 'Food Enthusiast',
        quote: 'The staff at TastyTracks are incredibly friendly and knowledgeable. They always go above and beyond to make sure I have a great dining experience.'
    }
];

const upcomingEvents = [
    {
        title: 'Drinks Tasting and Pairing Event',
        description: 'Discover the secrets of creating visually stunning dishes that tantalize the senses.',
        date: 'January 10, 2025',
        image: 'drinks-tasting.png'
    },
    {
        title: 'Seasonal Harvest Dinner',
        description: 'Celebrate the bounty of the season with a multi-course menu featuring locally sourced ingredients.',
        date: 'September 15, 2024',
        image: 'seasonal-harvest.png'
    },
    {
        title: 'Pasta Making Workshop',
        description: 'Learn the art of handmade pasta from our expert chefs.',
        date: 'August 10, 2025',
        image: 'pasta.png'
    }
];

export default function Home() {
    return (
        <>
            {/* Landing */}
            <section className='min-h-[calc(100vh-70px)] flex flex-col'>

                <div className='flex gap-10 grow'>
                    <div className='grow flex items-center justify-center'>
                        <div className='flex flex-col items-end justify-center'>
                            <LandingText />
                            <span className='mt-2 flex gap-2 items-center'>
                                <Button size='large'>Order Now</Button>
                                <Button size='large' type='primary'>Book A Table</Button>
                            </span>
                        </div>
                    </div>
                    <img src="landing.png" className='object-contain' alt="" />
                </div>

                <ul className='flex justify-center gap-10 p-5 [&>li]:uppercase servings-nav'>
                    <li><Link to="#">seafood</Link></li>
                    <li><Link to="#">chops</Link></li>
                    <li><Link to="#">steak</Link></li>
                    <li><Link to="#">drinks</Link></li>
                    <li><Link to="#">veggy-food</Link></li>
                    <li><Link to="#">dessert</Link></li>
                </ul>
            </section>

            <section className='bg-gray-50 text-center p-5'>
                <h1 className='text-4xl font-bold'>From Our Blog</h1>
                <sub className='text-xl text-gray-400'>Explore our latest articles and recipes</sub>
                <div className="flex flex-wrap gap-5 p-10 items-center justify-center">
                    {articles.map(article => (
                        <article key={article.title} className='flex flex-col w-96 bg-white rounded-lg shadow-xl'>
                            <img src={article.image} className='object-cover' alt="" />
                            <sub className="p-5 text-end">{article.date}</sub>
                            <div className="px-5 pb-5">
                                <h2 className='text-xl text-start font-bold'>{article.title}</h2>
                                <p className="text-justify pt-2">{article.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>


            <section className='bg-gray-100 text-center p-5'>
                <h1 className='text-4xl font-bold'>What Our Customers Say</h1>
                <sub className='text-xl text-gray-400'>Hear from our satisfied diners.</sub>
                <div className="flex flex-wrap gap-5 p-10 items-center justify-center">
                    {testimonials.map(testimonial => (
                        <div className="bg-white border-[2px] border-solid grid grid-cols-[auto_1fr] w-[30rem] rounded-xl p-7 grid-rows-[auto_auto_auto]">
                            <FaUser size={25} className="row-span-2 self-center mx-4 my-2" />
                            <h2 className='text-xl text-start font-bold col-[2/3]'>{testimonial.name}</h2>
                            <sub className="text-sm row-[2/3] col-[2/3] text-start">{testimonial.subtitle}</sub>
                            <p className="text-justify pt-2 col-[1/3] row-[3/4]"><span className="text-3xl font-extrabold">"</span>{testimonial.quote}</p>
                        </div>
                    ))}
                </div>
            </section>



            <section className='bg-gray-50 text-center p-5'>
                <h1 className='text-4xl font-bold'>Upcoming events</h1>
                <sub className='text-xl text-gray-400'>Check out our upcoming events and specials.</sub>
                <div className="flex flex-wrap gap-5 p-10 items-center justify-center">
                    {upcomingEvents.map(event => (
                        <article key={event.title} className='flex flex-col w-96 bg-white rounded-lg shadow-xl p-5'>
                            <img src={event.image} className='object-cover rounded-2xl' alt="" />
                            <sub className="p-5 text-end">{event.date}</sub>
                            <div className="px-5 pb-5">
                                <h2 className='text-xl text-start font-bold'>{event.title}</h2>
                                <p className="text-justify pt-2">{event.description}</p>
                            </div>
                            <Button className="self-end">Learn more...</Button>
                        </article>
                    ))}
                </div>
            </section>


            <section className='bg-gray-200 gap-x-10 gap-y-5 p-20 grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] text-start'>
                <h1 className='text-3xl font-bold'>About <strong>TastyTracks</strong></h1>
                <img className="row-span-2" src="tasty-tracks.png" alt="" />
                <div className="text-xl text-gray-600">
                    <p><strong>TastyTracks</strong> is a modern restaurant that celebrates the art of dining. Founded in 2015, we are dedicated to providing an exceptional culinary experience, from sourcing the finest ingredients to crafting innovative dishes that delight the senses.</p>
                    <p>Our team of passionate chefs and hospitality professionals work tirelessly to create a warm and inviting atmosphere, where every guest feels like family. We are committed to sustainability, supporting local producers, and continuously evolving our menu to reflect the changing seasons and culinary trends.</p>
                </div>
            </section>
        </>
    );
}
