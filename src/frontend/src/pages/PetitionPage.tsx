import { PetitionLetter } from '@/components/PetitionLetter';
import { SignatureForm } from '@/components/SignatureForm';
import { SignatureCount } from '@/components/SignatureCount';
import { RecentSignatures } from '@/components/RecentSignatures';

export default function PetitionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/assets/generated/petition-banner.dim_1600x600.png"
          alt="Chaos Petition Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-4 -mt-20 relative z-10">
        {/* Petition Letter */}
        <article className="bg-card border border-border shadow-2xl mb-12">
          <PetitionLetter />
        </article>

        {/* Signature Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <SignatureCount />
            <SignatureForm />
          </div>
          <div>
            <RecentSignatures />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'chaos-petition'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
