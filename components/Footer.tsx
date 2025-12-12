import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A3D7A] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters */}
          <div>
            <h3 className="font-bold mb-3">Filters</h3>
            <ul className="space-y-2 text-sm">
              <li>All</li>
              <li>Electronics</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold mb-3">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-sm text-center">
          © 2024 American
        </div>
      </div>
    </footer>
  );
}
