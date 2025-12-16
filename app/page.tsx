export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Maple Leaf Construction Group
        </h1>
        <p className="text-lg text-muted-foreground">Ontario</p>
        <div className="pt-8">
          <a
            href="mailto:admin@mapleleafconstruction.ca"
            className="text-primary hover:underline text-lg"
          >
            admin@mapleleafconstruction.ca
          </a>
        </div>
      </div>
    </main>
  );
}
