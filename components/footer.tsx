import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aanya</h3>
            <p className="text-sm opacity-70">
              Transforming enterprises through digital innovation and strategic consulting.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Digital Transformation</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Cloud Solutions</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">AI & Analytics</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Strategic Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Case Studies</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-70">
              <a href="mailto:hello@aanya.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail size={16} /> hello@aanya.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone size={16} /> +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              &copy; {currentYear} Aanya. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
