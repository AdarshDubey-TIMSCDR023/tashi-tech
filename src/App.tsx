import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Faqs from './pages/Faqs'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import WebDevelopment from './pages/WebDevelopment'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import UiUxDesign from './pages/UiUxDesign'
import SeoPage from './pages/SeoPage'
import NotFound from './pages/NotFound'
import BlogDetails from './pages/BlogDetails'
import ComingSoon from './pages/ComingSoon'  // ← Add this import



export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/seo" element={<SeoPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/coming-soon" element={<ComingSoon />} />  {/* ← Add this route */}
        
    
      </Route>
    </Routes>
  )
}