import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Feature from './feature'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    user: "Ben Jabbawy",
    company: "Founder at Little Wonders",
    text: "SurveyFox has been a game-changer for our business, enabling us to gather accurate customer feedback. It's helped us improve our products with valuable insights from our customers!",
  },
  {
    user: "Eldar Galiev",
    company: "Founder at Valor & Vogue",
    text: "The team at SurveyFox has provided us with deep insights into customer preferences, helping us fine-tune our approach and grow our customer base. It's an essential tool for any growing business.",
  },
  {
    user: "Yvan Boisjoli",
    company: "Founder at Brand Look",
    text: "SurveyFox transformed how we collect feedback. The detailed insights from our customers have allowed us to improve our products in ways we never thought possible.",
  },
  {
    user: "Jason Zigelbaum",
    company: "Founder at Click Beauty",
    text: "Thanks to the team at SurveyFox, we've been able to refine our customer engagement strategy. Their surveys give us actionable data to better serve our clients and grow our business.",
  },
  {
    user: "Bjorn Forsberg",
    company: "Founder at Chic Charm",
    text: "The team behind SurveyFox helped us identify customer pain points, leading to key improvements in our products and better customer satisfaction.",
  },
  {
    user: "James Devonport",
    company: "Founder at Bella Jewels",
    text: "With the valuable insights provided by the SurveyFox team, we've optimized our marketing strategies and refined our product offerings, contributing to our success.",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col h-full md:py-24 md:px-32 pt-8 pb-16 px-8 w-full items-center text-center gap-8">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Collect customer feedback on autopilot with  <span  className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text ">
          SurveyFox
                </span>
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Turn feedback into growth by engaging customers and taking timely actions
        </Typography>
        <Link href="https://apps.shopify.com/surveyfox-customer-surveys" target="_blank">
          <Button size="tiny" variant="ghost">
            Start Free Trial
          </Button>
        </Link>

        <div className="mt-6 text-center">
          <a href="https://youtu.be/bURdmp6GaBc" target="_blank" rel="noopener noreferrer">
            <div>
              <iframe
                width={1024}
                height={632}
                src="https://www.youtube.com/embed/bURdmp6GaBc?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:pt-24 md:gap-24 gap-14 items-center">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Gather Customer Insights at Every Funnel Stage"
              description="Move past basic post-purchase surveys to truly know your customers.
                Discover why they buy, how they use your products, and their profiles—vital for your marketing plans.
                Get valuable insights on product quality and fit. Enhance your offerings with honest customer feedback."
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Build a comprehensive picture of who your customers are"
              description="Collect zero-party data and understand your customers' behavior to create a personalized experience that drives sales and increases customer loyalty."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Link survey responses to your Shopify transaction data"
              description="Understand characteristics and behaviors of customers who are likely to spend more and make repeat purchases.
                Fine-tune marketing strategy and optimize campaigns to target high-value customer segments."
            />
          </div>

          {/* Post Purchase Survey Section */}
          <div className="flex flex-col md:pt-16 md:gap-16 gap-10 items-center">
            <div className="flex flex-col gap-8 items-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-4 tracking-wide">
                Post Purchase Surveys that
                <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text ml-3">
                  boost revenue.
                </span>
              </h2>

              <div className="mt-6 text-center">
                <a href="https://youtu.be/bURdmp6GaBc" target="_blank" rel="noopener noreferrer">
                  <div>
                    <img
                      src="/survey.gif"
                      alt="SurveyFox"
                      width={600}
                      height={350}
                      className="rounded-3xl"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Wall of Love */}
        
        </div>
        <span className="rounded-full h-6 text-sm font-medium px-2 py-1 uppercase border border-green-500 inline-flex items-center mt-2 mb-2">
  Wall Of Love    <div style={{marginLeft:"7px" , marginBottom:"3px"}}>💚</div>
</span>

<div className="flex flex-wrap justify-center">
  {testimonials.map((testimonial, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
      <div className="bg-neutral-900 rounded-md p-4 text-md border border-neutral-800 font-thin">
        <p>{testimonial.text}</p>
        <div className="flex mt-4 items-start">
          <div>
            <span className="text-sm font-normal italic text-neutral-600">
              {testimonial.company}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>



        {/* Instant Setup Section */}
        <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h2">
            Book a FREE setup call with our team! 🎉
          </Typography>
         
          <Typography className="max-w-2xl" variant="p">
          Schedule a free call with our team, and we’ll guide you through the onboarding process. Plus, enjoy an exclusive 30 days free trial (instead of the standard 14 days). Book your call now!
          </Typography>
          <Link href="https://cal.com/piyush-surveyfox/30min?date=2025-01-21&month=2025-01" target="_blank">
          <Button size="tiny" variant="ghost">
          Book now
          </Button>
        </Link>
        </div>
      </div>
    </div>
  )
}
