"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import emailjs from "@emailjs/browser";
import { chapterContent } from "@/lib/chapter-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Users,
  Heart,
  BookOpen,
  Award,
  ExternalLink,
  Mail,
  Home,
  Instagram,
} from "lucide-react";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/deltaupsilondpu/";

const DRIVE_FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID || "";
const DRIVE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY || "";

type GalleryImage = { id: string; src: string; alt: string };

async function fetchDriveImages(): Promise<GalleryImage[]> {
  if (!DRIVE_FOLDER_ID || !DRIVE_API_KEY) return [];

  const query = encodeURIComponent(
    `'${DRIVE_FOLDER_ID}' in parents and trashed = false and mimeType contains 'image/'`
  );
  const url =
    `https://www.googleapis.com/drive/v3/files` +
    `?key=${DRIVE_API_KEY}` +
    `&q=${query}` +
    `&orderBy=createdTime desc` +
    `&fields=files(id,name,thumbnailLink)`;

  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();

  return (data.files || []).map((file: { id: string; name: string; thumbnailLink?: string }) => ({
    id: file.id,
    src: file.thumbnailLink
      ? file.thumbnailLink.replace(/=s\d+$/, "=s1200")
      : `https://drive.google.com/uc?export=view&id=${file.id}`,
    alt: file.name,
  }));
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Alumni", href: "#alumni" },
  { label: "Give", href: "#giving" },
];

const fallbackGallery = [
  {
    id: "opening-day",
    src: "/hero-opening-day.jpg",
    alt: "DePauw Delta Upsilon members holding chapter flags.",
    title: "Opening Day",
    note: "Brothers gathering to celebrate another year of Delta Upsilon at DePauw.",
  },
  {
    id: "chapter-life",
    src: "/chapter-event.jpg",
    alt: "Members celebrating together inside the chapter house.",
    title: "Chapter Life",
    note: "Moments inside the house that reflect friendship, energy, and brotherhood.",
  },
  {
    id: "chapter-house",
    src: "/chapter-house.jpg",
    alt: "The Delta Upsilon chapter house at DePauw University.",
    title: "626 East Seminary",
    note: "A home for generations of DePauw DU brothers and alumni.",
  },
  {
    id: "brotherhood",
    src: "/brotherhood-group.jpg",
    alt: "Large group photo of DePauw Delta Upsilon chapter members.",
    title: "Brotherhood",
    note: "The people who carry the chapter's values forward every day.",
  },
  {
    id: "tradition",
    src: "/chapter-formal.jpg",
    alt: "Members dressed formally outside the chapter house.",
    title: "Tradition",
    note: "Celebrating the history, pride, and lifelong connection of DePauw DU.",
  },
];


export default function FraternityPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(
    fallbackGallery.map((img) => ({ id: img.id, src: img.src, alt: img.alt }))
  );

  useEffect(() => {
    fetchDriveImages().then((images) => {
      if (images.length > 0) setGalleryImages(images);
    });
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formRef.current) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )
      .then(() => {
        setStatus("sent");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#top" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ΔΥ</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-foreground">{chapterContent.chapterName}</p>
                <p className="text-xs text-muted-foreground">{chapterContent.chapterSubtitle}</p>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button asChild className="hidden sm:inline-flex">
                <a href="#contact">Connect</a>
              </Button>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="w-full mt-4">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Connect
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="top" className="relative pt-16">
        <div className="relative w-full h-[85vh] overflow-hidden">
          <img
            src="/chapter-sign.jpg"
            alt="Delta Upsilon Fraternity DePauw Chapter sign in front of 626 East Seminary Street."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
            <div className="text-center text-white px-4 space-y-6 max-w-3xl">
              <Badge variant="secondary" className="text-sm">
                {chapterContent.hero.eyebrow}
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {chapterContent.hero.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-2">
                {["Friendship", "Character", "Liberal Culture", "Justice"].map((value) => (
                  <Badge key={value} variant="outline" className="text-sm py-1 px-3 border-white/60 text-white">
                    {value}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <Button asChild size="lg">
                  <a href="#contact">Connect</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black">
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Strip */}
      <section className="border-y border-border bg-muted/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-6">
            Built on friendship, character, liberal culture, and justice, DePauw DU brings together
            generations of brothers through campus life, alumni connection, and shared commitment to
            the chapter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Founded 1887", "DePauw Brotherhood", "Alumni Network", "Leadership"].map((item) => (
              <Badge key={item} variant="secondary" className="text-sm">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <main>
        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                {chapterContent.about.eyebrow}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {chapterContent.about.title}
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  {chapterContent.about.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>

              <div className="grid gap-4">
                {chapterContent.about.heritageCards.map((item) => (
                  <Card key={item.title}>
                    <CardHeader className="pb-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Chapter focus
                      </p>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                {chapterContent.principles.eyebrow}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {chapterContent.principles.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {chapterContent.principles.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {chapterContent.principles.items.map((item, index) => (
                <Card key={item.title} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {index === 0 && <Users className="w-6 h-6 text-primary" />}
                      {index === 1 && <Award className="w-6 h-6 text-primary" />}
                      {index === 2 && <BookOpen className="w-6 h-6 text-primary" />}
                      {index === 3 && <Heart className="w-6 h-6 text-primary" />}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        <section id="alumni" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                {chapterContent.alumni.eyebrow}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {chapterContent.alumni.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {chapterContent.alumni.description}
              </p>
            </div>

            {/* Mentorship Banner */}
            <Card className="bg-primary text-primary-foreground mb-10">
              <CardContent className="py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-medium opacity-70 uppercase tracking-wide mb-2">
                    Alumni Mentorship Program
                  </p>
                  <h3 className="text-2xl font-bold mb-2">Connect with the current undergraduates</h3>
                  <p className="opacity-90 max-w-xl">
                    Our alumni mentorship program connects undergraduate brothers with DU alumni
                    who can offer guidance on careers, internships, graduate school, leadership,
                    and life after DePauw.
                  </p>
                </div>
                <Button asChild variant="secondary" size="lg" className="flex-shrink-0">
                  <a
                    href="https://forms.gle/CxWLJEfEWEetvWeX6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sign Up to Become a Mentor
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {chapterContent.alumni.features.map((feature) => (
                <a
                  key={feature.title}
                  href={feature.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <Card className="h-full transition-colors group-hover:border-primary/60">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.text}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Chapter Life
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Moments that show the people, place, and pride of DePauw DU.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From the chapter house to alumni gatherings, philanthropy, Little 5, and everyday
                brotherhood, the gallery helps tell the story of a chapter that is active,
                connected, and proud of its history.
              </p>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="flex-shrink-0 w-[560px] aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                {chapterContent.history.eyebrow}
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {chapterContent.history.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {chapterContent.history.description}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-8">
                  {chapterContent.history.timeline.map((item) => (
                    <div key={`${item.year}-${item.title}`} className="relative pl-20">
                      <div className="absolute left-0 w-16 text-right top-3">
                        <span className="text-sm font-bold text-primary">{item.year}</span>
                      </div>
                      <div className="absolute left-[26px] top-[14px] w-3 h-3 bg-primary rounded-full border-2 border-background" />
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Section */}
        <section className="py-20 bg-muted/30">
          <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
            onLoad={() => {
              if (typeof window !== "undefined" && (window as any).instgrm) {
                (window as any).instgrm.Embeds.process();
              }
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: copy */}
              <div className="lg:pt-8">
                <Badge variant="outline" className="mb-4">
                  Instagram
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Follow along with the chapter.
                </h2>
                <p className="text-muted-foreground mb-8">
                  Chapter moments, alumni updates, Little 5 coverage, and a closer look at
                  brotherhood on campus — all on Instagram.
                </p>
                <Button asChild variant="outline">
                  <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noreferrer">
                    <Instagram className="w-4 h-4 mr-2" />
                    Follow @deltaupsilondpu
                  </a>
                </Button>
              </div>

              {/* Right: Instagram embed */}
              <div className="flex justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={INSTAGRAM_PROFILE_URL}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "100%",
                  }}
                >
                  <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noreferrer">
                    View this profile on Instagram
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Giving Section */}
        <section id="giving" className="relative py-24 text-white overflow-hidden">
          <img
            src="/giving-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6 text-sm">
              {chapterContent.giving.eyebrow}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {chapterContent.giving.title}
            </h2>
            <p className="text-lg opacity-85 mb-10 max-w-2xl mx-auto">
              {chapterContent.giving.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
              {chapterContent.giving.reasons.map((reason) => (
                <div
                  key={reason}
                  className="bg-white/15 rounded-lg px-4 py-3 text-sm font-medium"
                >
                  {reason}
                </div>
              ))}
            </div>

            <Button asChild size="lg" variant="secondary" className="text-base px-8 py-6">
              <a href={chapterContent.giving.url} target="_blank" rel="noreferrer">
                {chapterContent.giving.buttonLabel}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Quick Links */}
              <div>
                <Badge variant="outline" className="mb-4">
                  Quick Links
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                  Find the chapter&apos;s most useful destinations.
                </h2>

                <div className="space-y-3">
                  {chapterContent.quickLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors group"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div id="contact">
                <Badge variant="outline" className="mb-4">
                  Contact
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Get in touch.
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have a question or want to connect with the chapter? Send us a message and
                  we&apos;ll get back to you.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {chapterContent.contactDetails.map((detail) => (
                    <Card key={detail.label}>
                      <CardContent className="pt-4 flex items-center gap-3">
                        {detail.label === "Address" || detail.label === "Chapter House" ? (
                          <Home className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                          <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                        <div>
                          <p className="text-xs text-muted-foreground">{detail.label}</p>
                          <p className="text-sm font-medium">{detail.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from_name">Full Name</Label>
                      <Input
                        id="from_name"
                        name="from_name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reply_to">Email</Label>
                      <Input
                        id="reply_to"
                        name="reply_to"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>

                  {status === "sent" && (
                    <p className="text-sm text-green-600 text-center">
                      Message sent successfully. The chapter can follow up soon.
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-sm text-destructive text-center">
                      Something went wrong while sending. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <a href="#top" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ΔΥ</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{chapterContent.chapterName}</p>
                  <p className="text-xs text-muted-foreground">{chapterContent.chapterSubtitle}</p>
                </div>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                626 East Seminary Street · Greencastle, Indiana 46135
              </p>
            </div>

            <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Delta Upsilon at DePauw University. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
