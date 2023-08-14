import Consultaion from "@/components/universal/Consultaion";
import { HeroWithImage } from "@/components/universal/Hero";
import HeroLeft from "@/components/universal/HeroLeft";
import SectionLayout from "@/components/universal/SectionLayout";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { VscCalendar } from "react-icons/vsc";
import BlogNavigation from "./BlogNavigation";

export const metadata: Metadata = {
  title: "Growth-Bayshore Communication",
  description:
    "Do you want to take your company to the next stage? Increase conversions, or boost brand awareness? Join Bayshore and experience rapid growth with best marketing bundles.",
};

const IndividualBlog = () => {
  const today = new Date();
  const dateToday = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;
  return (
    <>
      <div className="relative">
        <Image
          src="/assets/dummy-individual-blog.png"
          alt="individual-blog"
          width={2400}
          height={2400}
          className="w-full h-auto object-cover"
        />

        <div className="absolute transform left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
          <Image
            src="/assets/individual-service-logo.png"
            alt="individual-blog"
            width={2400}
            height={2400}
            className="w-[493px] h-auto object-cover"
          />
        </div>
      </div>

      <SectionLayout bg="">
        <>
          <div className="container">
            <div className="flex flex-row gap-x-[5rem]">
              <div className="">
                <div>
                  <Image
                    src="/assets/blog-img-1.jpg"
                    alt="no_image"
                    width={2400}
                    height={2400}
                    className="w-[493px] h-auto object-cover"
                  />
                  <p className="date-time">
                    <VscCalendar size={22} /> {dateToday}
                  </p>

                  <div>
                    <h1 className="heading-primary">
                      How Google Maps Can Help Your business
                    </h1>
                    <p className="text-base mb-4">
                      Google Maps is now in the business side. Google works to
                      help businesses through google my business profile and
                      still today there&rsquo;re almost every business under
                      this feature. Business owners can create their Google my
                      business listing. The information they will ask for
                      includes-contact information and address, hours of
                      operation, business description, photos and images. After
                      verifying, the owner can update their profile according to
                      their wish.
                    </p>
                    <p className="text-base mb-4">
                      Marketing means getting involved with your potential
                      customer by working with your brands. Google Maps
                      marketing is when marketing is in google Maps. In an easy
                      way, when Google features your business to customers by
                      searching.
                    </p>
                    <p className="text-base mb-4">
                      So, Google Maps helps you find your business. Google Maps
                      is for all Small and big businesses. Local 3-pack is most
                      useful for local business. Because it enables viewing the
                      top 3 business features in search results for the
                      customer.
                    </p>
                    <h2 className="heading-secondary text-center">
                      Google My Business
                    </h2>
                    <p className="text-base mb-4">
                      How to add business to google maps? Google My Business is
                      a doorway to improving your business. Owners create their
                      business profile to avail the advantages. It introduces
                      new local searches. After verifying the account the owner
                      can edit their profile as their needs. Each business
                      consists of name, location and category. In a simple way,
                      adding a place is the same as adding a business. The whole
                      process is free.
                    </p>
                    <h2 className="heading-secondary text-center">
                      How Your Google Maps Business Listing is Created
                    </h2>
                    <p className="text-base mb-4">
                      Customers use Google Maps frequently to locate the
                      millions of small businesses that are listed on it
                      worldwide. By creating a Google My Business (GMB) account
                      and indicating that you are the owner or employee of the
                      company, you can add your company to Google Maps. Your new
                      business information will show up on Google Maps, Search,
                      and Earth. While you update your company&apos;s
                      information through Google My Business. Your consumers and
                      new clients will be able to easily find out more about
                      your company. Also learn about your services, and provide
                      evaluations that could aid in the development and
                      legitimacy of your company.
                    </p>
                    <p className="text-base mb-4">
                      Step 1. Go to&nbsp;
                      <a href="https://www.google.com/business/">
                        Google My Business
                      </a>
                      .<br />
                      Step 2. Enter Your Business Name and Address in the Search
                      Box.
                      <br />
                      Step 3. Select or Add Your Business.
                      <br />
                      Step 4. Verify Your Business
                      <br />
                      Step 5. Confirm your Business. Set up a Google+ Page.
                    </p>
                    <h2 className="heading-secondary text-center">
                      Google Maps Benefits Business
                    </h2>
                    <p className="text-base mb-4">
                      Google Map has numerous benefits for owners. Furthermore,
                      It is an easy path for owners. It can easily avail. It is
                      more than just a Map. This Map is not just showing your
                      route, but also it pushes your brands to the customers.
                    </p>
                    <p className="text-base mb-4">
                      There are various kinds of tools. Different tools
                      activities are to give a company unique looks.Let&rsquo;s
                      see the Google Map benefits in the business&ndash;
                    </p>
                    <ul>
                      <li>Helps People Find Your Business</li>
                    </ul>
                    <p className="text-base mb-4">
                      Google Maps is not only a Map but also a business locator
                      platform. Nowadays about one fourth of mobile searches are
                      location based. It works as a search engine. You can reach
                      your customer faster by using Google Maps.
                    </p>
                    <ul>
                      <li>Allows People Contact Your Business</li>
                    </ul>
                    <p className="text-base mb-4">
                      Google my business takes business profiles and pins. And
                      the information is provided to Google Maps. This tool
                      leads your business through website visits and/or calls.
                      The Map of businesses displays relevant company
                      information. That includes- website links,&rsquo;Click to
                      call&rsquo; button, &lsquo;Click for directions&rsquo; and
                      so on.
                    </p>
                    <ul>
                      <li>Brings traffic</li>
                    </ul>
                    <p className="text-base mb-4">
                      People come to learn about your business by using this
                      tool. They will go to a website to learn more. To increase
                      your earnings through business you should add your company
                      in google. Because it creates traffic by highly targeted
                      visitors. You should start using Google Maps; If you
                      don&apos;t have your business profile in google create
                      now. There are various &lsquo;Explore&rsquo; tabs on this
                      tool. You could appear more frequently in people&apos;s
                      community feeds if you post more frequently or generate
                      content to your site.
                    </p>
                    <ul>
                      <li>Know your customers and their responses</li>
                    </ul>
                    <p className="text-base mb-4">
                      By free Google Ads firstly boost your brand. After that,
                      who are your potential consumers? You can have an idea.
                      For that you can grow your brand according to them. The
                      other thing is, customer response?what to update on the
                      business? These replies you can get from Google Maps ads.
                    </p>
                    <ul>
                      <li>Optimised Introduction</li>
                    </ul>
                    <p className="text-base mb-4">
                      It is a form of overviewing your customer. It is a way of
                      knowing your business. Your company&apos;s brief
                      descriptions are displayed in the tile search engine
                      results. When customers click to a specific business,
                      Longer description appears. In short, the bunch of
                      information is well organised.
                      <br />
                      <br />
                      Example: A client is searching for ice cream. Some ice
                      cream parlours are shown with short descriptions. This
                      description helps to differentiate your service from
                      others.
                    </p>
                    <ul>
                      <li>Adding Images</li>
                    </ul>
                    <p className="text-base mb-4">
                      You don&apos;t have to run expensive ads for business.
                      Google Maps is present in the digital marketing side also
                      by Google My Business. The digital marketing side enables
                      your business images to reach your potential customer. The
                      360&deg; feature gives a full view of your business. That
                      drew more clients to your business. As there are no
                      worries.
                    </p>
                    <ul>
                      <li>Gain Credibility</li>
                    </ul>
                    <p className="text-base mb-4">
                      Google is the solution to all problems. It includes
                      information from around the world&apos;s information. It
                      also had a base of customers. By Google Maps and Google My
                      Business you can stand your profile towards your customer.
                      Your business name, address and phone number will appear
                      to Google Search SERP on Google Maps. Ratings and reviews,
                      photos and images, Updates and posts drew customers&rsquo;
                      attention and trust.
                    </p>
                    <ul>
                      <li>Google&rsquo;s 3 pack</li>
                    </ul>
                    <p className="text-base mb-4">
                      The first page preview, the only local listings to appear
                      in a restricted 3-pack format above organic results. You
                      are increasing your free boosting by creating Google My
                      Business.
                      <br />
                      <br />
                      This listing not only shows on Google Map, but also it
                      will be available in search engines. It&apos;s the easiest
                      way of boosting your brand.
                    </p>
                    <ul>
                      <li>Assist Clients in Making Wise Selections</li>
                    </ul>
                    <p className="text-base mb-4">
                      It helps customers to make informed decisions. What does a
                      customer need? He/she can easily make decisions by
                      searching on Google Maps. By help of Google Map street
                      view and virtual view consumer can get there all
                      question&rsquo;s answers
                      <br />
                      <br />
                      Example: Is there any children&apos;s playground? Is there
                      any Sushi Restaurant? Is there any parking space
                      available?
                      <br />
                      <br />
                      It is an easy process for customers. While they can watch
                      the view from any place without visiting the place.
                    </p>
                    <ul>
                      <li>Passive Marketing</li>
                    </ul>
                    <p className="text-base mb-4">
                      By customer service and smart positioning you can engage
                      your customer through Google Maps. First of all there are
                      reviews and ratings of business. Your business can be
                      someone&apos;s topic of conversation by reviewing and
                      virtual visits. So, the next time. There are possibilities
                      of visiting your place. So, thanks to the virtual visit
                      enhancing the customer&rsquo;s interest.
                    </p>
                    <ul>
                      <li>Google Maps Premier Partner</li>
                    </ul>
                    <p className="text-base mb-4">
                      Google Maps Can Help Your business. Expand your business
                      with Google Maps in a more experienced way.
                    </p>
                    <ul>
                      <li>Attain Your Brand Objectives</li>
                    </ul>
                    <p className="text-base mb-4">
                      There are no worries if you are Google Map premier partner
                      because you have the right to avail their team expertise.
                      They will provide Google Maps features and solutions to
                      meet your unique needs.
                    </p>
                    <ul>
                      <li>Optimise Your Cost</li>
                    </ul>
                    <p className="text-base mb-4">
                      Google Map Partners is cost efficiency. You can get
                      multiple problem solutions by it. It can help in API,
                      technical support, billing system, add-in new features.
                      Additionally, Google Maps&rsquo; high-volume customers can
                      benefit on Monthly Invoice.
                    </p>
                    <ul>
                      <li>Build Mobile or Web App</li>
                    </ul>
                    <p className="text-base mb-4">
                      At present every business has a web or mobile app. Google
                      Maps partner is here to help you in case. Searce (Google
                      cloud partner) in-house products supports this side. You
                      can simply build your app by using Google Map Partner
                      according to your needs.
                    </p>
                    <ul>
                      <li>Control Over your Expenses</li>
                    </ul>
                    <p className="text-base mb-4">
                      You will have control over Map service. Additionally, you
                      may see the full consumption and cost data and the use
                      prediction. That will help you better manage your
                      licensing payments.
                    </p>
                    <ul>
                      <li>Helpline</li>
                    </ul>
                    <p className="text-base mb-4">
                      In google Map premier partner, they will suggest an update
                      or edit according to your needs. You require not to wait
                      in the helpline queue.
                    </p>
                    <h2 className="heading-secondary text-center">
                      Google Maps Marketing
                    </h2>
                    <p className="text-base mb-4">
                      Today, Google Maps is much more than just a map. Modern
                      marketing cannot ignore the rise of Google Maps. That is
                      present everywhere from business websites to specialised
                      shopping apps. Google Maps marketing is a powerful
                      strategy for companies. That offers significant gains with
                      little effort. You must utilise all the resources
                      available to you if you want your firm to have a
                      successful internet profile. Making the most of Google
                      Maps listings can help you rank higher in searches and
                      drive more visitors to your website. Help to improve
                      Standard of&nbsp;
                      <a href="https://bayshorecommunication.com/our-services/digital-marketing">
                        social media marketing,
                      </a>
                      &nbsp;web design, and SEO usage.
                    </p>
                    <h3 className="heading-tertiary text-center">
                      Google Maps Community Feed
                    </h3>
                    <p className="text-base mb-4">
                      In community feed customers enter to know the update of
                      their favourite staff. So, it is an opportunity to do
                      business on the platform. Publish more in community feed.
                      More frequent posts enhance customer concern. Procedure of
                      publishing post in community feed&mdash;
                    </p>
                    <ol>
                      <li>
                        Go to profile, enter &lsquo;Promote&rsquo; for creating
                        posts.
                      </li>
                      <li>Choose options according to your needs.</li>
                      <li>
                        Click &lsquo;Preview&rsquo; to see how your post looks
                        for other users.
                      </li>
                      <li>
                        Tap &lsquo;Publish&rsquo; if you are satisfied with the
                        post.
                      </li>
                    </ol>
                    <h3 className="heading-tertiary text-center">
                      Build Authority as a Google Maps Local Guide
                    </h3>
                    <p className="text-base mb-4">
                      Local guide is a contribution to google map. You can work
                      with your personal Google account for this volunteer work.
                      By contributing Google Maps and Google business profile to
                      discover business and explore the world. In this huge
                      local community you can plant seeds for your brand.
                    </p>
                    <ol>
                      <li>
                        <a href="https://www.google.com/localguides/signup">
                          Click here
                        </a>
                        &nbsp;and enter into google local side.
                      </li>
                      <li>Put your correct city and sign up.</li>
                      <li>Open Google map and contribute.</li>
                    </ol>
                    <h3 className="heading-tertiary text-center">
                      Local Search Visibility
                    </h3>
                    <p className="text-base mb-4">
                      Google My Business to populate a page, relevant top pick,
                      GMB listing, promote the area of your business, have
                      customer reviews. The 3 pack is the most important Google
                      My Business feature to reach local customers. Advertising
                      in Google Map via Google Ads offers promoted pins,
                      in-store promotions, local inventory search function and
                      customizable business pages.
                    </p>
                    <h3 className="heading-tertiary text-center">
                      How to Message Customers From Google Maps &amp; Search
                    </h3>
                    <p className="text-base mb-4">
                      More than 90% of the world population is using google. So,
                      it&apos;s a great idea to walk with Google. You can avail
                      Google messaging through Google My Business. It&apos;s a
                      great way to build connections with your potential
                      customers. Reduce the number of incoming calls along with
                      a seamless customer journey. A customer can chat with you
                      through clicking the chat button. Customers may see a list
                      of predefined from owner questions or can ask specific
                      questions. Messages can be integrated with your Google
                      inbox, you&rsquo;ll also receive an email.
                    </p>
                    <p className="text-base mb-4">
                      By 4 steps you can have the advantage of Google&rsquo;s
                      Business Messages&ndash;
                    </p>
                    <ol>
                      <li>Sign in to your profile</li>
                      <li>Select Messages in the menu options</li>
                      <li>Turn on messaging</li>
                      <li>customise and personalise messages</li>
                    </ol>
                    <h3 className="heading-tertiary text-center">
                      Google Maps Ads
                    </h3>
                    <p className="text-base mb-4">
                      Promoted pin is for local search advertisements. This
                      feature deals to increase store business. Promoted pins
                      are identified by a purple pin rather than a red one.
                      Promoted pins can display promotions when someone clicks
                      on the purple pin, or a Maps-related search result to
                      persuade them to visit the store. While clicking, users
                      can see reviews are displayed on the Google Maps listing.
                      Google Maps have the option to display ongoing promotions
                      like discounts on specific products to coupons and special
                      offer deals. Customers can look for a product they are
                      interested in by using Local inventory ads. They land on
                      your local storefront, Google Business page, or landing
                      page when they click on the advertisement for your goods.
                    </p>
                    <h2 className="heading-secondary text-center">
                      Google My Business Optimization
                    </h2>
                    <p className="text-base mb-4">
                      One of Google&apos;s free tools, Google My Business. That
                      helps you promote your business to locals in your area.
                      Upgrades your information in your Google My Business
                      account and creates a Google Business Profile. It&apos;s a
                      terrific beginning, but it won&apos;t guarantee that your
                      search ranks will stay high. Some tips to optimise Google
                      My Business&ndash;
                    </p>
                    <ol>
                      <li>Add the business in listing</li>
                      <li>Request Google Maps business listing</li>
                      <li>Add authentic and updated information</li>
                      <li>Add right Google Maps location</li>
                      <li>Write a proper business description</li>
                      <li>Add categorise</li>
                      <li>Add photos to your Google Maps business listing</li>
                      <li>
                        Good citations and local information for SEO efforts.
                      </li>
                      <li>Generate good reviews from customer</li>
                      <li>Have Google reviews</li>
                      <li>Geo-tagging your photos or videos of business</li>
                      <li>Clear duplicate listing</li>
                      <li>Post regularly to business listing</li>
                      <li>Ensuring responsive website</li>
                      <li>Add local keywords</li>
                      <li>Embed a Google map on your site</li>
                    </ol>
                    <h2 className="heading-secondary text-center">
                      Google Maps Features
                    </h2>
                    <p className="text-base mb-4">
                      Many of the functions that come with Google Maps go unused
                      by many users. Some functions go unused simply because the
                      majority of people are completely unaware of them. We will
                      reveal eight of these Google Maps features to you in this
                      article. Let&apos;s begin straight away.
                    </p>
                    <h3 className="heading-tertiary text-center">
                      Toll roads info
                    </h3>
                    <p className="text-base mb-4">
                      Finding these alternative routes using Google Maps is a
                      clever way to avoid paying tolls. Utilise this convenient
                      option to only use the free access routes on your upcoming
                      road trip to save money.
                    </p>
                    <h3 className="heading-tertiary text-center">
                      Check peak time
                    </h3>
                    <p className="text-base mb-4">
                      A customer can check his/her desired restaurant schedule.
                      That saves time. If anyone decides to visit during peak
                      hours, this can help you select a non-peak time or
                      mentally prepare you for a lengthy wait.
                    </p>
                    <h3 className="heading-tertiary text-center">Book Rider</h3>
                    <p className="text-base mb-4">
                      You can book your taxi and compare fare also by google
                      map. Google has made it much easier and more seamless to
                      transition between its Maps app and other apps like Uber
                      and Lyft.
                    </p>
                    <h3 className="heading-tertiary text-center">
                      &ldquo;Near Me&rdquo; Find anything
                    </h3>
                    <p className="text-base mb-4">
                      Almost everything can be found using this, including gas
                      stations, pubs, hospitals, pet shops, and many other
                      places. Additionally, you can view a map of your current
                      location to see what&apos;s around. Selecting the sort of
                      location will narrow your search even more.
                    </p>
                    <h3 className="heading-tertiary text-center">
                      Share Location
                    </h3>
                    <p className="text-base mb-4">
                      One of the most complete location-sharing tools may be
                      found in Google Maps. For an unlimited or predetermined
                      period of time, you can share your current location with
                      someone. You may even send a link to a current trip, so
                      the recipient can see where you are? You always have
                      control over your location data and can decide when to
                      stop sharing it.
                    </p>
                    <h3 className="heading-tertiary text-center">
                      Maps Gallery
                    </h3>
                    <p className="text-base mb-4">
                      You can design unique maps using Maps Gallery&apos;s
                      markers, lines, and shapes. Maps also have images and
                      videos added to them. Moreover, you can distribute your
                      maps to others. Users can see and share maps using Maps
                      Gallery function. Users can use different keywords to
                      search for specific maps and browse maps by topic,
                      location, or feature.
                    </p>
                    <h3 className="heading-tertiary text-center">
                      Search Option
                    </h3>
                    <p className="text-base mb-4">
                      You can use a map to look up specific addresses,
                      companies, or areas of interest. Google Maps offers a few
                      different methods for finding a location. Entering the
                      location&apos;s name or address comes first. By entering
                      the keywords for what you&apos;re looking for, you can
                      also search for businesses and other locations of
                      interest. Finally, you can use the map to locate a
                      particular place.
                    </p>
                    <h2 className="heading-secondary text-center">
                      Wrap up: The next big platform
                    </h2>
                    <p className="text-base mb-4">
                      Google Maps has grown a lot. It is a popular software
                      application now. People from everywhere are using it.
                      Consumers are adapting Google Maps and its updated
                      features. Moreover, google Map marketing is quite
                      affordable with highly effective strategies. Outstanding
                      brands begin and end with customer service. Treat your
                      customer well and the rest of the review thing will
                      provide my customer. Have patience with the Google Map
                      process.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-8 m-12 ">
                  <div>
                    <div className="help-blog">
                      <h4>
                        Need <br />
                        Consultacy Help?
                      </h4>
                      <p className="text-base mb-4">
                        We are here to give you 24/7 hours services.
                      </p>
                      <Link href="/contact">Contact Us</Link>
                    </div>
                  </div>
                  <BlogNavigation />
                </div>
              </div>
            </div>
          </div>
        </>
      </SectionLayout>
    </>
  );
};

export default IndividualBlog;
