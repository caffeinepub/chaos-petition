export function PetitionLetter() {
  return (
    <div className="p-8 md:p-12 space-y-6">
      {/* Subject Line */}
      <div className="border-b border-border pb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Strength in Numbers (and a Weakness in Yours)
        </h1>
        <p className="text-muted-foreground text-sm uppercase tracking-wider">Open Petition</p>
      </div>

      {/* Greeting */}
      <div className="space-y-4 text-foreground/90 leading-relaxed">
        <p className="font-medium">
          Dear Louis Vuitton (
          <a
            href="https://www.louisvuitton.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            https://www.louisvuitton.com
          </a>
          ),
        </p>

        <p>
          Ko T T1C — pronounced "chaotic" — is my brand built from the mess that makes sense. It stands for creating
          from whatever life throws up that day: survival turned into style, emotion stitched into expression. I
          designed it as a rebellion against being branded by others. Because being branded by some jackass was never my
          idea of a brand—so I made one of my own instead of owned.
        </p>

        <p>Now, let's talk strength in numbers—and the weak spot in yours.</p>

        <p>
          The global luxury fashion market was around $350 billion in 2023. Yet only a fraction of that comes from
          actual accessibility, because price tags climb high while entire markets stay invisible. So here's the
          question: how many people can actually afford one $5,000 bag? Flip the math—what if you let ten million
          people in the poverty sector spend just $10 each on a legitimate, simplified Louis Vuitton product? That's
          $100 million in revenue from people you pretend don't exist.
        </p>

        <p>
          You don't lose money from the knockoffs—you lose money ignoring the demand they meet. The so‑called
          "criminals" you chase are highly skilled artisans filling the gap your business model leaves open. They're not
          stealing your designs; they're proving your customers exist in larger numbers than your pricing allows.
        </p>

        <p className="font-semibold">Here's the challenge:</p>
        <p className="pl-6 border-l-4 border-primary italic">
          Would you rather sell five handbags to the 1%, or five million affordable ones to the 99%? Volume builds
          loyalty, reach, and relevance—and it's worth more than exclusivity ever could.
        </p>

        <p>
          Nobody's asking you to lose luxury; we're asking you to redefine access. Launch an official "chaos line"—same
          name, simpler material, subtle mark. Make inclusion intentional. A small dot or star beside your LV could turn
          piracy into partnership, chaos into commerce, and survival into sustainability.
        </p>

        <p>
          People will scrounge up $10 for dignity, beauty, and belonging. Don't judge that—respect it. That's real
          value. The people you criminalize could be your most loyal designers and customers if only you gave them a
          seat at the table.
        </p>

        <p>
          Because here's the truth: we don't walk around naked. We're dressed by what you refuse to acknowledge—the
          creativity you've underestimated. Strength in numbers doesn't just mean more buyers; it means more believers.
          And belief is the real luxury you can't counterfeit.
        </p>

        <p className="font-medium pt-4">With respect and a touch of chaos,</p>
        <p className="font-medium">Your Friendly Neighborhood Fashion Realist</p>

        <div className="pt-4 border-t border-border mt-6">
          <p className="font-bold text-lg">Ko T T1C</p>
          <p className="text-sm text-muted-foreground italic">
            Chaotic day. Common‑sense drip. Believe in yourself when nobody's passing you the baton.
          </p>
        </div>
      </div>
    </div>
  );
}
