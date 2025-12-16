import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Maple Leaf Construction Group
              </h1>
              <p className="text-sm text-muted-foreground mt-1">Ontario</p>
            </div>
            <Badge variant="outline">Licensed & Insured</Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intro Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Professional Construction Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering quality construction solutions across Ontario with
              expertise, integrity, and commitment to excellence.
            </p>
          </div>

          <Separator />

          {/* Services Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Our Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          {/* Contact Section */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Get In Touch
            </h3>
            <p className="text-muted-foreground">
              Contact us to discuss your construction project
            </p>
            <a
              href="mailto:admin@mapleleafconstruction.ca"
              className="inline-block text-lg text-primary hover:text-primary/80 transition-colors font-medium"
            >
              admin@mapleleafconstruction.ca
            </a>
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
            <p className="text-sm text-muted-foreground">Serving Ontario</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
