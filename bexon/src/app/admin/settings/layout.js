/**
 * Admin Settings Layout
 * Panel pengaturan homepage untuk Headless WordPress
 */

import Link from "next/link";
import "./admin.css";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h1>Bengkel Wiguna</h1>
          <span>Admin Panel</span>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3>Pengaturan</h3>
            <ul>
              <li>
                <Link href="/admin/settings" className="nav-link active">
                  <span className="icon">🏠</span>
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/admin/settings/hero" className="nav-link">
                  <span className="icon">🎠</span>
                  Hero Slider
                </Link>
              </li>
              <li>
                <Link href="/admin/settings/services" className="nav-link">
                  <span className="icon">🔧</span>
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/admin/settings/business" className="nav-link">
                  <span className="icon">🏢</span>
                  Bisnis Info
                </Link>
              </li>
              <li>
                <Link href="/admin/settings/seo" className="nav-link">
                  <span className="icon">📊</span>
                  SEO
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-section">
            <h3>Preview</h3>
            <ul>
              <li>
                <Link href="/" target="_blank" className="nav-link">
                  <span className="icon">👁️</span>
                  Lihat Website
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="sidebar-footer">
          <p>Headless WordPress CMS</p>
          <small>v1.0.0</small>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h2>Pengaturan Homepage</h2>
          <div className="header-actions">
            <a href="/" target="_blank" className="btn-preview">
              👁️ Preview
            </a>
          </div>
        </header>

        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
}