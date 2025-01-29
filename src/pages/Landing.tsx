import React from 'react'
import Banner from '../components/Banner'
import PartnerSection from '../components/PatnerSection'
import ExploreByCategory from '../components/Explore'
import CTASection from '../components/CTASection'
import FeaturedJobs from '../components/FeaturedJobs'
import Footer from '../components/Footer'
import LatestJobs from '../components/LatestJobs'

const Landing = () => {
  return (
    <>
        <Banner />
        <PartnerSection />
        <ExploreByCategory />
        <CTASection />
        <FeaturedJobs />
        <LatestJobs />
        <Footer />
    </>
  )
}

export default Landing