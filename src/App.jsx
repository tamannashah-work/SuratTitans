import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import CoOwners from './pages/CoOwners'

export default function App() {
  const location = useLocation()
  const isCoOwnersPage = location.pathname === '/co-owners'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 85) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  // Global scroll reveal — supports data-r="fade-up|fade-left|fade-right|scale|fade-in"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('r-active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    const attach = () => {
      document.querySelectorAll('[data-r]').forEach((el) => {
        if (!el.classList.contains('r-active')) observer.observe(el)
      })
    }
    // Small delay so newly-rendered route content is in the DOM
    const t = setTimeout(attach, 80)
    return () => { clearTimeout(t); observer.disconnect() }
  }, [location.pathname])

  useEffect(() => {
    const button = document.querySelector('.menu-toggle')
    const nav = document.querySelector('.nav')

    const toggleMenu = () => {
      const open = nav.classList.toggle('open')
      if (button) button.classList.toggle('open', open)
      button.setAttribute('aria-expanded', String(open))
    }

    const closeMenu = () => {
      nav.classList.remove('open')
      if (button) button.classList.remove('open')
    }

    if (button) button.addEventListener('click', toggleMenu)

    const links = document.querySelectorAll('.nav a')
    links.forEach((link) => {
      link.addEventListener('click', closeMenu)
    })

    return () => {
      if (button) button.removeEventListener('click', toggleMenu)
      links.forEach((link) => {
        link.removeEventListener('click', closeMenu)
      })
    }
  }, [])

  return (
    <>
      <div className="top-banner">
        <span className="banner-dates">OFFICIAL MATCH DATES ANNOUNCED 25 &bull; 26 &bull; 27 AUGUST 2026</span>
        <span className="banner-stream">
          PRO GOVINDA SEASON 4 STREAMING ON JIO HOTSTAR - <a href="https://www.hotstar.com/in/shows/pro-govinda-league/1271684186" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Watch now</a>
        </span>
      </div>
      <header className={`header ${scrolled || isCoOwnersPage ? 'scrolled' : ''}`}>
        <a className="brand" href="/#home" aria-label="Surat Titans home"><img src="/logo.png" alt="ST Logo" style={{ height: '55px', width: 'auto' }} /><span>SURAT TITANS</span></a>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded="false"><i></i><i></i></button>
        <nav className="nav" aria-label="Primary navigation">
          <Link className={!isCoOwnersPage ? "active" : ""} to="/">Home</Link>
          <Link className={isCoOwnersPage ? "active" : ""} to="/co-owners">Our Vision</Link>
          <a href="/#about">About</a>
          <a href="/#team">Team</a>
          <a href="/#journey">Journey</a>
          <a href="/#media">Media</a>
          <a href="/#gallery">Gallery</a>
          <a className="sponsor-link" href="/#contact">Contact us <span>→</span></a>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/co-owners" element={<CoOwners />} />
      </Routes>

      <footer>
        <a className="brand" href="/#home"><img src="/logo with jod ke tod.png" alt="ST Logo" style={{ height: '55px', width: 'auto' }} /><span>SURAT TITANS</span></a>
        <p>© 2026 Surat Titans. Power. Pride. Legacy.</p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.instagram.com/surat_titans/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><InstagramIcon /> Surat Titans</a>
          <a href="https://www.instagram.com/progovindaindia/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><InstagramIcon /> Pro Govinda</a>
        </div>
      </footer>
    </>
  )
}
