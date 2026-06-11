"use client";

/**
 * Homepage Settings Admin Panel
 * Panel pengaturan untuk mengelola konten homepage
 */

import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const response = await fetch("/api/homepage-settings");
      if (!response.ok) {
        throw new Error("Failed to fetch settings");
      }
      const data = await response.json();
      setSettings(data);
    } catch (error) {
      console.error("Failed to load settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveStatus(null);

    try {
      const response = await fetch("/api/homepage-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setSaveStatus({ type: "success", message: "Pengaturan berhasil disimpan!" });
      } else {
        throw new Error("Save failed");
      }
    } catch (error) {
      setSaveStatus({ type: "error", message: "Gagal menyimpan pengaturan" });
    } finally {
      setSaving(false);
    }
  };

  const updateSetting = (section, key, value) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const toggleSection = (section) => {
    setSettings((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: !prev.sections[section],
      },
    }));
  };

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Memuat pengaturan...</p>
        <style jsx>{`
          .loading-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            color: #6b7280;
          }
          .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #e5e7eb;
            border-top-color: #4ade80;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="settings-page">
      {/* Preview Banner */}
      <div className="preview-banner">
        <div>
          <h3>👁️ Preview Perubahan</h3>
          <p>Simpan pengaturan untuk melihat perubahan di website</p>
        </div>
        <a href="/" target="_blank" className="btn-view-preview">
          Buka Website ↗
        </a>
      </div>

      {/* Hero Section Settings */}
      <section className="settings-section">
        <div className="section-header">
          <div className="section-icon">🎠</div>
          <div className="section-title">
            <h3>Hero Slider</h3>
            <p>Kelola slide utama di halaman homepage</p>
          </div>
        </div>

        <div className="toggle-group">
          <span className="toggle-label">Aktifkan Hero Slider</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings?.hero?.autoplay ?? true}
              onChange={(e) => updateSetting("hero", "autoplay", e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="slides-list">
          {settings?.hero?.slides?.map((slide, index) => (
            <div key={index} className="slide-card">
              <div className="slide-header">
                <span className="slide-number">Slide {index + 1}</span>
                <div className="slide-actions">
                  <button className="btn-icon btn-edit">✏️</button>
                  <button className="btn-icon btn-delete">🗑️</button>
                </div>
              </div>

              <div className="slide-grid">
                <div className="form-group">
                  <label className="form-label">Judul Slide</label>
                  <input
                    type="text"
                    className="form-input"
                    value={slide.title || ""}
                    onChange={(e) => {
                      const newSlides = [...(settings.hero?.slides || [])];
                      newSlides[index] = { ...newSlides[index], title: e.target.value };
                      setSettings((prev) => ({
                        ...prev,
                        hero: { ...prev.hero, slides: newSlides },
                      }));
                    }}
                    placeholder="Judul untuk slide ini"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subtitle / Deskripsi</label>
                  <input
                    type="text"
                    className="form-input"
                    value={slide.subtitle || ""}
                    onChange={(e) => {
                      const newSlides = [...(settings.hero?.slides || [])];
                      newSlides[index] = { ...newSlides[index], subtitle: e.target.value };
                      setSettings((prev) => ({
                        ...prev,
                        hero: { ...prev.hero, slides: newSlides },
                      }));
                    }}
                    placeholder="Deskripsi singkat"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Teks Tombol</label>
                  <input
                    type="text"
                    className="form-input"
                    value={slide.btnText || ""}
                    onChange={(e) => {
                      const newSlides = [...(settings.hero?.slides || [])];
                      newSlides[index] = { ...newSlides[index], btnText: e.target.value };
                      setSettings((prev) => ({
                        ...prev,
                        hero: { ...prev.hero, slides: newSlides },
                      }));
                    }}
                    placeholder="CTA Button Text"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Link Tombol</label>
                  <input
                    type="text"
                    className="form-input"
                    value={slide.btnLink || ""}
                    onChange={(e) => {
                      const newSlides = [...(settings.hero?.slides || [])];
                      newSlides[index] = { ...newSlides[index], btnLink: e.target.value };
                      setSettings((prev) => ({
                        ...prev,
                        hero: { ...prev.hero, slides: newSlides },
                      }));
                    }}
                    placeholder="/promosi/ atau #contact"
                  />
                </div>

                <div className="slide-image-preview full-width">
                  <div className="image-placeholder">
                    <span>🖼️</span>
                    <p>Gambar Background: {slide.bgImage || "Belum diatur"}</p>
                    <small>Upload di Media Library WordPress</small>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button className="btn-add-slide">
            <span>➕</span>
            Tambah Slide Baru
          </button>
        </div>
      </section>

      {/* Sections Visibility */}
      <section className="settings-section">
        <div className="section-header">
          <div className="section-icon">📋</div>
          <div className="section-title">
            <h3>Tampilan Homepage</h3>
            <p>Aktif/nonaktifkan section yang ditampilkan</p>
          </div>
        </div>

        <div className="sections-grid">
          <div className="section-toggle-card">
            <div className="section-info">
              <span className="section-icon-small">🎠</span>
              <span className="section-name">Hero Slider</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings?.sections?.hero ?? true}
                onChange={() => toggleSection("hero")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="section-toggle-card">
            <div className="section-info">
              <span className="section-icon-small">🔧</span>
              <span className="section-name">Layanan</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings?.sections?.services ?? true}
                onChange={() => toggleSection("services")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="section-toggle-card">
            <div className="section-info">
              <span className="section-icon-small">💡</span>
              <span className="section-name">Strategi</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings?.sections?.strategy ?? true}
                onChange={() => toggleSection("strategy")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="section-toggle-card">
            <div className="section-info">
              <span className="section-icon-small">⚙️</span>
              <span className="section-name">Proses</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings?.sections?.process ?? true}
                onChange={() => toggleSection("process")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="section-toggle-card">
            <div className="section-info">
              <span className="section-icon-small">📁</span>
              <span className="section-name">Portfolio</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings?.sections?.portfolios ?? true}
                onChange={() => toggleSection("portfolios")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="section-toggle-card">
            <div className="section-info">
              <span className="section-icon-small">📝</span>
              <span className="section-name">Blog</span>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings?.sections?.blogs ?? true}
                onChange={() => toggleSection("blogs")}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="settings-section">
        <div className="section-header">
          <div className="section-icon">🏢</div>
          <div className="section-title">
            <h3>Informasi Bisnis</h3>
            <p>Data kontak dan informasi bisnis</p>
          </div>
        </div>

        <div className="business-card">
          <div className="form-group">
            <label className="form-label">Nama Bisnis</label>
            <input
              type="text"
              className="form-input"
              value={settings?.business?.name || ""}
              onChange={(e) => updateSetting("business", "name", e.target.value)}
              placeholder="Nama bisnis Anda"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Nomor WhatsApp</label>
            <input
              type="text"
              className="form-input"
              value={settings?.business?.whatsapp || ""}
              onChange={(e) => updateSetting("business", "whatsapp", e.target.value)}
              placeholder="6287817773888"
            />
            <p className="form-hint">Format: kode negara + nomor (tanpa +)</p>
          </div>

          <div className="form-group">
            <label className="form-label">Telepon</label>
            <input
              type="text"
              className="form-input"
              value={settings?.business?.phone || ""}
              onChange={(e) => updateSetting("business", "phone", e.target.value)}
              placeholder="+62 878-1777-3888"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={settings?.business?.email || ""}
              onChange={(e) => updateSetting("business", "email", e.target.value)}
              placeholder="info@bengkelwiguna.com"
            />
          </div>

          <div className="form-group" style={{ gridColumn: "span 2" }}>
            <label className="form-label">Alamat</label>
            <textarea
              className="form-textarea"
              value={settings?.business?.address || ""}
              onChange={(e) => updateSetting("business", "address", e.target.value)}
              placeholder="Alamat lengkap bisnis"
            />
          </div>
        </div>
      </section>

      {/* Save Status */}
      {saveStatus && (
        <div className={`save-status ${saveStatus.type}`}>
          {saveStatus.type === "success" ? "✓" : "✗"} {saveStatus.message}
        </div>
      )}

      {/* Footer Actions */}
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "flex-end", gap: "15px" }}>
        <button className="btn-preview" style={{ padding: "14px 28px" }}>
          🔄 Reset ke Default
        </button>
        <button
          className="btn-save"
          style={{ padding: "14px 28px", fontSize: "1rem" }}
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "⏳ Menyimpan..." : "💾 Simpan Pengaturan"}
        </button>
      </div>

      <style jsx>{`
        .settings-page {
          max-width: 1200px;
        }
      `}</style>
    </div>
  );
}