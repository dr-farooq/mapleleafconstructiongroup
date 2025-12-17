import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Page() {
  const services = [
    {
      title: "General Contracting",
      description:
        "Complete project management from planning to completion, ensuring quality and timely delivery.",
    },
    {
      title: "Commercial Construction",
      description:
        "Expert commercial building solutions tailored to your business needs.",
    },
    {
      title: "Residential Construction",
      description:
        "Quality residential projects built to last, from renovations to new builds.",
    },
    {
      title: "Project Management",
      description:
        "Professional oversight and coordination of all construction phases.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/Construction.png"
                alt="Maple Leaf Construction Group Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground bg-linear-to-r from-foreground to-foreground/70 bg-clip-text">
                  Maple Leaf Construction Group
                </h1>
                <p className="text-sm text-muted-foreground mt-1">Ontario</p>
              </div>
            </div>
            <Badge variant="outline" className="shadow-sm">
              Licensed & Insured
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intro Section */}
          <div className="text-center space-y-4 py-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground bg-linear-to-r from-foreground via-foreground to-foreground/80 bg-clip-text leading-tight">
              Professional Construction Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Delivering quality construction solutions across Ontario with
              expertise, integrity, and commitment to excellence.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Services Section */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              Our Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator className="my-8" />

          {/* Contact Section */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground text-lg">
                Contact us to discuss your construction project
              </p>
            </div>

            <Card className="max-w-2xl mx-auto shadow-xl border-border/50 bg-linear-to-br from-card via-card to-muted/30">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col items-center space-y-3 pb-4 border-b border-border/50">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                        Director
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        Malkeet Singh
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <a
                      href="tel:+12895449900"
                      className="flex items-center justify-center gap-2 text-lg text-primary hover:text-primary/80 transition-colors font-medium group"
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        📱
                      </span>
                      <span>+1 (289) 544-9900</span>
                    </a>
                    <a
                      href="mailto:admin@mapleleafconstruction.ca"
                      className="flex items-center justify-center gap-2 text-lg text-primary hover:text-primary/80 transition-colors font-medium group"
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        ✉️
                      </span>
                      <span>admin@mapleleafconstruction.ca</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Maple Leaf Construction Group. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">Serving Ontario</p>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
